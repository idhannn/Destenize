import style from "./style"
import img1 from '../assets/1571297575799-labuan-bajo 1.png'
import img2 from '../assets/1571297575799-labuan-bajo 2.png'
import img3 from '../assets/1571297575799-labuan-bajo 4.png'
import IImage from "./image"
import unsplash from '../assets/unsplash_1kdIG_258bU.jpg'
import bendera from '../assets/Mask Group.png'
import icon1 from '../assets/icon2 (1).png'
import icon2 from '../assets/icon2 (2).png'
import icon3 from '../assets/icon2 (3).png'
import mapIcon from '../assets/map icon.png'
import send from '../assets/send.png'
import leaf from '../assets/LEAF.png'
import heart from '../assets/heart (6) 1.png'

const Destinasi = ()=> {
    return(
<>
<section className="py-5 sm:py-12">
    <div className={`${style.container} max-sm:px-0`}>
        <p className="text-blue max-sm:pl-3 font-bold my-3 sm:text-lg">DESTINASI FAVORIT</p>
        <h3 className={`${style.head3} max-sm:pl-3 text-slate-800`}>Temukan Destinasi Favoritmu</h3>

        <div className="image flex lg:flex-nowrap flex-wrap justify-center gap-3 md:gap-5 mt-14">
        <IImage img={img2} pulau="Raja Ampat" daerah="Bali" />
        <IImage img={img1} pulau="Labuan Baju" daerah="NTT" />
        <IImage img={img3} pulau="Bromo" daerah="Jawa Timur" />
        <IImage img={img1} pulau="Raja Ampat" daerah="Bali" />
        </div>
    </div>
</section>

<section className="py-6 sm:py-12">
    <div className={`${style.container}`}> 
        <div className={`ROW-BOX ${style.gridCols2}`}>
            <div className="box-1">
                <p className="text-blue font-bold my-3 sm:text-lg">RESERVASI TEMPAT</p>
                <h3 className={`${style.head3} text-slate-800`}>Gak mau ngantri? Reservasi aja!</h3>
                    <div className="flex items-center mt-8 gap-4">
                    <div className="icon">
                        <img src={icon1} alt="" className="" />
                    </div>
                    <div className="title-1">
                        <h5 className="text-slate-800 font-bold  sm:text-xl">Cari tempat yang kamu mau</h5>
                        <p className="text-slate-500">Cari tempat favoritmu langsung ketemu</p>
                    </div>
                    </div>

                    <div className="flex items-center mt-8 gap-4">
                        <div className="icon">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="title-2">
                            <h5 className="text-slate-800 font-bold  sm:text-xl">Isi data dan konfirmasi pembayaran</h5>
                            <p className="text-slate-500">Temukan destinasi impianmu dan segera daftar</p>
                        </div>
                    </div>

                    <div className="flex items-center mt-8 gap-4">
                        <div className="icon">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="title-3">
                            <h5 className="text-slate-800 font-bold  sm:text-xl">Tinggal masuk dan enjoy</h5>
                            <p className="text-slate-500">Setelah itu kamu bisa menunggu sebentar dan berangkat</p>
                        </div>
                    </div>

            </div>

            <div className="box-2">
                <div className="card relative shadow-xl bg-white w-[280px] sm:w-96 p-5 rounded-xl mx-auto mt-20 flex flex-col">
                    <img src={unsplash} alt="" />
                    <div className="title my-5 flex flex-col gap-2">
                        <h4 className="font-bold text-lg text-slate-800">Liburan ke bali</h4>
                        <p className="text-slate-500">12-24 juni l by Hann</p>
                    </div>

                    <div className="ICON my-3">
                        <div className="flex gap-4">
                            <img src={mapIcon} alt="" />
                            <img src={send} alt="" />
                            <img src={leaf} alt="" />
                        </div>
                    </div>

                    <p className="text-slate-500">12 orang pergi bersama</p>

                    <div className="bg-white flex gap-3 p-3 rounded-xl shadow-lg -right-1 sm:-right-20 top-[330px] border border-slate-300 sm:top-60 w-72 sm:w-[270px] card-2 absolute">
                        <img src={bendera} alt="" className="w-[50px] h-[50px]" />
                        <div className="title text-slate-800">
                            <p className="text-slate-500 text-sm">Ongoing</p>
                            <h4 className="font-bold text-lg">Jelajah Indonesia</h4>
                            <img src={heart} alt="" className="w-5 my-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</section>
</>
    )
}

export default Destinasi