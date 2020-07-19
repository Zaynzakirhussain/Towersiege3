class Mbox {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("box.png");
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display() {
    push();
    rotate(this.body.angle)
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    if (this.body.speed > 1.5) {
      World.remove(world, this.body);
      image(this.image, 0, 0, this.width, this.height);
    }
    pop();
  }
  /*  visibility(){    
    if(rock.body.position.x > 1210 && rock.body.position.y > 190 && rock.body.position.y < 360){
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 30, 30);
      pop();
    }
    }*/
};