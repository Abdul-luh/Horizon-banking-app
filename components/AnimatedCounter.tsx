import React from "react";
import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        decimal=","
        prefix="$"
        duration={2.5}
        decimals={2}
      />
    </div>
  );
}
