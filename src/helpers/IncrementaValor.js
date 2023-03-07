//Esta función recibe un valor, lo incrementa y regresa el resultado
export const IncrementaValor = (valorRecibido)=> {
    const incrementador = 1;        
    console.log(`Hola, Entrando a función; Incrementaré ${valorRecibido}`);
    console.log(`${valorRecibido}+${incrementador}= ${valorRecibido+incrementador}`);       
    const res=valorRecibido+incrementador; 
    console.log('regresando: '+ res);
    //return(cont);
} 
export default IncrementaValor;
