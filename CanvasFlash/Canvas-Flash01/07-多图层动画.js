(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("客", "53px 'FZYaoTi'", "#FF0000");
	this.text.lineHeight = 53;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,63.9);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("播", "53px 'FZYaoTi'", "#FF0000");
	this.text.lineHeight = 53;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,63.9);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("智", "53px 'FZYaoTi'", "#FF0000");
	this.text.lineHeight = 53;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,63.9);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("传", "53px 'FZYaoTi'", "#FF0000");
	this.text.lineHeight = 53;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,63.9);


// stage content:
(lib._07多图层动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 客
	this.instance = new lib.元件4("synched",0);
	this.instance.setTransform(243.1,111,1,1,0,0,0,28.6,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:242.8,y:48.9},9).wait(6));

	// 播
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.setTransform(190.1,-16.7,1,1,0,0,0,28.6,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:189.8,y:48.9},9).wait(6));

	// 智
	this.instance_2 = new lib.元件2("synched",0);
	this.instance_2.setTransform(137.1,111,1,1,0,0,0,28.6,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:136.8,y:48.9},9).wait(6));

	// 传
	this.instance_3 = new lib.元件1("synched",0);
	this.instance_3.setTransform(84.1,-16.7,1,1,0,0,0,28.6,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:83.8,y:48.9},9).wait(6));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("A34BUIAAioMAvxAAAIAACog");
	this.shape.setTransform(149.9,64.4,0.974,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A34BUIAAioMAvxAAAIAACog");
	this.shape_1.setTransform(149.9,30.9,0.974,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(151,1.4,298,191.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;