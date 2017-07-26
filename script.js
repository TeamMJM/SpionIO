$(document).ready(() =>{
    $(window).on("click",(e) =>{
        console.log(e.pageX + ',' + e.pageY);
        $.ajax({
            methold: "POST",
            url:"storeClick",
            contentType: "application/json",
            data:{clickX : e.pageX, clickY: e.pageY},
            dataType:'json',
            success:() =>{
                console.log("Post Sucessful")   
            },
            error:() =>{
                console.log("Failed Post");
            }
        })
    })

    $(window).scroll
})