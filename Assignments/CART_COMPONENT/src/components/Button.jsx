export default function Button({
        onClick, button, disabled
}) {
    return (
            <button onClick={ onClick } disabled={ disabled } className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded px-2">{ button }</button>
    )
}