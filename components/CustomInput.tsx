"use client";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { FieldName } from "react-hook-form";
import { Control } from "react-hook-form";
import { formSchema as authformSchma } from "@/lib/utils";

const formSchema = authformSchma("sign-in");
interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldName<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type?: string;
}

export default function CustomInput({
  control,
  name,
  label,
  placeholder,
  type,
}: CustomInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                {...field}
                type={type === "password" ? "password" : "text"}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
}
