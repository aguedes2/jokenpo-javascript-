const player = document.querySelector('.jogada__player')
const cpu = document.querySelector('.jogada__cpu')
const resultado = document.querySelector('.resultado')

const img = new Image()
const imgCPU = new Image()

var opcoes = ['pedra', 'papel', 'tesoura']
var opcaoP = ''
var opcaoComp = ''
resultado.textContent = 'Faça tua jogada'

function jogar(jogada) {
  img.src = `./imgs/${jogada}.png`
  img.style.maxWidth = '200px'
  img.style.maxHeight = '200px'
  img.style.width = '120px'
  img.style.height = '120px'
  player.appendChild(img)
  jogadaCPU()
  verificarVencedor(jogada, opcoes[jogadaCPU()])
}

function jogadaCPU() {
  let opcaoCPU = Math.round(Math.random() * 2)
  imgCPU.src = `./imgs/${opcoes[opcaoCPU]}.png`
  imgCPU.style.maxWidth = '200px'
  imgCPU.style.maxHeight = '200px'
  imgCPU.style.width = '120px'
  imgCPU.style.height = '120px'
  cpu.appendChild(imgCPU)
  return opcaoCPU
}

function verificarVencedor(p, cpu) {
  let pVenceu = 'Player Venceu!'
  let cpuVenceu = 'CPU Venceu!'
  let empate = 'Empatou!'
  let msg = ''

  switch (p) {
    case 'papel':
      if (cpu == 'pedra') {
        msg = pVenceu
      } else if (cpu == 'tesoura') {
        msg = cpuVenceu
      } else {
        msg = empate
      }
      break
    case 'tesoura':
      if (cpu == 'pedra') {
        msg = cpuVenceu
      } else if (cpu == 'papel') {
        msg = pVenceu
      } else {
        msg = empate
      }
      break
    case 'pedra':
      if (cpu == 'papel') {
        msg = cpuVenceu
      } else if (cpu == 'tesoura') {
        msg = pVenceu
      } else {
        msg = empate
      }
      break
  }
  let cor = pVenceu ? '#65EB87' : empate ? '#F0757C' : '#F0757C'
  resultado.textContent = `${msg}`
  resultado.style.color = cor
}
