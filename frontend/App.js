import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import {addToken} from './reducers/authReducer';
import Dashboard from './AfterLogin/Dashboard';
import Info from './AfterLogin/Info';
const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToken());
  }, []);
  const token = useSelector(state => state.user.token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Info" component={Info} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
