const { spawn } = require('child_process');
const child = spawn('./w', ['-l']);
child.stdout.pipe(process.stdout);
a=0
module.exports={a}
