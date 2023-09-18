
const Turn = (props) => {
  return (
    <>
        <div className="text-white ring-emerald-400 ring-1 w-fit p-5 rounded-md shadow-md shadow-emerald-400">
        Turn : <span className="text-5xl uppercase ml-4 font-bold">{props.xPlaying?"x":"o"}</span>
        </div>
    </>
  )
}

export default Turn