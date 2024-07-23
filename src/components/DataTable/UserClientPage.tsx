'use client';

import React, { useEffect, useMemo, useState } from "react";
import { DataTable } from "@/components/DataTable/UserDatatable";
import { ColumnDef } from "@tanstack/react-table";
import Search from "../Search/Search";
import PageTitle from "../PageTitle/PageTitle";


type UserDataProps = {
  name: string;
  email: string;
  image: string;
  time: string;
};

type UsersClientPageProps = {
  recentUsers: UserDataProps[];
};

const columns: ColumnDef<UserDataProps>[] = [
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
    accessorKey: "time",
    header: "Date",
  },
];

const UsersClientPage: React.FC<UsersClientPageProps> = ({ recentUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);


  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedSearchQuery(searchQuery)
    },1000)
    return()=>{
      clearTimeout(handler)
    }
  },[searchQuery])
  const filteredUsers = useMemo(() => {
    const query = debouncedSearchQuery.toLowerCase();
    return recentUsers.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  }, [debouncedSearchQuery, recentUsers]);
  
console.log(filteredUsers)
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Recent Users"/>
      <Search onSearch={setSearchQuery}/>
      <DataTable columns={columns} data={filteredUsers} />
    </div>
  );
};

export default UsersClientPage;