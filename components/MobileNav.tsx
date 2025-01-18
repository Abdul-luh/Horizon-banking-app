"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({ user }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white border-none">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-2 px-4"
          >
            <Image
              className="size-[24px]"
              src={"/icons/logo.svg"}
              alt="Horizon  logo"
              width={40}
              height={40}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              HORIZON
            </h1>
          </Link>
          <div>
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((link, id) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose key={id} asChild>
                      <Link
                        href={link.route}
                        className={`mobilenav-sheet_close w-full  ${
                          isActive && "bg-bankGradient"
                        }`}
                      >
                        <Image
                          src={link.imgURL}
                          alt="link logo"
                          className={`${isActive && "brightness-[3] invert-0"}`}
                          width={25}
                          height={25}
                        />
                        <p
                          className={`text-16 font-semibold text-black-2 ${
                            isActive && "!text-white"
                          }`}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
