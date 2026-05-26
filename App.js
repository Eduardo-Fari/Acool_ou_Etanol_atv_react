import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [Etanol, setEtanol] = useState('');
  const [Gas, setGas] = useState('');
  const [Res, setRes] = useState('');
  const [Res2, setRes2] = useState('');
  const IMC = () => {

    const relacao = Etanol / Gas;
    
    if (relacao <= 0.7) {
      setRes('Etanol');
    } else {
      setRes('Gasolina');
    }
  setRes2(relacao * 100);  }


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
          <View style={styles.container2}>
            <Text style={styles.te}>Acool Ou Etanol</Text>
            <Image source={require('./assets/post.webp')} alt='Posto de Gasolina'
            style={{ width: 100, height: 100, marginTop: 10 , borderRadius: 15}}
            />
          </View>
          <StatusBar style="auto" />
          <Text>Preço do Etanol:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite o preço da Etanol'
            onChangeText={setEtanol}
            placeholderTextColor="#ccc"
            value={Etanol}
          />
          <Text>Preço da Gasolina:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite o preço da Gasolina'
            onChangeText={setGas}
            placeholderTextColor="#ccc"
            value={Gas}
          />
        <Button title='Calcular Vantagem' onPress={IMC} color='#014407'/>
        <View style={styles.container2}>
        <Text>Abasteça com: {Res}</Text>
        <Text style={styles.texo}>Etanol está custando {Res2}% da Gasolina</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#014407',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: '#009a0d',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: "solid",
    borderWidth:1,
    borderColor:'#2dff3e',
    borderRadius: 20,
  },
  container2: {
    backgroundColor: '#0bb119',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: "solid",
    borderWidth:1,
    borderColor:'#000000',
    borderRadius: 15,
    padding: 10,
  },
  input: {
    borderColor: 'red',
    borderStyle: "solid",
    margin: 15,
    borderWidth: 1,
    width: "80%",
    height: 30,
    padding: 5,
    borderRadius: 12,
    },
  texo:{
    fontSize: 10,
  },
  te:{
    fontFamily: "monospace",
    marginTop: 10
  },
});
