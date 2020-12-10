class Plinko{
    constructor(x, y){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.w = w;
        this.h = h;
        this.r = 10;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        circle(x, y, radius);
    }
    }
    