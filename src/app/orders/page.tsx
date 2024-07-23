import { fetchOrders } from "@/lib/fetchOrders";
import UserOrderPage from "@/components/DataTable/UserOrderPage";

const OrdersPage = async () => {
  const recentOrders = await fetchOrders();

  return <UserOrderPage recentOrders={recentOrders} />;
};

export default OrdersPage;