export default class Moon {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
    }

    draw() {
        let ctx = this.ctx,
            gradient = ctx.createRadialGradient(100, 100, 60, 200, 200, 600)
        gradient.addColorStop(0.4, 'rgb(20,20,30)')
        gradient.addColorStop(1, 'rgb(0,0,10)')
        ctx.save()
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }
}