window.onload = (() => {
    var token = getCookie("token");
    $.post("http://localhost:3000/guestauth", {
        token: token
    }, (data) => {
        document.cookie = "token=" + data.token;
        io.connect("http://localhost:3000/");
    });

    io.on('connect', (data) => {
        $.get(document.getElementsByTagName('link')[0].href, (text) => {
            let html = {
                header: text,
                body: document.getElementsByTagName('body')[0].innerHTML,
            }
            socket.emit('join', html);
        });

    });
    io.on('messages', (data) => {
        console.log('message', data);
    })
    io.on('clickResponse', (data) => {
        console.log('clickResponse', data);
    })
    io.on('scrollResponse', (data) => {
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
            io.emit('storeClick', click)
        }, false);


        // //////////////////// scroll data retrieval ////////////////////
        // let body = document.body,
        //     html = document.documentElement;

        // let height = Math.max(body.scrollHeight, body.offsetHeight,
        //     html.clientHeight, html.scrollHeight, html.offsetHeight);
        // let pageScroll = 0;
        // document.addEventListener("scroll", (e) => {
        //     let sc = window.pageYOffset;
        //     let pageScroll = Math.floor((bot / document.documentElement.clientHeight) * 100);
        //     console.log("You've scrolled " + pageScroll + "% of the page");
        //     socket.emit('storeScroll', pageScroll);

        //     let bot = document.documentElement.clientHeight + sc;
        //     if (pageScroll < Math.floor((bot / height) * 100)) {
        //         pageScroll = Math.floor((bot / height) * 100);
        //         console.log("You've scrolled " + pageScroll + "% of the page");
        //     }
        // }, false);

        // //////////////////// scroll data saving ////////////////////
        // window.addEventListener("beforeunload", (e) => {
        //     const scroll = JSON.stringify({
        //         scrollPercent: pageScroll
        //     });
        //     console.log(scroll);
        //     let request = new XMLHttpRequest();
        //     request.open('POST', "http://localhost:3000/storeScroll", true);
        //     request.setRequestHeader("Content-type", "application/json");
        //     request.onreadystatechange = function () {
        //         if (request.readyState > 3 && request.status == 200) {
        //             console.log(request.responseText);
        //         }
        //     };
        //     request.send(scroll);
        // }, false);
    }
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}