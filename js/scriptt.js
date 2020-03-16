const awan = document.querySelectorAll('.awan')
const dragon = document.querySelectorAll('.dragon')
const papanSkor = document.querySelector('.papan-skor')
const boing = document.querySelector('#boing')
// console.log(dragon)

let awanBefore
let end
let skor

function randomAwan(awan) {
    const t = Math.floor(Math.random() * awan.length)
    const aRandom = awan[t]

    if (aRandom == awanBefore) {
        randomAwan(awan)
    }
    awanBefore = aRandom

    return aRandom
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function munculDragon() {
    const aRandom = randomAwan(awan)
    const wRandom = randomWaktu(400, 1000)

    aRandom.classList.add('muncul')

    setTimeout(() => {
        aRandom.classList.remove('muncul')
        if (!end) {
            munculDragon()
        }
    }, wRandom)
}

function mulai() {
    end = false
    skor = 0
    papanSkor.textContent = 0
    munculDragon()
    setTimeout(() => {
        end = true
    }, 10000)
}

function pukul() {
    skor++
    // console.log(skor)
    this.parentNode.classList.remove('muncul')
    boing.play()
    papanSkor.textContent = skor
}

dragon.forEach(t => {
    t.addEventListener('click', pukul)
})