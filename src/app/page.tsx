import Chat from "@/components/Workspace";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid h-full grid-cols-[356px_1fr_300px] gap-[2px] pt-4">
        <SideBar />
        <div className="bg-[var(--foreground)]"></div>
        <Chat />
      </div>
    </div>
  );
}
