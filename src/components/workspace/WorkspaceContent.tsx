import { content, topic } from "@/config/demo.json";

const WorkspaceContent = () => {
  return (
    <div className="h-full border-y-2 border-[var(--background)]">
      <div className="ml-4 inline-block bg-[var(--background)] font-serif">
        <p className="-m-1 px-1 font-extrabold text-[var(--foreground)]">
          {topic}
        </p>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {content.map((item) => (
          <button className="text-left" key={item.page}>
            <p className="font-serif font-semibold">{item.type}</p>
            <p className="font-normal">{item.content}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkspaceContent;
