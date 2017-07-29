window.onload = (() => {
    var socket = io.connect('http://localhost:3000');
    socket.on('connect', function () {
        socket.emit('authenticate', {
            token: jwt
        }) //send the jwt
        socket.on('authenticated', function () {
            //do other things
        })
        socket.on('unauthorized', function (msg) {
            console.log("unauthorized: " + JSON.stringify(msg.data));
            throw new Error(msg.data.type);
        })
    });
    // const socket = io.connect("http://localhost:3000/", {
    //     'query': 'token=' + 'cat'
    // });
    // socket.on('connect', (data) => {
    //     socket.emit('join', document.getElementsByTagName('html')[0].innerHTML);
    // });
    // socket.on('messages', (data) => {
    //     console.log('message', data);
    // })
    // socket.on('clickResponse', (data) => {
    //     console.log('clickResponse', data);
    // })
    // socket.on('scrollResponse', (data) => {
    //     console.log('scrollResponse', data);
    // })
    if (document.readyState === 'complete') {
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

        document.addEventListener("scroll", (e) => {
            console.log(screen.height)
            console.log(document.documentElement.clientHeight)
            console.log(window.pageYOffset);
            let sc = window.pageYOffset;
            let bot = screen.height + sc;
            let pageScroll = Math.floor((bot / document.documentElement.clientHeight) * 100);
            console.log("You've scrolled " + pageScroll + "% of the page");
            socket.emit('storeScroll', pageScroll);
        }, false);
    }
})