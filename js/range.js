$(".polzunok").slider({
    min: 0,
    max: 300000,
    values: [50000, 180000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-left").val($(".polzunok").slider("values", 0));
$(".polzunok-input-right").val($(".polzunok").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".polzunok-input-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok").slider("option", "min"),
    where_right = $(".polzunok").slider("values", 1),
    input_right = $(".polzunok-input-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok").slider("option", "max"),
    where_left = $(".polzunok").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
$(".polzunok-input-left").val(input_left); 
$(".polzunok-input-right").val(input_right); 
$(".polzunok").slider( "values", [ input_left, input_right ] );
});