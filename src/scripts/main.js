const dataDoAniversario = new Date('Sep 09, 2024 20:00:00')
const timeStampDoAniversario = dataDoAniversario.getTime()

const contaOTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual
    const diasEmMs = (1000 * 60 * 60 * 24)
    const horasEmMs = (1000 * 60 * 60)
    const minutosEmMs = (1000 * 60)
    
    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diasEmMs)
    const horasAteOAniversario = Math.floor(distanciaAteOAniversario % diasEmMs / horasEmMs)
    const minutosAteOAniversario = Math.floor(distanciaAteOAniversario % horasEmMs / minutosEmMs)
    const segundosAteOAniversario = Math.floor(distanciaAteOAniversario % minutosEmMs / 1000)
    
    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`
    
    if(distanciaAteOAniversario < 0){
        clearInterval(contaOTempo)
        document.getElementById('contador').innerHTML = 'A festa ja foi!'
    }
}, 1000)

