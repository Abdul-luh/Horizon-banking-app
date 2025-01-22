import Image from "next/image";
import Link from "next/link";
import CreditCard from "./CreditCard";

export default function RightSideBar({
  user,
  banks,
  transactions,
}: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl text-blue-500 font-bold">
              {user.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h1 className="header-2">my banks</h1>
          <Link href={"/"} className="flex gap-2">
            <Image src={"/icons/plus.svg"} alt="plus" width={20} height={20} />
            <h2 className="text-14 font-bold capitalize">add bank</h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10 w-[95%]">
              <CreditCard
                key={banks[0].$id}
                userName={`${user.firstName} ${user.lastName}`}
                account={banks[0]}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute z-0 w-[90%] top-8 right-0">
                <CreditCard
                  key={banks[1].$id}
                  userName={`${user.firstName} ${user.lastName}`}
                  account={banks[1]}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
}
