class Paper {
    constructor(x,y,radius) {
        var options = {
            isstatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        circle(pos.x,pos.y,this.radius);
    } 
    
}