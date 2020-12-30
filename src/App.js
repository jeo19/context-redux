import React, { useContext } from 'react';

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
function onChange() {
  contextData = 'goodbye';
  Context._currentValue = 'goodbye';
  console.log(contextData);
}
function LevelOne() {
  return (
    <Context.Provider value={contextData}>
      <LevelTwo />
    </Context.Provider>
  );
}
function LevelTwo() {
  return <LevelThree />;
}
function LevelThree() {
  const context = useContext(Context);
  return (
    <div>
      {' '}
      <button onClick={onChange}>Change context</button>
      {context}
    </div>
  );
}
