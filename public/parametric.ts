import * as idea from "idea-math";

function createParametric(
  width: number,
  height: number,
  container?: HTMLElement,
) {
  // 创建画布
  const canvas = idea.field(width, height).background("#F5F5F5");
  if (container) {
    container.appendChild(canvas.node());
  } else {
    document.body.appendChild(canvas.node());
  }

  // 创建坐标系
  const coord = idea.plane(width, height).grid(25).axes("#3e47d3").ticks(50);

  const parametric = idea
    .parametric(
      (t: number) => [2 * Math.cos(t), 2 * Math.sin(t)],
      [-Math.PI, Math.PI],
    )
    .setUnit(50)
    .draggable();

  const scaleMatrix = [
    [2, 0, 0],
    [0, 0.5, 0],
    [0, 0, 1],
  ] as [
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ];

  const line = parametric.derivative(Math.PI / 2, 10).draggable();
  coord.add(line);

  const ellipse = parametric
    .matrix(scaleMatrix)
    .showRiemannRectangles(50)
    .draggable();

  coord.add(ellipse);
  coord.add(parametric);
  canvas.add(coord);
}

export default createParametric;
