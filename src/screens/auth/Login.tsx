import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <Text style={styles.loginText}>Login to Continue</Text>
  )
}

export default Login;
const styles = StyleSheet.create({
  loginText:{
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20
  }
})
