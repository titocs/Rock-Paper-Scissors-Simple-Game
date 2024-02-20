import Scoreboard from './components/scoreboard/index';
import Main from './components/main/index';
import Rules from './components/rules/index';
import { useState } from 'react';

function App() {
  const [dataPick, setDataPick] = useState('');
  const [score, setScore] = useState(0);
  
  return (
    <>
      <div className='flex h-screen flex-col pb-12 lg:pb-0'>
        <Scoreboard score={score}/>
        <Main 
          dataPick={dataPick}
          setDataPick={setDataPick}
          score={score}
          setScore={setScore}/>
        <Rules />
      </div>
    </>
  );
}

export default App;
