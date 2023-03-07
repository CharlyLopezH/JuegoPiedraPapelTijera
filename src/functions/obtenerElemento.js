export function obtenerElemento() {
    console.log('Aquí estoy obteniendo elemento Aleatorio');
    const arregloPPT = ["Piedra", "Papel", "Tijera"];
    const seleccionCompu = arregloPPT[Math.floor(Math.random() * arregloPPT.length)];       
    console.log(seleccionCompu);
    return (seleccionCompu);
}
export default obtenerElemento;