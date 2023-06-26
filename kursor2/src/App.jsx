import { TypeAnimation } from 'react-type-animation';
import YouTubePlayer from './YoutubePlayer';
function App() {


  return (
    <>
     <div className="bg-gradient-to-tl from-[#120e25] to-black h-[100%] w-[100vw]  ">
      <div>
              <h1 className="text-5xl font-mono font-bold text-white flex justify-start pt-10 pl-6  ">
            Kursor
         </h1>
         <div className="flex justify-center pt-10">

        </div>

    <h1 className=" text-center text-6xl pr-4   text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 pl-7"><span className="text-white pt-10"><span className="text-2xl gap-y-8"><span className="font-bold text-5xl">Search..Write..Create..Explore.. </span> beyond the limits <br/>  </span> with </span>KURSOR <br /> <span className="text-2xl text-white">Experience unlimited access to the all-in-one AI assistant with web access. <br /> Combining the intelligence of </span>
    <span className="   text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"><TypeAnimation className=" text-center pl-6  text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 "
      sequence={[
        
        'Chat GPT',
        750,
        'Google Bard',
        750,  
        
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '1em', display: 'inline-block' ,font:'2em', textAlign:'center'  }}
      repeat={Infinity}
    /> </span>
     </h1>
     <br /><br />
     <div className="w-screen flex justify-center">
      <button className="text-white text-xl border-1 border-solid rounded text-transparent  bg-gradient-to-br from-purple-900 to-pink-500 active:scale-95 outline-offset-4 p-2"><a href="https://chrome.google.com/webstore/detail/chatgpt-and-bard-for-chro/ajoickdlofadbaooambnlnlbcpdnkkck"  target="_blank" rel="noreferrer">Add to Chrome</a></button>
     </div>

     <div className="flex items-center justify-center pt-10 pb-10">
      <YouTubePlayer/>
     </div>
    
    </div>
  
    </div>
    </>
  )
}

export default App
