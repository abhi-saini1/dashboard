import { fetchOrders } from "@/lib/fetchOrders";
import UserOrderPage from "@/components/DataTable/UserOrderPage";

const UsersPage = async () => {
  const recentOrders = await fetchOrders();

  return <UserOrderPage recentOrders={recentOrders} />;
};

export default UsersPage;