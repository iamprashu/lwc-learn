const events = {};

const registerListener = (eventName, callback) => {
    if (!events[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(callback);
};

const unregisterListener = (eventName, callback) => {
    if (events[eventName]) {
        events[eventName] = events[eventName].filter(cb => cb !== callback);
    }
};

const fireEvent = (eventName, payload) => {
    if (events[eventName]) {
        events[eventName].forEach(callback => callback(payload));
    }
};

export { registerListener, unregisterListener, fireEvent };