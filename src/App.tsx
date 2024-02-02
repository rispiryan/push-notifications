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
            console.log(JSON.stringify(Notification))

            const permission = await Notification.requestPermission();

            console.log('permission',permission)

            if (permission === 'granted') {
                const messaging = getMessaging(firebaseApp);

                const t = await getToken(messaging);

                setToken(t)
            } else {
                setToken('permissiooooon')

                alert('permissiooooon')
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
                requestNotificationPermission
            </button>

            <p className='token'>
                {token}
            </p>
        </div>);
}

export default App;
