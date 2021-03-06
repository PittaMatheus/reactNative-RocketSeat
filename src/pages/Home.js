import React  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


export function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello firend</Text>

      <TextInput 
      style={styles.input} 
      placeholder="New skill"
      placeholderTextColor='#555'
      />
      <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.button}
      >
          <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 50 }]}>
          My skills
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title:{
        color :'#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});