"use client";

import { useEffect, useRef, useState } from "react";
import createDot from "../../public/dot";
import createFlower from "../../public/flower";
import createLine from "../../public/line";
import createMathArt from "../../public/main";
import createParametric from "../../public/parametric";
import createVectors from "../../public/vectors";

interface CanvasProps {
  functionName: string;
}

const Canvas = ({ functionName }: CanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 400 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height: 400 });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current && dimensions.width > 0) {
      while (canvasRef.current.firstChild) {
        canvasRef.current.removeChild(canvasRef.current.firstChild);
      }

      console.log(dimensions.width, dimensions.height);
      switch (functionName) {
        case "dot":
          createDot(dimensions.width, dimensions.height, canvasRef.current);
          break;
        case "line":
          createLine(dimensions.width, dimensions.height, canvasRef.current);
          break;
        case "mathArt":
          createMathArt(dimensions.width, dimensions.height, canvasRef.current);
          break;
        case "parametric":
          createParametric(
            dimensions.width,
            dimensions.height,
            canvasRef.current,
          );
          break;
        case "flower":
          createFlower(dimensions.width, dimensions.height, canvasRef.current);
          break;
        case "vectors":
          createVectors(dimensions.width, dimensions.height, canvasRef.current);
          break;
        default:
          console.warn(`Unknown functionName: ${functionName}`);
      }
    }
  }, [functionName, dimensions]);

  return (
    <div className="bg-[var(--foreground)] text-[var(--background)]">
      <h2 className="border-b-2 border-[var(--background)] p-4 font-serif text-1.5xl font-bold">
        Canvas
      </h2>
      <div
        ref={canvasRef}
        className="flex items-center justify-center overflow-hidden bg-white"
        style={{
          touchAction: "none",
          overscrollBehavior: "none",
          height: "400px",
          backgroundColor: "#F5F5F5",
        }}
      />
    </div>
  );
};

export default Canvas;
