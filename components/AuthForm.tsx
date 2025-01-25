"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { formSchema as authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export default function AuthForm({ type }: AuthFormProps) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  // 1. DEFINE YOUR FORM.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. DEFINE A SUBMITION HANDLER.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsloading(true);
    console.log(values);
    setIsloading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="flex cursor-pointer items-center gap-2">
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

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your Account to get Started"
              : "please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PLAID LINK  */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div></div>
                  <CustomInput
                    name="firstName"
                    label="First Name"
                    control={form.control}
                    placeholder={"Enter your First Name"}
                  />
                  <CustomInput
                    name="lastName"
                    label="last Name"
                    control={form.control}
                    placeholder={"Enter your last Name"}
                  />
                  <CustomInput
                    name="address1"
                    label="address"
                    control={form.control}
                    placeholder={"Enter your specific address"}
                  />
                  <CustomInput
                    name="state"
                    label="state"
                    control={form.control}
                    placeholder={"ex: NY"}
                  />
                  <CustomInput
                    name="postalCode"
                    label="Postal Code"
                    control={form.control}
                    placeholder={"ex: 1101"}
                  />
                  <CustomInput
                    name="dateOfBirth"
                    label="Date of Birth"
                    control={form.control}
                    placeholder={"YYYY-MM-DD"}
                  />
                  <CustomInput
                    name="ssn"
                    label="SSN"
                    control={form.control}
                    placeholder={"ex: 1234"}
                  />
                </>
              )}
              <CustomInput
                name="email"
                label="email"
                control={form.control}
                placeholder={"Enter your email"}
              />
              <CustomInput
                name="password"
                label="Password"
                control={form.control}
                type={"password"}
                placeholder={"Enter your password"}
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign-In"
                  ) : (
                    "Sign-Up"
                  )}
                </Button>
              </div>
            </form>

            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === "sign-in"
                  ? "Don't have an account?"
                  : "Already have an account"}
              </p>
              <Link
                href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                className="form-link capitalize"
              >
                {" "}
                {type === "sign-in" ? "Sign-up" : "Sign-in"}
              </Link>
            </footer>
          </Form>
        </>
      )}
    </section>
  );
}
