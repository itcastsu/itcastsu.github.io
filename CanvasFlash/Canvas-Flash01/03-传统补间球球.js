(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 100,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AjyDzQhmhkABiPQgBiNBmhmQBkhkCOAAQCOAABmBkQBkBmAACNQAACPhkBkQhmBmiOgBQiOABhkhmg");
	this.shape.setTransform(34.5,34.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,69);


// stage content:
(lib._03传统补间球球 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		Flash 时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		stop();
		this.on('click',function(){	
			this.gotoAndStop(5);    // 调转到第五帧停止
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33));

	// 图层 1
	this.instance = new lib.元件1("synched",0);
	this.instance.setTransform(48.5,50.5,1,1,0,0,0,34.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:482.5},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289,66,69,69);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;