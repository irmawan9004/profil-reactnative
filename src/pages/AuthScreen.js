import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profilku from './Profilku';
import Login from './Login';
import SignUp from './SignUp';
import Loading from './Loading';

// const AuthStack = createNativeStackNavigator();
// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <Stack.Group>
//       <AuthStack.Screen name="Login" component={Login} />
//       <AuthStack.Screen name="SignUp" component={SignUp} />
//     </Stack.Group>
//   </AuthStack.Navigator>
// );

const Auth = createNativeStackNavigator();

export default function AuthNavigator() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <Auth.Navigator>
      {isLoading ? (
        <Loading />
      ) : user ? (
        <Stack.Group>
          <Stack.Screen
            name="profilku"
            component={Profilku}
            options={{headerShown: false}}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Group>
      )}
    </Auth.Navigator>
  );
}
