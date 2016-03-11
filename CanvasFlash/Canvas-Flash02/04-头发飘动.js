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



// stage content:
(lib._04头发飘动 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 头发
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAxh2QgeBTgDBHACIhtIBZDcAguhyQh0Bzg+B2");
	this.shape.setTransform(266.5,87.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AAXAnQARhGAehTACehpQAlBsAYBsAgZhuQh0BzhNBu");
	this.shape_1.setTransform(264.4,86.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AAfApQAfhEAehTACzhlQAfBqAEBpAgDhqQh0BzheBm");
	this.shape_2.setTransform(262.2,86.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("ADFhiQAZBogRBmAAiAqQAuhDAehSAANhoQhyB0huBd");
	this.shape_3.setTransform(260.4,86);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ADShgQASBmgmBkAAhAqQA7hAAehTAAZhlQhyBzh9BW");
	this.shape_4.setTransform(259.2,85.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("ADcheQALBlg6BgAAcArQBKg/AehTAAjhjQhyBziNBO");
	this.shape_5.setTransform(258.2,85.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("ADkhbQAFBihOBeAAXArQBYg9AehSAAshhQhyB0ieBF");
	this.shape_6.setTransform(257.3,85.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("ACVhiQgeBThnA7ADshZQgBBhhjBbAA0heQhyBzitA+");
	this.shape_7.setTransform(256.5,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 背景
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AgLgaQAAALAGAPQAGAVALAG");
	this.shape_8.setTransform(276.3,199.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AAIgVQgFAHgEAOQgIAPACAH");
	this.shape_9.setTransform(267.9,198.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AjOAvQAfAABPhHQBPhIAIAAQAnAAASAVQAIAKAPApQAhBUBnAl");
	this.shape_10.setTransform(272.3,197.6,1,0.833);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AAAgBIAAAD");
	this.shape_11.setTransform(302.7,194.6,1.442,1.442,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("AAAgQIAAAh");
	this.shape_12.setTransform(304.2,183.1,1.442,1.442,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("AAAgHIAAAP");
	this.shape_13.setTransform(304.9,173.5,1.442,1.442,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AgxARQAOgFABAAIAKAAIAegcQAHASAQAKQALgQAKAM");
	this.shape_14.setTransform(306.2,159.3,1.442,1.442,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("AiRAwQD+gDAlhc");
	this.shape_15.setTransform(307,115.4,1.442,1.442,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmAnQgPgRAAgWQAAgWAPgQQARgQAVAAQAWAAAQAQQAQAQABAWQgBAWgQARQgQAQgWAAQgVAAgRgQg");
	this.shape_16.setTransform(309,143.6,0.531,0.531,0,0,180,0,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,1,1).p("AAnAnQgQAQgXAAQgWAAgQgQQgQgRAAgWQAAgVAQgRQAQgQAWAAQAXAAAQAQQAQARAAAVQAAAWgQARg");
	this.shape_17.setTransform(305.6,146.6,1.77,1.77,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgPgRAAgWQAAgWAPgQQARgQAVAAQAWAAAQAQQAQAQABAWQgBAWgQARQgQAQgWAAQgVAAgRgQg");
	this.shape_18.setTransform(305.6,146.6,1.77,1.77,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,1,1).p("ABxBwQgvAwhCAAQhBAAgvgwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAug");
	this.shape_19.setTransform(306.1,146.7,1.225,1.225,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhwBwQgugugBhCQABhBAugvQAvguBBAAQBCAAAvAuQAuAvABBBQgBBCguAuQgvAwhCgBQhBABgvgwg");
	this.shape_20.setTransform(306.1,146.7,1.225,1.225,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("AgOh1QgBAuAVBJQAXBLghAp");
	this.shape_21.setTransform(273.5,164.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AAAgBIAAAD");
	this.shape_22.setTransform(238.3,194.1,1.442,1.442);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("AAAgQIAAAh");
	this.shape_23.setTransform(236.8,182.6,1.442,1.442);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3,1,1).p("AAAgHIAAAP");
	this.shape_24.setTransform(236.1,173,1.442,1.442);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,1,1).p("AgxARQAOgFABAAIAKAAIAegcQAHASAQAKQALgQAKAM");
	this.shape_25.setTransform(234.8,158.8,1.442,1.442);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("AiRAwQD+gDAlhc");
	this.shape_26.setTransform(234,114.9,1.442,1.442);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmAnQgPgRAAgWQAAgWAPgQQARgQAVAAQAWAAAQAQQAQAQABAWQgBAWgQARQgQAQgWAAQgVAAgRgQg");
	this.shape_27.setTransform(232,143.1,0.531,0.531,0,0,0,0,-0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3,1,1).p("AAnAnQgQAQgXAAQgWAAgQgQQgQgRAAgWQAAgVAQgRQAQgQAWAAQAXAAAQAQQAQARAAAVQAAAWgQARg");
	this.shape_28.setTransform(235.4,146.1,1.77,1.77);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgmAnQgPgRAAgWQAAgWAPgQQARgQAVAAQAWAAAQAQQAQAQABAWQgBAWgQARQgQAQgWAAQgVAAgRgQg");
	this.shape_29.setTransform(235.4,146.1,1.77,1.77);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3,1,1).p("ABxBwQgvAwhCAAQhBAAgvgwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAug");
	this.shape_30.setTransform(234.9,146.2,1.225,1.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhwBwQgugugBhCQABhBAugvQAvguBBAAQBCAAAvAuQAuAvABBBQgBBCguAuQgvAwhCgBQhBABgvgwg");
	this.shape_31.setTransform(234.9,146.2,1.225,1.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AHonnQDKDLAAEcQAAEdjKDLQjKDKkeAAQkcAAjKjKQjLjLAAkdQAAkcDLjLQDKjKEcAAQEeAADKDKg");
	this.shape_32.setTransform(269.9,148.5,1.064,1.064);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AnmHoQjLjLAAkdQAAkcDLjKQDKjKEcgBQEdABDKDKQDKDKABEcQgBEdjKDLQjKDJkdAAQkcAAjKjJg");
	this.shape_33.setTransform(269.9,148.5,1.064,1.064);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("ADgjfQBcBdAACCQAACDhcBcQhdBdiDAAQiCAAhdhdQhchcAAiDQAAiCBchdQBdhdCCAAQCDAABdBdg");
	this.shape_34.setTransform(272.2,233.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjfDfQhchcAAiDQAAiCBchdQBdhdCCAAQCDAABcBdQBdBdAACCQAACDhdBcQhcBdiDABQiCgBhdhdg");
	this.shape_35.setTransform(272.2,233.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AgogdIAcAAQAEAFAVAXQAXAVAFAK");
	this.shape_36.setTransform(188.7,159,1,1,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("ABHhcQgFArg1BEQgzBIggAC");
	this.shape_37.setTransform(186.2,145.4,1,1,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("ACMjqQBVBAADCAQACB/hTBhQhNBZhiABQhZABg5hHQg1hDAAhhQAAhfA0hTQA3hZBXgeQBfgiBOA7g");
	this.shape_38.setTransform(186,149,1,1,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiuDKQg1hDAAhhQAAhfA0hTQA3hZBXgeQBfgiBOA7QBVBAADCAQACB/hTBhQhNBZhiABIgDAAQhXAAg4hGg");
	this.shape_39.setTransform(186,149,1,1,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,1,1).p("AgogdIAcAAQAEAFAVAXQAXAVAFAK");
	this.shape_40.setTransform(343.4,159);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3,1,1).p("ABHhcQgFArg1BEQgzBIggAC");
	this.shape_41.setTransform(345.9,145.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3,1,1).p("ACMjqQBVBAADCAQACB/hTBhQhNBZhiABQhZABg5hHQg1hDAAhhQAAhfA0hTQA3hZBXgeQBfgiBOA7g");
	this.shape_42.setTransform(346.1,149);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiuDKQg1hDAAhhQAAhfA0hTQA3hZBXgeQBfgiBOA7QBVBAADCAQACB/hTBhQhNBZhiABIgDAAQhXAAg4hGg");
	this.shape_43.setTransform(346.1,149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(436.8,273.7,208.6,192.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;