import NamePrice from "./NamePrice";
import Quantity from "./Quantity";

export default function CartItem({
    name, price, qty, updateQuantity, id
}) {
    
    return (
        <div className="flex gap-5">
            <NamePrice name={name} price={price}/>
            <Quantity qty={qty} updateQuantity={updateQuantity} id={id}/>
        </div>
    )
}