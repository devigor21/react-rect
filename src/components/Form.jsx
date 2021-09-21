export const Form = ({
  canvasWidth,
  canvasHeight,
  setLineWidth,
  setCanvasWidth,
  setCanvasHeight,
}) => {
  return (
    <div className="form">
      <label htmlFor="line-width">Толщина линии</label>
      <input
        onChange={(e) => setLineWidth(e.target.value)}
        className="input"
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={10}
      />
      <label htmlFor="line-width">Ширина холста</label>
      <input
        onChange={(e) => setCanvasWidth(e.target.value)}
        className="input"
        id="line-width"
        type="text"
        value={canvasWidth}
      />
      <label htmlFor="line-height">Высота холста</label>
      <input
        onChange={(e) => setCanvasHeight(e.target.value)}
        className="input"
        id="line-height"
        type="text"
        value={canvasHeight}
      />
    </div>
  );
};
