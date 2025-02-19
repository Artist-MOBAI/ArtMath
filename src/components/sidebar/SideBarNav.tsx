import { nav } from "@/config/sidebar.json";

const SideBarNav = () => {
  return (
    <div className="flex h-full items-center justify-center bg-[var(--foreground)]">
      <div className="flex flex-col gap-4">
        {nav.map((item) => (
          <div className="flex w-full" key={item.name}>
            <div className="flex flex-col">
              <button
                className={`${item.icon} text-2xl text-[var(--background)]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarNav;
