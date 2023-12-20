
import { CartCounter } from "@/app/component/shoping-cart/components/CartCounter";

import { Metadata } from "next";





export const metadata:Metadata = {
  title: "Counter",
  description: "Counter page",

}





export default function CounterPage() {


  return (
    <div className="
      flex flex-col 
      items-center justify-center 
      w-full h-full
      ">
      <span className="text-4xl font-bold text-slate-950 ">Counter</span>
  

<CartCounter value={20}/>
    


    </div>
  );
}