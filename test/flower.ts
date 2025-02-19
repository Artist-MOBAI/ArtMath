import * as idea from "idea-math";

export function createFlower(
  width: number,
  height: number,
  container?: HTMLElement,
) {
  // 创建画布
  const canvas = idea.field(width, height).background("#fdfbe5");
  if (container) {
    container.appendChild(canvas.node());
  } else {
    document.body.appendChild(canvas.node());
  }

  // 创建坐标系
  const coord = idea.plane(width, height).grid(25).axes("#3e47d3").ticks(50);
  canvas.add(coord);

  // 创建玫瑰曲线（rhodonea curve）
  const flower = idea
    .parametric(
      (t: number): [number, number] => {
        const k = 5; // 控制花瓣数量
        const a = 4; // 控制花瓣大小
        const r = a * Math.cos(k * t);
        return [r * Math.cos(t), r * Math.sin(t)];
      },
      [0, 2 * Math.PI],
    )
    .setUnit(50)
    .draggable();

  // 创建装饰点
  const decorativeDots: ReturnType<typeof idea.dot>[] = [];
  const numDots = 35;
  for (let i = 0; i < numDots; i++) {
    const angle = (2 * Math.PI * i) / numDots;
    const radius = 0.3;
    const dot = idea
      .dot(radius * Math.cos(angle), radius * Math.sin(angle))
      .fill("#FFD700")
      .resize(3)
      .setUnit(50)
      .draggable();
    decorativeDots.push(dot);
  }

  // 创建装饰向量
  const decorativeVectors: ReturnType<typeof idea.vector>[] = [];
  const numVectors = 6;
  for (let i = 0; i < numVectors; i++) {
    const angle = (2 * Math.PI * i) / numVectors;
    const vector = idea
      .vector(0, 0, 1.5 * Math.cos(angle), 1.5 * Math.sin(angle))
      .style({ opacity: 0.3, strokeWidth: 1 })
      .setUnit(50)
      .draggable();
    decorativeVectors.push(vector);
  }

  // 创建花心
  const center = idea
    .dot(0, 0)
    .fill("#FFD700")
    .resize(8)
    .setUnit(50)
    .draggable();

  // 添加所有元素到坐标系
  coord.add(flower);
  coord.add(center);
  decorativeDots.forEach((dot) => coord.add(dot));
  decorativeVectors.forEach((vector) => coord.add(vector));

  function animate() {
    // 花瓣动画
    flower.animation({
      duration: 5000,
      properties: {
        opacity: { from: 0.3, to: 0.8 },
        r: { from: 2, to: 5 },
        strokeColor: { from: "#FF69B4", to: "#FF1493" },
      },
      easing: "power2.inOut",
    });

    // 装饰点动画
    decorativeDots.forEach((dot, i) => {
      const baseDelay = i * 200;
      dot.animation({
        duration: 3000,
        delay: baseDelay,
        properties: {
          x1: {
            from: 0.3 * Math.cos((2 * Math.PI * i) / numDots),
            to: 1.5 * Math.cos((2 * Math.PI * i) / numDots),
          },
          y1: {
            from: -0.3 * Math.sin((2 * Math.PI * i) / numDots),
            to: 1.5 * Math.sin((2 * Math.PI * i) / numDots),
          },
        },
        easing: "power1.inOut",
      });
    });

    // 向量动画
    decorativeVectors.forEach((vector, i) => {
      const baseDelay = i * 300;
      vector.animation({
        duration: 4000,
        delay: baseDelay,
        properties: {
          opacity: { from: 0.2, to: 0.8 },
          strokeColor: { from: "#FF69B4", to: "#FF1493" },
        },
        easing: "power2.inOut",
      });
    });

    // 花心动画
    center.animation({
      duration: 2000,
      properties: {
        radius: { from: 6, to: 15 },
        fillColor: { from: "#FFD700", to: "#FFA500" },
      },
      easing: "power3.inOut",
    });
  }

  // 启动动画
  animate();
}
