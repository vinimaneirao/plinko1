class particle {

    constructor(x,y){


        this.r = 10;
        this.body = Bodies.circle(x, y, this.r);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}