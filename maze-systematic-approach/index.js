const {createCanvas} = require('canvas')
const fs = require('fs')

const drawUpArrow = (ctx, topX, topY) => {
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(topX, topY)
    ctx.lineTo(topX + 8, topY + 15)
    ctx.lineTo(topX + 4, topY + 15)
    ctx.lineTo(topX + 4, topY + 30)
    ctx.lineTo(topX - 3, topY + 30)
    ctx.lineTo(topX - 3, topY + 15)
    ctx.lineTo(topX - 7, topY + 15)
    ctx.closePath()
    ctx.fill()
}

const drawDownArrow = (ctx, topX, topY) => {
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(topX, topY)
    ctx.lineTo(topX + 4, topY)
    ctx.lineTo(topX + 4, topY + 15)
    ctx.lineTo(topX + 8, topY + 15)
    ctx.lineTo(topX, topY + 30)
    ctx.lineTo(topX - 7, topY + 15)
    ctx.lineTo(topX - 3, topY + 15)
    ctx.lineTo(topX - 3, topY)
    ctx.closePath()
    ctx.fill()
}

const drawMaze = (ctx) => {
    // Walls
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.moveTo(5, 5)
    ctx.lineTo(600, 5)

    ctx.lineTo(600, 350)
    ctx.lineTo(420, 350)
    ctx.moveTo(260, 350)
    ctx.lineTo(120, 350)

    ctx.moveTo(5, 355)
    ctx.lineTo(5, 0)
    ctx.closePath()
    ctx.stroke()

    // Columns
    ctx.fillStyle = 'black'
    // Column #1
    ctx.fillRect(510, 60, 20, 20)
    // Column #2
    ctx.fillRect(120, 110, 20, 20)
    // Column #3
    ctx.fillRect(240, 110, 20, 20)
    // Column #4
    ctx.fillRect(360, 110, 80, 20)
    // Column #5
    ctx.fillRect(120, 230, 20, 20)
    // Column #6
    ctx.fillRect(240, 230, 20, 20)
    // Column #7
    ctx.fillRect(330, 230, 20, 20)
    // Column #8
    ctx.fillRect(420, 230, 80, 20)

    // Green lines
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 5
    ctx.beginPath()
    // Green #6
    ctx.moveTo(250, 110)
    ctx.lineTo(250, 10)
    // Green #7
    ctx.moveTo(260, 120)
    ctx.lineTo(360, 120)
    // Green #3
    ctx.moveTo(130, 130)
    ctx.lineTo(130, 230)
    // Green #9
    ctx.moveTo(430, 130)
    ctx.lineTo(430, 230)
    // Green #12
    ctx.moveTo(350, 240)
    ctx.lineTo(420, 240)
    // Green #13
    ctx.moveTo(500, 240)
    ctx.lineTo(595, 240)
    // Green #1
    ctx.moveTo(10, 350)
    ctx.lineTo(120, 350)
    //
    ctx.closePath()
    ctx.stroke()

    // Red lines
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5
    ctx.beginPath()
    // Red #8
    ctx.moveTo(520, 60)
    ctx.lineTo(520, 10)
    // Red #4
    ctx.moveTo(10, 120)
    ctx.lineTo(120, 120)
    // Red #5
    ctx.moveTo(140, 120)
    ctx.lineTo(240, 120)
    // Red #10
    ctx.moveTo(250, 230)
    ctx.lineTo(250, 130)
    // Red #2
    ctx.moveTo(130, 345)
    ctx.lineTo(130, 250)
    // Red #11
    ctx.moveTo(260, 240)
    ctx.lineTo(330, 240)
    // Red #14
    ctx.moveTo(490, 250)
    ctx.lineTo(490, 345)
    // Red #15
    ctx.moveTo(260, 350)
    ctx.lineTo(420, 350)
    //
    ctx.closePath()
    ctx.stroke()

    // Enter
    drawUpArrow(ctx, 62, 370)
    ctx.font = '20px serif'
    ctx.fillText('Вход', 35, 420);

    // Exit
    drawDownArrow(ctx, 340, 370)
    ctx.font = '20px serif'
    ctx.fillText('Выход', 305, 420);
}

const tagMaze = (ctx) => {
    // Green lines
    ctx.font = '16px serif'
    ctx.fillText( '6', 255, 70)
    ctx.fillText( '7', 310, 110)
    ctx.fillText( '3', 135, 190)
    ctx.fillText( '9', 435, 190)
    ctx.fillText('12', 370, 230)
    ctx.fillText('13', 535, 230)
    ctx.fillText( '1',  60, 340)

    // Red lines
    ctx.font = '16px serif'
    ctx.fillText( '8', 525, 45)
    ctx.fillText( '4',  60, 110)
    ctx.fillText( '5', 190, 110)
    ctx.fillText('10', 255, 190)
    ctx.fillText( '2', 135, 300)
    ctx.fillText('11', 290, 230)
    ctx.fillText('14', 495, 300)
    ctx.fillText('15', 330, 340)

    // Rooms
    ctx.font = '24px serif'
    ctx.fillText('А',  60, 250)
    ctx.fillText('Б', 120,  70)
    ctx.fillText('В', 400,  70)
    ctx.fillText('Г', 330, 185)
    ctx.fillText('Д', 535, 300)
    ctx.fillText('Е', 290, 300)
}

const pathMaze = (ctx) => {
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5]);
    ctx.beginPath()
    ctx.moveTo(40, 370)
    ctx.lineTo(40, 30)
    ctx.lineTo(560, 30)
    ctx.lineTo(560, 90)
    ctx.lineTo(90, 90)
    ctx.lineTo(90, 150)
    ctx.lineTo(190, 150)
    ctx.lineTo(190, 270)
    ctx.lineTo(380, 270)
    ctx.lineTo(380, 370)
    ctx.stroke()
    ctx.closePath()
}

const width = 640
const height = 440

const drawMazeTask = () => {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    drawMaze(ctx)
    canvas.createPNGStream().pipe(
        fs.createWriteStream('maze-task.png')
    )
}

const drawMazeTagged = () => {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    drawMaze(ctx)
    tagMaze(ctx)
    canvas.createPNGStream().pipe(
        fs.createWriteStream('maze-tagged.png')
    )
}

const drawMazePath = () => {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    drawMaze(ctx)
    tagMaze(ctx)
    pathMaze(ctx)
    canvas.createPNGStream().pipe(
        fs.createWriteStream('maze-path.png')
    )
}

drawMazeTask()
drawMazeTagged()
drawMazePath()
