document.addEventListener('DOMContentLoaded', (event) => {
  var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext('2d');

  function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
  }

  // Call the function to resize the canvas initially
  resizeCanvas();

  // Optionally, add a resize event listener to handle window resizing
  window.addEventListener('resize', resizeCanvas);

  var stars = [], // Array that contains the stars
      FPS = 60, // Frames per second
      x = canvas.height * canvas.width * 0.00015, // Number of stars
      mouse = {
          x: 0,
          y: 0
      };  // mouse location

  // Push stars to array
  for (var i = 0; i < x; i++) {
      stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 1,
          vx: Math.floor(Math.random() * 50) - 25,
          vy: Math.floor(Math.random() * 50) - 25
      });
  }

  // Draw the scene
  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createLinearGradient(0, canvas.height / 2, canvas.width, canvas.height / 2);
      grad.addColorStop(0, "#000000");
      grad.addColorStop(0.5, "#b0fc2c");
      grad.addColorStop(1, "#000000");

      ctx.globalCompositeOperation = "lighter";

      for (var i = 0, x = stars.length; i < x; i++) {
          var s = stars[i];

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = grad;
          ctx.stroke();
      }

      ctx.beginPath();
      for (var i = 0, x = stars.length; i < x; i++) {
          var starI = stars[i];
          ctx.moveTo(starI.x, starI.y);
          if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
          for (var j = 0, x = stars.length; j < x; j++) {
              var starII = stars[j];
              if (distance(starI, starII) < 150) {
                  ctx.lineTo(starII.x, starII.y);
              }
          }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = grad;
      ctx.stroke();
  }

  function distance(point1, point2) {
      var xs = 0;
      var ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
  }

  // Update star locations
  function update() {
      for (var i = 0, x = stars.length; i < x; i++) {
          var s = stars[i];

          s.x += s.vx / FPS;
          s.y += s.vy / FPS;

          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
  }

  // Track mouse movement even if elements are on top
  document.addEventListener('mousemove', function(e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
  });

  // Update and draw
  function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
  }

  tick();
});
