export default function NamePrice({
    name, price
}) {
    return (
        <div className="flex gap-1">
            <div>{name}</div>
            <div>₹{price}</div>
        </div>
    )
}