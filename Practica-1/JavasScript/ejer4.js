let candles = [4, 4, 1, 3]
let max = Math.max(...candles);   
const contarVelasAltas = (candles) => { 
    let velaMasAlta = candles.filter((c) => c===max);
    return velaMasAlta.length;
};
console.log(contarVelasAltas(candles,max));

