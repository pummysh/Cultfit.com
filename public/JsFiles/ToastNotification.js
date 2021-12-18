
window.addEventListener("load",()=>{


const DelAvailable = "Delivery to this Location is Possible.";
    const DelNotAva =  "Invalid Pincode ! Delivery to this Location is Not Possible.";

   

    function showAlert_Msg(message,color){

        if(color==="red"){
            $('#mark').removeClass("fas fa-check");
            $('#mark').addClass("fas fa-exclamation-circle");
            $('.alert').removeClass("green greenborder");
            $('.alert').addClass("red redborder");
        }

        let msgg = document.getElementById("msg");
        // msgg.setAttribute = red;
        msgg.textContent = message;

        (function(){
        $('.alert').removeClass("hide");
        $('.alert').addClass("show");
        $('.alert').addClass("showAlert");
        setTimeout(function(){
        $('.alert').addClass("hide");
        $('.alert').removeClass("show");

        },3000) // hide automatic after 4 sec
    });
    $('.close-btn').click(function(){
        $('.alert').addClass("hide");
        $('.alert').removeClass("show");
    });
    }
    $('button').click(function(){
        $('.alert').removeClass("hide");
        $('.alert').addClass("show");
        $('.alert').addClass("showAlert");
        setTimeout(function(){
        $('.alert').addClass("hide");
        $('.alert').removeClass("show");

        },3000) // hide automatic after 4 sec
    });
    $('.close-btn').click(function(){
        $('.alert').addClass("hide");
        $('.alert').removeClass("show");
    });


}); //important

    