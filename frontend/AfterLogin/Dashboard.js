import {View, Text, TouchableOpacity} from 'react-native';
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
import React, {useEffect} from 'react';
import Lottie from 'lottie-react-native';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(waterUser());
  }, []);
  useEffect(() => {
    dispatch(cycleUser());
  }, []);
  useEffect(() => {
    dispatch(sleepUser());
  }, []);
  useEffect(() => {
    dispatch(walkUser());
  }, []);
  const water = useSelector(state => state.avg);
  const sleep = useSelector(state => state.avg);
  const cycle = useSelector(state => state.avg);
  const walk = useSelector(state => state.avg);
  console.log(water);
  console.log(sleep);
  console.log(cycle);
  console.log(walk);
  return (
    <View>
      <View>
        {water.msgWater || sleep.msgSleep || cycle.msgCycle || walk.msgWalk ? (
          <>
            <Lottie
              style={{
                alignSelf: 'center',
                height: 300,
                width: 10,
                marginTop: 20,
              }}
              source={require('../Animations/Fitness.json')}
              autoPlay
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Info');
              }}
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(7.3),
                marginTop: responsiveHeight(5),
                borderRadius: responsiveWidth(20),
                alignSelf: 'center',
                backgroundColor: '#00C4FF',
              }}></TouchableOpacity>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default Dashboard;
