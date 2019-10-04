import Reactotrom from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotrom.configure({ host: '192.168.0.15' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
