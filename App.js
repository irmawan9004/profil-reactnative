import * as React from 'react';
import Welcome from './src/pages/Welcome';
import Login from './src/pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from './src/pages/Loading';
import SignUp from './src/pages/SignUp';
import Profilku from './src/pages/Profilku';
import {AuthContext} from './src/pages/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// // const Profil = createNativeStackNavigator();
// const Starter = createNativeStackNavigator();
// // const Stack = createNativeStackNavigator();
// const WelcomeStackScreen = () => (
//   <Starter.Navigator initialRouteName="Welcome">
//     <Starter.Screen name="Welcome" component={Welcome} />
//     <Starter.Screen name="Login" component={Login} />
//   </Starter.Navigator>
// );
// // const StackScreen = () => (
// //   <Stack.Navigator>
// //     <Stack.Group>
// //       <Starter.Screen name="Welcome" component={Welcome} />
// //       <Starter.Screen name="Login" component={Login} />
// //     </Stack.Group>
// //   </Stack.Navigator>

// // );
function Auth() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const Auth = createNativeStackNavigator();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }, []);

  const authContext = React.useMemo(() => {
    return {
      login: () => {
        setIsLoading(false);
        setUser('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUser('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUser(null);
      },
    };
  });
  return (
    <AuthContext.Provider value={authContext}>
      {isLoading ? (
        <Loading />
      ) : user ? (
        <Auth.Navigator>
          <Auth.Screen
            name="profilku"
            component={Profilku}
            options={{headerShown: false}}
          />
        </Auth.Navigator>
      ) : (
        <Auth.Navigator>
          <Auth.Screen name="Login" component={Login} />
          <Auth.Screen name="SignUp" component={SignUp} />
        </Auth.Navigator>
      )}
    </AuthContext.Provider>
  );
}

function App() {
  const [isWelcomeLaunch, setIsWelcomeLaunch] = React.useState(null);
  React.useEffect(async () => {
    const welcome = await AsyncStorage.getItem('isWelcomeLaunch');
    console.log(welcome);
    if (welcome == null) {
      setIsWelcomeLaunch(true);
      AsyncStorage.setItem('isWelcomeLaunch', 'false');
    } else {
      setIsWelcomeLaunch(false);
    }
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    isWelcomeLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isWelcomeLaunch && (
            <Stack.Screen name="Welcome" component={Welcome} />
          )}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;
