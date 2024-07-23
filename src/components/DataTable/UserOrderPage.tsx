'use client';

import React from "react";
import { DataTable } from "@/components/DataTable/UserDatatable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle/PageTitle";
import { cn } from "@/lib/utils";

type UserOrderDataProps = {
    id:string;
    userId: string;
    amount: number;
    currency: string;
    status: string;
    time: string;
  };
  
  type UserOrderClientPageProps = {
    recentOrders: UserOrderDataProps[];
  };

  const columns: ColumnDef<UserOrderDataProps>[] = [
    {
        accessorKey: "id",
        header: "ID",
      },
    {
        accessorKey: "userId",
        header: "User ID",
      },
      {
        accessorKey: "amount",
        header: "Amount",
      },
      {
        accessorKey: "currency",
        header: "Currency",
      },
      {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
              return (
                <div
                  className={cn
                    ("font-medium w-fit px-4 py-2 rounded-lg", {
                    "bg-red-200": row.getValue("status") === "pending",
                    "bg-orange-200": row.getValue("status") === "processing",
                    "bg-green-200": row.getValue("status") === "completed"
                  })}
                >
                  {row.getValue("status")}
                </div>
              );
            },
        },
      {
        accessorKey: "time",
        header: "Time",
      },
  ]

  const UserOrderPage: React.FC<UserOrderClientPageProps> = ({ recentOrders }) => {
    return (
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Orders" />
        <DataTable columns={columns} data={recentOrders} />
      </div>
    );
  };
  
  export default UserOrderPage;