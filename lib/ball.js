/*볼을 정의한다*/
var ball=function(stage,width,height,x,y,velX,velY,src,rotate){
	/*클래스가 보유한 변수를 멤버변수라한다*/
	this.stage=stage
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=velX;//x축의 속도
	this.velY=velY;//y축의 속도
this.rotate=rotate;//시작각도
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=x+"px";
		this.img.style.top=y+"px";
		this.stage.appendChild(this.img);
		this.move();
	}

	this.move=function(){
		var me=this;
		this.rotate+=2;
		this.x+=velX;
		this.y+=velY;
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.img.style.transform="rotate("+this.rotate+"deg)"
		setTimeout(function(){
		me.move();
		},10)
	}

}