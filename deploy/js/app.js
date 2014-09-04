$(document).foundation({
    offcanvas: {
        open_method: 'overlap',
        close_on_click: true
    }
});

$(document).ready(function(){
    var scroll = $.scrollorama({ blocks: '.scrollblock', enablePin: 'false' });

    scroll.animate('#logo',{
        duration: 100,
        property: 'left',
        start: 10,
        end: -600,
    }).animate('#logo',{
        duration: 100,
        property: 'bottom',
        start: 0,
        end: 100,
    });
});

