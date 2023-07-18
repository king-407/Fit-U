import {View, Text, TextInput, Image, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
// import {signupUser, signinUser} from '../reducers/authReducers';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import {signupUser} from '../reducers/authReducer';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [auth, setAuth] = useState('signin');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.user.error);
  const authenticate = () => {
    dispatch(signupUser({name, email, password}));

    ToastAndroid.showWithGravity(
      todos,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
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
    <ScrollView>
      <View style={{flex: 1}}>
        <Image
          style={{
            height: responsiveHeight(50),
            width: responsiveWidth(80),
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
            resizeMode: 'contain',
          }}
          source={require('../Images/Login.png')}
        />

        <AntDesign
          name="person"
          size={35}
          color="black"
          style={{
            position: 'absolute',
            top: responsiveHeight(54),
            left: responsiveWidth(10),
            zIndex: 1,
          }}
          onPress={() => {}}
        />
        <AntDesign
          name="email"
          size={35}
          color="black"
          style={{
            position: 'absolute',
            top: responsiveHeight(65.2),
            left: responsiveWidth(10),
            zIndex: 1,
          }}
          onPress={() => {}}
        />
        <TextInput
          value={name}
          placeholder="Enter your name"
          placeholderTextColor="#000"
          onChangeText={text => setName(text)}
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
          value={email}
          placeholder="Enter your mail"
          placeholderTextColor="#000"
          onChangeText={text => setEmail(text)}
          style={{
            marginTop: responsiveHeight(2),
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
        <AntDesign
          name="lock"
          size={35}
          color="black"
          style={{
            position: 'absolute',
            top: responsiveHeight(76.7),
            left: responsiveWidth(10),
            zIndex: 1,
          }}
          onPress={() => {}}
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
            marginTop: responsiveHeight(2),
            backgroundColor: '#E6E6E6',
            color: 'black',
          }}
        />
        <TouchableOpacity
          onPress={authenticate}
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(8),
            marginTop: responsiveHeight(2),
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
      </View>
    </ScrollView>
  );
};

export default Register;
