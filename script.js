$(document).ready(() =>{

    $(window).on("click",(e) =>{
        const click = JSON.stringify({clickX : e.pageX, clickY: e.pageY}); 
        $.ajax({
            method: "POST",
            url:"storeClick",
            contentType: "application/json",
            data:click,
            dataType:'json',
            success:() =>{
                console.log("Post Sucessful")   
            },
            error:(err) =>{
                console.log(err);
            }
        })
    })

})