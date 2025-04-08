import * as idea from "idea-math";

function createVectors(width: number, height: number, container?: HTMLElement) {
  // 创建画布
  const canvas = idea.field(width, height).background("#F5F5F5");
  if (container) {
    container.appendChild(canvas.node());
  } else {
    document.body.appendChild(canvas.node());
  }

  // 创建坐标系
  const coord = idea.plane(width, height).grid(25).axes("#3e47d3").ticks(50);
  canvas.add(coord);

  // 创建向量
  const vectors: ReturnType<typeof idea.vector>[] = [];
  const numVectors = 8;
  for (let i = 0; i < numVectors; i++) {
    const vector = idea
      .vector(0, 0, 3, 0)
      .stroke("#7B68EE")
      .setUnit(50)
      .draggable();
    vectors.push(vector);
  }

  // 创建多边形
  const polygon = idea
    .polygon([
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 2, y: 3.464 },
    ])
    .fill("#FF69B4")
    .setUnit(50)
    .draggable()
    .style({ opacity: 0.5 });

  vectors.forEach((vector) => coord.add(vector));
  coord.add(polygon);

  // 向量和多边形的动画
  function animate() {
    vectors.forEach((vector, i) => {
      const baseDelay = i * 300;
      vector.animation({
        duration: 3000,
        delay: baseDelay,
        properties: {
          x1: { from: 0, to: 2 * Math.cos((2 * Math.PI * i) / numVectors) },
          y1: { from: 0, to: 2 * Math.sin((2 * Math.PI * i) / numVectors) },
          x2: {
            from: 3,
            to: 3 * Math.cos((2 * Math.PI * (i + 0.5)) / numVectors),
          },
          y2: {
            from: 0,
            to: 3 * Math.sin((2 * Math.PI * (i + 0.5)) / numVectors),
          },
        },
        easing: "power2.inOut",
      });
    });

    polygon.animation({
      duration: 5000,
      properties: {
        x1: { from: 0, to: -4 },
        y1: { from: 0, to: 0 },
        x2: { from: 4, to: 4 },
        y2: { from: 0, to: 0 },
        x3: { from: 2, to: 0 },
        y3: { from: 3.464, to: 4 },
      },
      easing: "power3.inOut",
    });

    // 循环动画
    setTimeout(animate, 5000);
  }

  // 启动动画
  animate();
}

export default createVectors;
