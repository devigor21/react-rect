export const handleCanvas = (ref, lineWidth) => {
  const canvas = ref.current;
  const ctx = canvas.getContext('2d');

  ctx.lineWidth = lineWidth;
  let currentX = 0;
  let currentY = 0;
  let draw = false;
  let saved = null;

  function drawLine(x, y) {
    const img = new Image();
    img.src = saved;
    img.onload = async function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(currentX, currentY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }

  function mouseDown(e) {
    draw = true;
    currentX = e.pageX - e.target.offsetLeft;
    currentY = e.pageY - e.target.offsetTop;
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    saved = canvas.toDataURL();
  }

  function mouseMove(e) {
    if (draw) {
      drawLine(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  function mouseUp() {
    draw = false;
  }

  canvas.addEventListener("mousedown", mouseDown, false);
  canvas.addEventListener("mousemove", mouseMove, false);
  canvas.addEventListener("mouseup", mouseUp, false);
}
