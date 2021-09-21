import { useEffect, useRef, useState } from 'react';
import { Canvas } from './components/Canvas';
import { Form } from './components/Form';
import { handleCanvas } from './handlers/handleCanvas';
import './App.css';

export default function App() {
  const [lineWidth, setLineWidth] = useState(1);
  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(600);
  const canvasRef = useRef(null);

  useEffect(() => {
    handleCanvas(canvasRef, lineWidth);
  }, [lineWidth, canvasWidth, canvasHeight]);

  return (
    <div className="container">
      <Form
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        setLineWidth={setLineWidth}
        setCanvasWidth={setCanvasWidth}
        setCanvasHeight={setCanvasHeight} />
      <Canvas
        canvasRef={canvasRef}
        width={canvasWidth}
        height={canvasHeight} />
    </div>
  );
}
