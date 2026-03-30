const events = {};

const registerListener = (eventName, callback) => {
    if (!events[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(callback);
    console.log(events);
};

const unregisterListener = (eventName, callback) => {
    if (events[eventName]) {
        events[eventName] = events[eventName].filter(cb => cb !== callback);
    }
    console.log(events);

};

const fireEvent = (eventName, payload) => {
    if (events[eventName]) {
        events[eventName].forEach(callback => callback(payload));
    }
    console.log(events);

};

export { registerListener, unregisterListener, fireEvent };