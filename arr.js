/*let arr = ["Mohiniverma"]
const str = {
    str:"Mohiniverma".split("").join("* ")
}
console.log(str)
*/


/*const str = "Mohini"
function StrFunction(string)
{
    console.log(string.split(""))
}
StrFunction(str)

let num = "123456"
function NumFunction(num)
{
    console.log(num.split(""))
}
NumFunction(num)

const boolean1 = "Mohini"
const boolean2 = "Mohini"
function BooleanFunction(boolean)
{
    console.log(boolean1 == boolean2)
}
BooleanFunction(boolean1 == boolean2)
*/



/*const num = `ABCDEFGHdhdbbhjbvhv12445679!!$#@&%`
let str = ""
for(i = 0 ; i <= 8 ; i++)
{
    str += (num.charAt(Math.floor(Math.random() * num.length)))
}
console.log(str)
*/



let str = ""
    function addUppercase()
    {
    str = str + `ABCDEFGHIJKL` 
    }
    function addLowercase()
    {
        str = str + `abcdgjefuie`
    } 
    function addNumber() 
    {
        str = str + `123456789`
    }
    function addSymbol()
    {
        str = str + `@#!$%&*`
    }

let password = ""
for(i = 0 ; i <= 8 ; i++)
{
    switch(Math.floor(Math.random()*4))
    {
        case 0 : addNumber();break;
        case 1 : addLowercase();break;
        case 2 : addUppercase();break;
        case 3 : addSymbol();break;
    }
    password += str.charAt(Math.floor(Math.random() * str.length))
}
console.log(password)

