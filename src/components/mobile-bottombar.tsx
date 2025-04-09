import { bottombarLinks } from "@/assets";
import { Link } from "@tanstack/react-router";

export default function MobileBottombar({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <nav
      ref={ref}
      className="fixed right-0 bottom-0 left-0 flex items-center justify-around bg-black py-3 lg:hidden"
    >
      {bottombarLinks.map((link) => (
        <Link
          className="hover:bg-primary-500 inline-flex flex-col items-center gap-y-1 rounded-sm p-2"
          activeProps={{ className: "bg-primary-600" }}
          key={link.label}
          {...link.route}
        >
          <img
            src={link.imgURL}
            className="mix-blend-screen"
            alt="navigation icon"
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}
