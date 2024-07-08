const displayed_image = document.getElementById("project-image-displayed");

$(document).ready(function() { displayImage(document.getElementById("project-image-displayed")); });

function displayImage(image) {
    const image_target = image.src;
    displayed_image.src = image_target;
    var beforeStyle = `
        .project-images::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: url(${image_target}) no-repeat center top;
            background-size: cover;
            overflow: hidden;
            -webkit-filter: blur(15px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            filter: blur(15px);
            -webkit-transform: scale(1.2, 1.2);
            -moz-transform: scale(1.2, 1.2);
            -o-transform: scale(1.2, 1.2);
            -ms-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
        }`;

    $('<style>').text(beforeStyle).appendTo('head');
}
