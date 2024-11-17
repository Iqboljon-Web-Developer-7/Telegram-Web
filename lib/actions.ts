"use server";

import { auth } from "@/auth";
import { parseServerAcriontResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createMessage = async (
  state: { error: string; status: string },
  form: FormData,
  receiver: "string"
) => {
  const session = await auth();

  if (!session)
    return parseServerAcriontResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const { message } = Object.fromEntries(Array.from(form));

  const slug = slugify(message.slice(0, 12) as string, {
    lower: true,
    strict: true,
  });

  try {
    const newMessage = {
      text: message,
      author: {
        _type: "reference",
        // @ts-ignore
        _ref: session?.id,
      },
      receiver: {
        _type: "reference",
        _ref: receiver,
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
    console.log(error);

    return parseServerAcriontResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
