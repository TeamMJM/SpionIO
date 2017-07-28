var $ = require('jquery-browserify')
$("img[attr$='png']").hide()

$(document).ready(() => {

    $(window).on("click", (e) => {
        const click = JSON.stringify({
            clickX: e.pageX,
            clickY: e.pageY,
            width: $(document).width(),
            height: $(document).height()
        });
        console.log(click);
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/storeClick",
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

    $(document).scroll((e) => {
        let sc = $(document).scrollTop();
        let bot = $(window).height() + sc;
        let pageScroll = Math.floor((bot / $(document).height()) * 100);

        console.log("You've scrolled " + pageScroll + "% of the page");
    });
})