import React, { useContext, useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <LevelOne />
    </div>
  );
}

const Context = React.createContext();
let levelOneCalls = 0;
let levelTwoCalls = 0;
let levelThreeCalls = 0;

function LevelOne() {
  const [contextData, setContextData] = useState('hello');
  console.log(`Level One calls:${++levelOneCalls}`);
  return (
    <Context.Provider value={{ contextData, setContextData }}>
      <MemoLevelTwo />
    </Context.Provider>
  );
}
function LevelTwo() {
  console.log(`Level Two calls: ${++levelTwoCalls}`);
  return <MemoLevelThree />;
}
const MemoLevelTwo = React.memo(LevelTwo);
function LevelThree() {
  console.log(`Level three calls: ${++levelThreeCalls}`);
  const { contextData, setContextData } = useContext(Context);
  return (
    <div>
      <button onClick={() => setContextData('goodbye')}>Change context</button>
      {contextData}
    </div>
  );
}
const MemoLevelThree = React.memo(LevelThree);
