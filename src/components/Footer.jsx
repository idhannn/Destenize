import style from "./style";
import logo from '../assets/icon-192 1.png'

const Footer = ()=> {
    return(
<>
<section className="footer pb-6 pt-12 sm:pt-40 sm:pb-12">
    <div className={`${style.container}`}>
        <div className="row-box gap-10 justify-center flex max-lg:flex-col text-slate-500">
            <div className="box w-full lg:w-[50%]">
                <div className="flex gap-2"><img src={logo} alt="" /><h1 className="font-semibold text-2xl text-slate-800">Destenize</h1></div>
                <p className="font-semibold my-6">Destenize adalah website pelayanan yang membantu kamu untuk menemukan destinasi liburanmu dengan cara simple dan pembayaran mudah kamu dapat menemukan tujuan idamanmu! <a href="#" className="text-blue font-bold">Baca Slengkapnya...</a></p> 
                <div className="contact flex flex-col gap-2">
                    <a href="#" className="hover:text-slate-800">0876-765-765</a>
                    <a href="#" className="hover:text-slate-800">DestenizeOff@gmail.com</a>
                    <a href="#" className="hover:text-slate-800">Bogor, Jawa barat</a>
                    <a href="#" className="hover:text-slate-800">+21 23444</a>
                </div>
            </div>
            <div className="box w-full lg:w-[20%] flex flex-col gap-5">
                <h1 className="font-bold text-slate-800 text-xl">Tentang</h1>
                <a href="#" className="hover:text-slate-800">Tentang kami</a>
                <a href="#" className="hover:text-slate-800">Blog</a>
                <a href="#" className="hover:text-slate-800">Karir</a>
                <a href="#" className="hover:text-slate-800">Berita</a>
                <a href="#" className="hover:text-slate-800">Galeri</a>
            </div>
            <div className="box w-full lg:w-[20%] flex flex-col gap-5">
                <h1 className="font-bold text-slate-800 text-xl">Support</h1>
                <a href="#" className="hover:text-slate-800">Kontak Kami</a>
                <a href="#" className="hover:text-slate-800">Whatsapp</a>
                <a href="#" className="hover:text-slate-800">Telegram</a>
                <a href="#" className="hover:text-slate-800">Call Center</a>
                <a href="#" className="hover:text-slate-800">Bantuan</a>
            </div>
            <div className="bpx w-full lg:w-[20%] flex flex-col gap-5">
                <h1 className="font-bold text-slate-800 text-xl">FAQ</h1>
                <a href="#" className="hover:text-slate-800">Akun</a>
                <a href="#" className="hover:text-slate-800">Organisir</a>
                <a href="#" className="hover:text-slate-800">Order</a>
                <a href="#" className="hover:text-slate-800">Pembayaran</a>
                <a href="#" className="hover:text-slate-800">Pengembalian</a>
            </div>
        </div>
    </div>
</section>
</>
    )
}

export default Footer