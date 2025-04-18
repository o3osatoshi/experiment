import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getTag } from "@/utils/path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const authorId = searchParams.get("authorId");

  const posts = await prisma.post.findMany({
    ...(authorId !== null && { where: { authorId } }),
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (posts === undefined || posts === null) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }

  const search =
    authorId === undefined || authorId === null
      ? undefined
      : { authorId: authorId };
  console.log(`EXEC: ${getTag("core-posts", search)} prisma.post.findMany`);
  return Response.json(posts);
}
