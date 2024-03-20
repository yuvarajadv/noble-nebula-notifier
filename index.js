const EventEmitter = require('eventemitter3');
const shortid = require('shortid');
const notifier = require('node-notifier');

class NobleNebulaNotifier extends EventEmitter {
  constructor() {
    super();
    this.notifications = [];
  }

  createNotification(title, message) {
    const id = shortid.generate();
    this.notifications.push({ id, title, message });
    this.emit('notification', { id, title, message });
    notifier.notify({
      title: title,
      message: message,
      sound: true,
    });
    return id;
  }

  getNotifications() {
    return this.notifications;
  }
}

module.exports = NobleNebulaNotifier;
