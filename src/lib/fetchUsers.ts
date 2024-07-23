import { db } from "@/lib/db";
import { eachMonthOfInterval, endOfMonth, format, formatDistanceToNow, startOfMonth } from "date-fns";


type User = {
  name: string | null;
  email: string | null;
  image: string | null;
  createdAt: Date;
};

type UserDataProps = {
  name: string;
  email: string;
  image: string;
  time: string;
};

export async function fetchUsers(): Promise<UserDataProps[]> {
  try {
    const recentUsersData: User[] = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return recentUsersData.map((account) => ({
      name: account.name || "Unknown",
      email: account.email || "Unknown",
      image: account.image || "/mesh.png",
      time: formatDistanceToNow(new Date(account.createdAt), {
        addSuffix: true,
      }),
    }));
  } catch (error) {
    console.error("Error fetching recent users:", error);
    return [];
  }
}

export async function fetchRecentSales() {
  try {
    const recentSales = await db.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
      include: {
        user: true,
      }
    })
    return recentSales.map((sale) => ({
      name: sale.user.name || 'Unknown',
      email: sale.user.email || 'Unknown',
      amount: `$${(sale.amount || 0).toFixed(2)}`
    }))
  } catch (error) {
    console.error("Error fetching recent users:", error);
    return [];
  }
}

// users this month
export async function fetchUserThisMonth() {
  const currentDate = new Date();
  try {
    const usersThisMonth = await db.user.groupBy({
      by: ['createdAt'],
      _count: {
        createdAt: true,

      },
      orderBy: {
        createdAt: 'asc'
      }
    })
    const monthlyUsersData = eachMonthOfInterval({
      start: startOfMonth(new Date(usersThisMonth[0]?.createdAt || new Date())),
      end: endOfMonth(currentDate)
    }).map(month => {
      const monthString = format(month, 'MMM');
      const usersMonthly = usersThisMonth.filter(user => format(new Date(user.createdAt), 'MMM') === monthString).reduce((total, user) => total + user._count.createdAt, 0);
      return { month: monthString, total: usersMonthly }

    })
    return monthlyUsersData;
  } catch (error) {
    console.error("Error fetching Monthly Users Data:", error);
    return [];
  }
}

// Add User
