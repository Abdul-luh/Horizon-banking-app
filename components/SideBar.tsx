"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar({ user }: SiderbarProps) {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 flex cursor-pointer items-center gap-2"
        >
          <Image
            className="size-[24px]"
            src={"/icons/logo.svg"}
            alt="Horizon  logo"
            width={40}
            height={40}
          />
          <h1 className="sidebar-logo">HORIZON</h1>
        </Link>
        {sidebarLinks.map((link, id) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={id}
              className={`sidebar-link ${isActive && "bg-bankGradient"}`}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  alt="link logo"
                  fill
                  className={`${isActive && "brightness-[3] invert-0"}`}
                  //   width={25}
                  //   height={25}
                />
              </div>
              <p className={`sidebar-label ${isActive && "!text-white"}`}>
                {link.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
}
