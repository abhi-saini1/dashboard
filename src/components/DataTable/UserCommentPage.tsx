'use client';

import React from "react";
import { DataTable } from "@/components/DataTable/UserDatatable";
import { ColumnDef } from "@tanstack/react-table";

type CommentProps = {
  name: string;
  email: string;
  content: string;
  time: string;
};

type UsersClientPageProps = {
  commentUsers: CommentProps[];
};

const columns: ColumnDef<CommentProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <img
          className="h-10 w-10"
          src={`https://api.dicebear.com/9.x/micah/svg?seed=${row.getValue("name")}`}
          alt="user-image"
        />
        <p>{row.getValue("name")}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "content",
    header: "Comments",
  },
  {
    accessorKey: "time",
    header: "Date",
  },
];

const UserCommentPage: React.FC<UsersClientPageProps> = ({ commentUsers }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <DataTable columns={columns} data={commentUsers} />
    </div>
  );
};

export default UserCommentPage;