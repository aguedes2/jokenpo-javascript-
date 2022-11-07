const player = document.querySelector('.jogada__player')
const cpu = document.querySelector('.jogada__cpu')
const resultado = document.querySelector('.resultado')
const placarPlayer = document.querySelector('#placar-p')
const placarCPU = document.querySelector('#placar-cpu')

const img = new Image()
const imgCPU = new Image()

var opcoes = ['pedra', 'papel', 'tesoura']
var opcaoP = ''
var opcaoComp = ''
resultado.textContent = 'Faça tua jogada'
var placarP = 0
var placarC = 0

function jogar(jogada) {
  imgCPU.style.display = 'none'
  img.src = `./imgs/${jogada}.png`
  img.style.maxWidth = '200px'
  img.style.maxHeight = '200px'
  img.style.width = '120px'
  img.style.height = '120px'
  player.appendChild(img)
  resultado.textContent = 'Rufem os tambores'
  setTimeout(() => {
    imgCPU.style.display = 'block'
    jogadaCPU()
    verificarVencedor(jogada, opcoes[jogadaCPU()])
  }, 1000)
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
  let vencedor = 'empate'

  switch (p) {
    case 'papel':
      if (cpu == 'pedra') {
        vencedor = 'player'
      } else if (cpu == 'tesoura') {
        vencedor = 'cpu'
      }
      break
    case 'tesoura':
      if (cpu == 'pedra') {
        vencedor = 'cpu'
      } else if (cpu == 'papel') {
        vencedor = 'player'
      }
      break
    case 'pedra':
      if (cpu == 'papel') {
        vencedor = 'cpu'
      } else if (cpu == 'tesoura') {
        vencedor = 'player'
      }
      break
  }
  let cor = '#000000'
  if (vencedor === 'player') {
    cor = '#36994F'
    msg = pVenceu
  } else if (vencedor === 'cpu') {
    cor = '#F0757C'
    msg = cpuVenceu
  } else {
    cor = '#AD8F2D'
    msg = empate
  }

  atualizarPlacar(vencedor, msg, cor)
}

function atualizarPlacar(vencedor, msg, cor) {
  if (vencedor === 'player') {
    placarP++
  } else if (vencedor === 'cpu') {
    placarC++
  }

  placarPlayer.textContent = ` ${placarP}`
  placarCPU.textContent = ` ${placarC}`

  resultado.textContent = `${msg}`
  resultado.style.color = cor
}
