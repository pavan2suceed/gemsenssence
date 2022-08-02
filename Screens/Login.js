import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Login = props => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();

  const goToValidation = () => {
    // if (text === '' && number === '') {
    //   setEmailError('Please enter valid email');
    //   setPasswordError('Please enter valid password');
    // } else if (text !== '') {
    //   setEmailError('');
    // } else if (number !== '') {
    //   setPasswordError('');
    // } else if (text !== '' && number !== '') {
    //   setEmailError('');
    //   setPasswordError('');
    //   navigation.navigate('Content');
    // } else {
    //   null;
    // }

    var isMail = false;
    var isPassword = false;
    if (text !== '') {
      setEmailError('');
      isMail = true;
    } else {
      setEmailError('Please enter valid email');
      isMail = false;
    }

    if (number !== '') {
      setPasswordError('');
      isPassword = true;
    } else {
      setPasswordError('Please enter valid password');
      isPassword = false;
    }

    if (isMail && isPassword) {
      if (text == 'test@test.com' && number == '12345678') {
        navigation.navigate('Content');
      } else {
        alert('Invalid login credential');
      }
    } else {
      alert('Please Enter Both Values');
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.welcome}>
        <View style={Styles.textView}>
          <Text style={Styles.text0}>welcome!</Text>
          <Text style={Styles.text1}>Sign in and get started</Text>
        </View>
      </View>

      <View style={Styles.loginContainer}>
        <Text style={Styles.inputStyle}>Email</Text>
        <TextInput
          style={Styles.input}
          onChangeText={text => setText(text)}
          placeholder="email"
        />

        <Text>{emailError !== '' ? emailError : null}</Text>
      </View>
      <View style={Styles.loginContainer}>
        <Text style={Styles.inputStylePass}>Password</Text>
        <TextInput
          style={Styles.input}
          onChangeText={text => setNumber(text)}
          placeholder="password"
        />
        <Text>{passwordError !== '' ? passwordError : null}</Text>
      </View>
      <TouchableOpacity style={Styles.signIn} onPress={() => goToValidation()}>
        <Text style={Styles.text2}>Sign in</Text>
      </TouchableOpacity>
      <Text style={Styles.text3}>Forgot password</Text>

      <TouchableOpacity style={Styles.signUp}>
        <Text style={Styles.text4}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e6fa',
  },
  inputStyle: {
    left: -130,
    marginBottom: 5,
  },
  inputStylePass: {
    left: -120,
    marginBottom: 5,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  welcome: {
    backgroundColor: 'white',
    height: '22%',
    borderRadius: 50,
    marginBottom: 20,
  },
  text0: {
    color: '#81bdeb',
    fontSize: 25,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  text3: {
    color: '#73acde',
    fontSize: 15,

    alignSelf: 'center',
  },
  text4: {
    color: '#73acde',
    fontSize: 15,
  },

  textView: {
    padding: 35,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: '80%',
    backgroundColor: 'white',
  },
  signIn: {
    height: 45,
    margin: 35,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#5391f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    height: 45,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#d4d5fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
