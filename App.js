import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, 
  View, Image, ScrollView, FlatList, Alert } from 'react-native';
import tacas from './src/assets/tacas.jpg'
import caverninha from './src/assets/caverninha.jpg'
import banner from './src/assets/banner.jpg'
import atendimento from './src/assets/atendimento.png'
import facebook from './src/assets/facebook.png'
import instagram from './src/assets/instagram.png'
import info from './src/assets/info.png'
import whatsapp from './src/assets/whatsapp.png'
import twitter from './src/assets/twitter.png'
import lei from './src/assets/lei.png'

export default function App() {

  const lista = [{id: 1, imagem: tacas}, 
      {id: 2, imagem: caverninha}, {id: 3, imagem: banner}
      , {id: 4, imagem: atendimento}, {id: 5, imagem: facebook}
      , {id: 6, imagem: instagram}, {id: 7, imagem: info}];

  function handleSelectItem(data) {
    Alert.alert('Atenção',
      `Item capturado é ${data.imagem}`);
  }

  return (
    


    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <View>
        <TextInput placeholder={'teste de entrada'} />
      </View>

      <View >
        <TouchableOpacity >
          <Image source={lista[0].imagem} style={styles.imagem} />
        </TouchableOpacity>
      </View>

      <View >
        <FlatList
          data={lista}
          renderItem ={({item})=> (
                <TouchableOpacity
                    onPress={()=>{handleSelectItem(item)}} >  
                  <Image source={item.imagem} style={styles.imagem} /> 
                </TouchableOpacity>
          ) }
          keyExtractor ={item => item.id}
          horizontal
          handleSelect={handleSelectItem}
        />
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },

  imagem: {
    width: 100,
    height: 100,
  }
});
