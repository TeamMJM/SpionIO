window.onload = (() => {
    if (document.readyState === 'complete') {
        //////////////////// click data retrieval ////////////////////
        window.addEventListener("click", (e) => {
            const click = JSON.stringify({
                clickX: e.clientX,
                clickY: e.clientY,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            });
            console.log(click);

            //////////////////// click data storage ////////////////////
            let request = new XMLHttpRequest();
            request.open('POST', "http://localhost:3000/storeClick", true);
            request.setRequestHeader("Content-type", "application/json");
            request.onreadystatechange = function () {
                if (request.readyState > 3 && request.status == 200) {
                    console.log(request.responseText);
                }
            };
            request.send(click);
        }, false);


        //////////////////// scroll data retrieval ////////////////////
        let body = document.body,
            html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                                html.clientHeight, html.scrollHeight, html.offsetHeight );
        let pageScroll = 0;
        document.addEventListener("scroll", (e) => {
            let sc = window.pageYOffset;
            let bot = document.documentElement.clientHeight + sc;
            if (pageScroll < Math.floor((bot / height) * 100)) {
                pageScroll = Math.floor((bot / height) * 100);
                console.log("You've scrolled " + pageScroll + "% of the page");
            }
        }, false);

        //////////////////// scroll data saving ////////////////////
        window.addEventListener("beforeunload", (e) => {
            const scroll = JSON.stringify({
                scrollPercent: pageScroll
            });
            console.log(scroll);
            let request = new XMLHttpRequest();
            request.open('POST', "http://localhost:3000/storeScroll", true);
            request.setRequestHeader("Content-type", "application/json");
            request.onreadystatechange = function () {
                if (request.readyState > 3 && request.status == 200) {
                    console.log(request.responseText);
                }
            };
            request.send(scroll);
        }, false);
    }
})