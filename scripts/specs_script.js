$(document).ready(function(){
    $('.spec_item').css({
        "background-color": "#fff",
        "color": "#000"
    });
    
    $('.box').on('mouseover', function(){
        $(this).css({
            'background-color': '#ff0',
            'color': '#000'
        });
    })
    $('.box').on('mouseout', function(){
        $(this).css({
            'background-color': '#fff'
        });
    });
});