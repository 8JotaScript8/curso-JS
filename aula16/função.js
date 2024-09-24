function ParImp(n) {
    if (n %2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
let res = ParImp(5)
console.log(res)