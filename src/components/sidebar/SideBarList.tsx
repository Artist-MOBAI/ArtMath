import { list, title } from "@/config/sidebar.json";

const SideBarList = () => {
  return (
    <div className="bg-[var(--foreground)]">
      <div className="flex items-center justify-between text-[var(--background)]">
        <button className="p-4">
          <i className="ri-arrow-left-s-line text-2xl" />
        </button>
        <h1 className="p-4 font-serif text-1.5xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col">
        {list.map((item) => (
          <button
            className="flex w-full border-t-2 border-[var(--background)] p-4 text-left text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--foreground)]"
            key={item.name}
          >
            <h2 className="font-serif font-semibold">{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBarList;
