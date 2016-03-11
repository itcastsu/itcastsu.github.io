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



(lib.原谅 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("原谅", "bold 40px 'Microsoft YaHei'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.setTransform(37.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ar8ESIAAokIX4AAIAAIkg");
	this.shape.setTransform(76.5,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ar8ESIAAokIX4AAIAAIkg");
	this.shape_1.setTransform(76.5,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("Ar8ESIAAokIX4AAIAAIkg");
	this.shape_2.setTransform(76.5,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.text}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,58.3);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("从选", "bold 40px 'Microsoft YaHei'", "#FFFFFF");
	this.text.lineHeight = 42;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmZEsIAApXIMyAAIAAJXg");
	this.shape.setTransform(42,30.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.2,60.5);


(lib.不原谅 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("不原谅", "bold 40px 'Microsoft YaHei'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.setTransform(18.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ar8ESIAAokIX4AAIAAIkg");
	this.shape.setTransform(76.5,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:30.8}},{t:this.text,p:{y:0}}]}).to({state:[{t:this.shape,p:{y:-249.2}},{t:this.text,p:{y:-280}}]},1).to({state:[{t:this.shape,p:{y:30.8}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,58.3);


// stage content:
(lib._01按钮基础 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.不原谅();
	this.instance.setTransform(440.5,339.9,1,1,0,0,0,76.5,29.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.不原谅(), 3);

	this.instance_1 = new lib.原谅();
	this.instance_1.setTransform(105.5,339.9,1,1,0,0,0,76.5,29.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.原谅(), 3);

	this.text = new cjs.Text("原谅我吧", "bold 40px 'Microsoft YaHei'", "#00FF00");
	this.text.lineHeight = 42;
	this.text.setTransform(199,112.6);

	this.instance_2 = new lib.元件1();
	this.instance_2.setTransform(476.6,343.8,1,1,0,0,0,42.1,30.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{scaleX:1,scaleY:1,x:199,y:112.6,text:"原谅我吧",color:"#00FF00",lineWidth:160}},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.text,p:{scaleX:1.633,scaleY:1.633,x:147,y:151.7,text:"想得美.",color:"#FF0000",lineWidth:132}},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304,230.8,488,338.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;