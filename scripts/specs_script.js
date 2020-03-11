$(document).ready(function(){
    $('#content1').css({
        "background-color": "#fff",
        "color": "#000"
    });

    $('#content2').css({
        "background-color": "#fff",
        "color": "#000"
    });

    $('#content3').css({
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