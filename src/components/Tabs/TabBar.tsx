import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Projects", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
];

export default function TabBar() {
  return (
    <div className="flex justify-center fixed bottom-0 w-screen z-20">
      <div className="absolute bg-neutral-bold rounded-full bottom-4 gap-4 px-4 py-3 md:py-2 flex items-center justify-between w-9/12 mx-20 md:w-fit">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => {
              return `py-2 px-4 text-sm rounded-lg ${
                isActive
                  ? "bg-gradient-to-br from-primary-main to-secondary-main text-transparent bg-clip-text"
                  : "bg-none text-neutral-soft hover:text-neutral-soft2x"
              }`;
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
