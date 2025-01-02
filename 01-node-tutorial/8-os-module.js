// OS Module - Operating System Module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
console.log(`Total Memory: ${currentOS.totalMem} bytes`);
console.log(`Free Memory: ${currentOS.freeMem} bytes`);

console.log(os.userInfo().username);

// other OS methods

// home directory
// console.log(os.homedir());

// os hostname
// console.log(os.hostname());

// os platform
// console.log(os.platform());

// os version
// console.log(os.arch());

// os cpus
// console.log(os.cpus());

// os network interfaces
// console.log(os.networkInterfaces());

// os constants
// console.log(os.constants); // list of error codes and signals
