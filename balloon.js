class Balloon {
    constructor() {
        var options = {
            isStatic: true
        }
        this.x = 400;
        this.y = 100;
        this.body = Matter.Bodies.rectangle(this.x, this.y, options);
        this.image = loadImage("us-hot-air-balloon-team-favicon-1.png");
    }

    getPosY(){
        var playerPosRef = database.ref('balloon');
        playerPosRef.on("value",(data)=>{
          this.y = data.val();
        })
      }
    
    updatePosY(posY){
        database.ref('balloon').update({
          y: posY
        });
    }

    display() {
        push();
        image(this.image, this.x, this.y);
        pop();
    }
}