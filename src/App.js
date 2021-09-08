import logo from './logo.svg';
import './App.scss';
import SVG from 'react-inlinesvg';
import { useRef, useState } from 'react';
import {createUseStyles} from 'react-jss'



function App() {
  const originalColorMap = {
    'color-1': "#FFB000",
    'color-2': "#785EF0",
    'color-3': "#648FFF",
    'color-4': "#DC267F",
    'color-inactive': "#767676",
    'color-focus': "#FE6100"
  }


  const svgRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false)
  const [colors, setColors] = useState({...originalColorMap})

  function onSvgLoad() {
    setIsLoaded(true)
    }

  function onColorChange(e, key) {
    setColors({...colors, [key]: e.target.value})
  }

  function generateColorStyle() {
    let map = {}
    let styles = map['styles'] = {}
    Object.keys(colors).forEach((key, index)=>{
      if (key == "color-focus") {
        styles['& [data-layer="root"]:focus [data-layer="bg"]'] = {
          fill: colors[key]
        }
      } else if (key.startsWith('color')) {
        styles[`& .${key} [data-layer='bg']`] = {
          fill: colors[key]
        }
      }
    })

    console.log(map)



    return map
  }

  function resetColorMap() {
    setColors({...originalColorMap})
  }

  const useStyles = createUseStyles(generateColorStyle())

  const StyledContainer = ({children}) => {
    const classes = useStyles()
    return (
      <div className={classes.styles}>
          {children}
      </div>
    )
  }

  return (
    <div className="App">
        <StyledContainer>
          <SVG 
            innerRef={svgRef}
            src={`${process.env.PUBLIC_URL}/assets/focus-test.svg`}
            onLoad={onSvgLoad}
          ></SVG>
        </StyledContainer>
        <div className="container">
            <div className="colors">
              <h3>Colors</h3>
              {
                Object.keys(colors).map((key,index)=>{
                  return (
                    <label className="color" key={index}>
                        {key}
                        <input type="color" value={colors[key]} onChange={(e)=>onColorChange(e,key)}></input>
                    </label>
                  )
                })
              }
              <button onClick={resetColorMap}>Reset Colors</button>
            </div>
            <div className="disabilities">


            </div>
          </div>
    </div>
  );
}

export default App;
