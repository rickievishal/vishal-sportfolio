"use client"
import Image from "next/image"
import { animate, easeInOut, motion } from "framer-motion"
import lightflare from "./assets/images/lightflare.png"
import blob from "./assets/images/blob.png"
import { useEffect, useState } from "react"
export default function Home() {

  const [cursor, setcursor] = useState({
    x: 0,
    y: 0
  })
  // Easing function for smooth scroll (ease in and out)
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  // Custom scroll-to-top function
  const scrollToTop = () => {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const duration = 1000; // Adjust this value for speed

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const scrollDistance = easeInOutQuad(timeElapsed / duration) * start;

      window.scrollTo(0, start - scrollDistance);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };
  const [varientname, setVarientname] = useState("default")

  useEffect(() => {
    const cursormove = (e) => {
      setcursor({
        x: e.clientX,
        y: e.clientY
      })

    }
    window.addEventListener("mousemove", cursormove)
    return () => {
      window.removeEventListener("mousemove", cursormove)
    }
  }, [])
  const variants = {
    default: {
      x: cursor.x,
      y: cursor.y,
      backgroundColor: "rgb(230,230,230,0.5)",
      scale: 1,
      border: 1,
      borderColor: "white",

      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        backgroundColor: { duration: 0 },
        mixBlendMode: { duration: 0.3 },
        scale: { duration: 0.4, ease: "easeInOut" }, // Smooth scale 
      },
    },
    texthoverphone:{
      x: cursor.x,
      y: cursor.y,
      scale: 5,
      mixBlendMode: "difference",
      backgroundColor: "#FF145C",
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.5, ease: "easeInOut" },
      },
    },
    textenter: {
      x: cursor.x,
      y: cursor.y,
      backgroundColor: "#FF145C",

      mixBlendMode: "difference",
      scale: 5,
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.2, ease: "easeInOut" },
      },
    },
    projectenter: {
      x: cursor.x,
      y: cursor.y,
      backgroundColor: "pink",
      mixBlendMode: "difference",
      scale: 4,
      transition: {
        x: { duration: 0 },
        y: { duration: 0 },
        mixBlendMode: { duration: 0 },
        scale: { duration: 0.2, ease: "easeInOut" },
      },
    }
  };
  const textenter = () => {
    setVarientname("textenter")
  }
  const setvarient = (varientname) => {
    setVarientname(varientname)
  }
  return <>
    <div className="w-screen h-screen bg-black ">
      <motion.div variants={variants} style={{ border: 1, borderColor: "white" }} animate={varientname} transition={{ type: "spring", ease: "easeInOut", duration: 0.5 }} className="cursor  w-[32px] h-[32px] rounded-full  z-30 lg:block hidden" />

      <nav className="w-full flex flex-row h-[40px] sticky top-0 right-0 border-b-[0px] border-[#FF145C] elegant bg-[#0C0C0C]">
        <ul className="h-full ">
          <li className="w-[70px] lg:w-[140px] text-sm h-full bg-[#FF145C] flex justify-center items-center text-white elegant">
            VISHAL
          </li>
        </ul>
        <ul className="w-full h-full flex flex-row justify-end items-center hidden lg:flex">
          <li className="w-[130px] h-full text-md bg-[#000000] flex justify-center items-center">
            <a href="" className="text-white text-sm ">Home</a>
          </li>
          <li className="w-[130px] h-full text-sm bg-[#000000] flex justify-center items-center">
            <a href="" className="text-white ">Projects</a>
          </li>
          <li className="w-[130px] h-full text-sm bg-[#000000] flex justify-center items-center">
            <a href="" className="text-white ">Resume</a>
          </li>
          <li className="w-[240px] text-[12pt] h-full bg-[#FF145C] flex justify-center items-center">
            <a href="" className="text-white ">Hire Me</a>
          </li>
        </ul>
      </nav>
      <div className="w-full max-w-7xl flex flex-col mx-auto">
        <div className="w-full h-[800px] mt-[200px] flex flex-col justify-start items-center">
          <div className=" text-white text-[80pt] leading-[80pt]">
            👨🏾‍💻
          </div>
          <div className="text-white text-[50pt] elegant font-thin" onMouseEnter={() => setvarient("textenter")} onMouseLeave={() => setvarient("default")}>
            வணக்கம்.ನಮಸ್ಕಾರ.hello
          </div>
          <div className="text-white text-lg pop  flex flex-col justify-center items-center">
            <p className="font-thin text-[13pt]" >hey' there im Vishal</p>
            <p className="w-[300px] text-center text-sm mt-2 font-thin">Nextjs | nodejs | electronics | brand pursuing  Electronics and Communications Engineering @MEPCO frontend dev @esubaleka.com </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-white pop font-thin mt-[50px]">
            <div>
              Stacks
            </div>
            <div className="w-full flex justify-center items-center ">

            </div>
          </div>
          <div className="w-full  elegant flex flex-col   lg:grid lg:grid-cols-2 text-[#bababa] mt-[100px]">
            <div className="w-full flex justify-center items-center col-span-1 text-sm font-thin "><p className="w-[400px] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p></div>
            <div className="w-full flex justify-center items-end col-span-1 text-sm  font-thin "><p className="w-[400px] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p></div>
          </div>
        </div>

      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto bg-[#DDDDDD] flex flex-col my-[50px]  lg:grid lg:grid-cols-3" onMouseEnter={() => setvarient("projectenter")} onMouseLeave={() => setvarient("default")}>
      <div className="col-span-1 w-full h-full flex sm:flex lg:flex-col justify-start items-end py-[50px]">
        <div><p className="w-full text-left text-[60pt] pop font-normal text-[#5C5C5C]">Projects.</p></div>
        <div><p className="w-[200px] elegant font-thin  text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p></div>
      </div>
      <div className="col-span-1 w-full h-full flex flex-col justify-start items-end py-[50px]">

        <div><p className="w-[350px] elegant font-thin  text-left">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p></div>
      </div>
      <div className="col-span-1 w-full h-full flex flex-col justify-start items-start  py-[50px]">

        <div><p className="text-[60pt] text-left leading-[60pt] w-[200px] mx-7 text-[#FF5B8D] pop">hell yeah...</p></div>
      </div>

    </div>
    <div className="w-full max-w-7xl mx-auto  flex flex-col sm:px-[50px]">
      <div className="w-full grid grid-cols-3 py-[100px]">
        <div className="wfull col-span-1 pop font-thin text-white leading-tight text-sm">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used </div>
        <div className="wfull col-span-1 pop font-thin text-white leading-tight text-sm"> Lorem ipsum</div>
        <div className="wfull col-span-1 pop font-thin text-white leading-tight text-sm relative"> <Image className="absolute z-0 right-9"
          src={lightflare}
          width={500}
          height={500}
          alt="Picture of the author"
        /></div>

      </div>
      <div className="flex flex-col ">
        <div className="sm:text-[60pt] xl:text-[90pt] lg:text-[70pt] pop font-normal text-[#DCDCDC] z-10">
          i dont just create.
        </div>
        <div className="sm:text-[60pt] lg:text-[70pt] xltext-[90pt] flex gap-8 pop font-normal text-[#DCDCDC] z-10">
          <p>i</p>
          <p className="px-7  rounded-r-full rounded-l-full bg-[#FF145C]">
            craft.
          </p>
        </div>
        <div className="flex flex-col justify-center items-end gap-5 mb-[100px]">
          <p className="w-[400px] pop font-thin text-md text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
          <p className="w-[400px] pop font-thin text-md text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
        </div>
      </div>
    </div>
    <div className="w-full bg-[#0B0B0B] ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 relative">
        <div className="col-span-1 flex flex-col py-[200px] pop px-[50px]  sm:text-[40pt] lg:text-[50pt] font-normal text-white z-10">
          <p className="font-thin leading-tight">A</p>
          <p className=" leading-tight">Developer</p>
          <p className="font-thin leading-tight"> based{" "}at </p>
          <p className="leading-tight">India.</p>
        </div>
        <div className="col-span-1 flex flex-col py-[100px] px-[50px] pop  font-normal text-white z-10">
          <div className="w-full h-full bg-[#3c3c3c1e] backdrop-blur-xl border-[1px] border-[#53535364] rounded-md">
            <div className="h-full w-full py-[20px] px-[30px]">
              <p className="text-lg text-[#]">About</p>
              <p className="mt-4 pr-[30px] text-sm font-thin">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
              <p className="text-2xl mt-[50px] font-light pr-[70px]">Pursing BE in Electronics and Communication. <span className="bg-[#D9D9D9] text-[#292929] px-2 rounded-r-full rounded-l-full font-normal text-lg">1st year.</span></p>
              <p className="pr-[30px] text-sm text-[#FFFFFF] font-light">at MEPCO Schlenk Enginneering College, Sivakasi ,Tamil Nadu..</p>

            </div>
          </div>
        </div>
        <Image className="absolute z-0 right-[50%] translate-x-[50%] top-[50%] -translate-y-[50%]"
          src={blob}
          width={600}
          height={600}
          alt="Picture of the author"
        />
      </div>
    </div>
    <div className="w-full bg-[#0F0F0F] text-white py-[100px] pop">
      <div className="w-full max-w-7xl px-[20px] mx-auto grid grid-cols-2 overflow-hidden">
        <div className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 " onMouseEnter={() => setvarient("texthoverphone")} onMouseLeave={() => setvarient("default")}>
          <div className="col-span-3 flex flex-col justify-center items-end">
            <p className=" sm:text-[45pt] lg:text-[60pt]  leading-tight font-thin text-[#FF145C]" >
              Phone
            </p>
            <p className="text-lg leading-tight font-thin">
              +91 9443919192
            </p>
            <p className="text-lg font-thin leading-tight">
              feel free to reach me out.
            </p>
          </div>
          <div className="col-span-2 text-white flex justify-start items-start">
            <i className='bx bx-right-arrow-alt text-[#FF145C] -rotate-45 text-[160pt] '></i>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 overflow-hidden">
          <div className="col-span-3 flex flex-col justify-center items-end">
            <p className=" sm:text-[45pt] lg:text-[60pt] leading-tight font-thin">
              Twitter
            </p>
            <p className="text-blue-500 leading-tight text-sm hover:underline hover:cursor-pointer font-normal">
              @vishalToo5
            </p>
            <p className="text-lg font-thin leading-tight">
              follow me in Twitter.
            </p>
          </div>
          <div className="col-span-2 text-[#D2D2D2] flex justify-start items-start">
            <i className='bx bx-right-arrow-alt -rotate-45 text-[160pt] '></i>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 overflow-hidden">
          <div className="col-span-3 flex flex-col justify-center items-end">
            <p className=" sm:text-[45pt] lg:text-[60pt] leading-tight font-thin">
              Discord
            </p>
            <p className="text-blue-500 leading-tight text-sm hover:underline hover:cursor-pointer font-normal">
              @vishal6505
            </p>
            <p className="text-lg font-thin leading-tight">
              feel free to reach me out.
            </p>
          </div>
          <div className="col-span-2 text-[#5166EE] flex justify-start items-start">
            <i className='bx bx-right-arrow-alt -rotate-45 text-[160pt] '></i>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-5 sm:scale-75 lg:scale-100 overflow-hidden">
          <div className="col-span-3 flex flex-col justify-center items-end">
            <p className=" sm:text-[45pt] lg:text-[60pt] leading-tight font-thin">
              Linkedin
            </p>
            <p className="text-blue-500 leading-tight text-sm hover:underline hover:cursor-pointer font-normal ">
              @vishal-thangamariappan
            </p>
            <p className="text-lg font-thin leading-tight">
              feel free to reach me out.
            </p>
          </div>
          <div className="col-span-2 text-[#0067BF] flex justify-start items-start">
            <i className='bx bx-right-arrow-alt -rotate-45 text-[160pt] '></i>
          </div>
        </div>

      </div>
    </div>
    <div className="w-full h-[300px] max-w-7xl   mx-auto flex justify-center items-center pop relative ">


      <div className=" w-[220px] group-hover:w-[100px] group group-hover:h-[100px] duration-300 ease-in-out h-[50px] bg-[#6D6D6D] rounded-r-full rounded-l-full flex justify-center items-center text-lg font-thin text-white pr-[40px] relative overflow-hidden">
        <p className="min-w-[220] group-hover:opacity-0 group-hover:translate-y-[100%]  duration-1000  transition-all ease-in-out  z-10 text-white">scroll back to top</p>
        <div className="w-[42px] h-[42px] group-hover:w-[220px] group-hover:h-[220px] group-hover:right-0 rounded-full group-hover:bg-green-500 duration-500 bg-[#D9D9D9] absolute right-[4px] flex justify-center items-center hover:bg-[rgb(255,255,255)] z-20 " onClick={scrollToTop}>
          <i className='bx bx-right-arrow-alt  text-[#8E8E8E] group-hover:text-white -rotate-90 text-[25pt] group-hover:text-[40pt] duration-300 z-20'></i>
        </div>
      </div>


    </div>
    <div className="w-full flex justify-center items-center text-white pop font-thin">
      <p>all rights reserved @vishal</p>
    </div>

  </>
}