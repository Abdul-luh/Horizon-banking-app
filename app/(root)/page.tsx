import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import SideBar from "@/components/SideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function page() {
  const LoggedIn = { firstName: "Abdullah", lastName: "odulate" };
  return (
    <section className="home">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={LoggedIn.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={5000.34}
        />
        RECENT TRANSACTION
      </header>
      <RightSideBar user={LoggedIn} transactions={[]} banks={[]} />
    </section>
  );
}
