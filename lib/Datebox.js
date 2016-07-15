
var DateBox=function(stage,width,height,text){
	this.div;
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.txt;
	this.bt;
	this.content;//입력폼을 대체할 div
	this.title;//날짜를 담을 div

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.float="left";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid blue";
		//this.div.innerText=this.text;
		
		this.title=document.createElement("div");
		this.title.style.width=100+"%"
		this.title.style.height=25+"px"
		this.title.innerText=this.text;
		this.div.appendChild(this.title);

		this.content=document.createElement("div");
		this.content.style.width=100+"%";
		this.content.style.height=75+"px";
		this.div.appendChild(this.content);

		this.div.addEventListener("click",function(){
			if(me.txt==undefined){
			me.createForm();
			}
			//alert(me.div.innerText+"일이네요")
		});
		
		this.stage.appendChild(this.div);
	
	}
	
	this.createForm=function(){
		
		this.txt=document.createElement("textarea");
		this.txt.style.width=95+"%";
		this.txt.style.height=45+"%";
		this.txt.style.background="yellow";
		this.bt=document.createElement("input");
		this.bt.type="button";
		this.bt.value="등록";
		
		this.bt.addEventListener("click",function(){
			me.showContent();
		});

		this.content.appendChild(this.txt);
		this.content.appendChild(this.bt);
		
		this.showContent=function(){
			//텍스트 area의값 얻기
			var str=this.txt.value;
			//content자식요소 제거
			this.content.removeChild(this.txt);
			this.content.removeChild(this.bt);
			this.content.innerText=str;
		}

	}
}