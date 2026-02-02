let random_num = Math.floor(Math.random()*20)
let a = prompt("Hello guys write your favourite number")

while(a != random_num)
{
    if(a > random_num)
    {
        console.log("Number is greater....")
    }
    else if(a < random_num)
    {
        console.log("Number is less....")
    }
    a = prompt("Try Again")
}
console.log("You choose the correct number")
