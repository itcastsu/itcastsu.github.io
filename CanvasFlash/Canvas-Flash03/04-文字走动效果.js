(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib._04文字走动效果 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 遮罩 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhiFYQiNiNAAjHQAAjECNiNQCLiMDHgBQDGABCNCMQCMCNABDEQgBDHiMCNQiNCMjGABQjHgBiLiMg");
	var mask_graphics_1 = new cjs.Graphics().p("AgfFYQiNiNAAjHQAAjECNiNQCKiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiKiMg");
	var mask_graphics_2 = new cjs.Graphics().p("AAhFYQiKiNAAjHQAAjECKiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_3 = new cjs.Graphics().p("ABkFYQiLiNAAjHQAAjECLiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_4 = new cjs.Graphics().p("ACmFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_5 = new cjs.Graphics().p("ADpFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_6 = new cjs.Graphics().p("AErFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_7 = new cjs.Graphics().p("AFuFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_8 = new cjs.Graphics().p("AGwFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_9 = new cjs.Graphics().p("AHzFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_10 = new cjs.Graphics().p("AI1FYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_11 = new cjs.Graphics().p("AJ4FYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_12 = new cjs.Graphics().p("AK6FYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_13 = new cjs.Graphics().p("AL9FYQiNiNABjHQgBjECNiNQCMiMDIgBQDHABCMCMQCNCNgBDEQABDHiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_14 = new cjs.Graphics().p("ANAFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_15 = new cjs.Graphics().p("AOCFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_16 = new cjs.Graphics().p("APFFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_17 = new cjs.Graphics().p("AQHFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_18 = new cjs.Graphics().p("ARKFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_19 = new cjs.Graphics().p("ASMFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_20 = new cjs.Graphics().p("ATPFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_21 = new cjs.Graphics().p("AURFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_22 = new cjs.Graphics().p("AVUFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_23 = new cjs.Graphics().p("AWWFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_24 = new cjs.Graphics().p("AXZFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_25 = new cjs.Graphics().p("AYbFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_26 = new cjs.Graphics().p("AZeFYQiNiNABjHQgBjECNiNQCMiMDHgBQDIABCMCMQCNCNgBDEQABDHiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_27 = new cjs.Graphics().p("AahFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_28 = new cjs.Graphics().p("AbjFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_29 = new cjs.Graphics().p("AcmFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_30 = new cjs.Graphics().p("AdoFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_31 = new cjs.Graphics().p("AerFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_32 = new cjs.Graphics().p("AftFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_33 = new cjs.Graphics().p("EAgwAFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_34 = new cjs.Graphics().p("EAhyAFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_35 = new cjs.Graphics().p("EAi1AFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_36 = new cjs.Graphics().p("EAj3AFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_37 = new cjs.Graphics().p("EAk6AFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_38 = new cjs.Graphics().p("EAl8AFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_39 = new cjs.Graphics().p("EAm/AFYQiMiNAAjHQAAjECMiNQCNiMDGgBQDHABCNCMQCNCNAADEQAADHiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_40 = new cjs.Graphics().p("EAl7AFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_41 = new cjs.Graphics().p("EAk2AFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_42 = new cjs.Graphics().p("EAjyAFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_43 = new cjs.Graphics().p("EAiuAFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_44 = new cjs.Graphics().p("EAhqAFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_45 = new cjs.Graphics().p("EAglAFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_46 = new cjs.Graphics().p("AfhFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_47 = new cjs.Graphics().p("AedFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_48 = new cjs.Graphics().p("AdYFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_49 = new cjs.Graphics().p("AcUFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_50 = new cjs.Graphics().p("AbQFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_51 = new cjs.Graphics().p("AaMFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_52 = new cjs.Graphics().p("AZHFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_53 = new cjs.Graphics().p("AYDFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_54 = new cjs.Graphics().p("AW/FYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_55 = new cjs.Graphics().p("AV6FYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_56 = new cjs.Graphics().p("AU2FYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_57 = new cjs.Graphics().p("ATyFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_58 = new cjs.Graphics().p("ASuFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiMiMg");
	var mask_graphics_59 = new cjs.Graphics().p("ARpFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_60 = new cjs.Graphics().p("AQlFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_61 = new cjs.Graphics().p("APhFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_62 = new cjs.Graphics().p("AOcFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_63 = new cjs.Graphics().p("ANYFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_64 = new cjs.Graphics().p("AMUFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_65 = new cjs.Graphics().p("ALPFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_66 = new cjs.Graphics().p("AKLFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_67 = new cjs.Graphics().p("AJHFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_68 = new cjs.Graphics().p("AIDFYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_69 = new cjs.Graphics().p("AG+FYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_70 = new cjs.Graphics().p("AF6FYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_71 = new cjs.Graphics().p("AE2FYQiNiNAAjHQAAjECNiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_72 = new cjs.Graphics().p("ADxFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_73 = new cjs.Graphics().p("ACtFYQiMiNAAjHQAAjECMiNQCNiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiNiMg");
	var mask_graphics_74 = new cjs.Graphics().p("ABpFYQiLiNAAjHQAAjECLiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_75 = new cjs.Graphics().p("AAlFYQiLiNAAjHQAAjECLiNQCMiMDHgBQDHABCNCMQCMCNAADEQAADHiMCNQiNCMjHABQjHgBiMiMg");
	var mask_graphics_76 = new cjs.Graphics().p("AgeFYQiMiNAAjHQAAjECMiNQCLiMDHgBQDHABCMCMQCNCNAADEQAADHiNCNQiMCMjHABQjHgBiLiMg");
	var mask_graphics_77 = new cjs.Graphics().p("AhiFYQiNiNAAjHQAAjECNiNQCLiMDHgBQDGABCNCMQCMCNABDEQgBDHiMCNQiNCMjGABQjHgBiLiMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:72,y:48.5}).wait(1).to({graphics:mask_graphics_1,x:78.7,y:48.5}).wait(1).to({graphics:mask_graphics_2,x:85.3,y:48.5}).wait(1).to({graphics:mask_graphics_3,x:92,y:48.5}).wait(1).to({graphics:mask_graphics_4,x:98.6,y:48.5}).wait(1).to({graphics:mask_graphics_5,x:105.3,y:48.5}).wait(1).to({graphics:mask_graphics_6,x:111.9,y:48.5}).wait(1).to({graphics:mask_graphics_7,x:118.6,y:48.5}).wait(1).to({graphics:mask_graphics_8,x:125.2,y:48.5}).wait(1).to({graphics:mask_graphics_9,x:131.9,y:48.5}).wait(1).to({graphics:mask_graphics_10,x:138.5,y:48.5}).wait(1).to({graphics:mask_graphics_11,x:145.2,y:48.5}).wait(1).to({graphics:mask_graphics_12,x:151.8,y:48.5}).wait(1).to({graphics:mask_graphics_13,x:158.5,y:48.5}).wait(1).to({graphics:mask_graphics_14,x:165.2,y:48.5}).wait(1).to({graphics:mask_graphics_15,x:171.8,y:48.5}).wait(1).to({graphics:mask_graphics_16,x:178.5,y:48.5}).wait(1).to({graphics:mask_graphics_17,x:185.1,y:48.5}).wait(1).to({graphics:mask_graphics_18,x:191.8,y:48.5}).wait(1).to({graphics:mask_graphics_19,x:198.4,y:48.5}).wait(1).to({graphics:mask_graphics_20,x:205.1,y:48.5}).wait(1).to({graphics:mask_graphics_21,x:211.7,y:48.5}).wait(1).to({graphics:mask_graphics_22,x:218.4,y:48.5}).wait(1).to({graphics:mask_graphics_23,x:225,y:48.5}).wait(1).to({graphics:mask_graphics_24,x:231.7,y:48.5}).wait(1).to({graphics:mask_graphics_25,x:238.3,y:48.5}).wait(1).to({graphics:mask_graphics_26,x:245,y:48.5}).wait(1).to({graphics:mask_graphics_27,x:251.7,y:48.5}).wait(1).to({graphics:mask_graphics_28,x:258.3,y:48.5}).wait(1).to({graphics:mask_graphics_29,x:265,y:48.5}).wait(1).to({graphics:mask_graphics_30,x:271.6,y:48.5}).wait(1).to({graphics:mask_graphics_31,x:278.3,y:48.5}).wait(1).to({graphics:mask_graphics_32,x:284.9,y:48.5}).wait(1).to({graphics:mask_graphics_33,x:291.6,y:48.5}).wait(1).to({graphics:mask_graphics_34,x:298.2,y:48.5}).wait(1).to({graphics:mask_graphics_35,x:304.9,y:48.5}).wait(1).to({graphics:mask_graphics_36,x:311.5,y:48.5}).wait(1).to({graphics:mask_graphics_37,x:318.2,y:48.5}).wait(1).to({graphics:mask_graphics_38,x:324.8,y:48.5}).wait(1).to({graphics:mask_graphics_39,x:331.5,y:48.5}).wait(1).to({graphics:mask_graphics_40,x:324.7,y:48.5}).wait(1).to({graphics:mask_graphics_41,x:317.8,y:48.5}).wait(1).to({graphics:mask_graphics_42,x:311,y:48.5}).wait(1).to({graphics:mask_graphics_43,x:304.2,y:48.5}).wait(1).to({graphics:mask_graphics_44,x:297.4,y:48.5}).wait(1).to({graphics:mask_graphics_45,x:290.5,y:48.5}).wait(1).to({graphics:mask_graphics_46,x:283.7,y:48.5}).wait(1).to({graphics:mask_graphics_47,x:276.9,y:48.5}).wait(1).to({graphics:mask_graphics_48,x:270,y:48.5}).wait(1).to({graphics:mask_graphics_49,x:263.2,y:48.5}).wait(1).to({graphics:mask_graphics_50,x:256.4,y:48.5}).wait(1).to({graphics:mask_graphics_51,x:249.6,y:48.5}).wait(1).to({graphics:mask_graphics_52,x:242.7,y:48.5}).wait(1).to({graphics:mask_graphics_53,x:235.9,y:48.5}).wait(1).to({graphics:mask_graphics_54,x:229.1,y:48.5}).wait(1).to({graphics:mask_graphics_55,x:222.2,y:48.5}).wait(1).to({graphics:mask_graphics_56,x:215.4,y:48.5}).wait(1).to({graphics:mask_graphics_57,x:208.6,y:48.5}).wait(1).to({graphics:mask_graphics_58,x:201.8,y:48.5}).wait(1).to({graphics:mask_graphics_59,x:194.9,y:48.5}).wait(1).to({graphics:mask_graphics_60,x:188.1,y:48.5}).wait(1).to({graphics:mask_graphics_61,x:181.3,y:48.5}).wait(1).to({graphics:mask_graphics_62,x:174.4,y:48.5}).wait(1).to({graphics:mask_graphics_63,x:167.6,y:48.5}).wait(1).to({graphics:mask_graphics_64,x:160.8,y:48.5}).wait(1).to({graphics:mask_graphics_65,x:153.9,y:48.5}).wait(1).to({graphics:mask_graphics_66,x:147.1,y:48.5}).wait(1).to({graphics:mask_graphics_67,x:140.3,y:48.5}).wait(1).to({graphics:mask_graphics_68,x:133.5,y:48.5}).wait(1).to({graphics:mask_graphics_69,x:126.6,y:48.5}).wait(1).to({graphics:mask_graphics_70,x:119.8,y:48.5}).wait(1).to({graphics:mask_graphics_71,x:113,y:48.5}).wait(1).to({graphics:mask_graphics_72,x:106.1,y:48.5}).wait(1).to({graphics:mask_graphics_73,x:99.3,y:48.5}).wait(1).to({graphics:mask_graphics_74,x:92.5,y:48.5}).wait(1).to({graphics:mask_graphics_75,x:85.7,y:48.5}).wait(1).to({graphics:mask_graphics_76,x:78.8,y:48.5}).wait(1).to({graphics:mask_graphics_77,x:72,y:48.5}).wait(1));

	// 文字
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(355.9,53.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(78));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Egz7AH4IAAvvMBn3AAAIAAPvg");
	this.shape_1.setTransform(344.5,49.5);

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(398,51,96,96);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;