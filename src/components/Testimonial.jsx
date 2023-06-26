import style from "./style"
import testi1 from '../assets/testi (1).png';
import testi2 from '../assets/testi (2).png';
import testi3 from '../assets/testi (3).png';

const Testimonial = ()=> {
    return(
<>
<section className="sm:py-10">
    <div className={`${style.container} max-sm:px-2`}>
        <div className="title text-slate-800 text-center mb-7">
            <p className="text-blue font-bold">TESTIMONIAL DESTENIZE</p>
            <h3 className={`${style.head3} mt-1 mb-5 font-semibold`}>Apa Kata Mereka Tentang Kami</h3>
            <p className="text-sm text-slate-500 xl:w-[70%] mx-auto">Rata rata dari pelanggan kami puas dengan pelayanan yang kami berikan</p>
        </div>
        <div className={`${style.gridCols3} gap-1 sm:gap-3 justify-between w-full md:gap-5 text-slate-800`}>
            <div className="card border font-semibold border-slate-300 shadow-lg rounded-lg py-2 sm:py-5 sm:px-3 lg:py-10 lg:px-5 text-center flex flex-col items-center">
                <img src={testi1} alt="" className="w-10 md:w-20 lg:w-28" />
                <p className="text-slate-500 font-normal max-sm:text-[8px] mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugit laborum possimus perferendis iste</p>
                <p className="text-yellow-500 text-lg sm:text-4xl mb-1 sm:mb-5">* * * * *</p>
                <p className="text-[8px] sm:text-sm text-blue">Han Gaming</p>
                <h5 className="italic max-sm:text-[10px]">Software Enginer</h5>
            </div>
            <div className="card border font-semibold border-slate-300 shadow-lg rounded-lg py-2 px-0 sm:py-5 sm:px-3 lg:py-10 lg:px-5 text-center flex flex-col items-center">
                <img src={testi2} alt="" className="w-12 md:w-24 lg:w-36" />
                <p className="text-slate-500 font-normal max-sm:text-[8px] mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugit laborum possimus perferendis iste</p>
                <p className="text-yellow-500 text-lg sm:text-4xl mb-1 sm:mb-5">* * * * *</p>
                <p className="text-[8px] sm:text-sm text-blue">Han Gaming</p>
                <h5 className="italic max-sm:text-[10px]">Software Enginer</h5>
            </div>
            <div className="card border font-semibold border-slate-300 shadow-lg rounded-lg py-2 px-0 sm:py-5 sm:px-3 lg:py-10 lg:px-5 text-center flex flex-col items-center">
                <img src={testi3} alt="" className="w-12 md:w-24 lg:w-36" />
                <p className="text-slate-500 font-normal max-sm:text-[8px] mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugit laborum possimus perferendis iste</p>
                <p className="text-yellow-500 text-lg sm:text-4xl mb-1 sm:mb-5">* * * * *</p>
                <p className="text-[8px] sm:text-sm text-blue">Han Gaming</p>
                <h5 className="italic max-sm:text-[10px]">Software Enginer</h5>
            </div>
        </div>
    </div>
</section>
</>
    )
}

export default Testimonial