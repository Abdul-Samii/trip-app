import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Login } from './screens/auth';

const App = () => {
  return (
    <View>
      <Login />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  hello: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
