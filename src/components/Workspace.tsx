import { title } from "@/config/demo.json";
import Header from "./ui/Header";
import WorkspaceContent from "./workspace/WorkspaceContent";
import WorkspaceFooter from "./workspace/WorkspaceFooter";

const Workspace = () => {
  return (
    <div className="flex h-full flex-col justify-between bg-[var(--foreground)] text-[var(--background)]">
      <Header title={title} />
      <WorkspaceContent />
      <WorkspaceFooter />
    </div>
  );
};

export default Workspace;
