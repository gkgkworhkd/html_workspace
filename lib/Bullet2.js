/*
	총알이 위로 날아가는 유형의 게임
*/
var Bullet2=function(stage,width,height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.velY=5;//몇씩움직일지결정하는변수

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/gallerxy/bullet.png";
		this.img.style.position="absolute";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);
		this.move();
	}
	this.move=function(){
		var me=this
		this.y=this.y-this.velY;
		this.img.style.top=this.y+"px";

		for(var i=0; i<kingArray.length;i++){
			var result=hitTest(this.img,kingArray[i].img);
			if(result){
				console.log("킹과마주쳤어!!");
			}
		}

			setTimeout(function(){
			me.move();
		},10);
		
		
	}
}