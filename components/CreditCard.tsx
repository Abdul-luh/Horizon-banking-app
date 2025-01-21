import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
              {account.name || userName}
            </h1>
            <p className="font-black font-ibm-plex-serif text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">** / **</h2>
            </div>
            <p className="text-white text-14 font-semibold tracking-[1.1px] ">
              &#9679; &#9679; &#9679; &#9679; **** ****{" "}
              <span className="text-16">{account.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src={"/icons/Paypass.svg"} alt="pay" width={20} height={24} />
          <Image
            src={"/icons/mastercard.svg"}
            alt="mastercard"
            width={45}
            height={32}
          />
        </div>
        <Image
          src={"/icons/lines.svg"}
          alt="line"
          width={316}
          height={190}
          className="absolute top-0 left-0"
        />
      </Link>
      {/* COPY LINES  */}
    </div>
  );
}
