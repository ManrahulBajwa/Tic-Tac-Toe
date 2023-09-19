const Box = ({ value, onClick }) => {
    return (
        <>
            <button onClick={onClick} className='bg-slate-900 flex justify-center items-center p-3 cursor-pointer text-8xl font-semibold hover:text-white/75 min-h-[110px] min-w-[96px] text-white uppercase'>
                {value}
                </button>
            {/* <div className='bg-white rounded-md flex justify-center items-center p-3 cursor-pointer'><BsXLg/></div> */}
        </>
    )
}

export default Box