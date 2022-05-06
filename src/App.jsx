/* eslint no-eval: 0 */
//Importación
import React, {useState} from 'react';
import words from 'lodash.words';
import './App.css';
import Numbers from './components/Numbers';
import Result from './components/Result';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations'
//Generación de la función del Componente

  //Funcion Flecha o arrow function
const App = () => {

  const [stack, setStack]=useState("");
  const items = words(stack, /[^-^+^*^/]+/g)
  const value = items.length>0 ? items[items.length-1]:"0";
  //Lo que ejecuta la funcion
  console.log("Renderizacion de APP1",items)
  return (
    <main className="react-calculator">
      <Result value={value}/>
      <Numbers 
          onClickNumber={number => 
            {console.log("number :", number)
            setStack(`${stack}${number}`)
            }
            
          } 
      />
      <Functions
          onContentClear={clear => 
            {console.log("Clear :", clear)
            setStack('')
          }
            
          } 
          onDelete={del => 
            {console.log("Delete :", del)
              if (stack.length>0){
                const newStack = stack.substring(0,stack.length-1)
                setStack(newStack)}
              }
              
          }
      />
      <MathOperations 
          onClickOperation={operation => 
            {console.log("Operacion :", operation)
            if(stack.length>0){
              setStack(`${stack}${operation}`)
            }
            }
          } 
          onClickEqual={equal => 
            {console.log("Equal:", equal)
            setStack(eval(stack).toString())}
          }
      />
    </main>) ;
}

//Exportación
export default App;
