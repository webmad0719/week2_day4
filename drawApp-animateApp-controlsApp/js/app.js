
/*
// aplicación de trazados
const drawApp = {
    title: 'Aplicación para trazado de formas básicas HTML5 Canvas',
    author: 'Ger',
    version: '1.0',
    license: null,
    canvasDOMobj: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    init: function (id) {
        this.canvasDOMobj = document.getElementById(id)
        this.ctx = this.canvasDOMobj.getContext('2d')
    },
    setDimensions: function () {
        this.winW = window.innerWidth
        this.winH = window.innerHeight
        this.canvasDOMobj.setAttribute('width', this.winW)
        this.canvasDOMobj.setAttribute('height', this.winH)
    },
    drawFilledSquares: function () {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.winW / 2 - 100, this.winH / 2 - 100, 200, 200)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.winW / 2 - 50, this.winH / 2 - 50, 100, 100)
    },
    drawLinearSquare: function () {
        this.ctx.strokeStyle = 'blue'
        this.ctx.strokeRect(this.winW / 2 - 100, this.winH / 2 - 100, 200, 200)
    },
    drawLine: function () {
        this.ctx.beginPath()
        this.ctx.moveTo(this.winW / 2, 100)
        this.ctx.lineTo(this.winW / 2, this.winH - 100)
        this.ctx.stroke()
    },
    drawStyleLine: function () {
        this.ctx.strokeStyle = 'red'
        this.ctx.lineWidth = 20
        this.ctx.setLineDash([80, 20])
        this.ctx.beginPath()
        this.ctx.moveTo(this.winW / 2, 100)
        this.ctx.lineTo(this.winW / 2, this.winH - 100)
        this.ctx.stroke()
    },
    drawMultipleLines: function (num, space) {
        this.ctx.lineWidth = 3

        for (let i = space; i <= num * space; i += space) {
            console.log(i)
            this.ctx.beginPath()
            this.ctx.moveTo(i / 2, 100)
            this.ctx.lineTo(i / 2, this.winH - 100)
            this.ctx.stroke()
        }
    },
    drawCircle: function () {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'green'
        this.ctx.fillStyle = 'red'
        // ctx.arc(x, y, radius, startAngle, endAngle)
        this.ctx.arc(this.winW / 2, this.winH / 2, 75, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
    },
    writeText: function (txt) {
        this.ctx.font = '80px sans-serif'
        this.ctx.fillText(txt, 100, 100)
    },
    showImage: function (src) {
        let img = new Image()
        img.src = src
        // Esperar a su carga previo a randerizarla en Canvas
        img.onload = () => this.ctx.drawImage(img, 100, 100)
    }
}
*/




/*
const animateApp = {
    title: 'Aplicación para animación de objetos en HTML5 Canvas',
    author: 'Ger',
    version: '1.0',
    license: null,
    canvasDOMobj: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    init: function (id) {
        this.canvasDOMobj = document.getElementById(id)
        this.ctx = this.canvasDOMobj.getContext('2d')
    },
    setDimensions: function () {
        this.winW = window.innerWidth
        this.winH = window.innerHeight
        this.canvasDOMobj.setAttribute('width', this.winW)
        this.canvasDOMobj.setAttribute('height', this.winH)
    },
    drawBall: function (url) {
        const ball = new Ball(this.ctx, url)        // Instancia nueva ball desde la clase
        setInterval(() => {                         // Intervalo de 10ms para limpiar la pantalla y redibujar
            this.clearScreen()
            ball.draw()                             // Método draw() de clase Ball para randerizar
        }, 10)
    },
    clearScreen: function () {
        this.ctx.clearRect(0, 0, this.winW, this.winH)
    }
}





class Ball {
    constructor(ctx, url) {
        this._ctx = ctx

        this._img = new Image()
        this._img.src = url

        this._posX = 0
        this._ballWidth = 50
        this._vel = 2
    }

    draw() {

        this._posX >= window.innerWidth - this._ballWidth || this._posX < 0 ? this.changeDirection() : null     // detección cambio de dirección

        // if (this._posX >= window.innerWidth - this._ballWidth || this._posX < 0) { this.changeDirection() }

        // Aumento progresivo de la propiedad _posX (posición eje X bola)
        this._posX += this._vel

        // Randerizado de imagen (creada en el constructor)
        this._ctx.drawImage(this._img, this._posX, 200, this._ballWidth, this._ballWidth)
    }

    changeDirection() {
        this._vel *= -1
    }
}

*/



const controlsApp = {
    title: 'Aplicación para control de objetos animados en HTML5 Canvas',
    author: 'Ger',
    version: '1.0',
    license: null,
    canvasDOMobj: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    ball: undefined,
    init: function (id) {
        this.canvasDOMobj = document.getElementById(id)
        this.ctx = this.canvasDOMobj.getContext('2d')
        this.setEventListeners()
    },
    setDimensions: function () {
        this.winW = window.innerWidth
        this.winH = window.innerHeight
        this.canvasDOMobj.setAttribute('width', this.winW)
        this.canvasDOMobj.setAttribute('height', this.winH)
    },
    drawBall: function (url) {
        this.ball = new Ball(this.ctx, url)
        setInterval(() => {
            this.clearScreen()
            this.ball.draw()
        }, 10)
    },
    clearScreen: function () {
        this.ctx.clearRect(0, 0, this.winW, this.winH)
    },
    setEventListeners: function () {
        // El objeto event está presente en cualquier función invocada fruto de un evento, puedes registrarlo (o no)
        document.onkeydown = e => {
            e.keyCode === 37 ? this.ball.goLeft() : null
            e.keyCode === 39 ? this.ball.goRight() : null
        }
    }
}





class Ball {
    constructor(ctx, url) {
        this._ctx = ctx

        this._img = new Image()
        this._img.src = url

        this._ballWidth = 50
        this._vel = 15

        this._posX = window.innerWidth / 2 - this._ballWidth / 2
        this._posY = window.innerHeight / 2 - this._ballWidth / 2
    }

    draw() {
        this._ctx.drawImage(this._img, this._posX, this._posY, this._ballWidth, this._ballWidth)
    }

    goLeft() {
        this._posX -= this._vel
    }

    goRight() {
        this._posX += this._vel
    }
}