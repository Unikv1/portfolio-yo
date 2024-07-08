// Create a file called zoom.js and add the following code
$(document).ready(function() {
    $('.project-images').on('mousemove', function(e) {
        var $this = $(this),
            $img = $this.find('.project-image'),
            offset = $img.offset(),
            mouseX = e.pageX - offset.left,
            mouseY = e.pageY - offset.top;

        var imgWidth = $img.width(),
            imgHeight = $img.height(),
            moveX = (mouseX / imgWidth * 100),
            moveY = (mouseY / imgHeight * 100);

        $img.css({
            'transform': 'scale(1.5)',
            'transform-origin': moveX + '% ' + moveY + '%'
        });
    });

    $('.project-images').on('mouseleave', function() {
        var $img = $(this).find('.project-image');
        $img.css({
            'transform': 'scale(1)',
            'transform-origin': 'center center'
        });
    });
});
