import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutesParamList } from './app.types';
import { Home } from '@src/screens/Home/home.component';

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesParamList>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
