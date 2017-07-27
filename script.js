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

})