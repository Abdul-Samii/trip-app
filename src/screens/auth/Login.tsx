import react, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { COLORS, FONTS, ICONS, hp, wp } from '../../constants';
import Input from '../../components/form/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.welcomeStyle}>Welcome <Text style={styles.boldText}>Back,</Text></Text>
          <Text style={styles.welcomeTagline}>Signin to Continue</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.authTabs}>
          <Text style={styles.Tab}>LOGIN</Text>
          <Text style={styles.Tab}>SIGNUP</Text>
        </View>
        <View style={styles.inputs}>
          <ICONS.Fontisto name='email' size={50} />
          <Input
            placeholder='Email Address'
            inputMode='email'
            value={email}
            keyboardType='email-address'
            secureTextEntry={false}
            style={styles.inputStyle}
            onChangeText={(e: any) => setEmail(e.target.value)}
            placeholderTextColor={COLORS.gray1}
          />
          <Input
            placeholder='Passsword'
            inputMode='none'
            value={password}
            keyboardType='default'
            secureTextEntry={true}
            style={styles.inputStyle}
            onChangeText={(e: any) => console.log(e.target.value)}
            placeholderTextColor={COLORS.gray1}
          />
        </View>
      </View>
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
  container: {

  },
  header: {
    backgroundColor: COLORS.primary,
    height: hp(35),
  },
  headerText: {
    marginTop: hp(8),
    padding: wp(5),
  },
  welcomeStyle: {
    fontSize: 30,
    color: COLORS.secondary,
    fontFamily: FONTS.title
  },
  boldText: {
    fontFamily: FONTS.heading
  },
  welcomeTagline: {
    color: COLORS.white,
    fontSize: 15,
    padding: 3,
    fontWeight: '300'
  },
  formContainer: {
    height: hp(50),
    width: wp(94),
    backgroundColor: COLORS.white,
    marginHorizontal: wp(3),
    borderRadius: wp(5),
    elevation: 50,
    marginTop: hp(-14)
  },
  authTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Tab: {
    paddingVertical: hp(3),
    paddingHorizontal: wp(15),
    fontFamily: FONTS.heading,
    fontSize: 16,
    color: COLORS.primary
  },
  inputs: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputStyle: {
    width: wp(85),
    marginHorizontal: wp(5),
    borderRadius: wp(40),
    borderWidth: 0.5,
    borderColor: COLORS.gray1,
    paddingLeft: 15,
    color: "yellow",
    marginVertical: 5
  }
})
