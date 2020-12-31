class Paper {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.2, density:2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      image(this.image, pos.x, pos.y, 70,70)
    }
  };
