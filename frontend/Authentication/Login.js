import {View, Text, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signupUser, signinUser} from '../reducers/authReducer';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const authenticate = () => {
    dispatch(signinUser({email, password}));
  };
  // const {user, isLoading, isError, isSuccess, message} = useSelector(
  //   state => state.auth,
  // );
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   if (isSuccess || user) {
  //     navigation.navigate('Dashboard');
  //   }

  //   dispatch(reset());
  // }, [user, isError, isSuccess, message, dispatch]);
  // const onSubmit = () => {
  //   const userData = {
  //     name,
  //     email,
  //     password,
  //   };

  //   dispatch(register(userData));
  // };

  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          height: responsiveHeight(50),
          width: responsiveWidth(80),
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: responsiveHeight(4),
          resizeMode: 'contain',
        }}
        source={require('../Images/Login.png')}
      />

      <AntDesign
        name="email"
        size={35}
        color="black"
        style={{
          position: 'absolute',
          top: responsiveHeight(56),
          left: responsiveWidth(10),
          zIndex: 1,
        }}
        onPress={() => {}}
      />
      <AntDesign
        name="lock"
        size={35}
        color="black"
        style={{
          position: 'absolute',
          top: responsiveHeight(70),
          left: responsiveWidth(10),
          zIndex: 1,
        }}
        onPress={() => {}}
      />

      <TextInput
        value={email}
        placeholder="Enter your mail"
        placeholderTextColor="#000"
        onChangeText={text => setEmail(text)}
        style={{
          padding: 10,
          width: responsiveWidth(90),
          alignSelf: 'center',
          height: responsiveHeight(10),
          textAlign: 'center',
          borderRadius: responsiveWidth(9),
          backgroundColor: '#E6E6E6',

          color: 'black',
        }}
      />
      <TextInput
        value={password}
        placeholder="Enter your password"
        placeholderTextColor="#000"
        onChangeText={text => setPassword(text)}
        style={{
          padding: 10,
          width: responsiveWidth(90),
          alignSelf: 'center',
          height: responsiveHeight(10),
          textAlign: 'center',
          borderRadius: responsiveWidth(9),
          marginTop: responsiveHeight(4),
          backgroundColor: '#E6E6E6',
          color: 'black',
        }}
      />
      <TouchableOpacity
        onPress={authenticate}
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(7.3),
          marginTop: responsiveHeight(5),
          borderRadius: responsiveWidth(20),
          alignSelf: 'center',
          backgroundColor: '#00C4FF',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: responsiveFontSize(3),
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}>
          Signup
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 2,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <Text style={{fontSize: responsiveFontSize(2)}}>
          Don't have an account??
        </Text>
        <Text
          style={{color: 'blue'}}
          onPress={() => navigation.navigate('Register')}>
          Sign UP
        </Text>
      </View>
    </View>
  );
};

export default Login;
