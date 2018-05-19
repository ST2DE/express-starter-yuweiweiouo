
$(document).ready(function() {
    $("td").click(function(){
        var index = $("td").index(this);
        $("td").eq(index).text("O");
    });    
});
