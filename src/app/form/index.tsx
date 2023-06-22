"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@component/input";
import Select from "@component/select";
import ArrowIcon from "@icon/arrow";
import { Dispatch, SetStateAction, useState } from "react";
import Loader from "@component/loader";
import ClientOnly from "@component/clientOnly";
import emailjs from "@emailjs/browser";

const formResolver = z.object({
  username: z.string({ description: "username is required" }),
  email: z.string().email("email is required"),
  interest: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { description: "interest are required" }
  ),
  message: z.string({ description: "message are required" }),
});

export type formField = z.infer<typeof formResolver>;

type FormProps = {
  setState: Dispatch<
    SetStateAction<{
      error: boolean;
      success: boolean;
      loader: boolean;
    }>
  >;
  state: {
    error: boolean;
    success: boolean;
    loader: boolean;
  };
};

const Form = ({ setState, state }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      interest: {
        label: "",
        value: "",
      },
      message: "",
    },
    resolver: zodResolver(formResolver),
  });

  const listOfOption = [
    {
      label: "hire",
      value: "hire",
    },
    {
      label: "make a project",
      value: "make a project",
    },
    {
      label: "cool",
      value: "cool",
    },
  ];

  const onSave = async (data: formField) => {
    setState((prev) => ({ ...prev, loader: true }));
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: data.username,
          to_name: "peter",
          interest: data.interest.value,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_KEY!
      );

      if (result.status === 200) {
        setState((prev) => ({ ...prev, success: true }));
        reset();
      }
      setTimeout(() => {
        setState({ success: false, error: false, loader: false });
      }, 1500);
    } catch (e: any) {
      setState((prev) => ({ ...prev, error: true }));

      setTimeout(() => {
        setState({ success: false, error: false, loader: false });
      }, 1500);
    }
  };

  return (
    <>
      <main className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSave)}
          className="w-full h-full sm:px-11 px-0 flex flex-col justify-start items-center gap-3"
        >
          <section className="w-full grid xs:grid-cols-2 grid-cols-1 gap-3">
            <Input register={register} label="username" error={errors} />
            <Input register={register} label="email" error={errors} />
          </section>
          <section className="w-full xs:mt-5 mt-2 px-2">
            <Select listOfOption={listOfOption} setValue={setValue} />
          </section>
          <section className="w-full">
            <Input register={register} label="message" error={errors} />
          </section>
          <section className="w-full mt-5 px-2">
            <ClientOnly>
              <button type="submit" className="w-full">
                <Button loader={state.loader} />
              </button>
            </ClientOnly>
          </section>
        </form>
      </main>
    </>
  );
};

type ButtonProps = {
  loader: boolean;
};

function Button({ loader }: ButtonProps) {
  const [hovered, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
      className={`relative z-10 bg-orange-50 rounded-sm w-full ${
        hovered ? "bg-stone-800" : ""
      } transition-all`}
    >
      <div className="flex justify-start items-center gap-5 px-4 p-2 ">
        {!loader ? (
          <>
            <p
              className={`text-sm tracking-tight font-[500] transition-all text-black ${
                hovered ? "text-white" : ""
              }`}
            >
              submit
            </p>
            <div className="rotate-[-45deg]">
              <ArrowIcon
                width={12}
                height={12}
                color={hovered ? "#ffffff" : "#000000"}
              />
            </div>{" "}
          </>
        ) : (
          <Loader color="#000000" width={20} height={20} />
        )}
      </div>
      <span
        className={`border-[2px] transition-all border-orange-50 absolute w-full h-full z-[5] bottom-[-5px] left-[-5px] ${
          hovered ? "border-stone-800" : ""
        }`}
      ></span>
    </div>
  );
}

export default Form;
