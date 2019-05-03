import React,{useState} from 'react'
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



  const Block2   = ({fontWeight,setDisplayButton}) => {
        const style2 = {
            position:'absolute',
            width:  `${b2Coords.width}px`,
            height:  `${b2Coords.height}px`,
            top:`${b2Coords.marginY}px`,
            left:` ${b2Coords.marginX}px`,
            resize:'none',
            padding:0,
            margin:0,
            fontSize:'150%',
            fontWeight: fontWeight
          }

          const handleBlur = ({target:{value}},)=>{
            if(value === '')
                  setDisplayButton('none')
          }
          return(
            <textarea style={style2} onFocus ={()=>{setDisplayButton('inherit')}} 
                                      onBlur = {(e)=>{handleBlur(e)}}>
            </textarea>
          )
  }
 
  const Panel = ({fontWeight,setFontWeight,displayButtom}) =>{
      const boldStyle = {
        position:'absolute',
        top:`${b2Coords.marginY}px`,
        left:`${b2Coords.marginX+b2Coords.width}px`,
        height:  `${b2Coords.height}px`,
        margin:0,
        display: displayButtom,
        backgroundColor: '#eee',
      }
          return(
            <div style ={boldStyle}>
              <button  style ={{padding:'2px'}} onClick={()=>{ 
                                                        fontWeight === 200 ? setFontWeight(900) : 
                                                          setFontWeight(200)
                    }} >Bold</button>
            </div>
          )
    }

const Block1   = ({fontWeight,setFontWeight}) => {
    const style = {
        width: `${b1Coords.width}px`,
        height:  `${b1Coords.height}px`,
        color: 'red',
        backgroundImage:  `url(${img})`,
      }
    const [displayButton, setDisplayButton] = useState('none');
      
      return(
             <div style={style}>
                <Block2 fontWeight={fontWeight} setDisplayButton={setDisplayButton}  />
                <Panel fontWeight={fontWeight} setFontWeight={setFontWeight} displayButtom={displayButton}  />
            </div>
      )
}



export default Block1
