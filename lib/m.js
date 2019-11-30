const exec = require('child_process')

function w(){
exec.spawn("./w",function(error,out,stderr){
    console.log(error,out,stderr)
})
}
w()
module.exports={w}
