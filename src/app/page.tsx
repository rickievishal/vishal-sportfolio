
export default function Home() {
  return (<>
    <div className="w-screen h-screen bg-black relative">

      <nav className="w-full flex flex-row h-[40px] sticky top-0 right-0 border-b-[0px] border-[#FF145C] elegant bg-[#0C0C0C]">
        <ul className="h-full ">
          <li className="w-[140px] h-full bg-[#FF145C] flex justify-center items-center text-white elegant">
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
          <div className="text-white text-[50pt] elegant font-thin">
            வணக்கம்.ನಮಸ್ಕಾರ.hello
          </div>
          <div className="text-white text-lg pop  flex flex-col justify-center items-center">
            <p className="font-thin text-[13pt]">hey' there im Vishal</p>
            <p className="w-[300px] text-center text-sm mt-2 font-thin">Nextjs | nodejs | electronics | brand pursuing  Electronics and Communications Engineering @MEPCO frontend dev @esubaleka.com </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-white pop font-thin mt-[50px]">
            <div>
              Stacks
            </div>
            <div className="w-full flex justify-center items-center ">

            </div>
          </div>
          <div className="w-full  elegant lg:grid lg:grid-cols-2 text-[#bababa] mt-[100px]">
            <div className="w-full flex justify-center items-center col-span-1 text-sm font-thin "><p className="w-[400px] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p></div>
            <div className="w-full flex justify-center items-end col-span-1 text-sm  font-thin "><p className="w-[400px] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p></div>
          </div>
        </div>

      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto bg-[#DDDDDD] h-[550px] my-[50px] grid grid-cols-3">
      <div className="col-span-1 w-full h-full flex flex-col justify-start items-end py-[50px]">
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
  </>)
}