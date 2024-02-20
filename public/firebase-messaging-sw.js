self.addEventListener('push', event => {
    const json = event?.data?.json();

    const options = {
        body: json?.notification?.body,
    };

    event.waitUntil(self.registration.showNotification(json?.notification?.title, options));
});