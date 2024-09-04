let vehicle1 = prompt('digite o nome do veiculo 1') 
let vehicle2 = prompt('digite o nome do veiculo 2')
let speed1 = prompt('digite a velocidade do veiculo 1')
let speed2 = prompt('digite a velocidade do veiculo 2')

if (speed1 > speed2) {
  alert('o '+ vehicle1 + ' esta a ' + speed1 + ' km/h e e mais rapido que o ' + vehicle2 + ' que esta a ' + speed2 + ' km/h!')
  
} 
else if (speed1 >= speed2) {
  alert('o ' + vehicle1 + ' esta a ' + speed1 + ', e esta com a mesma velocidade que o ' + vehicle2 + ' que e a ' + speed2 + ' km/h!')}
else {
  alert('o ' + vehicle2 + 'esta a ' + speed2 + ' e e mais rapido que o ' + vehicle1 + ' que esta a ' + speed1 + ' km/h!')
}