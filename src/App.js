import React, { createElement,useState } from 'react';
import Block1 from './Block1'
 

const mainStyle = {
 backgroundColor: '#eee',
 height: '100vh'
}
function App() {
  const [fontWeight, setFontWeight] = useState(200);
  
  return (
    <div className="App" style = {mainStyle}>
      <Block1 fontWeight={fontWeight} setFontWeight={setFontWeight}/>
    </div>
  );
}

export default App;
