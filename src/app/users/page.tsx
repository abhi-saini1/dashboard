
import React from "react";
import { fetchUsers } from "@/lib/fetchUsers";
import UsersClientPage from "@/components/DataTable/UserClientPage";

const UsersPage = async () => {
  const recentUsers = await fetchUsers();

  return <UsersClientPage recentUsers={recentUsers} />;
};

export default UsersPage;