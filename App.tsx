import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
//import { HelloScreen } from './src/Presentation/Screens/HelloScreen';
//import CounterScreen from './src/Presentation/Screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
//import { BoxObjectModelScreen } from './src/Presentation/Screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/Presentation/Screens/DimensionScreen';

export const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {/*<HelloScreen name = 'Gerardo García' />*/}
          {/*<CounterScreen />*/}
          {/* <BoxObjectModelScreen /> */}
          <DimensionScreen />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  )
}