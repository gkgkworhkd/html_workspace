/*
	아래의 코드는 지금 당장사용할 자체가 아닌,
	장차 총알을 생성해 낼 틀이다! 
	객체 메뉴얼
	s:이총알이 어떤 div에 붙을지 결정하세요
	posY:이 총알이 어느 Y좌표에부터 날아갈지 결정하세요
*/
	//객체 안에 들어있는 함수는 method 메서드라 한다!!
	//method(방법): 객체 동작방식을 결정하는 로직이 들어있기 때문에
var bullet=function(stage,x,y){
	//객체의 특징에 대한 값을 담고있다하여, 속성이라 한다.
	//property
	this.span;
	this.x=x;
	this.y=y;
	this.st;
	this.stage=stage;
	this.velX=10;
	this.init=function(){		
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.width=10+"px"
		this.span.style.height=10+"px"
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";
		this.stage.appendChild(this.span);
		
		this.move();
	}

	this.hitTest=function(){
		for(var i=0; i<enemyArray.length;i++){
			
			if(enemyArray[i] != undefined){
				var result=hitTest(this.span,enemyArray[i].img);
				
				if(result){
					console.log("닿앗다")
					//총알죽이고 setTimeout도 중지
					this.stage.removeChild(this.span);
					clearTimeout(this.st);
					//적죽이고

					this.stage.removeChild(enemyArray[i].img);
					clearTimeout(enemyArray[i].st)	
					delete enemyArray[i];
												 
				}
			}
		}
	}

	this.move=function(){
		var me=this;
		var a=0;
		this.x+=this.velX;
		this.span.style.left=this.x+"px"
			this.st=setTimeout(function(){
				me.move();
			},10);
			//히트 테스트 먼저
			this.hitTest();
		
		

			//스테이지를 벗어나면 setTimeout은 멈춰야한다
			if(parseInt(this.span.style.left)>parseInt(this.stage.style.width)){ 
				this.stage.removeChild(this.span);
				clearTimeout(this.st);
				return;
			}		
	}
}