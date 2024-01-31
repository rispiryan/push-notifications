import React, {useEffect, useState} from 'react';
import  {getMessaging, getToken } from 'firebase/messaging';
import './App.css';
import  {firebaseApp} from "./firebase";

function App() {
    const [token, setToken] = useState('');
    const [deferredPrompt, setDdeferredPrompt] = useState()

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

    const handleInstallClick = () => {
        alert(deferredPrompt)

        if (deferredPrompt) {
            // @ts-ignore
            deferredPrompt.prompt();

            // @ts-ignore
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }

                // @ts-ignore
                setDdeferredPrompt(null)
            });
        }
    };

    useEffect(() => {
        const handler = (event: any) => {
            // Prevent the mini-infobar from appearing on mobile.
            event.preventDefault();
            console.log('👍', 'beforeinstallprompt', event);
            // Stash the event so it can be triggered later.

            console.log(event)
            setDdeferredPrompt(event)
            // Remove the 'hidden' class from the install button container.
        }
        window.addEventListener('beforeinstallprompt', handler);
        window.addEventListener('appinstalled', (event) => {
            alert('appinstalled');
            // Clear the deferredPrompt so it can be garbage collected
        });
        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    return (
        <div className="App">
            <button onClick={requestNotificationPermission}>
                requestNotificationPermissions
            </button>

            <button onClick={handleInstallClick}>Install Apps</button>

            <p className='token'>
                {token}
            </p>
        </div>);
}

export default App;
