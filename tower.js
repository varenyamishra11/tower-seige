class Box{
    constructor(x, y,width,height) {

      var options={
        resitution :0.4,
        friction:0.2
      }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("tower.jpg")
        World.add(world, this.body); 
      }
      display(){
       
        if(this.body.speed <3){
          var angle = this.body.angle;
          var pos = this.body.position
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          
          pop();
          
        }

        else{

          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity-5;
          tint(255,this.Visiblity);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }   


        
      }
    
    }

// console.log(this.body.speed);
 /*if(this.body.speed < 3){
  super.display();
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
 }
 /* else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          rect(0, 0, this.width,this.height);
          pop();
        } 




};*/