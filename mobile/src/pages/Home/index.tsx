import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground 
        source={require('../../assets/background.png')} 
        style={styles.container} 
        imageStyle={{ width: 500, height: 500}}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput 
            style={styles.input}
            placeholder="Digite a UF" 
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf} 
            onChangeText={text => setUf(text)}
          />
          <TextInput 
            style={styles.input}
            placeholder="Digite a cidade"
            autoCorrect={false} 
            value={city} 
            onChangeText={text => setCity(text)}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex:1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },

  buttonIcon: {
    height: 60,
    width: 60,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});

export default Home;
