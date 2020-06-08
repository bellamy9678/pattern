export class Observer {
  constructor() {
    this.listeners = new Set();
  }

  addListener(listener) {
    this.listeners.add(listener);
  }

  removeListener(listener) {
    this.listeners.delete(listener);
  }

  callAll(message) {
    this.listeners.forEach(listener => listener(message));
  }
};
