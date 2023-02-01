import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';


export default function App() {

  const [displayValor, setDisplayValor] = useState<any>("0");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperationV] = useState<any>(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0)

  function addDigit(n:any){
    const clearDisplayV = displayValor == "0" || clearDisplay;

    if(n === "." && !clearDisplay && displayValor.includes(".")){
      return
    }
    const currentValueV = clearDisplayV? "" : displayValor;
    const displayValorV = currentValueV + n;
    setClearDisplay(false)
    setDisplayValor(displayValorV)

    if(n !== "."){
      const newValue = parseFloat(displayValorV)
      const valuesV = [...values]
      valuesV[current] = newValue;
      setValues( valuesV )
    }
  }

  function clearMem(){
    setOperationV(null)
    setValues([0, 0])
    setCurrent(0)
    setClearDisplay(false)
    setDisplayValor("0")
  }

  function setOperation(op:string){
    if(current === 0){
      setCurrent(1)
      setOperationV(op)
      setClearDisplay(true)
    } else {
      const equals = op === "="
      const valuesV = [...values];

      try{
        valuesV[0] = eval(`${values[0]} ${operation} ${values[1]}`)
      }catch (err){
        valuesV[0] = values[0]
      }

      valuesV[1] = 0
      setDisplayValor(`${valuesV[0]}`)
      setOperationV(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(valuesV)
    }
  }

  return (
    <View style={styles.container}>
      <Display valor={displayValor}></Display>
      <View style={styles.buttons}>
        <Button triple label='AC' onClick={clearMem}></Button>
        <Button operation={true} label='/' onClick={() => setOperation("/")}></Button>
        <Button label='7' onClick={() => addDigit(7)}></Button>
        <Button label='8' onClick={() => addDigit(8)}></Button>
        <Button label='9' onClick={() => addDigit(9)}></Button>
        <Button operation={true} label='*' onClick={() => setOperation("*")}></Button>
        <Button label='4' onClick={() => addDigit(4)}></Button>
        <Button label='5' onClick={() => addDigit(5)}></Button>
        <Button label='6' onClick={() => addDigit(6)}></Button>
        <Button operation={true} label='-' onClick={() => setOperation("-")}></Button>
        <Button label='1' onClick={() => addDigit(1)}></Button>
        <Button label='2' onClick={() => addDigit(2)}></Button>
        <Button label='3' onClick={() => addDigit(3)}></Button>
        <Button operation={true} label='+' onClick={() => setOperation("+")}></Button>
        <Button double={true} label='0' onClick={() => addDigit(0)}></Button>
        <Button label='.' onClick={() => addDigit(".")}></Button>
        <Button operation={true} label='=' onClick={() => setOperation("=")}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
