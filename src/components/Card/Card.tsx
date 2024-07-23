
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: any;
  discription: string;
  backgroundColor?: string;
  span?: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent backgroundColor={props.backgroundColor}>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm font-semibold">{props.label}</p>
        {/* icon */}
        <props.icon className="h-5 w-5 text-black " />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">{props.amount}</h2>
        <div className="flex gap-1 items-center">
          <span className="text-green-400 text-xs font-medium">{props.span}</span>
        <p className="text-xs font-medium text-gray-500">{props.discription}</p>
        </div>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>&{backgroundColor?:string}) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
        
      )}
      style={{ backgroundColor: props.backgroundColor }} 
    />
  );
}