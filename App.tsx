import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {

  const [displayValor, setDisplayValor] = useState("0");

  return (
    <View style={styles.container}>
      <Display valor={displayValor}></Display>
      <View style={styles.buttons}>
        <Button label='AC'></Button>
        <Button label='/'></Button>
        <Button label='7'></Button>
        <Button label='8'></Button>
        <Button label='9'></Button>
        <Button label='*'></Button>
        <Button label='4'></Button>
        <Button label='5'></Button>
        <Button label='6'></Button>
        <Button label='-'></Button>
        <Button label='1'></Button>
        <Button label='2'></Button>
        <Button label='3'></Button>
        <Button label='+'></Button>
        <Button label='0'></Button>
        <Button label='.'></Button>
        <Button label='='></Button>
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
