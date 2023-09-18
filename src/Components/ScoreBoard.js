import React from 'react'

const ScoreBoard = (props) => {
    return (
        <>
            <div className='mt-5'>
                <div className='rounded-b-xl shadow-emerald-400 shadow-md ring-1 ring-emerald-400 text-white flex justify-between'>
                    <div className='p-4 flex flex-col px-8'>
                        <div>Score <span className='text-emerald-400 font-semibold text-2xl'>X</span></div>
                        <div className='text-6xl text-center font-bold'>{props.scores.x}</div>
                    </div>
                    <div className='border-l-2 border-emerald-400 p-4 px-8'>
                        <div>User Turn</div>
                        <div className='text-6xl text-center font-bold text-purple-400'>{props.xPlaying?"x":"o"}</div>
                    </div>
                    <div className='border-l-2 border-emerald-400 p-4 px-8'>
                        <div>Score <span className='text-emerald-400 font-semibold text-2xl'>0</span></div>
                        <div className='text-6xl text-center font-bold'>{props.scores.o}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScoreBoard