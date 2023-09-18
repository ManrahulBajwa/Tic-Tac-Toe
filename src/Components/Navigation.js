const Navigation = ({onClick}) => {
    return (
        <>
            <div className='mt-10 flex justify-center'>
                <button className='theme-btn' onClick={()=>onClick()}>Restart</button>
            </div>
        </>
    )
}

export default Navigation