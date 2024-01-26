// Accessing global variables directly
console.log('Node.js version:', global.process.version);

// Modifying a global variable
global.customVariable = 'I am a custom global variable';

// Accessing the modified global variable
console.log('Custom Global Variable:', global.customVariable);