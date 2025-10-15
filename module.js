// Core Module, Local Module, Third-party Module
// Modules => Function method

// Core => http, fs, os, path, buffer, url, event
// Third-party module => npm
// local module => user-defined


const addition = (a ,b) => {
    return a + b;
}

const product = (a ,b) => a * b;


// cjs => named exprt / defualt export
// module.exports = {addition, product};  // defualt

// exports.square = (n) => n**2;

// ESM
// export default {addition, product};

export const square = (n) => n ** 2