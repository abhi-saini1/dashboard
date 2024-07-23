import { db } from "@/lib/db";
import { eachMonthOfInterval, endOfMonth, format, startOfMonth } from "date-fns";

type Order = {
  id: string;
  userId: string;
  amount: number | null;
  currency: string | null;
  status: string | null;
  createdAt: Date;
};

type OrderProps = {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: string;
  time: string;
};

export async function fetchOrders(): Promise<OrderProps[]> {
  try {
    const recentOrders: Order[] = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      }
    });

    return recentOrders.map((order) => ({
      id: order.id,
      userId: order.userId,
      amount: order.amount ?? 0, // Default to 0 if null
      currency: order.currency ?? "N/A", // Default to "N/A" if null
      status: order.status ?? "Unknown", // Default to "Unknown" if null
      time: order.createdAt.toISOString(),
    }));
  } catch (error) {
    console.log('Error fetching orders', error);
    throw error;
  }
}

export async function fetchSalesThisMonth(){
  const currentDate = new Date();
  try{
    const salesThisMonth = await db.order.groupBy({
      by: ['createdAt'],
      _sum:{
        amount: true,

      },
      orderBy:{
        createdAt: 'asc'
      }
    })
    const monthlySalesData = eachMonthOfInterval({
      start: startOfMonth(new Date(salesThisMonth[0]?.createdAt || new Date())),
      end: endOfMonth(currentDate)
    }).map(month=>{
      const monthString = format(month, 'MMM');
      const salesMonthly = salesThisMonth.filter(user=> format(new Date(user.createdAt),'MMM')===monthString).reduce((total,sales)=>total + sales._sum.amount!,0);
      return {month:monthString,total:salesMonthly}
    
    })
    return monthlySalesData;
  }catch (error) {
    console.error("Error fetching Monthly Users Data:", error);
    return [];
  }
}