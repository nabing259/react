import Skills from "./Skills"
export default function Profile(props){
    return(
        <div>
            <div className="bg-slate-950 w-[70%] align-middle text-center m-auto mt-20 text-white rounded-lg">
                <div className="flex justify-between p-10">
                    <div>
                        <div className="flex">
                            <h1 className="font-bold font-mono text-4xl">{props.name}</h1>
                            <button className="bg-blue-900 h-6 px-2 rounded-md mt-2 ml-6">Follow</button>
                        </div>
                        <div className="text-left">
                            <p>{props.title}</p>
                        </div>
                        <div className="w-[80%] flex flex-wrap gap-3 mt-4">
                            {props.skills.map((el) => (
                                <Skills link={el.icon} text={el.skill}/>
                               
                            ))}
                        </div>
                    </div>
                    <div>
                        <img src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" alt="" className="w-56 rounded-[50%]"/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}