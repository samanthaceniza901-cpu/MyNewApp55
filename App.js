import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

/**
 * Change: Created the Profile Card Screen with user image, name, course, and bio.
 * Date: April 29, 2026
 */



const myUser = "Samantha";
const sayHello = (friendName) => {
  return `Hi ${friendName}, nice to meet you! ✨`;
};
const myClassmates = ["Earl", "Jake", "Mia", "Luffy", "Zoro"];

console.log("Assignment Output:");
console.log(myClassmates.map(name => sayHello(name)));
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Replace the URL below with your photo link */}
        <Image
          source={require('./assets/IMG_20240805_225215_312.jpg' )} 
          style={styles.profileImage}
        />

        <Text style={styles.nameText}>Samantha Ceniza</Text>
        <Text style={styles.courseText}>MMA Student - CS126</Text>

        <Text style={styles.bioText}>
          I'm a Multimedia Arts student who loves filming and photography.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },
  bioText: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default App;