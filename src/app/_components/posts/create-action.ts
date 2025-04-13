"use server";

import { redirect } from "next/navigation";
import { ActionState } from "@/app/_components/posts/delete-button";
import prisma from "@/lib/prisma";

export const createPost = async (
  title: string,
  content: string,
): Promise<ActionState> => {
  await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      authorId: 1,
    },
  });
  redirect("/");
};
