"use client";
import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";
import AnimatedCounter from "./AnimatedCounter";

export default function TotalBalanceBox({
  acccounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* DOUGHNUT CHART  */}</div>

      <div className="flex flex-col gap-6 capitalize">
        <h2>Banks accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label ">total Balance</p>
          <p className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
}
