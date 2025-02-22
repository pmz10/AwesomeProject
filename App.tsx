import { SafeAreaView } from 'react-native';
import { HelloScreen } from './src/Presentation/Screens/HelloScreen';
import CounterScreen from './src/Presentation/Screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*<HelloScreen name = 'Gerardo García' />*/}
      <CounterScreen />
    </SafeAreaView>
  )
}