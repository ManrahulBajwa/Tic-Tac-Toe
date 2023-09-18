import './App.css';
import TicTacTue from './Components/TicTacTue';
function App() {
  return (
    <>
      <div className='bg-slate-900 h-screen w-screen select-none'>
        <div className='flex justify-center items-center mx-auto w-full'>
          <TicTacTue />
        </div>
      </div>
    </>
  );
}

export default App;
