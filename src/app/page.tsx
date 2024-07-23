
import Card, { CardContent, } from '@/components/Card/Card'
import PageTitle from '@/components/PageTitle/PageTitle'
import {   UserPlus, ShoppingCart, WalletMinimal, } from "lucide-react";
import Barchart from '@/components/BarChart/Barchart';
import SalesCard from '@/components/SalesCard/SalesCard';
import { db } from '@/lib/db';
import { fetchRecentSales,  fetchUserThisMonth } from '@/lib/fetchUsers';
import { fetchSalesThisMonth } from '@/lib/fetchOrders';
import LineGraph from '@/components/LineGraph/LineGraph';
import PieGraph from '@/components/PieChart/PieGraph';
import UserCommentPage from '@/components/DataTable/UserCommentPage';
import { fetchComments } from '@/lib/fetchComments';

export default async function Dashboard(){
  const userCount = await db.user.count()
  const ordersCount = await db.order.count()
  const recentSales = await fetchRecentSales()
  const salesTotal = await db.order.aggregate({
    _sum:{
      amount: true
    }
  })
  const totalAmount = salesTotal._sum.amount || 0

 
  const monthlyUsersData = await fetchUserThisMonth()
  const monthlySalesData = await fetchSalesThisMonth()

  const commentUsers = await fetchComments();

  
  return (
    <div className='flex flex-col gap-5  '>
      <PageTitle title='Dashboard'/>
      <section className='grid w-full grid-cols-1 gap-4 gap-x-8 transtion-all sm:grid-cols-2 lg:grid-cols-4'>
          <Card 
            amount={`${userCount}`}
            label={"Total Users"}
            discription={"All Time"}
            icon={UserPlus}
            backgroundColor='lightblue'
          />
           <Card 
            amount={`$${totalAmount}`}
            label={"Total Income"}
            discription={"All Time"}
            icon={WalletMinimal}
            backgroundColor='white'
            span='+10%'
          />
           <Card 
            amount={`4508`}
            label={"Visitors"}
            discription={"All Time"}
            icon={UserPlus}
            backgroundColor='lightpink'
          />
           <Card 
            amount={`${ordersCount}`}
            label={"Total Orders"}
            discription={"All Time"}
            icon={ShoppingCart}
            backgroundColor='lightgreen'
          
          />
          
      
      </section>

      {/*  */}
      <section className='grid grid-cols-1 gap-4 transition-all lg:grid-cols-2'>
        <CardContent>
          <p className='p-4 font-semibold'>Users Data</p>
          <Barchart data={monthlyUsersData}/>
        </CardContent>
        <CardContent className='flex  justify-between'>
          <p className='p-4 font-semibold'>Sales Data</p>
          <LineGraph data={monthlySalesData}/>
        </CardContent>
        <CardContent>
          <section >
            <p className='p-4 font-semibold'>Audience</p>
          </section>
         <PieGraph/>
  
        </CardContent>
        <CardContent className='flex justify-between'>
          <section className=''>
            <p className='p-4 font-semibold'>Recent Orders</p>
            <p className='text-sm text-gray-400'>
              You made 265 sales this month
            </p>

           {recentSales.map((data,i)=>(
            <SalesCard key={i}
            name={data.name}
            amount={data.amount}
            email={data.email}
            />
           ))}
          </section>
        </CardContent>
      </section>
     <section className=''>
      <PageTitle title='Comments'/>
           <div className='pt-2'>
           <UserCommentPage   commentUsers={commentUsers}/>
            </div>
     </section>
    </div>
  )
}
