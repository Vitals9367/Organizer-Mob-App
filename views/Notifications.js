import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';

export default function Notifications({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Notifications Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
  }
})
