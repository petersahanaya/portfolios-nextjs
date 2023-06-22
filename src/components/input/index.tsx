"use client";

import { formField } from "@/app/form";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<formField>;
  label: keyof formField;
  error: FieldErrors<formField>;
};

function Input({ register, label, error }: InputProps) {
  const [value, setValue] = useState("");

  return (
    <div className={`transition-all w-full p-2 ${value ? "pt-6" : ""} `}>
      <div className="relative w-full p-2">
        <input
          {...register(label, {
            onChange(e) {
              setValue(e.target.value);
            },
          })}
          className={`p-2 pl-3 bg-stone-600 outline-none text-stone-100 w-full rounded-sm absolute text-sm top-0 left-0  ${
            error[label]?.message ? "border-[2px] border-red-600" : ""
          }`}
        />
        <span
          className={`absolute text-stone-400 text-[.7rem] transition-all ${
            value ? "top-[-20px] left-0 text-[.6rem]" : "top-[55%] left-[10px]"
          }`}
        >
          <p>{label.toUpperCase()}</p>
        </span>
      </div>
    </div>
  );
}

export default Input;
