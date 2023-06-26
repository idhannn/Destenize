import { useState } from "react"
import style from "./style"
import logo from "../assets/icon-192 1.png"
import Dropdown from "./Dropdown"
import Dropdown2 from "./Dropdown2"
import barIcon from '../assets/bar-chart.svg'
import userIcon from '../assets/user.svg'
const Header = ()=> {

const [nav, setNav] = useState(false)

const barMenu = ()=> {
    setNav(!nav)
} 
    return(
<>
    <section className="Navbar py-5 sm:p-5">
        <div className={`${style.container} px-3`}>
            <div className="row-box flex justify-between items-center">
                <div className="logo flex items-center gap-1 sm:gap-2 me-auto text-gray">
                <img src={logo} alt="" />
                <h3 className="max-[360px]:text-normal text-xl font-semibold blue">Destenize</h3>
                </div>
                <div className="search w-[50%] ml-6 sm:w-[50%] flex">
                <input type="text" placeholder="Cari Tujuan" className="px-2 text-sm sm:text-normal sm:px-4 outline-none h-10 border border-gray/0 sm:py-2 rounded-full focus:outline-none focus:border-blue bg-slate-200/50 roounded-full w-[80%] duration-300 focus:w-full"/>
                <button className={`${style.pill} rounded-full hidden sm:block sm:ms-2 h-10`}>Cari</button>
                </div>
                <img onClick={barMenu} src={barIcon} alt="" className="opacity-60 ms-2 lg:hidden -rotate-90" />
                <div className="hidden lg:block">
                <Dropdown />
                </div>
            </div>
        </div>
    </section>

    <section className="child-head hidden lg:flex">
        <div className={`${style.container}`}>
            <div className="row-box flex items-center gap-3 xl:gap-5">
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Gunung"/>
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Pantai" />
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Kuliner" />
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Outbond" />
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Sejarah" />
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Edukasi" />
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Romantis" />
                <Dropdown2 color="text-slate-500 hover:text-slate-700" title="Alam" />
            </div>
        </div>
    </section>

    {/* MOBILE NAVBAR */}
    <section className={nav ? `w-full h-screen bg-black/10 backdrop-blur-sm lg:hidden absolute duration-500 top-0 left-0` : `w-full h-screen bg-black/10 backdrop-blur lg:hidden absolute duration-500 top-[-200%] left-0` }>
        <div className="box h-[90%] w-[80%] bg-white overflow-hidden shadow-lg rounded-lg p-5 flex flex-col relative mx-auto">
            <i onClick={()=>(setNav(!nav))} className="text-lg font-bold text-slate-800/70 absolute top-3 right-5"><svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></i>
            <div className="loc-profile mt-6 flex justify-between items-center w-full">
                <img src={userIcon} alt="" className="h-7 w-7 p-2 rounded-full bg-blue_two" />
                <div className="drop w-[50%] flex text-sm">
                <Dropdown2 color="text-blue" title="Jakarta, Indonesia" pding="px-0 py-0 text-xs flex font-bold" />
                </div>
            </div>

            <div className="location flex mt-7 flex-col justify-center gap-5">
                <Dropdown2 title="Gunung"/>
                <Dropdown2 title="Pantai" />
                <Dropdown2 title="Kuliner" />
                <Dropdown2 title="Outbond" />
                <Dropdown2 title="Sejarah" />
                <Dropdown2 title="Edukasi" />
            </div>
        </div>
    </section>

</>
    )
}

export default Header