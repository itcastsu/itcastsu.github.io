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
(lib._04翻书效果 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一页纸
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArvtYQJ5nVNmB8MAAAAgkQuegFpBFeg");
	this.shape.setTransform(344.2,232.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ArIs9QJWnhM7BAMAAAAgkQtwAuohFzg");
	this.shape_1.setTransform(340.3,230);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AqhscQIzntMQADMAAAAgkQtCBhoBGIg");
	this.shape_2.setTransform(336.4,226.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ap6r5QIQn4Llg5MAAAAgkQsTCTniGeg");
	this.shape_3.setTransform(332.5,223.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ApTrVQHtoEK6h1MAAAAgkQrlDFnCG0g");
	this.shape_4.setTransform(328.6,219.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AosqwQHKoQKQiyMAAAAgjQq3D6mjHIg");
	this.shape_5.setTransform(324.7,216);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AoGqMQGoocJljuMAAAAgjQqJEtmEHdg");
	this.shape_6.setTransform(320.8,212.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AnfpoQGGooI5kqMAAAAgjQpaFfllHzg");
	this.shape_7.setTransform(316.9,208.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Am4pEQFjozIOlnMAAAAgjQosGSlFIIg");
	this.shape_8.setTransform(313.1,205.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AmRogQE/o/HkmjMAAAAgjQn9HEkmIeg");
	this.shape_9.setTransform(309.2,201.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ak3ogQD4o/F3mjMAAAAgjQmLHEjkIeMAAAggjg");
	this.shape_10.setTransform(300.2,201.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AjeogQCxo/EMmjMAAAAgjQkaHEijIeMAAAggjg");
	this.shape_11.setTransform(291.3,201.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AiFogQBro/CgmjMAAAAgjQipHEhiIeMAAAggjg");
	this.shape_12.setTransform(282.3,201.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgrogQAjo/A0mjMAAAAgjQg3HEggIeMAAAggjg");
	this.shape_13.setTransform(273.4,201.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgrIhMAAAggjQA0GjAjI/MAAAAgjQggoeg3nEg");
	this.shape_14.setTransform(264.4,201.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AiFIhMAAAggjQCgGjBrI/MAAAAgjQhioeipnEg");
	this.shape_15.setTransform(255.5,201.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AjeIhMAAAggjQEMGjCxI/MAAAAgjQijoekanEg");
	this.shape_16.setTransform(246.6,201.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ak4IhMAAAggjQF4GjD5I/MAAAAgjQjloemMnEg");
	this.shape_17.setTransform(237.6,201.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AmRIhMAAAggjQHjGjFAI/MAAAAgjQkmoen9nEg");
	this.shape_18.setTransform(228.7,201.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Am9JKMAAAggkQIUFgFnIxMAAAAgkQlJoGoymLg");
	this.shape_19.setTransform(224.3,205.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AnoJyMAAAggjQJEEbGNIlMAAAAgjQlsnupllSg");
	this.shape_20.setTransform(219.9,209.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AoUKbMAAAggjQJ0DXG1IXMAAAAgkQmPnWqakZg");
	this.shape_21.setTransform(215.6,213.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("ApALEMAAAggkQKkCUHdIJMAAAAgkQmzm+rOjfg");
	this.shape_22.setTransform(211.2,217.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("ApsLsMAAAggkQLVBQIEH9MAAAAgkQnXmnsCimg");
	this.shape_23.setTransform(206.8,221.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AqXMVMAAAggkQMFAMIqHvMAAAAgkQn6mOs1htg");
	this.shape_24.setTransform(202.5,225.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("ArDNAMAAAggjQM1g5JSHjMAAAAgjQodl1tqg1g");
	this.shape_25.setTransform(198.1,229.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("ArvNzMAAAggkQNmh8J5HVMAAAAgkQpBleueAFg");
	this.shape_26.setTransform(193.7,232.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

	// 背景
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F2F2F2","#999999"],[0,1],91.1,2.3,-208.9,2.3).s().p("AqwQtQg3AMg3APMAAAgg8QMeimMfCmMAAAAg8QrpjJrmCug");
	this.shape_27.setTransform(346.9,247.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F2F2F2","#999999"],[0,1],85.5,0,-85.4,0).s().p("ArnCKIhuioQA3gPA3gMQLniuLoDJIBuCoQsgjWsdDWg");
	this.shape_28.setTransform(352.4,360.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F2F2F2","#999999"],[0,1],-0.4,4.5,-6.1,69.9).s().p("Ag2PKMAAAgg9IBtCqMAAAAg9g");
	this.shape_29.setTransform(432.4,260);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F2F2F2","#999999"],[0,1],-91,2.3,209,2.3).s().p("AKxQtQrmiurpDJMAAAgg8QMeimMfCmMAAAAg8Qg3gPg3gMg");
	this.shape_30.setTransform(187,248.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F2F2F2","#999999"],[0,1],-85.4,0,85.5,0).s().p("AtVCKIBuioQLnjJLoCuQA3AMA3APIhuCoQsdjWsgDWg");
	this.shape_31.setTransform(181.5,361.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F2F2F2","#999999"],[0,1],0.4,4.5,6.1,69.9).s().p("Ag1vJIBsiqMAAAAg9IhsCqg");
	this.shape_32.setTransform(101.5,261);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("ABtSdIhtiqIhsCqQsgjYsgDYMAAAgg8IBuiqQMgimMeCmQMfimMgCmIBuCqMAAAAg8QsgjYsgDYg");
	this.shape_33.setTransform(267,259.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371,309.9,341.9,268.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;