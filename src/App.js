import React, { createElement,useState } from 'react';
 import  img  from   './background.png'

const b1Coords = {
  width : 500,
  height: 500
} 
const b2Coords = {
  marginX: 81,
  marginY: 61,
  width: 200,
  height: 100
}

const style = {
  width: `${b1Coords.width}px`,
  height:  `${b1Coords.height}px`,
  color: 'red',
  border: 'red solid 1px',
  backgroundImage:  `url(${img})`,
}

const style2 = {
  position:'absolute',
  width:  `${b2Coords.width}px`,
  height:  `${b2Coords.height}px`,
  border: 'green solid 1px',
  top:`${b2Coords.marginY}px`,
  left:` ${b2Coords.marginX}px`,
  resize:'none',
  padding:0,
  margin:0,
  fontWeight: fontWeight
}

const boldStyle = {
  position:'absolute',
  top:`${b2Coords.marginY}px`,
  left:`${b2Coords.marginX+b2Coords.width}px`,
  height:  `${b2Coords.height}px`,
  margin:0
}

const handleBold =()=>{
 fontWeight = (fontWeight == 200) ? 900:200 
}

const BoldButton = () => 
            <button style ={boldStyle} onClick={handleBold} >Bold</button>

  const Block2   = () => 
  <textarea style={style2}>
  </textarea>
const Block1   = () => 
    <div style={style}>
        <Block2/>
        <BoldButton/>
      </div>
function App() {
  const [fontWeight, setfontWeight] = useState();
  
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
