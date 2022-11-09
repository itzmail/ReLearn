import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        GetFCMToken();
    }
}

async function GetFCMToken() {
    try {
        const fcmToken = await AsyncStorage.getItem('fcmtoken');
        console.log(`FCM Token ${fcmToken}`);
        if (!fcmToken) {
            let _fcmtoken = await messaging().getToken();
            console.log(_fcmtoken);
            if (!_fcmtoken) {
                await AsyncStorage.setItem('fcmtoken', _fcmtoken);
            }
        }
    } catch (err) {
        console.log(`Err ${err}`)
    }
}

const NotificationListener = () => {
    /**
     * * Buka ini https://rnfirebase.io/messaging/notifications#handling-interaction
      */
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });

        messaging().onMessage(async remoteMessage => {
            console.log(`Notification on foreground state`)
            console.log(remoteMessage)
        })
}

export { requestUserPermission, NotificationListener }