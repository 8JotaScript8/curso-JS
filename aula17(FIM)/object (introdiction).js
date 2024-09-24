let amigo = {nome: 'jonas',
sexo: 'M',
peso: 87.5,
 engordar(p) {
    this.peso += p
    console.log(`Engordou ${p}kg`)
}}

console.log(`${amigo.nome} tinha ${amigo.peso}kg`)
amigo.engordar(10)
console.log(`Agora esta com ${amigo.peso}`)

