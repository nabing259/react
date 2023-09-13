export default function Skills(prop) {
    return (
        <div className="flex border-solid border-2 border-sky-600 py-[2px] px-[10px] h-[27px] w-fit.
         mt-2 rounded-full">
            <img src={prop.link} alt="" className="w-4 h-4 mr-1 mt-[2px]"/>
            <p className="text-sm">{prop.text}</p>
        </div>
    )
}