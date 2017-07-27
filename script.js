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
<<<<<<< HEAD
            url:"/storeClick",
=======
            url: "storeClick",
>>>>>>> 2cb11892332b635d097ae74178528e20f979932c
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