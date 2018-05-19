
$(document).ready(function() {
    
    $("input").keyup(function(){
        
        if($("#room-id").val() != "" && $("#username").val() != "")
            $(".submit" ).prop( "disabled", false );
    });    
});
