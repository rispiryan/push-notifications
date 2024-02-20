import React, {useEffect, useState} from 'react';
import  {getMessaging, getToken } from 'firebase/messaging';
import './App.css';
import  {firebaseApp} from "./firebase";

function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const messaging = getMessaging(firebaseApp);


        console.log(firebaseApp, messaging)

    },[])

    const requestNotificationPermission = async () => {
        try {
            const permission = await Notification.requestPermission();

            if (permission === 'granted') {
                const messaging = getMessaging(firebaseApp);

                const generatedToken = await getToken(messaging);

                setToken(generatedToken)
            } else {
                console.error('Please grant access')
            }
        } catch (error) {
            setToken('Error')
            alert('Error requesting notification permission:');
            console.log('Error requesting notification permission:', error);
        }
    };

    return (
        <div className="App">
            <button onClick={requestNotificationPermission}>
                requestNotificationPermissions
            </button>
            <a href={'https://push-notifications-gray.vercel.app/'} target='_blank'>
                open my pwa
            </a>
        </div>);
}

export default App;
