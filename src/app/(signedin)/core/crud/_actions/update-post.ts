"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { ActionResult, err } from "@/utils/action-result";
import { getPathName } from "@/utils/path";

export const updatePost = async (
  id: number,
  title: string,
  content: string,
): Promise<ActionResult<never>> => {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (userId === undefined) {
      return err("You must be logged in to update a post.");
    }

    const post = await prisma.post.findUnique({ where: { id } });
    if (post === null) {
      return err("The post you are trying to update does not exist.");
    }

    if (post.authorId !== userId) {
      return err("You are not authorized to update this post.");
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
      },
    });
    if (updatedPost === undefined || updatedPost === null) {
      return err("Failed to update the post. Please try again later.");
    }

    revalidateTag(getPathName("core-posts"));
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return err(error);
    }
    return err("Failed to update the post. Please try again later.");
  }

  redirect(getPathName("core-crud"));
};
