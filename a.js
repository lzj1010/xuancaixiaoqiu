const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 600;
canvas.style.backgroundColor = '#000';

class Ball {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = 40;
    }
    render() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
};
class moveBall extends Ball {
    constructor(x, y, color) {
        super(x, y, color);
        this.dx = _.random(-5, 5);
        this.dy = _.random(-5, 5);
        this.dr = _.random(1, 3);
    }
    upDate() {
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;
        if (this.r < 0) {
            this.r = 0;
        }
    }
}
//实例化小球
let ballArr = [];
let colorArr = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'while'];
canvas.addEventListener('mousemove', function(e) {
    let ball = new moveBall(e.offsetX, e.offsetY, colorArr[_.random(0, colorArr.length - 1)]);
    ballArr.push(ball);
});
setInterval(function(params) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ballArr.length; i++) {
        ballArr[i].render();
        ballArr[i].upDate();
    }
}, 40);