const config = require("./config");
const features = require("./features");

console.log("Demo App");
console.log("Environment:", config.environment);
console.log("API URL:", config.apiUrl);
console.log("Features:", features.join(", "));