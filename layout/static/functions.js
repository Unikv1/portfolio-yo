const displayed_image = document.getElementById("project-image-displayed");
const displayed_image_fullscreen = document.getElementById("project-image-displayed-fullscreen");
const fullscreen_image_container = document.getElementById("fullscreen_container");
const fullscreen_carousel = document.getElementById("project-big-image-carousel-fullscreen");

$(document).ready(function() { displayImage(document.getElementById("project-image-displayed")); });

function displayImage(image) {
    const image_target = image.src;
    displayed_image.src = image_target;
    displayed_image_fullscreen.src = image_target;

    var beforeStyle = `
        .project-big-image-container::before {
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
            align-items: center;
            justify-content: center;
            display: flex;
            max-height: 496px;
            max-width: 100%;
        }`;

    $('<style>').text(beforeStyle).appendTo('head');
}

function changeImageFullscreen(image) {
    const image_target = image.src;
    displayed_image_fullscreen.src = image_target;
}

function displayImageFullscreen(image) {
    const image_target = image.src;

    displayed_image_fullscreen.src = image_target;
    fullscreen_image_container.classList.remove("hidden");
    fullscreen_image_container.classList.add("show");

    console.log("Clicked!");
}


document.getElementById("fullscreen_container").addEventListener("click", function(event) {
    // Check if the click target is not the fullscreen image itself
    console.log(event.target.id, displayed_image_fullscreen.id);
    if (event.target.id === fullscreen_image_container.id ) {
        fullscreen_image_container.classList.remove("show");
        fullscreen_image_container.classList.add("hidden");
    }
});

var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modal_global'), {
    backdrop: 'static',
    keyboard: false,
});
document.body.addEventListener("close-modal", () => modal.hide());
document.body.addEventListener("reload-page", () => location.reload());
