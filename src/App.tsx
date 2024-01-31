import React, {useEffect, useState} from 'react';
import  {getMessaging, getToken } from 'firebase/messaging';
import './App.css';
import  {firebaseApp} from "./firebase";

function App() {
    const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | null>(null);
    const [token, setToken] = useState('');

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

                setToken(t)
                setNotificationPermission(permission);
            } else {
                alert('permissiooooon')
            }

        } catch (error) {
            alert('Error requesting notification permission:');
        }
    };

    return (
        <div className="App">
            <button onClick={requestNotificationPermission}>
                requestNotificationPermission
            </button>
            {token}
        </div>);
}

export default App;
