import style from "./style"
import bromo from '../assets/1571297575799-labuan-bajo 4.png'
import bajo from '../assets/gokul-gurung-SRdhpKX6Omc-unsplash.jpg'
import playIcon from '../assets/play copy.svg'



const Galeri = ()=> {
    return(
<>
<section className="pb-20 pt-10 sm:py-12">
    <div className={`${style.container}`}>
        <div className="title flex flex-col py-5">
            <p className="text-blue font-bold my-3 sm:text-lg">MENGENAL DESTANIZE</p>
            <h3 className={`${style.head3} text-slate-800 font-semibold`}>Galeri Pariwisata & Blog Travel</h3>
        </div>

        <div className={`flex md:flex-row w-full flex-col gap-5 lg:gap-10`}>
            <div className="card rounded-xl overflow-hidden hover:shadow-xl cursor-pointer flex flex-col w-full md:w-[36%] lg:w-[23%]">
                <img src={bromo} className="object-cover" />
                <div className="title p-5 text-slate-800 font-semibold flex flex-col gap-[15px]">
                    <p className="text-slate-500 fon">22 juni 2023</p>
                    <h5 className="text-lg font-bold">Tips naik gunung bromo biar gak cape cyin</h5>
                    <p className="text-slate-500">Jadi gini gan, anda tau bromo? Ya tau gunung kan!</p>
                    <a href="#" className="text-blue">Baca selengkapnya..</a>
                </div>
            </div>

            <div className="video relative w-full max-md:h-[300px] md:w-[75%] overflow-hidden rounded-lg">
                <img src={bajo} alt="" className="w-full absolute object-cover h-full" />
                <div className="Play absolute w-full h-full left-0 bg-black/30 flex justify-center items-center text-white">
                    <img src={playIcon} alt="" className="bg-blue hover:bg-cyan-500 p-3 sm:p-5 rounded-full border-2 border-white shadow cursor-pointer" />
                </div>
            </div>
        </div>

{/* IMAGE BOTTOM*/}
        <div className="image w-full  h-28 sm:h-44 mt-10 relative rounded-lg overflow-hidden">
            <img src={bajo} className="w-full" />
            <div className="title p-3 flex flex-col sm:gap-3 justify-center sm:p-5 bg-black/60 text-white absolute left-0 w-full top-0 h-full">
                <h3 className="font-semibold sm:text-3xl">Menyaksikan budaya yang beragam dari berbagai daerah</h3>
                <p className="text-xs sm:text-lg lg:text-xl italic font-light">Gratis menonton pertunjukan budaya sekitar</p>
                <a href="#" className="text-white/70 rounded-lg font-semibold mt-2 max-md:text-xs">Baca selengkapnya..</a>
            </div>
        </div>

    </div>
</section>
</>
    )
}

export default Galeri