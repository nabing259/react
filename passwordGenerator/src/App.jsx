import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) {
      str += "0123456789";
    }
    if(char) {
      str += "!@#$%^&*()_+";
    }

    for(let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, char, setPassword])

  useEffect(() => {
    passwordGenerator();
  },[length, number, char, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 21);
    window.navigator.clipboard.writeText(password);
    // alert("Copied to clipboard");
  },[password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-900 bg-gray-500'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef}/>
          <button className='outline-none px-3 py-0.5 shrink-0 text-white bg-blue-800' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='flex items-center gap-x-1'>
              <input type="range" value={length} min={8} max={50} className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}/>
              <label>Length {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} id='number' onChange={() =>{
              setNumber((prev) => !prev);
            }} />
            <label htmlFor='number'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={char} id='char' onChange={() =>{
              setChar((prev) => !prev);
            }} />
            <label htmlFor='char'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
