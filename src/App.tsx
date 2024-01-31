import React, {useEffect, useState} from 'react';
import  {getMessaging, getToken } from 'firebase/messaging';
import './App.css';
import  {firebaseApp} from "./firebase";

function App() {
    const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | null>(null);

    useEffect(() => {
        const messaging = getMessaging(firebaseApp);


        console.log(firebaseApp, messaging)

    },[])

    const requestNotificationPermission = async () => {
        try {
            console.log(JSON.stringify(Notification))
            const permission = await Notification.requestPermission();
            console.log('permission',permission)
            if (permission === 'granted') {
                const messaging = getMessaging(firebaseApp);

                const t = await getToken(messaging);

                alert(t)
                setNotificationPermission(permission);
            } else {
                alert('permissiooooon')
            }

        } catch (error) {
            console.error('Error requesting notification permission:', error);
        }
    };

    return (
        <div className="App">
            <button onClick={requestNotificationPermission}>
                requestNotificationPermission
            </button>
        </div>);
}

export default App;
