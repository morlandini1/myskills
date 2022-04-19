import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity
} from "react-native";

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Marcio</Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"

      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
       backgroundColor: '#121015', 
       paddingVertical: 70, 
       paddingHorizontal: 30,
    },
    title: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: "bold"
    },
    input: {
      backgroundColor: '#1F1e25',
      color: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 30,
      borderRadius: 7
    }
});