import { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const initData = [
    {
        id: 1,product_name: "Noodles",
        price: 30,
        qty: 1
    },
    {id: 2,product_name: "Biriyani",price: 90,qty: 2},
    {id: 3,product_name: "Chips",price: 10,qty: 3},
]


export default function CartContainer(){
    const [data, setData] = useState(initData);

    const total = (prod) => {
        return prod.reduce((acc, c) => acc + (c.price * c.qty),0)
    }
    const updateQuantity = (id, amount) => {
        let updatedData = data.map(item =>{
            if(item.id === id) {
                return {
                    ...item, qty: item.qty + amount
                }
            }
            return item
        })
        setData(updatedData)
    }
    return(
        <div>
            {/* Body */}
            <h1>Cart</h1>
            {/* List of items */}
            {
                data.map(item =>
                    <CartItem key={item.id} id={item.id} name={item.product_name} price={item.price} qty={item.qty} updateQuantity={updateQuantity} />
                )
            }
            {/* Total */}
            <Total total = {total(data)} />
        </div>
    )
}