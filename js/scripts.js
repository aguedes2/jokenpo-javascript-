const btnPedra = document.querySelector('.btn-pedra')
const player = document.querySelector('.jogada-player')
const cpu = document.querySelector('.jogada-cpu')
const footer = document.querySelector('.footer')

const img = new Image()
const imgCPU = new Image()

var opcoes = ['pedra', 'papel', 'tesoura']
var opcaoP = ''
var opcaoComp = ''

function jogarPedra() {
  img.src = `../imgs/${opcoes[0]}.png`
  player.appendChild(img)
  jogadaCPU()
  verificarVencedor(opcoes[0], opcoes[jogadaCPU()])
}

function jogarPapel() {
  img.src = `../imgs/${opcoes[1]}.png`
  player.appendChild(img)
  jogadaCPU()
  verificarVencedor(opcoes[1], opcoes[jogadaCPU()])
}

function jogarTesoura() {
  img.src = `../imgs/${opcoes[2]}.png`
  player.appendChild(img)
  jogadaCPU()
  verificarVencedor(opcoes[2], opcoes[jogadaCPU()])
}

function jogadaCPU() {
  let opcaoCPU = Math.round(Math.random() * 2)
  imgCPU.src = `../imgs/${opcoes[opcaoCPU]}.png`
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

  footer.innerHTML = `<h2>${msg}</h2>`
}
