export function mega(tam = 6, numeros = []){
    if(tam < 6 && tam > 60){
        throw "Número inválido!"
    }
    
    if(numeros.length === tam){
        return numeros.sort((a,b)=> a - b)
    }

    const novosNumeros = parseInt(Math.random() * 60) + 1

    if(!numeros.includes(novosNumeros)){
        return mega(tam, [...numeros, novosNumeros])
    }else{
        return mega(tam, numeros)
    }
}

