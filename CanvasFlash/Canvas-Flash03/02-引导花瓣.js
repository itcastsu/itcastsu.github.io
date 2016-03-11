(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/花瓣网页_.jpg", id:"花瓣网页"}
	]
};



// symbols:



(lib.花瓣网页 = function() {
	this.initialize(img.花瓣网页);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


(lib.花瓣 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F583DA"],[0,1],-1.2,-3.4,0,-1.2,-3.4,10.6).s().p("AgphsQAoADAbAdQAgAgAAAsQAAAsggAhQgbAdgoACQgfiAAfhYg");
	this.shape.setTransform(5.8,10.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.7,21.8);


(lib.花瓣动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 花瓣动画1
	this.instance = new lib.花瓣("synched",0);
	this.instance.setTransform(35.7,-42.3,1,1,0,0,0,5.8,10.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({rotation:360,guide:{path:[35.9,-42.2,35.4,-9,34.1,64.2,34.1,66.3,33.5,82.5,33.4,83.9,33.3,85.4,32.6,102.5,32.9,116.5,33.1,126.8,33.8,137,36.2,171.2,44.4,204.1,73.3,319.8,172.6,426.1]},alpha:0},118,cjs.Ease.get(1)).wait(1));

	// 花瓣动画1
	this.instance_1 = new lib.花瓣("synched",0);
	this.instance_1.setTransform(152,-47.3,1,1,0,0,0,5.8,10.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({rotation:360,guide:{path:[151.9,-47.1,146.7,-12.2,115.9,9.1,69.9,40.8,33.4,82.5,30.9,85.4,28.4,88.3,18.5,100,10.4,112.5,-13.8,149.8,-21.9,195,-31.9,250.4,-26.3,306.5,-20.6,364.4,9.7,414,37.8,459.9,83.3,482]},alpha:0},118,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// 花瓣动画1
	this.instance_2 = new lib.花瓣("synched",0);
	this.instance_2.setTransform(-21.1,-33.5,1,1,0,0,0,5.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:360,guide:{path:[-21,-33.4,-21.6,-32.7,-22.1,-31.9,-61.1,21.1,-19.4,76.2,-5.2,94.9,10.5,112.4,21.7,125,33.8,136.9,47.6,150.6,62.5,163.5,100.7,196.6,134.5,233.9,175,279,198.4,334.4,222.4,391.2,194.1,442.3]},alpha:0},118,cjs.Ease.get(1)).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-44.4,11.6,21.8);


// stage content:



(lib._02引导花瓣 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.花瓣动画("synched",29);
	this.instance.setTransform(372.1,5.5,0.8,0.8,0,0,0,5.8,10.9);

	this.instance_1 = new lib.花瓣动画("synched",89);
	this.instance_1.setTransform(474.2,24.5,1,1,0,0,0,5.8,10.9);

	this.instance_2 = new lib.花瓣动画("synched",39);
	this.instance_2.setTransform(256.2,53.6,1.2,1.2,0,0,0,5.8,10.9);

	this.instance_3 = new lib.花瓣动画("synched",79);
	this.instance_3.setTransform(315.2,24.5,1,1,0,0,0,5.8,10.9);

	this.instance_4 = new lib.花瓣动画("synched",124);
	this.instance_4.setTransform(254.2,24.5,1,1,0,0,0,5.8,10.9);

	this.instance_5 = new lib.花瓣动画("synched",0);
	this.instance_5.setTransform(158.1,-16.9,0.5,0.5,0,0,0,5.8,10.9);

	this.instance_6 = new lib.花瓣动画("synched",49);
	this.instance_6.setTransform(117.1,24.5,1,1,0,0,0,5.8,10.9);

	this.instance_7 = new lib.花瓣动画("synched",9);
	this.instance_7.setTransform(76.1,24.5,1,1,0,0,0,5.8,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(300));

	// 背景
	this.instance_8 = new lib.花瓣网页();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,155.4,681.3,550.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;