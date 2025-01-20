import Link from "next/link";
import React from "react";

export default function CreditCard({
  userName,
  account,
  key,
  showBalance,
}: CreditCardProps) {
  return (
    <div className="flex flex-col">
      <Link href={"/"} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="font-semibold text-16 text-white">
              {account.name || "Abdullah"}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
