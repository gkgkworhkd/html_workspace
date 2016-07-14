var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;//x축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.velY=2;//y축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.gravity=0.2; // 중력을 표현하는 변수!!
	this.falling=true;//주인공이떨어지고있음을알수있는변수
	this.jumping=true;//주인공이 점프중인걸알수있는변수
	this.speedCount=0;//키보드 인식이 너무빠르면 안되므로action카운
		//이 메서드 호출자는 이미지의 경로를 인수로 넘기면됨!
	this.running=false;//키보드 누를때만 true로 처리
	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.div.style.overflow="hidden";	
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		
		//숨겨진 이미지의 좌표 처리..
		this.img.style.position="relative";
		//this.img.style.top=-65+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//이미지를 div에 탑재
		this.div.appendChild(this.img);

		//div를 stage 에 탑재 
		this.stage.appendChild(this.div);

		this.move();
	}

	this.action=function(){
		if(this.running){//키누를때만 코드수행
			this.speedCount++;
			if(this.speedCount%35==0){
				actionCount++
				if(actionCount>actionArray.length-1){
					actionCount=1;
				}
			}
			this.img.src=actionArray[actionCount];
		}else{
			this.img.src=actionArray[0];
		}
	}

	this.move=function(){
		var me=this;
		
		//중력 데이터를 velY 에 누적해보자!!
		this.velY+=this.gravity;
		//중력에 의해 다시 물체가 떨어지기 시작하는 시점에는
		//다시 falling을 true로 놓는다
		if(this.velY>0){
			this.jumping=false;
			this.falling=true;
			
		}
		//블록들과 마주쳤는지 체크
		for(var i=0; i<bArray.length;i++){
			var result=hitTest(this.div,bArray[i].img)
				 if(result && this.falling){			
				this.velY=0;
				this.falling=false;
				
			}
		}
		this.x+=this.velX;
		this.y+=this.velY;
		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";

		//전역변수인 actionCount 를 여기서 증가시키자
		//speed카운트가 일정시점에 도달하면..
		this.speedCount++;
		this.action();
		setTimeout(function(){
			me.move();
		}, 5);
		
	}

}
