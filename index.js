const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function control(){
    rl.question("Ведіть що ви хочете зробити.Вичислети дискрімінант 'Дискрімінант', вичислети периметр 'Периметр': ", (con) => {
        if (con == 'Дискрімінант' || con == 'дискрімінант'){
            quadratic()
        }
        if (con == 'Периметр' || con == 'периметр'){
            perimeter()
        }
    })

}


function perimeter(){
    rl.question('Введiть перше число: ', (num1) => {
        rl.question('Введіть друге число: ', (num2)=> {
            num1 = parseFloat(num1)
            num2 = parseFloat(num2) 

            let result = (num1 + num2) * 2

            console.log(result)

        })
    })
}

function quadratic(){
    rl.question('Введiть перше число: ', (num1) => {
        rl.question('Введіть друге число: ', (num2)=> {
            rl.question('Введіть третье число', (num3)=>{
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)
                num3 = parseFloat(num3)
                if(num1 != 0){
                    if(Math.sign(num1) == -1){
                        num1 = -1*num1
                        num2 = -1*num2
                        num3 = -1*num3
                        let result = Math.sqrt(num2**2 -4*num1*num3)
                        let x1 = (-num2+result)/(2*num1)
                        let x2 = (-num2-result)/(2*num1)

                        console.log(`корінь дискрімінанту${result}`)
                        console.log(`x1 = ${x1}, x2 = ${x2}`)
                    }else{
                        let result = Math.sqrt(num2**2 -4*num1*num3)
                        let x1 = (-num2 + result)/(2*num1)
                        let x2 = (-num2 - result)/(2*num1)

                        console.log(`корінь дискрімінанту${result}`)
                        console.log(`x1 = ${x1}, x2 = ${x2}`)
                    }
                }else{
                    console.log('ERROR')
                }
            })
        })
    })
}

control()