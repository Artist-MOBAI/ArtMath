import * as idea from "idea-math";

function createDot(width: number, height: number, container?: HTMLElement) {
  // 创建画布
  const canvas = idea.field(width, height).background("#F5F5F5");
  if (container) {
    container.appendChild(canvas.node());
  } else {
    document.body.appendChild(canvas.node());
  }

  // 创建坐标系
  const coord = idea.plane(width, height).grid(25).axes("#3e47d3").ticks(50);

  // 创建点
  const dot = idea
    .dot(0, 0)
    // .stroke("#FFFF00")
    .fill("#FF0000")
    .resize(10)
    // .animation({
    //   duration: 5000,
    //   delay: 2000,
    //   easing: "ease-in-out",
    //   properties: {
    //     x1: { from: 0, to: 100 },
    //     y1: { from: 0, to: 100 },
    //     r: { from: 4, to: 16 },
    //     "stroke-width": { from: 1, to: 3 },
    //     "stroke-opacity": { from: 0.5, to: 1 },
    //     "fill-opacity": { from: 0.3, to: 0.8 },
    //   },
    //   onStart: () => console.log("Animation started"),
    //   onEnd: () => console.log("Animation completed"),
    // })
    .draggable();

  // 绘制向量
  coord.add(dot);
  canvas.add(coord);
}

export default createDot;
