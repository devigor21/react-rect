export const Canvas = ({ canvasRef, width, height }) => {
  return (
    <canvas className="canvas" ref={canvasRef} width={width} height={height} />
  );
};
