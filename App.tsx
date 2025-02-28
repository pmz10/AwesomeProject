import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import { HelloScreen } from './src/Presentation/Screens/HelloScreen';
import CounterScreen from './src/Presentation/Screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {/*<HelloScreen name = 'Gerardo García' />*/}
          <CounterScreen />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  )
}