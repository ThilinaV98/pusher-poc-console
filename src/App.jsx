import './App.css'
import React, {useEffect} from 'react';
import * as PusherPushNotifications from '@pusher/push-notifications-web';

function App() {
    useEffect(() => {
        const beamsClient = new PusherPushNotifications.Client({
            instanceId: '24f7d663-176b-4c2b-879f-11f16268f8f3',
        });

        beamsClient.start()
            .then(() => beamsClient.addDeviceInterest('hello'))
            .then(() => console.log('Successfully registered and subscribed!'))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Push Notification</h1>
        </div>
    );
}

export default App
