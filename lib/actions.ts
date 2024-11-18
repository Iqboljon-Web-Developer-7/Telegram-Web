"use server";

import { auth } from "@/auth";
import { parseServerAcriontResponse } from "./utils";
import { writeClient } from "@/sanity/lib/write-client";

export const createMessage = async (
  state: { error: string; status: string },
  form: FormData,
  sendTo: string
) => {
  const session = await auth();

  if (!session)
    return parseServerAcriontResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const { message } = Object.fromEntries(Array.from(form));

  try {
    if (!sendTo) {
      throw new Error("Receiver is not detected!");
    }
    const newMessage = {
      text: message,
      author: {
        _type: "reference",
        // @ts-ignore
        _ref: session?.id,
      },
      receiver: {
        _type: "reference",
        _ref: sendTo,
      },
    };

    const result = await writeClient.create({
      _type: "message",
      ...newMessage,
    });

    return parseServerAcriontResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    return parseServerAcriontResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
