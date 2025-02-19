import { title } from "@/config/workspace.json";

const WorkspaceHeader = () => {
  return (
    <div className="p-4">
      <h1 className="font-serif text-2xl font-extrabold">{title}</h1>
    </div>
  );
};

export default WorkspaceHeader;
