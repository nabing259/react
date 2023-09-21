import Button from "./Button";
export default function Quantity({
    qty, updateQuantity, id
}) {
    return (
        <div className="flex gap-1">
            <Button disabled={qty === 0} onClick={()=>updateQuantity(id, -1)} button="-"/>
            <div>
                <h3>{qty}</h3>
            </div>
            <Button onClick={()=>updateQuantity(id, 1)} button="+"/>
        </div>
    )
}