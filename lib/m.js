const exec = require('child_process')

function w(){
exec.exec("./w",function(error,out,stderr){
    console.log(error,out,stderr)
})
}
w()
module.exports={w}
