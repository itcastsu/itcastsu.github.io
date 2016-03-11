(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtfGGIAAsLIa/AAIAAMLg");
	this.shape.setTransform(86.5,39);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,173,78);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("Aprl7ITXAAIAAL3IzXAAg");
	this.shape.setTransform(62,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AprF8IAAr3ITXAAIAAL3g");
	this.shape_1.setTransform(62,38);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,127,79);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(62,38,1,1,0,0,0,62,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:465},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,127,79);


// stage content:



(lib._07单个按钮控制影片剪辑 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//console.log(this)
		var myCan = window.myCan = this;
		
		var bl = true;
		
		myCan.togglePlay = function (){
				
			if(bl==true){
				window.myCan.mc01.stop();
				bl=false;
			}else{
				window.myCan.mc01.play();
				bl=true;
			}	
			
		}
		this.addEventListener('click',function(){
				//alert();
			myCan.togglePlay();
		
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 2
	this.button_1 = new lib.元件3();
	this.button_1.setTransform(284.5,96,1,1,0,0,0,86.5,39);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// 图层 1
	this.mc01 = new lib.元件1();
	this.mc01.setTransform(80,306,1,1,0,0,0,62,38);

	this.timeline.addTween(cjs.Tween.get(this.mc01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(291.5,257,354.4,288.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;