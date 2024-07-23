import { db } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";

type Comment = {
  name: string | null;
  email: string | null;
  content: string | null;
  createdAt: Date;
};

type CommentDataProps = {
  name: string;
  email: string;
  content: string;
  time: string;
};

export async function fetchComments(): Promise<CommentDataProps[]> {
  try {
    const recentComments: Comment[] = await db.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return recentComments.map((comment) => ({
      name: comment.name || "Unknown",
      email: comment.email || "Unknown",
      content: comment.content || "Unknown",
      time: formatDistanceToNow(new Date(comment.createdAt), {
        addSuffix: true,
      }),
    }));
  } catch (error) {
    console.error("Error fetching recent users:", error);
    return [];
  }
}
