/*--------------------------------------------------
불꽃을 정의한다
a:어떤 di에 붙을지
w:가로크기
h:높이
PosX초기 x좌표
posY초기 Y좌표

------------------------------------------------------*/

var Flame=function(a,w,h,posX,posY){
	//현실의 모든 사물은 객체 지향 언어에서 클래스로 표현되고, 해당 사물이보유한 상태는
	//변수인 속성으로 표현하며, 해당 사물이 보유한 동작은 함수인 메서드를 표현한다
	//가로, 세로, 속성
	this.width=w;
	this.height=h;
	this.x=posX;
	this.y=posY;
	this.img;
	this.arr=new Array();
	this.area=a;
	this.init=function(){
	this.x=0;
		//이객체가 테어날떄 하고싶은 메서드 정의
		this.img=document.createElement("img");
		this.arr[0]="../images/flame/f1.png"
		this.arr[1]="../images/flame/f2.png"
		this.arr[2]="../images/flame/f3.png"
		this.arr[3]="../images/flame/f4.png"	
		this.img.src=this.arr[this.x];
		this.img.style.withd=this.width+"px"
		this.img.style.height=this.height+"px"
		

		//호출자가 결정하는 영역에 붙일거임
		this.area.appendChild(this.img);
		this.move();
		
	}
	//동작방식 정의
	this.move=function(){
		var me=this;
		this.x++;
		if(this.x<this.arr.length){
		this.img.src=this.arr[this.x];
		}else{
		this.x=0;
		}
		//이미지를 계속 교체해서보여주기 scr값 변경
		setTimeout(function(){
			me.move();
		},50);
		
	}
}
