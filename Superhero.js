class Hero{
    constructor(x, y,radius) {
      var options = {
          'frictionAir':0.005,
          'density':2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("Superhero-01.png");
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER)
      image(this.image, 0, 0,this.radius*2, this.radius*2);
      pop();
    }
  };
  