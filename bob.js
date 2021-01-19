class Bob {
    constructor(x,y,r){
        var options = { 
             restitution : 1,
            isStatic : false,
            friction :0.5,
            density : 1.2
  
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r ;
  
        World.add(world,this.body);
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         ellipseMode(CENTER);
         strokeWeight(5);
         stroke("blue");
         fill("blue");
         ellipse(0 , 0, this.r , this.r );
         pop();
     }
  }
