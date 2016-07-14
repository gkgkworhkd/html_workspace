var Ship=function(stage,w,h,x,y){
//배를 띄우는데 필요한 요소!??
/*--------------------------------------
stage=div w=width h=height
posX=
----------------------------------------*/
this.img;
this.stage=stage;
this.width=w;
this.height=h;
this.x=y;
this.y=y;
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/ship.png";
		this.img.style.position="absolute";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		this.stage.appendChild(this.img);
	}
	
	this.move=function(){
	
		
	}



}