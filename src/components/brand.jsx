import brand1 from '../assets/Artboard – 1.jpg'
import brand2 from '../assets/Artboard – 1.png'
import brand3 from '../assets/brand.jpg'
import brand4 from '../assets/brand.png'
import style from './style'

const Brand = ()=> {
    return(
<>
<section className="py-6 sm:py-12">
    <div className={`${style.container}`}>
        <div className={`flex gap-0 lg:gap-5 justify-center`}>
            <img src={brand1} alt="" className="w-[80px] min-[390px]:w-[100px] md:w-[200px] grayscale hover:grayscale-0" />
            <img src={brand2} alt="" className="w-[80px] min-[390px]:w-[100px] md:w-[200px] grayscale hover:grayscale-0" />
            <img src={brand3} alt="" className="w-[80px] min-[390px]:w-[100px] md:w-[200px] grayscale hover:grayscale-0" />
            <img src={brand4} alt="" className="w-[80px] min-[390px]:w-[100px] md:w-[200px] grayscale hover:grayscale-0" />
        </div>
    </div>
</section>
</>
    )
}

export default Brand