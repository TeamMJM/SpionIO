<<<<<<< Updated upstream
document.onload(() => {
    window.addEventListener("click", (e) => {
=======
$(document).ready(() => {

    // retrieve and store click data
    $(window).on("click", (e) => {
>>>>>>> Stashed changes
        const click = JSON.stringify({
            clickX: e.clientX,
            clickY: e.clientY,
            width: document.width,
            height: document.height
        });
        console.log(click);
<<<<<<< Updated upstream
        let request = new XMLHttpRequest();
        request.open('POST',"http://localhost:3000/storeClick",true);
        request.setRequestHeader("Content-type","application/json");
        request.send(click);
    },false)

    document.addEventListener((e) => {
        let sc = document.scrollTop;
        let bot = window.height + sc;
        let pageScroll = Math.floor((bot / document.height) * 100);
        console.log("You've scrolled " + pageScroll + "% of the page");
=======
        $.ajax({
            method: "POST",
            url: "storeClick",
            contentType: "application/json",
            data: click,
            dataType: 'json',
            success: (response) => {
                console.log('response',response)
            },
            error: (err) => {
                console.log(err);
            }
        })
    })

    // retrieve and store scroll data
    let scrollPercent = 0;
    $(document).scroll((e) => {
        let sc = $(document).scrollTop();
        let bot = $(window).height() + sc;
        if (Math.floor((bot / $(document).height()) * 100) > scrollPercent) {
            scrollPercent = Math.floor((bot / $(document).height()) * 100);
        }
        console.log("You've scrolled " + scrollPercent + "% of the page");
>>>>>>> Stashed changes
    });
    $(window).on('unload', () => {
        const scroll = JSON.stringify({
            scrollPercent: scrollPercent,
            // width: $(document).width(),
            // height: $(document).height()
        });
        console.log(scroll)
        $.ajax({
            method: "POST",
            url: "storeScroll",
            contentType: "application/json",
            data: scroll,
            dataType: 'json',
            success: (response) => {
                console.log('response', response)
            },
            error: (err) => {
                console.log(err);
            }
        })
    })
})