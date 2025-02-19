import WorkspaceContent from "./workspace/WorkspaceContent";
import WorkspaceFooter from "./workspace/WorkspaceFooter";
import WorkspaceHeader from "./workspace/WorkspaceHeader";

const Workspace = () => {
  return (
    <div className="flex h-full flex-col justify-between bg-[var(--foreground)] text-[var(--background)]">
      <WorkspaceHeader />
      <WorkspaceContent />
      <WorkspaceFooter />
    </div>
  );
};

export default Workspace;
