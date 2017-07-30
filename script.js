window.onload = (() => {
    const socket = io.connect("http://localhost:3000/");
    socket.on('connect', (data) => {
        $.get(document.getElementsByTagName('link')[0].href, (text) => {
            let html = {
                header: text,
                body: document.getElementsByTagName('body')[0].innerHTML,
            }
            socket.emit('join', html);
        });

    });
    socket.on('messages', (data) => {
        console.log('message', data);
    })
    socket.on('clickResponse', (data) => {
        console.log('clickResponse', data);
    })
    socket.on('scrollResponse', (data) => {
        console.log('scrollResponse', data);
    })
    if (document.readyState === 'complete') {
        //////////////////// click data retrieval ////////////////////
        window.addEventListener("click", (e) => {
            const click = {
                clickX: e.clientX,
                clickY: e.clientY,
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
            console.log(click);
            socket.emit('storeClick', click)
        }, false);


        //////////////////// scroll data retrieval ////////////////////
        let body = document.body,
            html = document.documentElement;

        let height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        let pageScroll = 0;
        document.addEventListener("scroll", (e) => {
            let sc = window.pageYOffset;
            let pageScroll = Math.floor((bot / document.documentElement.clientHeight) * 100);
            console.log("You've scrolled " + pageScroll + "% of the page");
            socket.emit('storeScroll', pageScroll);

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