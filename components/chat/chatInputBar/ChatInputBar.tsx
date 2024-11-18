"use client";

import React from "react";
import { useActionState, useState } from "react";
import { z } from "zod";
import { createMessage } from "@/lib/actions";

import { File, Send } from "lucide-react";
import { formSchema } from "@/lib/validation";

const ChatInputBar = ({ sendTo }: { sendTo: string }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

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

      if (!sendTo) throw new Error("Receiver is not declared!");
      const result = await createMessage(prevState, formData, sendTo);

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

  return (
    <form
      action={formAction}
      className={`max-w-[44rem] w-full my-2 mx-auto px-3 flex items-center justify-center gap-3 ${isPending && "cursor-not-allowed"}`}
    >
      <div className="w-full rounded-full py-2 px-4 flex items-center justify-center bg-[var(--grey-850)]">
        <input
          disabled={isPending}
          type="text"
          name="message"
          className={`w-full placeholder:text-[var(--grey-800)] bg-transparent text-base outline-none border-none`}
          placeholder="Write your comment..."
        />
        <button disabled={isPending} type="button">
          <File className="text-[var(--grey-600)]" />
        </button>
      </div>
      <button
        disabled={isPending}
        className="p-2 bg-[var(--purple-500)] rounded-full hover:bg-[var(--purple-550)] duration-300"
      >
        <Send className="translate-y-[.1rem] -translate-x-[.1rem]" />
      </button>
    </form>
  );
};

export default ChatInputBar;
