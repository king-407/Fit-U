import {View, Text} from 'react-native';
import React from 'react';

const Info = () => {
  const [water, setWater] = useState('');
  const [sleep, setSleep] = useState('');
  const [walk, setWalk] = useState('');
  const [cycle, setCycle] = useState('');
  return (
    <View>
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
    </View>
  );
};

export default Info;
