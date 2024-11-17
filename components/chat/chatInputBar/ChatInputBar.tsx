"use client";

import React from "react";
import { useActionState, useState } from "react";
import { z } from "zod";
import { createMessage } from "@/lib/actions";

import { File, Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { useSelector } from "react-redux";

const ChatInputBar = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  // @ts-ignore
  const receiver = useSelector((state) => state.messageReceiver.value);
  console.log("Receiver id in input:", receiver);

  const handleSubmit = async (
    prevState: {
      error: string;
      status: string;
    },
    formData: FormData
  ) => {
    try {
      const formValues = {
        message: formData.get("message"),
      };
      await formSchema.parseAsync(formValues);
      console.log(formValues);

      const result = await createMessage(prevState, formData, receiver);

      if (result.status === "SUCCESS") {
        console.log("SUCCESS");
      }
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        console.warn("Validation failed");

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      console.warn("Validation failed > An unexpected error has accured");
      return {
        ...prevState,
        error: "An unexpected error has accured",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: "",
    status: "INITIAL",
  });

  console.log(state);

  return (
    <form
      action={formAction}
      className="mt-2 mx-3 flex items-center justify-center gap-3"
    >
      <div className="w-full rounded-full py-2 px-4 flex items-center justify-center bg-[var(--grey-850)]">
        <input
          type="text"
          name="message"
          className={`w-full placeholder:text-[var(--grey-800)] bg-transparent text-base outline-none border-none`}
          placeholder="Write your comment..."
        />
        <button type="button">
          <File className="text-[var(--grey-600)]" />
        </button>
      </div>
      <button className="p-2 bg-[var(--purple-500)] rounded-full hover:bg-[var(--purple-550)] duration-300">
        <Send className="translate-y-[.1rem] -translate-x-[.1rem]" />
      </button>
    </form>
  );
};

export default ChatInputBar;
