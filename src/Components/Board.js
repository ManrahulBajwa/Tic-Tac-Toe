import Box from "../Components/Box"

const Board = ({board , onClick}) => {

    return (
        <>
            <div className='grid grid-cols-3 bg-white gap-1 rounded-md'>
                {board.map((value , index)=>{
                    return <Box key={index} value={value} onClick={()=>value===null && onClick(index)} />
                })}
            </div>
        </>
    )
}

export default Board