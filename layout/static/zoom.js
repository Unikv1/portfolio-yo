$(document).ready(function() {
    var isZoomed = false;
    $(this).find('.project-image').css('cursor', 'zoom-in');


    $('.fullscreen-image').on('click', function() {
        var $img = $(this).find('.project-image');
        if (isZoomed) {
            $img.css({
                'transform': 'scale(1)',
                'transform-origin': 'center center',
                'cursor': 'zoom-in'
            });
        } else {
            $img.css({'cursor': 'zoom-out',
                'transform': 'scale(2)',
                
            });
        }
        isZoomed = !isZoomed;
    });

    $('.fullscreen-image').on('mousemove', function(e) {
        if (isZoomed) {
            var $img = $(this).find('.project-image'),
                offset = $img.offset(),
                mouseX = e.pageX - offset.left,
                mouseY = e.pageY - offset.top,
                moveX = 50,
                moveY = (mouseY / $img.height() * 50);

            $img.css({
                'transform': 'scale(2)',
                'transform-origin': moveX + '% ' + moveY + '%'
            });
        }
    });

    $('.fullscreen-image').on('mouseleave', function() {
        var $img = $(this).find('.project-image');
        if (isZoomed) {
            $img.css({
                'transform': 'scale(1)',
                'transform-origin': 'center center',
                'cursor': 'zoom-in'
            });
            isZoomed = false;
        }
    });
});
