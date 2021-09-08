import logo from './logo.svg';
import './App.scss';
import SVG from 'react-inlinesvg';
import { useRef, useState, useEffect } from 'react';
import {createUseStyles} from 'react-jss'



function App() {
  const originalColorMap = {
    'color-1': "#FFB000",
    'color-2': "#785EF0",
    'color-3': "#648FFF",
    'color-4': "#DC267F",
    'color-inactive': "#767676",
    'color-focus': "#FE6100",
  }

  const originalStrokeMap = {
    'stroke-width': '8'
  }

  const originalFontMap = {
    'font-size': 36,
    'font-family': 'Arial'
  }

  const availableFonts = [
    'sans-serif',
    'serif',
    'monospace',
    'cursive',
    'Atkinson Hyperlegible'
  ]

  const svgRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false)
  const [colors, setColors] = useState({...originalColorMap})
  const [strokes, setStrokes] = useState({...originalStrokeMap})
  const [fonts, setFonts] = useState({...originalFontMap})

  function onSvgLoad() {
    setIsLoaded(true)
    }

  function onColorChange(e, key) {
    setColors({...colors, [key]: e.target.value})
  }

  function onStrokeChange(e, key) {
    setStrokes({...strokes, [key]: e.target.value})
  }

  function onFontChange(e, key) {
    setFonts({...fonts, [key]: e.target.value})
  }

  function generateColorStyle() {
    let map = {}
    Object.keys(colors).forEach((key, index)=>{
      // Special Handler For When Color Focus Is Hit
      if (key == "color-focus") {
        map['& [data-layer="root"]:focus [data-layer="bg"]'] = {
          fill: colors[key]
        }
      // Handler For When A Generic Color Is Encountered
      } else if (key.startsWith('color')) {
        map[`& .${key} [data-layer='bg']`] = {
          fill: colors[key]
        }
      }
    })
    return map
  }

  function generateStrokeStyle() {
    let map = {}
    Object.keys(strokes).forEach((key, index)=>{
      if (key == "stroke-width") {
        map[`& [data-layer="bg"]`] = {
          strokeWidth: strokes[key]
        }
      }
    })
    return map
  }

  function generateFontStyle() {
    let map = {}
    let fontSize = fonts['font-size'];
    let fontFamily = fonts['font-family']
    map['& [data-layer="txt"]'] = {
      font: `bold ${fontSize}px ${fontFamily}`
    }
    return map
  }
  
  function resetColorMap() {
    setColors({...originalColorMap})
  }

  function resetStrokeMap() {
    setStrokes({...originalStrokeMap})
  }

  function resetFontMap() {
    setFonts({...originalFontMap})
  }

  const useStyles = createUseStyles({
    colors:  generateColorStyle(),
    strokes: generateStrokeStyle(),
    fonts: generateFontStyle()
  })

  const StyledContainer = ({children}) => {
    const classes = useStyles()
    return (
      <div className={`${classes.colors} ${classes.strokes} ${classes.fonts}`}>
          {children}
      </div>
    )
  }

  // Clean Up Function
  useEffect(() => {
    const interval = setInterval(() => {
      let tempStyles = Array.from(document.querySelectorAll("[data-meta='Unthemed']"))
      let i=0;
      while (i <(tempStyles.length-1)) {
        tempStyles[i].remove()
        i++
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
        <StyledContainer>
          <SVG 
            innerRef={svgRef}
            src={`${process.env.PUBLIC_URL}/assets/focus-test.svg`}
            onLoad={onSvgLoad}
          ></SVG>
        </StyledContainer>
        { isLoaded &&
        <div className="container">
          <div className="colors">
            <h3>Color</h3>
            {
              Object.keys(colors).map((key,index)=>{
                if (key.startsWith('color')) {
                  return (
                    <label key={index}>
                        {key}
                        <input type="color" value={colors[key]} onChange={(e)=>onColorChange(e,key)}></input>
                    </label>
                  )
                }
              })
            }
            <button onClick={resetColorMap}>Reset Colors</button>
          </div>
          <div className="stroke">
            <h3>Stroke</h3>
            {
              Object.keys(strokes).map((key,index)=>{
                if (key=="stroke-width") {
                  return (
                    <label key={index}>
                        {key}
                        <input type="number" step="2" value={strokes[key]} onChange={(e)=>onStrokeChange(e,key)}></input>
                    </label>
                  )
                }
              })
            }
            <button onClick={resetStrokeMap}>Reset Stroke</button>
          </div>
          <div className="fonts">
            <h3>Font</h3>
            {
              Object.keys(fonts).map((key,index)=>{
                if (key=="font-size") {
                  return (
                    <label key={index}>
                        {key}
                        <input type="number" value={fonts[key]} onChange={(e)=>onFontChange(e,key)}></input>
                    </label>
                  )
                } else if (key=="font-family") {
                  return (
                    <label key={index}>
                    {key}
                      <select onChange={(e)=>onFontChange(e, key)}>
                          {
                            availableFonts.map((font)=>{
                                return (<option>{font}</option>)
                            })
                          }
                      </select>
                    </label>
                  )

                }
              })
            }
            <button onClick={resetFontMap}>Reset Fonts</button>
          </div>
        </div>
        }

    </div>
  );
}

export default App;
