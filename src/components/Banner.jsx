import style from "./style"
import stikerBanner from '../assets/On the way-pana (1) 1 (1).png'

const Banner = ()=> {
    return(
<>
<section className="pt-10 pb-6 sm:py-10">
    <div className={`${style.container}`}>
        <div className="banner rounded-xl bg-blue text-white w-full flex justify-between relative overflow-hidden">
            <div className="title w-full sm:w-[80%] lg:w-[50%] flex flex-col gap-5 py-5 lg:py-10 px-3 md:px-7 xl:px-12">
                <h2 className={`text-3xl lg:text-4xl text-white font-semibold`}>Masih bingung cari tempat yang cocok?</h2>
                <p className="sm:text-sm text-xs">Tenang kami mempuyai fitur rekomendasi yang membantu kamu mencari tempat berlibur yabg tepat dengan menjawab pertanyaan yang kami berikan</p>
                <a href="#" className="font-semibold sm:text-xl">Mulai Sekarang</a>
            </div>

            <img src={stikerBanner} alt="" className="object-cover absolute lg:block hidden right-0" />
        </div>
    </div>
</section>
</>
    )
}

export default Banner