import style from "./style"
import imgPeople from '../assets/Group 592 2.png';
import playIcon from '../assets/play.svg'

const Home = ()=> {
    return(

<>
<section className="HOME py-2 sm:py-5 lg:py-10">
    <div className={`${style.container}`}>
        <div className={`row-box ${style.gridCols2} items-center`}>
            <div className="title">
                <p className="mb-5 p-2 rounded-full bg-blue_two text-blue font-bold w-[100%] lg:w-[60%] text-center text-sm">✈ • Explore the wonderful indonesia!</p>
                <h1 className={`${style.head1} font-extrabold`}>Liburan & nikmati <span className="text-blue leading-[50px] font-extrabold">tempat baru</span> di indonesia</h1>
                <p className="mt-8 mb-6 leading-loose w-[95%] sm:w-[80%] font-medium text-slate-500">Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
                <div className="btn flex items-center">
                <button className="py-3 px-4 sm:py-4 sm:px-7 hover:bg-blue/90 bg-blue text-white shadow shadow-blue font-bold text-xs sm:text-lg rounded-lg">Mulai Sekarang</button>
                <img src={playIcon} alt="" className="p-5 ml-3 md:ml-8 mr-2 rounded-full border border-blue cursor-pointer" /> <p className="text-xs sm:text-sm text-slate-800 my-auto">Putar Demo</p>
                </div>
            </div>
            <div className="img">
                <img src={imgPeople} alt="" />
            </div>
        </div>
    </div>
</section>
</>

    )
}

export default Home     