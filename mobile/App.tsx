import './src/lib/dayjs';

import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';
import * as Notifications from 'expo-notifications';
import { Button, StatusBar, StyleSheet } from 'react-native';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    })
  })

  async function scheduleNotification() {

    const trigger = new Date(Date.now());

    trigger.setSeconds(trigger.getSeconds() + 5);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Olá, Eduard! 🤩',
        body: 'Já praticou seus hábitos hoje?'
      },
      trigger
    });

  }

  async function getScheduleNotification() {
    const schedules = await Notifications.getAllScheduledNotificationsAsync();
    console.log(schedules);
  }

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Button title='Enviar Notificação' onPress={scheduleNotification}></Button>
      <Button title='Verificar Notificações' onPress={getScheduleNotification}></Button>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
      //translucent
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontFamily: "Inter_800ExtraBold",
  },
});
