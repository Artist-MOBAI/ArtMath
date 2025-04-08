import Canvas from "@/components/Canvas";
import SideBar from "@/components/SideBar";
import Workspace from "@/components/Workspace";
import demoConfig from "@/config/demo.json";
export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid h-full grid-cols-[356px_1fr_300px] gap-[2px] pt-4">
        <SideBar />
        <div className="flex h-full flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {demoConfig.content.map((item) => (
            <Canvas key={item.canvas} functionName={item.canvas} />
          ))}
        </div>
        <Workspace />
      </div>
    </div>
  );
}
