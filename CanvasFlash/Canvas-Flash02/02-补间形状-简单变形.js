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
(lib._02补间形状简单变形 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AryKFIAA0JIXkAAIAAUJg");
	this.shape.setTransform(88.5,113.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("Aq2J/QghkugIk2QgIk8AAlCQE6gLFCgIQE9gIFCAAIC/AAIANHAQAIE+AAFDIAACkIrqADIp8AVIg4AAg");
	this.shape_1.setTransform(106.6,113.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AqRJ6QgskegPkuQgQk0AAk9QEpgWE6gQQE0gQE8AAQBfAABeABQAODUALDcQAQE1AAE+IgBChIrcADIpaArIg3AAg");
	this.shape_2.setTransform(124.7,112.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("Aq6BBQgXksAAk4QEZgiEwgXQEsgYE3AAQBdAABcACQAWDKARDWQAXEtAAE4QAABQgBBOIrRADIo3BBIg2AAQg2kPgXklg");
	this.shape_3.setTransform(142.8,112.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("ApIJwQhBj/gekdQggkkAAkyQEIgtEoggQEkggEyAAQBbAABaACQAeDBAWDQQAgEkAAEzQAABOgCBOIrEACIoVBXIg1AAg");
	this.shape_4.setTransform(160.9,112.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AqVBmQgnkbAAkuQD4g3EfgoQEbgoEuAAQBZAABYADQAlC3AcDKQAnEcAAEtQAABNgCBMIq3ACInzBtIg0AAQhLjwgnkVg");
	this.shape_5.setTransform(178.9,112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033FF").s().p("AqCB5QgwkTAAkoQDnhDEYgwQESgwEoAAQBYAABXAEQArCtAiDEQAwETAAEpQAABLgDBKIqqACInSCCIgzABQhVjggukNg");
	this.shape_6.setTransform(197,111.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033FF").s().p("AnbJgQhejPg2kGQg4kJAAkkQDXhOEOg4QELg3EigBQBXABBUAEQAzCjAnC+QA4EKAAEkQAABKgDBIIqcACImxCYIgzAAg");
	this.shape_7.setTransform(215.1,111.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("ApdCfQg/kCAAkfQDFhaEHg/QEBhAEeAAQBVABBTAFQA5CZAtC3QBBEFAAEdQgBBIgEBHIqPABImOCuIgyAAQhpjAg+j8g");
	this.shape_8.setTransform(233.2,111);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033FF").s().p("ApKCxQhIj6AAkYQC2hmD9hHQD6hHEYgBQBTABBRAFQBCCPAyCzQBID7AAEYQAABHgFBFIqBACIluDDIgwABQh0iyhFj0g");
	this.shape_9.setTransform(251.3,110.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033FF").s().p("Ao4DEQhPjxAAkUQClhwD1hQQDxhPETAAQBSAABPAHQBICEA5CsQBPD0AAESQAABGgFBDIp0ACIlMDZIgwAAQh+ihhNjsg");
	this.shape_10.setTransform(269.4,110.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033FF").s().p("AolDXQhYjpAAkOQCVh8DshYQDrhXENAAQBQAABMAHQBQB7A+CmQBYDrAAEOQAABEgFBBIpnACIksDuIguABQiIiRhVjkg");
	this.shape_11.setTransform(287.4,110.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033FF").s().p("AoTDpQhfjiAAkHQCEiHDkhgQDihfEHAAQBPAABLAIQBXBwBEChQBfDjAAEIQAABDgFBAIpaABIkKEEIgtABQiTiChdjcg");
	this.shape_12.setTransform(305.5,109.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033FF").s().p("AoAD8QhojaAAkDQB1iSDahnQDahnECAAQBNAABJAJQBfBmBJCbQBoDagBEDQAABBgGA/IpMABIjpEaIgsABQidhzhkjTg");
	this.shape_13.setTransform(323.6,109.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033FF").s().p("AntEPQhwjSAAj9QBkidDShvQDRhwD+AAQBLAABHAKQBmBcBPCVQBvDRAAD+QAABAgHA9Io/ABIjHEwIgrABQiohjhrjLg");
	this.shape_14.setTransform(341.7,109.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0033FF").s().p("AnbEhQh3jJAAj4QBTioDJh3QDJh4D5AAQBJAABFAKQBuBTBUCPQB3DJAAD4QAAA/gHA8IoyAAIilFGIgqABQiyhUh0jDg");
	this.shape_15.setTransform(359.8,108.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033FF").s().p("AnIE0Qh/jBgBjzQBCizDCiAQDBh+DzAAQBHgBBEALQB1BJBZCIQCADCgBDyQABA+gIA6IokAAIiEFbIgqABQi8hDh7i7g");
	this.shape_16.setTransform(377.9,108.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0033FF").s().p("Am2FHQiHi4AAjuQAyi/C5iHQC3iHDvAAQBGAABCALQB7A/BfCCQCIC5AADuQAAA8gIA4IoXABIhjFxIgpAAQjGgziDizg");
	this.shape_17.setTransform(396,108.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033FF").s().p("AmjFaQiPiwAAjpQAhjKCwiPQCwiPDpAAQBEAABAAMQCDA1BlB8QCPCwAADpQAAA7gIA2IoKABIhBGGIgoABQjRgkiKiqg");
	this.shape_18.setTransform(414,107.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0033FF").s().p("AmRFsQiXinAAjkQARjVCniXQCoiXDjAAQBDAAA+ANQCLArBqB2QCYCnAADkQAAA6gKA1In8AAIgiGcIgkABQjbgViTiig");
	this.shape_19.setTransform(432.1,107.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033FF").s().p("Al+F/QififAAjgQAAjfCfifQCfifDfAAQDgAACfCfQCfCfAADfQAAA3gKA0InvAAIAAGyIglABQjfAAififg");
	this.shape_20.setTransform(450.2,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288,249,151,129);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;