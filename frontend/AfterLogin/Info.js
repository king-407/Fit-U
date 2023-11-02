import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {signupUser, signinUser} from '../reducers/authReducer';
import AntDesign from 'react-native-vector-icons/MaterialIcons';
import {postDetails, details} from '../reducers/avgReducer';
import Lottie from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Info = ({navigation}) => {
  const [cycle, setCycle] = useState('');
  const [walk, setWalk] = useState('');
  const [sleep, setSleep] = useState('');
  const [water, setWater] = useState('');
  const dispatch = useDispatch();
  sendData = () => {
    dispatch(postDetails({cycle, water, sleep, walk})).then(() => {
      dispatch(details());
    });
    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 2000);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Lottie
        style={{alignSelf: 'center', height: 300, width: 10}}
        source={require('../Animations/Fitness.json')}
        autoPlay
      />
      <View
        style={{
          position: 'absolute',
          top: responsiveHeight(37),
          left: responsiveWidth(5),
        }}>
        <Image
          style={{
            height: responsiveHeight(8),
            width: responsiveWidth(12),
            marginLeft: responsiveWidth(3),
            borderRadius: responsiveWidth(2),
            borderRadius: responsiveWidth(20),

            zIndex: 1,
            marginTop: responsiveHeight(4),
          }}
          source={require('../Images/bicycle.png')}
        />
      </View>

      <View style={{marginTop: responsiveHeight(-2)}}>
        <TextInput
          placeholder="Enter distance covered"
          value={cycle}
          placeholderTextColor="#000"
          onChangeText={text => setCycle(text)}
          style={{
            padding: 10,
            width: responsiveWidth(90),
            alignSelf: 'center',
            height: responsiveHeight(11),
            textAlign: 'center',
            borderRadius: responsiveWidth(9),
            backgroundColor: '#E6E6E6',

            color: 'black',
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: responsiveHeight(34),
            left: responsiveWidth(5),
          }}>
          <Image
            style={{
              height: responsiveHeight(8),
              width: responsiveWidth(12),
              marginLeft: responsiveWidth(3),
              borderRadius: responsiveWidth(2),
              borderRadius: responsiveWidth(20),

              zIndex: 1,
              marginTop: responsiveHeight(4),
            }}
            source={require('../Images/glass-of-water.png')}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: responsiveHeight(11),
            left: responsiveWidth(5),
          }}>
          <Image
            style={{
              height: responsiveHeight(8),
              width: responsiveWidth(12),
              marginLeft: responsiveWidth(3),
              borderRadius: responsiveWidth(2),
              borderRadius: responsiveWidth(20),

              zIndex: 1,
              marginTop: responsiveHeight(4),
            }}
            source={require('../Images/footprint.png')}
          />

          <View
            style={{
              position: 'absolute',
              top: responsiveHeight(13),
              left: responsiveWidth(1),
            }}>
            <Image
              style={{
                height: responsiveHeight(8),
                width: responsiveWidth(12),
                marginLeft: responsiveWidth(3),
                borderRadius: responsiveWidth(2),
                borderRadius: responsiveWidth(20),

                zIndex: 1,
                marginTop: responsiveHeight(4),
              }}
              source={require('../Images/sleeping.png')}
            />
          </View>
        </View>
        <TextInput
          placeholder="Enter distance Walked"
          value={walk}
          placeholderTextColor="#000"
          onChangeText={text => setWalk(text)}
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
        <TextInput
          placeholder="Sleep in Hours"
          placeholderTextColor="#000"
          value={sleep}
          onChangeText={text => setSleep(text)}
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
        <TextInput
          placeholder="Water Intake"
          placeholderTextColor="#000"
          value={water}
          onChangeText={text => setWater(text)}
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
      </View>
      <TouchableOpacity
        onPress={sendData}
        style={{
          width: responsiveWidth(96),
          height: responsiveHeight(9.3),
          marginTop: responsiveHeight(3),
          borderRadius: responsiveWidth(20),
          alignSelf: 'center',
          backgroundColor: '#F08080',
          marginBottom: responsiveHeight(5),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: responsiveFontSize(3.4),
            alignItems: 'center',
            marginTop: responsiveFontSize(1),
            alignSelf: 'center',
            fontWeight: '800',
          }}>
          Send
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Info;
