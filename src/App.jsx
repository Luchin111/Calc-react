/* eslint no-eval: 0 */
//Importación
import React, {useState} from 'react';
import words from 'lodash.words';
import './App.css';
import Numbers from './components/Numbers';
import Result from './components/Result';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations'

const App = () => {

  const [stack, setStack]=useState("");
  const items = words(stack, /[^-^+^*^/]+/g)
  const value = items.length>0 ? items[items.length-1]:"0";


  return (
    <main className="react-calculator">
      <Result value={value}/>
      <Numbers 
          onClickNumber={number => 
            {
            setStack(`${stack}${number}`)
            }
            
          } 
      />
      <Functions
          onContentClear={clear => 
            {
            setStack('')
          }
            
          } 
          onDelete={del => 
            {
              if (stack.length>0){
                const newStack = stack.substring(0,stack.length-1)
                setStack(newStack)}
              }
              
          }
          onDot={dot => 
            {
              setStack(stack+""+dot)
              
            }
              
          }
      />
      <MathOperations 
          onClickOperation={operation => 
            {
            
              setStack(`${stack}${operation}`)
            
            }
          } 
          onClickEqual={equal => 
            {
            setStack(eval(stack).toString())}
          }
      />
    </main>) ;
}

//Exportación
export default App;
