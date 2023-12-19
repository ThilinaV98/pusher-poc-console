import './App.css'
import React, { useEffect } from 'react';
import Pusher from 'pusher-js';
import io from 'socket.io-client';

function App() {
    const pusher = new Pusher('32a2614f3a518578d90a', {
        cluster: 'ap2',
        encrypted: true,
    });
    useEffect(() => {
        const socket = io('http://localhost:3000');
        return () => {
            socket.disconnect();  // Disconnect the socket when the component unmounts
        };
    }, []);

    useEffect(() => {
        if ('Notification' in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    const channel = pusher.subscribe('notifications');

                    channel.bind('agent-notification', (data) => {
                        if (Notification.permission === 'granted') {
                            const notification = new Notification('Notification Title', {
                                body: data.message,
                            });
                        }
                    });
                }
            });
        }
    }, []);

    return (
        <div>
            <h1>Push Notification</h1>
        </div>
    );
}

export default App
