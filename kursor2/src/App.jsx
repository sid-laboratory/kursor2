import { TypeAnimation } from 'react-type-animation';
function App() {


  return (
    <>
     <div className="bg-gradient-to-tl from-[#120e25] to-black h-[100vh] w-[100vw]  ">
      <div className="">
              <h1 className="text-5xl font-mono   font-bold text-white flex justify-center pt-10 pl-3  ">
            Kursor
         </h1>
         <div className="flex justify-center pt-10">
         <TypeAnimation className="text-white text-center pl-6"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'SEARCH...',
        300,
        'WRITE...',
        300,
        'CREATE...',
        300,
        'EXPLORE...', 
        2000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '3em', display: 'inline-block' ,font:'2em', textAlign:'center'  }}
      repeat={Infinity}
    />
        </div>

    <h1 className="text-white text-center text-6xl pr-4   text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 pl-7"><span className="text-white"> with </span>KURSOR <br /> <span className="text-3xl text-white">Experience unlimited access to the all-in-one AI assistant with web access. <br /> Combining the intelligence of </span>
    <TypeAnimation className="text-white text-center pl-6  text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-pink-500 "
      sequence={[
       
        'Chat GPT',
        1000,
        'Google Bard',
        2000,
        
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '1em', display: 'inline-block' ,font:'2em', textAlign:'center'  }}
      repeat={Infinity}
    />
     </h1>
      </div>
  
     </div>
    </>
  )
}

export default App
