# Noble Nebula Notifier

Elegantly simple notification system for Node.js applications, leveraging event-driven architecture to notify users of significant events.

## Installation

Run the following command to install:

```bash
npm install noble-nebula-notifier
```

## Usage

```javascript
const NobleNebulaNotifier = require('noble-nebula-notifier');

const notifier = new NobleNebulaNotifier();

notifier.on('notification', (data) => {
console.log(`Notification received: \${data.title}`);
});

// Create a notification
notifier.createNotification('Hello', 'This is a test notification!');
```

## Features

- Simple and lightweight
- Emit and listen for custom notifications
- Integration with native notifications

## License

This project is licensed under the MIT License.
