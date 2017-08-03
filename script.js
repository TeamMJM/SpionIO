window.onload = (() => {
    let pageInfo = {
        token: getCookie("token"),
        url: window.location.href,
        html: {
            header: document.getElementsByTagName('link')[0].href,
            body: document.getElementsByTagName('body')[0].innerHTML
        }
    };
    $.post("http://localhost:3000/guestauth", pageInfo, (response) => {
        if (data !== "preauth") {
            document.cookie = "token=" + data.token;
        } else {
            console.log(response);
        }

    });
    const socket = io.connect("http://localhost:3000/");
    socket.on('connect', (data) => {
            socket.emit('join', html);
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
            let bot = document.documentElement.clientHeight + sc;
            if (pageScroll < Math.floor((bot / height) * 100)) {
                pageScroll = Math.floor((bot / height) * 100);
                console.log("You've scrolled " + pageScroll + "% of the page");
            }
        }, false);

        //////////////////// scroll data saving ////////////////////
        window.addEventListener("beforeunload", (e) => {
            socket.emit('storeScroll', pageScroll);
        }, false);
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