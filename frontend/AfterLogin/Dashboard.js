import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  walkUser,
  waterUser,
  cycleUser,
  sleepUser,
} from '../reducers/avgReducer';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import {details} from '../reducers/avgReducer';
import {ScrollView} from 'react-native-gesture-handler';

const Dashboard = ({navigation}) => {
  const [greeting, setGreeting] = useState('');
  const [present, setDate] = useState('');
  function getGreeting() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning ☀️');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon ☀️');
    } else if (currentHour >= 17 && currentHour < 21) {
      setGreeting('Good evening  🌕');
    } else {
      setGreeting('Good Evening 🌙 ');
    }

    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    setDate(`${day} ${months[monthIndex]} ${year}`);
  }

  const cycle = useSelector(state => state.avg.info.cycle);
  const sleep = useSelector(state => state.avg.info.sleep);

  const walk = useSelector(state => state.avg.info.walk);

  const water = useSelector(state => state.avg.info.water);
  const msgError = useSelector(state => state.avg.msgError);
  const dispatch = useDispatch();
  useEffect(() => {
    getGreeting();
  }, []);

  useEffect(() => {
    dispatch(details());
    console.log('running');
  }, []);

  return (
    <>
      {msgError != null ? (
        <>
          <ScrollView style={{flex: 1, backgroundColor: '#d0f0c0'}}>
            <View style={{flex: 1}}>
              <Image
                style={{
                  height: responsiveHeight(60),
                  width: responsiveWidth(80),
                  marginLeft: responsiveWidth(3),
                  borderRadius: responsiveWidth(2),
                  borderRadius: responsiveWidth(20),

                  zIndex: 1,
                  marginTop: responsiveHeight(4),
                }}
                source={require('../Images/Main.png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Info')}
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(10),
                marginTop: responsiveHeight(8),
                borderRadius: responsiveWidth(20),
                alignSelf: 'center',
                elevation: 10,
                backgroundColor: 'green',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveFontSize(3),
                  alignSelf: 'center',
                  marginTop: responsiveHeight(1),
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      ) : (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View>
            <Text
              style={{
                marginTop: responsiveHeight(3),
                marginLeft: responsiveWidth(4),
                fontSize: responsiveFontSize(3.7),
                fontWeight: '800',
              }}>
              Hey, {greeting}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  height: responsiveHeight(6),
                  width: responsiveWidth(14),
                  marginLeft: responsiveWidth(4),

                  marginTop: responsiveHeight(2),
                }}
                source={require('../Images/calendar.png')}
              />
              <Text
                style={{
                  marginTop: responsiveHeight(3),
                  marginLeft: responsiveWidth(7),
                  fontSize: responsiveFontSize(3.2),
                  fontWeight: '800',
                }}>
                {present}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  marginTop: responsiveHeight(5),
                  marginLeft: responsiveWidth(4),
                  height: responsiveHeight(29),
                  width: responsiveWidth(43),
                  borderRadius: responsiveWidth(6),
                  backgroundColor: '#89CFF0',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(3),
                    alignSelf: 'center',
                    marginTop: responsiveHeight(1),
                    fontWeight: '700',
                  }}>
                  Water
                </Text>
                <Image
                  style={{
                    height: responsiveHeight(9),
                    width: responsiveWidth(12),
                    marginLeft: responsiveWidth(4),

                    marginTop: responsiveHeight(2),
                  }}
                  source={require('../Images/glass-of-water.png')}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    marginTop: responsiveHeight(2),
                    fontWeight: '600',
                    marginLeft: responsiveWidth(2),
                  }}>
                  {water} Litres
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: responsiveHeight(5),
                  marginLeft: responsiveWidth(4),
                  height: responsiveHeight(29),
                  width: responsiveWidth(43),
                  borderRadius: responsiveWidth(6),
                  backgroundColor: '#f6e199',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(3),
                    alignSelf: 'center',
                    marginTop: responsiveHeight(1),
                    fontWeight: '700',
                  }}>
                  Cycling
                </Text>
                <Image
                  style={{
                    height: responsiveHeight(9),
                    width: responsiveWidth(17),
                    marginLeft: responsiveWidth(4),

                    marginTop: responsiveHeight(2),
                  }}
                  source={require('../Images/bicycle.png')}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    marginTop: responsiveHeight(2),
                    fontWeight: '600',
                    marginLeft: responsiveWidth(2),
                  }}>
                  {cycle} KM
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{flexDirection: 'row', marginTop: responsiveHeight(-3)}}>
              <TouchableOpacity
                style={{
                  marginTop: responsiveHeight(5),
                  marginLeft: responsiveWidth(4),
                  height: responsiveHeight(29),
                  width: responsiveWidth(43),
                  borderRadius: responsiveWidth(6),
                  backgroundColor: '#ACE1AF',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(3),
                    alignSelf: 'center',
                    marginTop: responsiveHeight(1),
                    fontWeight: '700',
                  }}>
                  Walking
                </Text>
                <Image
                  style={{
                    height: responsiveHeight(9),
                    width: responsiveWidth(15),
                    marginLeft: responsiveWidth(4),

                    marginTop: responsiveHeight(2),
                  }}
                  source={require('../Images/footprint.png')}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    marginTop: responsiveHeight(2),
                    fontWeight: '600',
                    marginLeft: responsiveWidth(2),
                  }}>
                  {walk} KM
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: responsiveHeight(5),
                  marginLeft: responsiveWidth(4),
                  height: responsiveHeight(29),
                  width: responsiveWidth(43),
                  borderRadius: responsiveWidth(6),
                  backgroundColor: '#666362',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(3),
                    alignSelf: 'center',
                    marginTop: responsiveHeight(1),
                    fontWeight: '700',
                    color: 'white',
                  }}>
                  Sleep
                </Text>
                <Image
                  style={{
                    height: responsiveHeight(9),
                    width: responsiveWidth(17),
                    marginLeft: responsiveWidth(4),

                    marginTop: responsiveHeight(2),
                  }}
                  source={require('../Images/sleeping.png')}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    marginTop: responsiveHeight(2),
                    fontWeight: '600',
                    marginLeft: responsiveWidth(2),
                    color: 'white',
                  }}>
                  {sleep} Hours
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Info')}
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(9),
                marginTop: responsiveHeight(5),
                borderRadius: responsiveWidth(20),
                alignSelf: 'center',
                backgroundColor: '#F08080',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveFontSize(3),
                  alignSelf: 'center',
                  marginTop: responsiveHeight(1),
                  fontWeight: '700',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Dashboard;
