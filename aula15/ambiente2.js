let num = [0,8,3,7,4,2]
 
/*for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
 }
*/

for(let pos in num) {
    console.log(num[pos])
}
//busca um valor no array num
console.log(num.indexOf(0))