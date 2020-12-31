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
let contextData = 'hello';
const Context = React.createContext(contextData);

function LevelOne() {
  const [contextData, setContextData] = useState('hello');
  return (
    <Context.Provider value={{ contextData, setContextData }}>
      <LevelTwo />
    </Context.Provider>
  );
}
function LevelTwo() {
  return <LevelThree />;
}
function LevelThree() {
  const { contextData, setContextData } = useContext(Context);
  return (
    <div>
      <button onClick={() => setContextData('goodbye')}>Change context</button>
      {contextData}
    </div>
  );
}
