import mapsImg from '../assets/Radius 8px.png'
import style from './style'
import iconLoc from '../assets/locIcon (1).png'
import iconLoc1 from '../assets/locIcon (2).png'
import iconLoc2 from '../assets/locIcon (3).png'

const MapComponent = () => {
  return (
<>
    <section className='pt-20 sm:py-12'>
        <div className={`${style.container} flex flex-col`}>
            <div className="title text-center flex flex-col items-center gap-4 mt-6 mb-8">
                <h1 className={`${style.head3}`}>🗺 • Cari Tempat Wisata Didekatmu</h1>
                <p className='lg:w-[70%]'>Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang sedang populer di daerah kamu dengan begitu kamu akan selalu update dan gak kudet lagi 👍🏻</p>
            </div>

            <div className="img-map">
                <img src={mapsImg} alt="" className='rounded-lg' />

                <div className="title flex flex-wrap justify-center gap-5 mt-12">

                    <div className="title-1 w-[300px]">
                        <div className="box flex items-center gap-3">
                            <img src={iconLoc} alt="" />
                            <div className="desc">
                            <h5 className='sm:text-lg font-bold'>Populer di dekatmu</h5>
                            <p className='text-[12px] sm:text-sm'>Tempat populer yang ramai di kunjungi di tempatmu</p>
                            </div>
                        </div>
                    </div>

                    <div className="title-1 w-[300px]">
                        <div className="box flex items-center gap-3">
                            <img src={iconLoc1} alt="" />
                            <div className="desc">
                            <h5 className='sm:text-lg font-bold'>Populer di dekatmu</h5>
                            <p className='text-[12px] sm:text-sm'>Tempat populer yang ramai di kunjungi di tempatmu</p>
                            </div>
                        </div>
                    </div>

                    <div className="title-1 w-[300px]">
                        <div className="box flex items-center gap-3">
                            <img src={iconLoc2} alt="" />
                            <div className="desc">
                            <h5 className='sm:text-lg font-bold'>Populer di dekatmu</h5>
                            <p className='text-[12px] sm:text-sm'>Tempat populer yang ramai di kunjungi di tempatmu</p>
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

export default MapComponent