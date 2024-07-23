'use client'
import {
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
} from 'recharts'

export type LineChartProps = {
    data: { month: string; total: number }[]
}

export default function LineGraph({ data }: LineChartProps) {
    return (
        
            <ResponsiveContainer width={"100%"} height={350}>
                <LineChart data={data} >
                    <Line type='monotone' dataKey='total' stroke='black'/>
                    <XAxis 
                        dataKey={"month"}
                        tickLine={false}
                        axisLine={false}
                        fontSize={13}
                        
                    />
                    <YAxis 
                        dataKey={"total"}
                        tickLine={false}
                        axisLine={false}
                        fontSize={13}
                        allowDecimals={false}
                      
                        tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
        
    )
}