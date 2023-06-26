
const IImage = (props)=> {
    return(
<div className="w-[150px] h-[230px] sm:w-[230px] sm:h-[300px] xl:w-[280px] xl:h-[390px] relative rounded-lg overflow-hidden cursor-pointer">
    <img src={props.img} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
    <div className="title z-10 absolute bottom-0 left-0 sm:w-[55%] max-sm:pr-4 max-sm:pl-1 max-sm:py-1 rounded sm:h-[20%] bg-white/70">
        <div className="title pl-1 xl:pl-5 h-full w-full flex flex-col justify-center">
        <h5 className="font-bold text-slate-800 text-sm sm:text-lg">{props.pulau}</h5>
        <p className="text-slate-600 max-sm:text-xs">{props.daerah}</p>
        </div>
    </div>
</div>
    )
}

export default IImage