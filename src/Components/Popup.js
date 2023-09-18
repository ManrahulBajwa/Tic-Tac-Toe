import React from 'react'

const Popup = (props) => {
    return (
        <>
            <div className='absolute h-screen w-screen flex justify-center items-center bg-black/50 backdrop-blur-sm z-20'>
                <div className='min-w-[300px] bg-white rounded-md p-5'>
                    {
                        !props.tie ?
                            <div className=''>
                                <span className='block text-center font-bold text-3xl text-emerald-700'>Player <span className='uppercase'>{props.winner}</span> Wins</span>
                                <span className='block text-center font-bold text-xl text-sky-700'>Total Scores: <br /><span className='text-8xl'>{props.winner == "x" ? props.score.x : props.score.o}</span></span>
                                <div className='flex justify-center mt-4'>
                                    <button className='bg-slate-900 p-2 w-full rounded-md text-white font-semibold' onClick={() => props.handlePopup()}>Okay</button>
                                </div>
                            </div>
                            : 
                            <div className=''>
                            <span className='block text-center font-bold text-3xl text-emerald-700'>🫡Oops Tie Match</span>
                            <div className='flex justify-center mt-4'>
                                <button className='bg-slate-900 p-2 w-full rounded-md text-white font-semibold' onClick={() => props.handlePopup()}>Okay</button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Popup