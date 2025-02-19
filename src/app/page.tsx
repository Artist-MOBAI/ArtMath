import Canvas from "@/components/Canvas";
import SideBar from "@/components/SideBar";
import Chat from "@/components/Workspace";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid h-full grid-cols-[356px_1fr_300px] gap-[2px] pt-4">
        <SideBar />
        <Canvas />
        <Chat />
      </div>
    </div>
  );
}
