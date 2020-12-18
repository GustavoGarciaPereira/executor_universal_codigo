const { exec } = require('shelljs');


const diretorio = 'codigos'
const codigoNode = `console.log("fi")`
const codigoPython = `print("gustavo testando.")`

exec(`mkdir ${diretorio}`,{silent:true})

//const lsJs = exec(`echo ${codigoNode} > codigoJs.js`,{silent:true})
//const codigoJs = exec(`node codigoJs.js`,{silent:true})

const lsPy = exec(`cd ${diretorio} && echo '${codigoPython}' > codigoPy.py`,{silent:true})
const codigoPy = exec(`cd ${diretorio} &&  python codigoPy.py`,{silent:true})

console.log(codigoPy.stdout)
console.log(codigoPy.stderr)

//lempa o diretorio codigos para evitar qualquer erro funtiro
exec(`cd ${diretorio} && rm *.py`,{silent:true})
exec(`cd ${diretorio} && rm *.js`,{silent:true})