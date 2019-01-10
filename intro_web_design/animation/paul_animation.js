(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.fishpngcopy = function() {
	this.spriteSheet = ss["paul_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jawspngcopy = function() {
	this.spriteSheet = ss["paul_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.oceanpngcopy2 = function() {
	this.spriteSheet = ss["paul_animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.scubapngcopy = function() {
	this.spriteSheet = ss["paul_animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sharkpngcopy = function() {
	this.spriteSheet = ss["paul_animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jawspngcopy();
	this.instance.setTransform(0,0,0.328,0.519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,121);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scubapngcopy();
	this.instance.setTransform(0,0,0.65,0.546);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.1,118);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sharkpngcopy();
	this.instance.setTransform(38,0,0.456,0.473,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,491,387.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fishpngcopy();
	this.instance.setTransform(0,31.9,0.205,0.175,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,109.1);


// stage content:
(lib.paul_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkxksIJjAAIAAJZIpjAAg");
	this.shape.setTransform(162,349);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AkxEtIAApaIJjAAIAAJag");
	this.shape_1.setTransform(162,349);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AkwkmQCVgCCWgCQCVgCCXAAQAHCTABCVQACCUAACXQiVADiXABQiUACiXAAQgHiTgBiVQgCiUAAiXg");
	this.shape_2.setTransform(161.3,346.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AkuAFQgCiUAAiXIErgEQCVgCCXAAQAHCTABCVQACCUAACXIksAEQiUACiXAAQgHiTgBiVg");
	this.shape_3.setTransform(161.3,346.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AkvkgQCSgFCVgDQCTgDCWAAQAICQADCTQAECTAACWQiSAEiVADQiTAEiWAAQgJiQgDiTQgDiTAAiWg");
	this.shape_4.setTransform(160.5,343.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AksAJQgDiTAAiWQCSgFCVgDQCTgDCWAAQAICQADCTQAECTAACWIknAHQiTAEiWAAQgJiQgDiTg");
	this.shape_5.setTransform(160.5,343.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AkukaQCPgGCTgFQCSgFCVAAQALCNAECSQAFCRAACVQiPAHiTAEQiRAFiWAAQgKiNgFiRQgFiSAAiVg");
	this.shape_6.setTransform(159.7,340.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AkpANQgFiSAAiVQCPgGCTgFQCSgFCVAAQALCNAECSQAFCRAACVQiPAHiTAEQiRAFiWAAQgKiNgFiRg");
	this.shape_7.setTransform(159.7,340.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AktkUQCMgJCSgGQCQgGCUAAQANCKAGCQQAGCQAACUQiMAJiSAGQiPAGiVAAQgMiKgHiQQgGiQAAiUg");
	this.shape_8.setTransform(159,338.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AknAQQgGiQAAiUQCMgJCSgGQCQgGCUAAQANCKAGCQQAGCQAACUQiMAJiSAGQiPAGiVAAQgMiKgHiQg");
	this.shape_9.setTransform(159,338.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AkskNQCJgLCQgIQCPgICTAAQAOCHAICOQAICPAACTQiJALiQAIQiOAHiTAAQgQiHgHiOQgIiOAAiTg");
	this.shape_10.setTransform(158.2,335.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AkkAUQgIiPAAiSQCJgLCQgIQCPgICTAAQAOCHAICOQAICPAACTQiJALiQAIQiOAHiTAAQgQiHgHiOg");
	this.shape_11.setTransform(158.2,335.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AkrkIQCFgNCPgJQCNgJCTAAQAQCDAJCNQAKCNAACSQiGANiOAJQiNAKiSAAQgSiEgJiNQgJiNAAiSg");
	this.shape_12.setTransform(157.5,332.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AkiAXQgJiMAAiTQCFgNCPgJQCNgJCTAAQAQCEAJCMQAKCNAACSQiGANiOAKQiNAJiSAAQgSiEgJiNg");
	this.shape_13.setTransform(157.5,332.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AkqkBQCDgQCNgKQCLgLCSAAQATCAAKCMQALCLAACRQiCAPiNALQiLALiSAAQgTiBgLiLQgLiLAAiRg");
	this.shape_14.setTransform(156.7,330);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("AkfAbQgLiLAAiRQCDgQCMgKQCMgLCSAAQASCAALCMQALCLAACRQiCAPiOALQiKALiSAAQgUiBgKiLg");
	this.shape_15.setTransform(156.7,330);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("Akpj7QCAgRCLgNQCKgMCRAAQAUB+ANCJQAMCKAACQQh/ASiMAMQiJAMiRAAQgVh9gMiKQgNiJAAiRg");
	this.shape_16.setTransform(155.9,327.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkcAfQgNiJAAiRQCAgRCLgNQCKgMCRAAQAUB+ANCJQAMCKAACQQh/ASiMAMQiJAMiRAAQgVh9gMiKg");
	this.shape_17.setTransform(155.9,327.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("Akoj1QB8gUCKgNQCJgOCPAAQAXB6AOCIQAOCIAACQQh8AUiKANQiIAOiQAAQgXh6gOiIQgOiIAAiQg");
	this.shape_18.setTransform(155.2,324.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AkaAjQgOiIAAiQQB8gUCKgNQCJgOCPAAQAXB6AOCIQAOCIAACQQh8AUiKANQiIAOiQAAQgXh6gOiIg");
	this.shape_19.setTransform(155.2,324.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AknjvQB5gVCIgQQCHgQCPAAQAZB4APCHQAQCGAACPQh5AViJAQQiGAQiPAAQgZh4gPiHQgQiGAAiPg");
	this.shape_20.setTransform(154.4,321.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("AkXAnQgQiHAAiPQB5gVCIgQQCHgQCPAAQAZB4APCHQAQCGAACPQh5AViJAQQiGAPiPAAQgZh3gPiGg");
	this.shape_21.setTransform(154.4,321.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AkmjpQB2gYCHgRQCFgRCOAAQAbB1ARCFQARCFAACNQh2AYiHASQiFAQiOAAQgbh0gRiFQgRiFAAiOg");
	this.shape_22.setTransform(153.7,319.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066CC").s().p("AkVAqQgRiFAAiOQB2gYCHgQQCFgRCOgBQAbB1ARCFQARCFAACOQh2AXiHARQiFARiOAAQgbh0gRiFg");
	this.shape_23.setTransform(153.7,319.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AkljjQBzgaCFgSQCEgTCMAAQAeByASCDQATCEAACMQhzAbiGASQiDATiNAAQgdhygTiEQgSiDAAiNg");
	this.shape_24.setTransform(152.9,316.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("AkTAtQgSiDAAiNQBzgaCFgSQCEgTCMAAQAeByATCDQASCEAACMQhzAbiGASQiDATiMAAQgehygTiEg");
	this.shape_25.setTransform(152.9,316.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AkkjcQBwgdCEgUQCCgUCMAAQAfBvAUCBQAUCDAACMQhwAciDAUQiCAUiMAAQgghvgUiCQgUiBAAiMg");
	this.shape_26.setTransform(152.1,313.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066CC").s().p("AkQAxQgUiBAAiNQBwgcCEgUQCCgUCMABQAfBuAUCBQAUCCAACNQhwAciDATQiCAUiMAAQgghugUiCg");
	this.shape_27.setTransform(152.1,313.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AkjjWQBtgfCCgVQCAgWCLAAQAiBsAVCAQAWCAAACLQhtAfiCAVQiAAWiLAAQgihsgViAQgWiAAAiLg");
	this.shape_28.setTransform(151.4,310.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066CC").s().p("AkNA1QgWiAAAiLQBtgfCCgVQCAgWCLAAQAiBsAVCAQAWCAAACLQhtAfiCAVQiAAWiLAAQgihsgViAg");
	this.shape_29.setTransform(151.4,310.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AkijQQBqghCAgXQB/gXCKAAQAkBoAXB/QAXB/AACKQhqAgiAAYQh/AXiKAAQgkhpgXh/QgXh+AAiKg");
	this.shape_30.setTransform(150.6,308.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0066CC").s().p("AkLA5QgXh/AAiKQBqghCAgXQB/gXCKAAQAkBpAXB+QAXB/AACKQhqAhiAAXQh/AXiKAAQgkhpgXh+g");
	this.shape_31.setTransform(150.6,308.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AkhjKQBngjB/gZQB9gYCJAAQAmBlAYB9QAZB+AACJQhmAjiAAYQh8AZiJAAQgnhlgYh+QgZh9AAiJg");
	this.shape_32.setTransform(149.9,305.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066CC").s().p("AkIA8QgZh9AAiJQBngjB+gZQB+gYCJAAQAmBlAYB+QAZB8AACKQhnAih+AZQh9AZiKAAQgmhmgYh9g");
	this.shape_33.setTransform(149.9,305.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AkgjEQBjglB+gaQB7gaCJAAQAnBiAaB8QAbB7AACJQhkAlh9AaQh8AaiIAAQgohigah8Qgah8AAiIg");
	this.shape_34.setTransform(149.1,302.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066CC").s().p("AkGBAQgah8AAiIQBjglB+gaQB7gaCJAAQAnBiAbB8QAaB7AACJQhjAlh+AaQh7AaiIAAQgphigah8g");
	this.shape_35.setTransform(149.1,302.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("Akfi+QBggnB8gcQB7gbCHAAQAqBfAbB6QAcB6AACHQhgAoh8AcQh6AbiHAAQgrhfgbh6Qgch7AAiHg");
	this.shape_36.setTransform(148.3,300.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066CC").s().p("AkDBDQgch5AAiHQBggoB8gcQB7gbCHAAQAqBfAbB6QAcB7AACGQhgAnh8AdQh6AbiHAAQgrhfgbh7g");
	this.shape_37.setTransform(148.3,300.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("Akei3QBdgqB7gdQB4gdCHAAQAsBcAdB5QAdB4AACGQhdAqh7AdQh4AdiGAAQgthcgdh5Qgdh4AAiGg");
	this.shape_38.setTransform(147.6,297.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066CC").s().p("AkBBHQgdh4AAiGQBdgqB7gdQB4gdCHAAQAsBcAdB5QAdB4AACGQhdAqh7AdQh4AdiGAAQgthcgdh5g");
	this.shape_39.setTransform(147.6,297.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AkdixQBagsB5gfQB3geCFAAQAuBZAfB3QAfB3AACFQhaAsh5AeQh3AfiFAAQgvhZgeh3Qgfh3AAiFg");
	this.shape_40.setTransform(146.8,294.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066CC").s().p("Aj+BLQgfh3AAiFQBagsB5gfQB3geCFAAQAuBZAfB3QAfB3AACFQhaAsh5AeQh3AfiFAAQgvhZgeh3g");
	this.shape_41.setTransform(146.8,294.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AkcirQBXguB3ggQB2ggCEAAQAwBWAgB2QAhB1AACEQhXAuh3AgQh2AhiEAAQgxhXggh1Qggh2AAiEg");
	this.shape_42.setTransform(146.1,291.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0066CC").s().p("Aj7BOQghh1AAiEQBXguB3ggQB2ggCEAAQAxBVAgB3QAgB0AACFQhXAth3AhQh2AgiEABQgwhXggh2g");
	this.shape_43.setTransform(146.1,291.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AkbilQBUgwB1giQB1giCDAAQAyBUAiB0QAiBzAACEQhUAwh2AiQh0AiiDAAQgzhUghh0QgihzAAiEg");
	this.shape_44.setTransform(145.3,289.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0066CC").s().p("Aj5BSQgihzAAiEQBUgwB1giQB1giCDAAQAyBUAiB0QAiBzAACEQhUAwh1AiQh1AiiDAAQgyhUgih0g");
	this.shape_45.setTransform(145.3,289.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AkaifQBRgyB0gjQBygkCDAAQA0BQAjBzQAkByAACDQhRAyh0AjQhyAjiDAAQg0hQgjhyQgkhyAAiDg");
	this.shape_46.setTransform(144.5,286.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066CC").s().p("Aj2BWQgkhyAAiDQBRgxB0gkQBygkCDABQA0BPAjBzQAkByAACDQhRAyh0AjQhyAjiDAAQg0hQgjhyg");
	this.shape_47.setTransform(144.5,286.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AkZiYQBOg1ByglQBxglCCAAQA2BNAlBxQAlBxAACCQhOA0hyAlQhxAliCAAQg2hNglhxQglhxAAiBg");
	this.shape_48.setTransform(143.8,283.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066CC").s().p("Aj0BaQglhxAAiBQBOg1ByglQBxglCCAAQA2BNAlBxQAlBxAACCQhOA0hyAlQhxAliCAAQg2hNglhxg");
	this.shape_49.setTransform(143.8,283.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AkYiTQBKg2BxgmQBwgnCBAAQA5BKAmBwQAmBvAACAQhLA3hwAmQhwAniAAAQg6hKglhwQgnhvAAiBg");
	this.shape_50.setTransform(143,281);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066CC").s().p("AjxBdQgnhvAAiBQBLg2BwgmQBwgnCAAAQA6BKAmBwQAmBvAACAQhKA3hyAmQhuAniBAAQg5hKgmhwg");
	this.shape_51.setTransform(143,281);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AkXiMQBHg5BwgoQBugoB/AAQA7BHAoBuQAoBuAAB/QhHA5hwAoQhuAoh/AAQg7hHgohuQgohtAAiAg");
	this.shape_52.setTransform(142.3,278.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0066CC").s().p("AjvBhQgohuAAiAQBHg4BwgoQBtgoCAAAQA8BHAnBuQAoBtAACAQhIA5hvAoQhtAoiAAAQg7hHgohug");
	this.shape_53.setTransform(142.3,278.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AkWiGQBEg7BugpQBsgqB/AAQA9BEApBsQAqBsAAB/QhEA7huApQhsAqh/AAQg9hEgphsQgqhsAAh/g");
	this.shape_54.setTransform(141.5,275.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066CC").s().p("AjsBlQgqhsAAh/QBEg7BugpQBsgqB/AAQA9BEApBsQAqBsAAB/QhEA7huApQhsAqh/AAQg9hEgphsg");
	this.shape_55.setTransform(141.5,275.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AkViAQBBg9BtgrQBqgrB+AAQA/BBArBqQArBrAAB+QhBA9htArQhqArh+AAQg/hBgrhqQgrhrAAh+g");
	this.shape_56.setTransform(140.7,272.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066CC").s().p("AjqBoQgrhqAAh+QBBg9BtgrQBqgrB+AAQA/BBArBrQArBqAAB+QhBA9htArQhqArh+AAQg/hBgrhrg");
	this.shape_57.setTransform(140.7,272.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AkUh6QA/g/BqgsQBrgtB7AAQBCA+AsBpQAsBrAAB7Qg+A/hqAtQhrAsh7AAQhCg+gshpQgthrAAh7g");
	this.shape_58.setTransform(140,270.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0066CC").s().p("AjnBsQgthrAAh7QA/g/BqgsQBrgtB7AAQBCA+AsBpQAsBrAAB7Qg+A/hrAtQhqAsh8AAQhBg+gshpg");
	this.shape_59.setTransform(140,270.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AkTh0QA7hBBpguQBqguB6AAQBDA6AuBoQAuBpAAB7Qg7BBhpAuQhpAuh6AAQhEg7gthnQgvhqAAh6g");
	this.shape_60.setTransform(139.2,267.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0066CC").s().p("AjlBwQguhqAAh6QA7hBBpguQBpguB7AAQBDA6AtBoQAvBpAAB7Qg7BBhpAuQhpAuh6AAQhEg7guhng");
	this.shape_61.setTransform(139.2,267.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AkShuQA4hDBogwQBngwB6AAQBFA4AvBmQAwBoAAB5Qg4BEhnAvQhoAwh5AAQhGg4gvhmQgwhnAAh6g");
	this.shape_62.setTransform(138.5,264.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0066CC").s().p("AjiBzQgwhnAAh5QA4hEBngwQBogwB6ABQBFA4AvBlQAwBoAAB5Qg4BEhoAvQhnAxh6AAQhFg5gvhmg");
	this.shape_63.setTransform(138.5,264.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AkRhnQA1hGBmgxQBmgxB4AAQBIA0AxBlQAxBmAAB4Qg1BGhmAxQhmAxh4AAQhIg0gxhlQgxhmAAh4g");
	this.shape_64.setTransform(137.7,262);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066CC").s().p("AjgB3QgxhmAAh4QA1hGBmgxQBmgxB4AAQBIA0AxBlQAxBmAAB4Qg1BGhmAxQhmAxh4AAQhIg0gxhlg");
	this.shape_65.setTransform(137.7,262);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AkQhhQAyhIBkgyQBlgzB3AAQBKAxAyBjQAzBlAAB3QgyBIhkAzQhlAyh3AAQhKgxgyhjQgzhkAAh4g");
	this.shape_66.setTransform(136.9,259.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0066CC").s().p("AjdB7QgzhlAAh3QAyhHBkg0QBlgzB3AAQBKAyAyBkQAzBkAAB3QgyBIhkAzQhlAyh3ABQhKgygyhjg");
	this.shape_67.setTransform(136.9,259.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AkPhbQAuhKBjg0QBjg0B3AAQBMAuA0BiQA0BjAAB2QgvBKhjA0QhjA1h2AAQhMgvg0hhQg0hjAAh3g");
	this.shape_68.setTransform(136.2,256.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0066CC").s().p("AjbB/Qg0hkAAh2QAuhKBkg1QBjg0B2AAQBMAvAzBhQA1BkAAB2QgvBKhiA0QhjA1h3AAQhMgvg0hhg");
	this.shape_69.setTransform(136.2,256.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AkOhVQArhMBig2QBhg2B2AAQBOAsA1BgQA2BhAAB2QgsBMhhA2QhhA2h2AAQhOgsg1hgQg2hhAAh2g");
	this.shape_70.setTransform(135.4,253.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0066CC").s().p("AjYCCQg2hhAAh2QArhMBig2QBig2B1AAQBOAsA1BgQA2BhAAB2QgrBMhiA2QhhA2h1AAQhPgsg1hgg");
	this.shape_71.setTransform(135.4,253.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AkNhPQAphOBfg4QBgg3B1AAQBQAoA3BfQA3BgAAB1QgoBOhgA3QhgA4h0AAQhRgpg2heQg4hgAAh1g");
	this.shape_72.setTransform(134.7,251.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0066CC").s().p("AjWCGQg3hgAAh1QAphOBfg4QBgg3B0AAQBRApA2BeQA4BgAAB1QgoBOhgA4QhgA3h1AAQhQgpg3heg");
	this.shape_73.setTransform(134.7,251.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AkMhIQAlhRBfg5QBeg5B0AAQBSAmA4BdQA5BeAAB0QglBQheA5QhfA5hzAAQhTgmg4hcQg5hfAAhzg");
	this.shape_74.setTransform(133.9,248.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0066CC").s().p("AjTCKQg5hfAAhzQAlhRBfg5QBeg5B0AAQBSAmA4BdQA5BeAAB0QglBQheA5QhfA5hzAAQhTgmg4hcg");
	this.shape_75.setTransform(133.9,248.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AkLhCQAjhTBcg6QBdg7BzAAQBUAjA6BbQA6BdAABzQgiBShcA7QhdA6hzAAQhUgig6hcQg7hcAAhzg");
	this.shape_76.setTransform(133.1,245.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0066CC").s().p("AjQCNQg7hcAAhzQAihTBdg7QBdg6ByAAQBVAiA5BcQA7BcAABzQgiBThcA7QhdA6hzAAQhUgjg6hbg");
	this.shape_77.setTransform(133.1,245.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AkKg8QAfhVBbg8QBcg8ByAAQBWAfA7BaQA8BbAAByQgfBVhbA8QhbA8hyAAQhWggg8haQg8hbAAhxg");
	this.shape_78.setTransform(132.4,243);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0066CC").s().p("AjOCRQg8hbAAhyQAfhVBbg8QBcg8BxAAQBXAgA7BZQA8BcAABxQgfBVhbA8QhbA8hyAAQhXggg7hZg");
	this.shape_79.setTransform(132.4,243);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AkJg2QAchXBag+QBZg9BxAAQBZAcA9BZQA9BZAABxQgcBXhZA+QhaA9hxAAQhYgcg+hZQg9hZAAhxg");
	this.shape_80.setTransform(131.6,240.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0066CC").s().p("AjMCUQg9hZAAhxQAchXBag+QBZg9BxAAQBYAcA9BZQA+BZAABxQgcBXhZA+QhaA9hxAAQhYgcg+hZg");
	this.shape_81.setTransform(131.6,240.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AkIgwQAZhZBYg/QBYg/BwAAQBbAZA+BXQA/BYAABwQgZBZhYA/QhYA/hwAAQhbgZg+hXQg/hYAAhwg");
	this.shape_82.setTransform(130.9,237.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066CC").s().p("AjJCYQg/hYAAhwQAYhZBZg/QBYg/BvAAQBcAZA9BXQBABYAABwQgZBZhYA/QhYA/hwAAQhagZg/hXg");
	this.shape_83.setTransform(130.9,237.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AkHgqQAWhbBWhBQBXhABvAAQBcAWBABVQBBBXAABvQgWBbhWBBQhXBAhvAAQhcgWhAhVQhBhXAAhvg");
	this.shape_84.setTransform(130.1,234.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0066CC").s().p("AjGCcQhBhXAAhvQAWhbBWhBQBXhABvAAQBcAWBABVQBBBXAABvQgWBbhWBBQhXBAhvAAQhcgWhAhVg");
	this.shape_85.setTransform(130.1,234.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("AkGgkQAThdBUhCQBVhDBuAAQBfAUBCBTQBCBVAABuQgSBehVBCQhVBDhvAAQhegUhChTQhChVAAhvg");
	this.shape_86.setTransform(129.3,232.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0066CC").s().p("AjDCfQhDhUAAhvQAThdBVhCQBUhDBvAAQBeAUBCBUQBCBUAABuQgSBehWBCQhUBDhuAAQhfgUhBhUg");
	this.shape_87.setTransform(129.3,232.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AkFgeQAPhfBUhEQBThEBtAAQBhAQBDBTQBEBTAABtQgQBghTBDQhTBEhuAAQhggQhDhSQhEhTAAhug");
	this.shape_88.setTransform(128.6,229.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0066CC").s().p("AjBCjQhEhTAAhtQAPhgBUhEQBThEBuAAQBhAQBCBTQBEBTAABuQgQBfhTBEQhTBDhtAAQhhgQhDhSg");
	this.shape_89.setTransform(128.6,229.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AkEgXQANhiBRhFQBShGBsAAQBjAOBFBQQBFBSAABsQgNBihRBFQhSBGhsAAQhjgOhFhQQhFhSAAhsg");
	this.shape_90.setTransform(127.8,226.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0066CC").s().p("Ai+CnQhGhSAAhsQAMhiBShFQBShGBsAAQBjAOBEBQQBGBSAABsQgMBihSBFQhSBGhsAAQhkgOhDhQg");
	this.shape_91.setTransform(127.8,226.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AkDgRQAJhkBRhHQBQhHBrAAQBlAKBGBPQBHBRAABrQgJBkhQBHQhRBHhrAAQhmgLhGhPQhGhQAAhrg");
	this.shape_92.setTransform(127.1,223.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0066CC").s().p("Ai8CqQhHhQAAhrQAJhkBRhHQBQhHBrAAQBlAKBGBPQBHBRAABrQgKBkhPBHQhRBHhrAAQhlgLhGhPg");
	this.shape_93.setTransform(127.1,223.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AkCgLQAHhmBOhIQBPhJBqAAQBnAHBIBOQBIBPAABqQgGBmhOBJQhPBIhrAAQhngHhIhOQhIhOAAhrg");
	this.shape_94.setTransform(126.3,221.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0066CC").s().p("Ai6CuQhIhOAAhrQAHhmBOhIQBPhJBqAAQBnAHBIBOQBIBPAABqQgGBmhPBJQhOBIhrAAQhngHhIhOg");
	this.shape_95.setTransform(126.3,221.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AkBgFQADhoBOhKQBNhKBpAAQBpAEBJBMQBKBNAABqQgDBohNBKQhNBKhpAAQhqgEhJhMQhKhNAAhqg");
	this.shape_96.setTransform(125.5,218.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0066CC").s().p("Ai3CyQhKhNAAhqQADhoBOhKQBMhKBqAAQBpAEBJBMQBKBNAABqQgDBohNBKQhNBKhpAAQhqgEhJhMg");
	this.shape_97.setTransform(125.5,218.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AEBAAQAABqhMBLQhLBMhqAAQhpAAhMhMQhLhLAAhqQAAhpBLhLQBMhMBpAAQBqAABLBMQBMBLAABpg");
	this.shape_98.setTransform(124.8,215.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0066CC").s().p("Ai0C1QhMhLAAhqQAAhpBMhLQBLhMBpAAQBqAABLBMQBMBLAABpQAABqhMBLQhLBMhqAAQhpAAhLhMg");
	this.shape_99.setTransform(124.8,215.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AkDAAQAAhoBNhMQBMhLBqAAQBrAABNBLQBMBMAABoQAABqhMBLQhNBLhrAAQhqAAhMhLQhNhLAAhqg");
	this.shape_100.setTransform(123.6,214.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0066CC").s().p("Ai2C1QhNhLAAhqQAAhoBNhMQBMhLBqAAQBrAABNBLQBMBMAABoQAABqhMBLQhNBLhrAAQhqAAhMhLg");
	this.shape_101.setTransform(123.6,214.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AkGAAQAAhoBOhLQBNhLBrAAQBtAABNBLQBNBLAABoQAABphNBLQhNBLhtAAQhrAAhNhLQhOhLAAhpg");
	this.shape_102.setTransform(122.4,213.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0066CC").s().p("Ai5C0QhMhLAAhpQAAhoBMhLQBOhLBrAAQBsAABOBLQBMBLAABoQAABphMBLQhOBLhsAAQhrAAhOhLg");
	this.shape_103.setTransform(122.4,213.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AkIAAQAAhoBOhLQBOhKBsAAQBuAABOBKQBNBLAABoQAABphNBLQhOBKhuAAQhsAAhOhKQhOhLAAhpg");
	this.shape_104.setTransform(121.2,211.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0066CC").s().p("Ai6C0QhOhLAAhpQAAhoBOhLQBOhKBsAAQBuAABOBKQBNBLAABoQAABphNBLQhOBKhuAAQhsAAhOhKg");
	this.shape_105.setTransform(121.2,211.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AkLAAQAAhoBOhKQBPhKBuAAQBvAABOBKQBPBKAABoQAABohPBLQhOBKhvAAQhuAAhPhKQhOhLAAhog");
	this.shape_106.setTransform(120.1,210.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0066CC").s().p("Ai9CzQhOhLAAhoQAAhoBOhKQBPhKBuAAQBvAABOBKQBPBKAABoQAABohPBLQhOBKhvAAQhuAAhPhKg");
	this.shape_107.setTransform(120.1,210.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AkOAAQAAhnBPhKQBQhKBvAAQBvAABQBKQBQBKAABnQAABohQBLQhQBKhvAAQhvAAhQhKQhPhLAAhog");
	this.shape_108.setTransform(118.9,209.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0066CC").s().p("Ai+CyQhQhKAAhoQAAhnBQhKQBPhKBvgBQBwABBPBKQBQBKAABnQAABohQBKQhPBLhwAAQhvAAhPhLg");
	this.shape_109.setTransform(118.9,209.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AkRAAQAAhmBRhKQBQhKBwAAQBxAABQBKQBRBKAABmQAABohRBKQhQBKhxAAQhwAAhQhKQhRhKAAhog");
	this.shape_110.setTransform(117.7,207.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0066CC").s().p("AjACyQhRhLAAhnQAAhmBRhLQBQhJBwgBQBxABBQBJQBRBLAABmQAABnhRBLQhQBJhxAAQhwAAhQhJg");
	this.shape_111.setTransform(117.7,207.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("AkUAAQAAhnBShJQBRhJBxAAQByAABSBJQBRBJAABnQAABnhRBKQhSBJhyAAQhxAAhRhJQhShKAAhng");
	this.shape_112.setTransform(116.6,206.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0066CC").s().p("AjDCxQhRhKAAhnQAAhmBRhKQBShJBxAAQByAABSBJQBRBKAABmQAABnhRBKQhSBJhyAAQhxAAhShJg");
	this.shape_113.setTransform(116.6,206.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AkWAAQAAhmBShJQBShKByAAQBzAABSBKQBSBJAABmQAABnhSBJQhSBKhzAAQhyAAhShKQhShJAAhng");
	this.shape_114.setTransform(115.4,205.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0066CC").s().p("AjECwQhShJAAhnQAAhmBShJQBShKByAAQBzAABSBKQBSBJAABmQAABnhSBJQhSBKhzAAQhyAAhShKg");
	this.shape_115.setTransform(115.4,205.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AkZAAQAAhmBThJQBThJBzAAQB1AABTBJQBSBJAABmQAABnhSBJQhTBJh1AAQhzAAhThJQhThJAAhng");
	this.shape_116.setTransform(114.2,204);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0066CC").s().p("AjGCwQhThJAAhnQAAhmBThJQBShJB0AAQB1AABSBJQBTBJAABmQAABnhTBJQhSBJh1AAQh0AAhShJg");
	this.shape_117.setTransform(114.2,204);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AkcAAQAAhlBThJQBVhJB0AAQB1AABUBJQBUBJAABlQAABmhUBJQhUBJh1AAQh0AAhVhJQhThJAAhmg");
	this.shape_118.setTransform(113.1,202.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0066CC").s().p("AjICvQhUhJAAhmQAAhlBUhJQBThJB1AAQB2AABTBJQBUBJAABlQAABmhUBJQhTBJh2AAQh1AAhThJg");
	this.shape_119.setTransform(113.1,202.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AkfAAQAAhlBVhIQBUhJB2AAQB3AABUBJQBVBIAABlQAABmhVBIQhUBJh3AAQh2AAhUhJQhVhIAAhmg");
	this.shape_120.setTransform(111.9,201.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0066CC").s().p("AjKCuQhVhIAAhmQAAhlBVhIQBUhJB2AAQB3AABUBJQBVBIAABlQAABmhVBIQhUBJh3AAQh2AAhUhJg");
	this.shape_121.setTransform(111.9,201.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AkiAAQAAhlBVhIQBWhIB3AAQB4AABVBIQBWBIAABlQAABlhWBIQhVBJh4AAQh3AAhWhJQhVhIAAhlg");
	this.shape_122.setTransform(110.7,200.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0066CC").s().p("AjNCtQhUhIAAhlQAAhkBUhJQBWhIB3AAQB4AABVBIQBWBJgBBkQABBlhWBIQhVBJh4AAQh3AAhWhJg");
	this.shape_123.setTransform(110.7,200.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AkkAAQAAhkBWhIQBWhIB4AAQB5AABWBIQBWBIAABkQAABlhWBIQhWBIh5AAQh4AAhWhIQhWhIAAhlg");
	this.shape_124.setTransform(109.5,198.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0066CC").s().p("AjOCtQhWhIAAhlQAAhkBWhIQBWhIB4AAQB5AABWBIQBWBIAABkQAABlhWBIQhWBIh5AAQh4AAhWhIg");
	this.shape_125.setTransform(109.5,198.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AknAAQAAhkBXhHQBXhIB5AAQB6AABXBIQBXBHAABkQAABlhXBHQhXBIh6AAQh5AAhXhIQhXhHAAhlg");
	this.shape_126.setTransform(108.4,197.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0066CC").s().p("AjQCsQhXhHAAhlQAAhkBXhHQBXhIB5AAQB6AABXBIQBXBHAABkQAABlhXBHQhXBIh6AAQh5AAhXhIg");
	this.shape_127.setTransform(108.4,197.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("AkqAAQAAhjBYhHQBYhIB6AAQB7AABYBIQBYBHAABjQAABkhYBIQhYBHh7AAQh6AAhYhHQhYhIAAhkg");
	this.shape_128.setTransform(107.2,196.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0066CC").s().p("AjSCsQhYhIAAhkQAAhjBYhHQBYhIB6AAQB7AABYBIQBYBHAABjQAABkhYBIQhYBHh7AAQh6AAhYhHg");
	this.shape_129.setTransform(107.2,196.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("AktAAQAAhjBZhHQBYhHB8AAQB8AABZBHQBZBHAABjQAABkhZBHQhZBHh8AAQh8AAhYhHQhZhHAAhkg");
	this.shape_130.setTransform(106,194.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0066CC").s().p("AjUCrQhZhHAAhkQAAhjBZhHQBYhHB8AAQB8AABZBHQBZBHAABjQAABkhZBHQhZBHh8AAQh8AAhYhHg");
	this.shape_131.setTransform(106,194.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AkwAAQAAhjBahGQBZhHB9AAQB+AABZBHQBaBGAABjQAABkhaBGQhZBHh+AAQh9AAhZhHQhahGAAhkg");
	this.shape_132.setTransform(104.9,193.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0066CC").s().p("AjWCqQhahHAAhjQAAhiBahIQBZhGB9AAQB+AABZBGQBaBIAABiQAABjhaBHQhZBHh+AAQh9AAhZhHg");
	this.shape_133.setTransform(104.9,193.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AkyAAQAAhiBahHQBahGB+AAQB/AABaBGQBaBHAABiQAABjhaBHQhaBGh/AAQh+AAhahGQhahHAAhjg");
	this.shape_134.setTransform(103.7,192.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0066CC").s().p("AjYCqQhahHAAhjQAAhiBahHQBahGB+AAQB/AABaBGQBaBHAABiQAABjhaBHQhaBGh/AAQh+AAhahGg");
	this.shape_135.setTransform(103.7,192.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("Ak1AAQAAhiBbhGQBbhGB/AAQCAAABbBGQBbBGAABiQAABjhbBGQhbBGiAAAQh/AAhbhGQhbhGAAhjg");
	this.shape_136.setTransform(102.5,190.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0066CC").s().p("AjaCpQhbhGAAhjQAAhiBbhGQBbhGB/AAQCAAABbBGQBbBGAABiQAABjhbBGQhbBGiAAAQh/AAhbhGg");
	this.shape_137.setTransform(102.5,190.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("Ak4AAQAAhhBchGQBchGCAAAQCBAABcBGQBcBGAABhQAABihcBGQhcBGiBAAQiAAAhchGQhchGAAhig");
	this.shape_138.setTransform(101.3,189.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0066CC").s().p("AjcCoQhchGAAhiQAAhhBchGQBchGCAAAQCBAABcBGQBcBGAABhQAABihcBGQhcBGiBAAQiAAAhchGg");
	this.shape_139.setTransform(101.3,189.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("Ak7AAQAAhhBdhGQBchGCCAAQCCAABdBGQBcBGAABhQAABihcBGQhdBGiCAAQiCAAhchGQhdhGAAhig");
	this.shape_140.setTransform(100.2,188.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0066CC").s().p("AjeCoQhchGAAhiQAAhhBchGQBchFCCgBQCCABBdBFQBdBGAABhQAABihdBGQhdBFiCAAQiCAAhchFg");
	this.shape_141.setTransform(100.2,188.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("Ak9AAQAAhgBdhGQBehFCCAAQCDAABeBFQBdBGAABgQAABihdBFQheBGiDAAQiCAAhehGQhdhFAAhig");
	this.shape_142.setTransform(99,187);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0066CC").s().p("AjgCnQhdhGAAhhQAAhhBdhFQBehFCCAAQCDAABeBFQBdBFAABhQAABhhdBGQheBFiDABQiCgBhehFg");
	this.shape_143.setTransform(99,187);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1,1,1).p("AlAAAQAAhgBehGQBehECEAAQCEAABfBEQBeBGAABgQAABhheBFQhfBFiEAAQiEAAhehFQhehFAAhhg");
	this.shape_144.setTransform(97.8,185.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0066CC").s().p("AjiCmQhehFAAhhQAAhgBehGQBehECEAAQCEAABfBEQBeBGAABgQAABhheBFQhfBFiEAAQiEAAhehFg");
	this.shape_145.setTransform(97.8,185.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AlDAAQAAhgBfhFQBfhFCFAAQCFAABfBFQBgBFAABgQAABhhgBFQhfBFiFAAQiFAAhfhFQhfhFAAhhg");
	this.shape_146.setTransform(96.7,184.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0066CC").s().p("AjkCmQhfhFAAhhQAAhgBfhFQBfhFCFAAQCFAABfBFQBgBFAABgQAABhhgBFQhfBFiFAAQiFAAhfhFg");
	this.shape_147.setTransform(96.7,184.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("AlGAAQAAhfBghFQBghFCGAAQCHAABgBFQBgBFAABfQAABghgBFQhgBFiHAAQiGAAhghFQhghFAAhgg");
	this.shape_148.setTransform(95.5,183);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0066CC").s().p("AjmClQhghFAAhgQAAhfBghFQBghFCGAAQCHAABgBFQBgBFAABfQAABghgBFQhgBFiHAAQiGAAhghFg");
	this.shape_149.setTransform(95.5,183);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1,1,1).p("AlJAAQAAhfBhhEQBhhFCHAAQCIAABhBFQBhBEAABfQAABghhBEQhhBFiIAAQiHAAhhhFQhhhEAAhgg");
	this.shape_150.setTransform(94.3,181.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0066CC").s().p("AjoCkQhhhEAAhgQAAhfBhhEQBhhFCHAAQCIAABhBFQBhBEAABfQAABghhBEQhhBFiIAAQiHAAhhhFg");
	this.shape_151.setTransform(94.3,181.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AlMAAQAAhfBihEQBihECIAAQCKAABhBEQBiBEAABfQAABghiBEQhhBEiKAAQiIAAhihEQhihEAAhgg");
	this.shape_152.setTransform(93.1,180.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0066CC").s().p("AjqCkQhhhEgBhgQABhfBhhEQBihECIAAQCKAABhBEQBhBEAABfQAABghhBEQhhBEiKAAQiIAAhihEg");
	this.shape_153.setTransform(93.1,180.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("AlOAAQAAheBihEQBjhECJAAQCLAABiBEQBiBEAABeQAABfhiBEQhiBEiLAAQiJAAhjhEQhihEAAhfg");
	this.shape_154.setTransform(91.9,179.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0066CC").s().p("AjsCjQhihDAAhgQAAhfBihDQBjhECJAAQCLAABiBEQBiBDAABfQAABghiBDQhiBEiLAAQiJAAhjhEg");
	this.shape_155.setTransform(91.9,179.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("AlRAAQAAheBjhEQBjhDCLAAQCMAABjBDQBjBEAABeQAABfhjBDQhjBEiMAAQiLAAhjhEQhjhDAAhfg");
	this.shape_156.setTransform(90.8,177.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0066CC").s().p("AjuCjQhjhEAAhfQAAheBjhEQBjhDCLAAQCMAABjBDQBjBEAABeQAABfhjBEQhjBDiMAAQiLAAhjhDg");
	this.shape_157.setTransform(90.8,177.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("AlUAAQAAheBkhDQBlhDCLAAQCNAABkBDQBkBDAABeQAABfhkBCQhkBEiNAAQiLAAhlhEQhkhCAAhfg");
	this.shape_158.setTransform(89.6,176.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0066CC").s().p("AjwChQhkhDAAheQAAhdBkhEQBlhDCLAAQCNAABjBDQBlBEAABdQAABehlBDQhjBEiNAAQiLAAhlhEg");
	this.shape_159.setTransform(89.6,176.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1,1,1).p("AlXAAQAAhdBlhDQBlhDCNAAQCOAABlBDQBlBDAABdQAABehlBDQhlBDiOAAQiNAAhlhDQhlhDAAheg");
	this.shape_160.setTransform(88.4,175.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0066CC").s().p("AjyChQhlhDAAheQAAhdBlhDQBlhDCNAAQCOAABlBDQBlBDAABdQAABehlBDQhlBDiOAAQiNAAhlhDg");
	this.shape_161.setTransform(88.4,175.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1,1,1).p("AlaAAQAAhdBmhDQBmhCCOAAQCPAABmBCQBmBDAABdQAABehmBCQhmBDiPAAQiOAAhmhDQhmhCAAheg");
	this.shape_162.setTransform(87.3,173.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0066CC").s().p("Aj0CgQhmhCABheQgBhdBmhDQBmhCCOAAQCPAABmBCQBlBDAABdQAABehlBCQhmBDiPAAQiOAAhmhDg");
	this.shape_163.setTransform(87.3,173.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("AlcAAQAAhdBmhCQBnhCCPAAQCQAABnBCQBmBCAABdQAABdhmBDQhnBCiQAAQiPAAhnhCQhmhDAAhdg");
	this.shape_164.setTransform(86.1,172.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0066CC").s().p("Aj2CgQhmhDAAhdQAAhdBmhCQBnhCCPAAQCQAABnBCQBmBCAABdQAABdhmBDQhnBCiQAAQiPAAhnhCg");
	this.shape_165.setTransform(86.1,172.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("AlfAAQAAhcBnhCQBohCCQAAQCRAABnBCQBoBCAABcQAABdhoBCQhnBCiRAAQiQAAhohCQhnhCAAhdg");
	this.shape_166.setTransform(84.9,171.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0066CC").s().p("Aj3CfQhohCAAhdQAAhcBohCQBnhCCQAAQCRAABnBCQBoBCAABcQAABdhoBCQhnBDiRAAQiQAAhnhDg");
	this.shape_167.setTransform(84.9,171.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("AliAAQAAhbBohCQBphDCRAAQCTAABoBDQBoBCAABbQAABdhoBCQhoBCiTAAQiRAAhphCQhohCAAhdg");
	this.shape_168.setTransform(83.7,170);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0066CC").s().p("Aj6CeQhohCAAhcQAAhbBohCQBphDCRAAQCTAABoBDQBoBCAABbQAABchoBCQhoBCiTAAQiRAAhphCg");
	this.shape_169.setTransform(83.7,170);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("AllAAQAAhcBphBQBphCCTAAQCUAABoBCQBqBBAABcQAABchqBBQhoBDiUAAQiTAAhphDQhphBAAhcg");
	this.shape_170.setTransform(82.6,168.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0066CC").s().p("Aj8CdQhphBAAhcQAAhbBphCQBphCCTAAQCUAABoBCQBqBCAABbQAABchqBBQhoBCiUABQiTgBhphCg");
	this.shape_171.setTransform(82.6,168.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1,1,1).p("AloAAQAAhbBqhBQBqhCCUAAQCVAABqBCQBpBBAABbQAABchpBBQhqBCiVAAQiUAAhqhCQhqhBAAhcg");
	this.shape_172.setTransform(81.4,167.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0066CC").s().p("Aj+CdQhqhBAAhcQAAhbBqhBQBqhCCUAAQCVAABqBCQBqBBAABbQAABchqBBQhqBCiVAAQiUAAhqhCg");
	this.shape_173.setTransform(81.4,167.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("AlqAAQAAhbBqhBQBrhBCVAAQCWAABqBBQBrBBAABbQAABbhrBBQhqBCiWAAQiVAAhrhCQhqhBAAhbg");
	this.shape_174.setTransform(80.2,166);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0066CC").s().p("AkACcQhqhBAAhbQAAhbBqhBQBrhBCVAAQCWAABqBBQBrBBAABbQAABbhrBBQhqBCiWAAQiVAAhrhCg");
	this.shape_175.setTransform(80.2,166);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1,1,1).p("AltAAQAAhaBrhBQBshACWAAQCXAABsBAQBrBBAABaQAABbhrBBQhsBBiXAAQiWAAhshBQhrhBAAhbg");
	this.shape_176.setTransform(79.1,164.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0066CC").s().p("AkBCcQhshBAAhbQAAhaBshBQBrhBCWAAQCXAABrBBQBsBBAABaQAABbhsBBQhrBBiXAAQiWAAhrhBg");
	this.shape_177.setTransform(79.1,164.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1,1,1).p("AlwAAQAAhZBshBQBthBCXAAQCYAABsBBQBtBBAABZQAABbhtBAQhsBBiYAAQiXAAhthBQhshAAAhbg");
	this.shape_178.setTransform(77.9,163.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0066CC").s().p("AkECbQhshAAAhbQAAhZBshBQBthBCXAAQCYAABsBBQBtBBAABZQAABbhtBAQhsBBiYAAQiXAAhthBg");
	this.shape_179.setTransform(77.9,163.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("AlzAAQAAhZBthAQBthBCZAAQCZAABuBBQBtBAAABZQAABahtBBQhuBAiZAAQiZAAhthAQhthBAAhag");
	this.shape_180.setTransform(76.7,162.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0066CC").s().p("AkGCbQhshBAAhaQAAhZBshAQBuhBCYAAQCaAABsBBQBuBAAABZQAABahuBBQhsBAiaAAQiYAAhuhAg");
	this.shape_181.setTransform(76.7,162.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1,1,1).p("Al2AAQAAhZBuhAQBuhACaAAQCbAABtBAQBvBAAABZQAABahvBAQhtBAibAAQiaAAhuhAQhuhAAAhag");
	this.shape_182.setTransform(75.6,160.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0066CC").s().p("AkICaQhthAAAhaQAAhZBthAQBvhACZAAQCbAABtBAQBvBAgBBZQABBahvBAQhtBAibAAQiZAAhvhAg");
	this.shape_183.setTransform(75.6,160.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1,1,1).p("Al4AAQAAhZBug/QBvhACbAAQCcAABuBAQBvA/AABZQAABahvA/QhuBAicAAQibAAhvhAQhug/AAhag");
	this.shape_184.setTransform(74.4,159.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0066CC").s().p("AkKCZQhug/AAhaQAAhZBug/QBvhACbAAQCcAABuBAQBvA/AABZQAABahvA/QhuBAicAAQibAAhvhAg");
	this.shape_185.setTransform(74.4,159.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1,1,1).p("Al7AAQAAhYBvhAQBwg/CcAAQCdAABvA/QBwBAAABYQAABahwA+QhvBAidAAQicAAhwhAQhvg+AAhag");
	this.shape_186.setTransform(73.2,158.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0066CC").s().p("AkMCYQhvg+AAhaQAAhYBvhAQBwg/CcAAQCdAABvA/QBwBAAABYQAABahwA+QhvBAidAAQicAAhwhAg");
	this.shape_187.setTransform(73.2,158.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("Al+AAQAAhYBwg/QBxg/CdAAQCeAABwA/QBxA/AABYQAABZhxA/QhwA/ieAAQidAAhxg/Qhwg/AAhZg");
	this.shape_188.setTransform(72,156.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0066CC").s().p("AkOCYQhwg/AAhZQAAhYBwg/QBxg/CdAAQCeAABwA/QBxA/AABYQAABZhxA/QhwA/ieAAQidAAhxg/g");
	this.shape_189.setTransform(72,156.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1,1,1).p("AmAAAQAAhYBwg/QByg+CeAAQCgAABwA+QByA/AABYQAABYhyA/QhwA/igAAQieAAhyg/Qhwg/AAhYg");
	this.shape_190.setTransform(70.9,155.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0066CC").s().p("AkPCXQhxg+gBhZQABhXBxhAQBxg+CeAAQCgAABwA+QBxBAAABXQAABZhxA+QhwA/igAAQieAAhxg/g");
	this.shape_191.setTransform(70.9,155.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("AmDAAQAAhXByg/QByg+CfAAQCgAAByA+QByA/AABXQAABYhyA/QhyA+igAAQifAAhyg+Qhyg/AAhYg");
	this.shape_192.setTransform(69.7,154.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0066CC").s().p("AkRCXQhyg/AAhYQAAhXByg/QByg+CfAAQCgAAByA+QByA/AABXQAABYhyA/QhyA+igAAQifAAhyg+g");
	this.shape_193.setTransform(69.7,154.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1,1,1).p("AmGAAQAAhXByg+QBzg+ChAAQChAABzA+QBzA+AABXQAABYhzA+QhzA+ihAAQihAAhzg+Qhyg+AAhYg");
	this.shape_194.setTransform(68.5,152.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0066CC").s().p("AkUCWQhyg+AAhYQAAhXByg+QBzg+ChAAQChAABzA+QBzA+AABXQAABYhzA+QhzA+ihAAQihAAhzg+g");
	this.shape_195.setTransform(68.5,152.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1,1,1).p("AmJAAQAAhWB0g+QBzg+CiAAQCjAABzA+QB0A+AABWQAABXh0A+QhzA+ijAAQiiAAhzg+Qh0g+AAhXg");
	this.shape_196.setTransform(67.4,151.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0066CC").s().p("AkWCVQhzg+AAhXQAAhWBzg+QB0g+CiAAQCiAAB0A+QB0A+AABWQAABXh0A+Qh0A+iiAAQiiAAh0g+g");
	this.shape_197.setTransform(67.4,151.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1,1).p("AmMAAQAAhWB0g+QB1g+CjAAQCkAAB0A+QB1A+AABWQAABXh1A9Qh0A+ikAAQijAAh1g+Qh0g9AAhXg");
	this.shape_198.setTransform(66.2,150.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0066CC").s().p("AkYCVQh0g+AAhXQAAhWB0g+QB1g9CjAAQCkAAB0A9QB1A+AABWQAABXh1A+Qh0A9ikAAQijAAh1g9g");
	this.shape_199.setTransform(66.2,150.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1,1,1).p("AGQAAQAABWh2A+Qh1A+ilAAQikAAh2g+Qh1g+AAhWQAAhVB1g+QB2g+CkAAQClAAB1A+QB2A+AABVg");
	this.shape_200.setTransform(65,149);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0066CC").s().p("AkZCUQh2g+ABhWQgBhWB2g9QB1g+CkAAQClAAB1A+QB2A9AABWQAABWh2A+Qh1A9ilABQikgBh1g9g");
	this.shape_201.setTransform(65,149);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1,1,1).p("AmMABQABhVBzg+QBRgsBogOQAtgFAyAAQCjAAB1A8QB0A/ABBWQAABUhxA+Qh2A/ikABQgzABgwgFQhlgPhQgqQh0g9gChXg");
	this.shape_202.setTransform(64.4,146.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0066CC").s().p("AhhDOQhlgPhQgqQh0g9gChXQABhVBzg+QBRgsBogOQAtgFAyAAQCjAAB1A8QB0A/ABBWQAABUhxA+Qh2A/ikABIgIAAQgwAAgrgEg");
	this.shape_203.setTransform(64.4,146.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1,1,1).p("AmJADQABhVBxg+QBQgtBngQQAtgFAyAAQCiAAB2A7QByBAABBVQABBVhuA+Qh2A/ijADQgzABgvgEQhlgPhQgrQhzg9gDhWg");
	this.shape_204.setTransform(63.8,144.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0066CC").s().p("AheDQQhlgPhQgrQhzg9gDhWQABhVBxg+QBQgtBngQQAtgFAyAAQCiAAB2A7QByBAABBVQABBVhuA+Qh2A/ijADIgRAAQgqAAgngDg");
	this.shape_205.setTransform(63.8,144.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1,1,1).p("AmGAFQAChVBvg/QBPguBlgRQAtgFAyAAQChAAB2A5QBxBBABBVQACBVhrA+Qh2BAiiAFQgyACgvgEQhlgQhPgrQhzg9gEhVg");
	this.shape_206.setTransform(63.2,141.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0066CC").s().p("AhbDSQhlgQhPgrQhzg9gEhVQAChVBvg/QBPguBlgRQAtgFAyAAQChAAB2A5QBxBBABBVQACBVhrA+Qh2BAiiAFIggAAQgiAAgfgCg");
	this.shape_207.setTransform(63.2,141.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1,1,1).p("AmEAHQAChVBuhAQBOgvBjgTQAtgFAyAAQChAAB2A5QBvBBACBVQADBVhpA/Qh1BAihAGQgyADgvgEQhkgQhPgrQhyg9gGhUg");
	this.shape_208.setTransform(62.7,139.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0066CC").s().p("AhZDTQhkgQhPgrQhyg9gGhUQAChVBuhAQBOgvBjgTQAtgFAyAAQChAAB2A5QBvBBACBVQADBVhpA/Qh1BAihAGIgoACQgeAAgbgDg");
	this.shape_209.setTransform(62.7,139.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(1,1,1).p("AmBAIQADhVBshAQBMgvBigVQAtgFAyAAQCgAAB3A3QBtBCADBWQADBUhmBAQh1BAigAIQgxADgvgDQhjgRhQgrQhwg9gIhUg");
	this.shape_210.setTransform(62.1,137.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0066CC").s().p("AhWDVQhjgRhQgrQhwg9gIhUQADhVBshAQBMgvBigVQAtgFAyAAQCgAAB3A3QBtBCADBWQADBUhmBAQh1BAigAIQgaACgaAAIgsgCg");
	this.shape_211.setTransform(62.1,137.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1,1,1).p("Al+AKQADhVBqhAQBMgxBggWQAtgFAxAAQCgAAB4A2QBrBCADBWQAEBVhjBAQh1BAifAKQgxADgvgCQhigShPgrQhwg9gJhTg");
	this.shape_212.setTransform(61.5,134.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0066CC").s().p("AhUDXQhigShPgrQhwg9gJhTQADhVBqhAQBMgxBggWQAtgFAxAAQCgAAB4A2QBrBCADBWQAEBVhjBAQh1BAifAKQgeACgfAAIgjgBg");
	this.shape_213.setTransform(61.5,134.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(1,1,1).p("Al8ALQAEhVBohBQBLgxBegYQAtgEAyAAQCfAAB4A0QBpBDAEBWQAEBUhgBBQh1BBidALQgxAEgugBQhigThPgsQhvg8gLhTg");
	this.shape_214.setTransform(60.9,132.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0066CC").s().p("AhRDZQhigThPgsQhvg8gLhTQAEhVBohBQBLgxBegYQAtgEAyAAQCfAAB4A0QBpBDAEBWQAEBUhgBBQh1BBidALQgmADgmAAIgTAAg");
	this.shape_215.setTransform(60.9,132.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(1,1,1).p("Al5AMQAFhVBnhBQBJgyBdgZQAtgFAxAAQCfAAB4AzQBnBDAFBWQAFBVhdBBQh1BBicANQgxAFgugBQhhgUhPgsQhug8gNhSg");
	this.shape_216.setTransform(60.3,130.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0066CC").s().p("AhODaQhhgUhPgsQhug8gNhSQAFhVBnhBQBJgyBdgZQAtgFAxAAQCfAAB4AzQBnBDAFBWQAFBVhdBBQh1BBicANQgsAFgrAAIgIgBg");
	this.shape_217.setTransform(60.3,130.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(1,1,1).p("Al2AOQAFhVBlhCQBIgzBbgaQAtgFAxAAQCeAAB5AyQBmBEAFBVQAFBVhaBCQh0BCibAOQgxAFguAAQhggUhPgsQhtg8gOhSg");
	this.shape_218.setTransform(59.7,127.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#0066CC").s().p("Aj7CbQhtg7gOhSQAFhVBlhCQBIgzBbgbQAtgEAxAAQCeAAB5AyQBmBEAFBVQAFBVhaBCQh0BBibAPQgxAFguAAQhggUhPgtg");
	this.shape_219.setTransform(59.7,127.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1,1,1).p("AlzAPQAFhVBjhCQBHg1BagbQAtgFAxAAQCdAAB5AyQBlBDAFBWQAGBUhXBDQh0BCiaAQQgwAFguABQhggVhOgtQhtg8gPhQg");
	this.shape_220.setTransform(59.1,125.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0066CC").s().p("Aj3CcQhtg9gPhQQAFhVBjhDQBHg0BagcQAtgDAxAAQCdAAB5AwQBlBEAFBWQAGBUhXBCQh0BDiaAQQgwAFguABQhggVhOgsg");
	this.shape_221.setTransform(59.1,125.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(1,1,1).p("AlxARQAHhVBhhEQBGg0BYgeQAtgEAxAAQCdAAB5AwQBiBEAHBWQAGBVhUBCQh0BCiZASQgwAGgtACQhggWhOgtQhsg8gRhPg");
	this.shape_222.setTransform(58.5,123.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0066CC").s().p("Aj0CdQhsg9gRhPQAHhVBhhEQBGg0BYgeQAtgEAxAAQCdAAB5AwQBiBEAHBWQAGBVhUBCQh0BCiZASQgwAHgtABQhggWhOgsg");
	this.shape_223.setTransform(58.5,123.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(1,1,1).p("AluASQAHhVBfhEQBFg2BWgeQAtgFAxAAQCcAAB6AvQBhBFAHBWQAGBUhRBDQh0BDiXATQgwAHgtADQhfgXhOgtQhrg8gShPg");
	this.shape_224.setTransform(58,120.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0066CC").s().p("AjxCdQhrg8gShPQAHhVBfhEQBFg1BWggQAtgDAxAAQCcAAB6AuQBhBFAHBVQAGBVhRBDQh0BDiXAUQgwAGgtADQhfgYhOgsg");
	this.shape_225.setTransform(58,120.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(1,1,1).p("AlrAUQAHhWBehEQBDg2BVghQAtgEAxAAQCcAAB6AuQBeBFAIBWQAHBUhOBEQh0BDiWAVQgvAIgtACQhegXhOgtQhqg8gUhOg");
	this.shape_226.setTransform(57.4,118.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0066CC").s().p("AjtCdQhqg7gUhOQAHhWBehEQBDg2BVghQAtgEAxAAQCcAAB6AuQBeBFAIBWQAHBUhOBEQh0BDiWAVQgvAIgtACQhegXhOgug");
	this.shape_227.setTransform(57.4,118.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(1,1,1).p("AlpAUQAJhVBbhFQBDg3BTgiQAtgDAwAAQCcAAB6ArQBdBGAIBXQAIBThLBFQhzBDiWAXQguAIguADQhdgYhOgtQhpg8gWhOg");
	this.shape_228.setTransform(56.8,116.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0066CC").s().p("AjqCeQhpg7gWhPQAJhVBbhFQBDg2BTgjQAtgDAwAAQCcgBB6AtQBdBGAIBWQAIBThLBFQhzBEiWAWQguAIguADQhdgYhOgtg");
	this.shape_229.setTransform(56.8,116.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(1,1,1).p("AlmAVQAJhVBZhFQBCg4BSgkQAtgDAwAAQCaAAB7AqQBcBHAIBWQAJBUhIBFQh0BEiUAYQguAJgtAEQhdgZhOguQhog7gXhOg");
	this.shape_230.setTransform(56.2,113.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0066CC").s().p("AjnCeQhog7gXhOQAJhUBZhFQBCg5BSgkQAtgDAwAAQCaAAB7ArQBcBGAIBWQAJBUhIBFQh0BEiUAYQguAIgtAFQhdgZhOgug");
	this.shape_231.setTransform(56.2,113.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1,1,1).p("AlkAXQAJhVBYhGQBBg5BQglQAtgEAwAAQCaAAB7AqQBaBHAJBWQAJBUhFBFQhzBEiTAaQguAJgtAFQhcgZhOguQhng8gZhMg");
	this.shape_232.setTransform(55.7,111.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0066CC").s().p("AjkCfQhng8gZhMQAJhVBYhFQBBg6BQglQAtgDAwAAQCaAAB7ApQBaBHAJBWQAJBVhFBEQhzBFiTAaQguAIgtAFQhcgahOgtg");
	this.shape_233.setTransform(55.7,111.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(1,1,1).p("AlhAYQAKhVBWhGQA/g6BPgnQAtgDAwAAQCZAAB8AoQBYBIAKBVQAJBVhCBFQhzBFiSAbQguAKgsAGQhcgbhNguQhng7gahMg");
	this.shape_234.setTransform(55.1,109.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0066CC").s().p("AjgCfQhng7gahMQAKhVBWhGQA/g6BPgnQAtgDAwAAQCZAAB8AoQBYBIAKBVQAJBVhCBFQhzBFiSAbQguAKgsAGQhcgbhNgug");
	this.shape_235.setTransform(55.1,109.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(1,1,1).p("AleAaQAKhVBVhHQA+g7BNgoQAtgEAwAAQCYAAB8AnQBXBIAKBWQAKBVg/BGQhzBFiRAdQgtAKgtAHQhbgchNguQhlg7gchLg");
	this.shape_236.setTransform(54.5,106.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0066CC").s().p("AjdCgQhlg7gchLQAKhVBVhHQA+g7BNgoQAtgEAwABQCYgBB8AnQBXBIAKBXQAKBUg/BGQhzBFiRAdQgtAKgtAHQhbgchNgug");
	this.shape_237.setTransform(54.5,106.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(1,1,1).p("AlcAbQALhVBThHQA9g8BLgpQAtgEAwAAQCYAAB8AmQBVBIALBWQALBVg9BGQhzBGiPAeQgtALgsAHQhbgchNgvQhlg6gdhLg");
	this.shape_238.setTransform(53.9,104.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0066CC").s().p("AjaCgQhlg7gdhKQALhVBThHQA9g8BLgqQAtgDAwAAQCYAAB8AlQBVBJALBWQALBVg9BGQhzBGiPAeQgtALgsAHQhbgchNgvg");
	this.shape_239.setTransform(53.9,104.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(1,1,1).p("AlZAdQAMhVBQhJQA8g8BKgrQAtgEAwAAQCXAAB9AlQBTBJALBWQAMBVg6BGQhyBGiPAgQgtAMgsAIQhZgehNguQhkg7gfhJg");
	this.shape_240.setTransform(53.3,102.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0066CC").s().p("AjWChQhkg7gfhKQAMhUBQhIQA8g9BKgrQAtgEAwABQCXAAB9AkQBTBJALBWQAMBUg6BHQhyBGiPAgQgtAMgsAHQhZgdhNgug");
	this.shape_241.setTransform(53.3,102.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1,1,1).p("AlXAeQANhVBOhJQA7g9BJgtQAsgDAwAAQCXAAB9AjQBRBKAMBWQAMBUg2BIQhzBGiNAiQgsAMgsAIQhagehMguQhjg7ghhJg");
	this.shape_242.setTransform(52.8,100);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0066CC").s().p("AjTCiQhjg7ghhJQANhWBOhIQA7g+BJgsQAsgDAwAAQCXAAB9AjQBRBKAMBWQAMBUg2BIQhzBGiNAiQgsAMgsAIQhagehMgug");
	this.shape_243.setTransform(52.8,100);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(1,1,1).p("AlUAeQANhVBNhJQA6g+BGguQAtgDAwAAQCWAAB+AiQBPBKANBWQAMBVg0BIQhyBGiMAjQgtANgrAKQhYgghNgvQhig6gihJg");
	this.shape_244.setTransform(52.2,97.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0066CC").s().p("AjQChQhig6gihJQANhVBNhIQA6g/BGgtQAtgEAwAAQCWAAB+AiQBPBKANBXQAMBUg0BIQhyBGiMAjQgtANgrAKQhYgghNgvg");
	this.shape_245.setTransform(52.2,97.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(1,1,1).p("AlRAgQANhVBMhKQA4g/BFgvQAtgDAvAAQCWAAB+AgQBOBLANBWQANBUgxBJQhyBHiKAlQguANgqAKQhYgghMgvQhig6gjhIg");
	this.shape_246.setTransform(51.6,95.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0066CC").s().p("AjMCiQhig6gjhIQANhVBMhJQA4hABFgvQAtgDAvAAQCWAAB+AhQBOBKANBXQANBUgxBIQhyBHiKAlQguAOgqAJQhYgghMgvg");
	this.shape_247.setTransform(51.6,95.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(1,1,1).p("AlPAhQAOhVBKhKQA3hABEgxQAtgCAvAAQCVAAB+AeQBMBLAOBXQAOBUguBKQhyBHiKAmQgtAOgqAKQhXgghMgwQhhg5glhIg");
	this.shape_248.setTransform(51,93);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0066CC").s().p("AjJCiQhhg6glhHQAOhVBKhKQA3hABEgxQAtgDAvAAQCVAAB+AgQBMBKAOBXQAOBUguBJQhyBIiKAmQgtAOgqAKQhXgghMgwg");
	this.shape_249.setTransform(51,93);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(1,1,1).p("AlMAjQAOhVBIhLQA2hBBCgyQAtgDAvAAQCVAAB+AeQBKBMAPBWQAOBUgrBKQhxBHiJApQgtAOgpALQhXgihMgvQhgg6gmhGg");
	this.shape_250.setTransform(50.5,90.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#0066CC").s().p("AjGCjQhgg6gmhGQAOhVBIhLQA2hBBCgyQAtgDAvAAQCVAAB+AeQBKBMAPBWQAOBUgrBKQhxBHiJApQgtAOgpALQhXgihMgvg");
	this.shape_251.setTransform(50.5,90.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(1,1,1).p("AlKAkQAPhVBGhLQA1hCBBg0QAsgCAvAAQCUAAB/AdQBJBMAPBVQAOBVgnBKQhyBIiHAqQgtAPgpAMQhWgjhMgvQhfg6gohGg");
	this.shape_252.setTransform(49.9,88.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0066CC").s().p("AjDCkQhfg6gohGQAPhVBGhLQA1hCBBg0QAsgDAvAAQCUAAB/AeQBJBLAPBXQAOBUgnBKQhyBIiHAqQgtAPgpALQhWgihMgvg");
	this.shape_253.setTransform(49.9,88.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(1,1,1).p("AlHAlQAQhVBEhLQA0hDA/g2QAsgCAvAAQCTAACAAcQBHBNAPBVQAPBVgkBLQhyBIiGAsQgtAPgoAMQhWgjhLgvQhfg6gphGg");
	this.shape_254.setTransform(49.3,86);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0066CC").s().p("Ai/ClQhfg6gphFQAQhWBEhLQA0hDA/g2QAsgCAvAAQCTAACAAcQBHBMAPBWQAPBVgkBKQhyBJiGAsQgtAPgoAMQhWgjhLgvg");
	this.shape_255.setTransform(49.3,86);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1,1,1).p("AlFAnQAQhVBDhMQAzhEA9g3QAtgCAuAAQCTAACAAaQBFBNAQBWQAQBVgiBLQhxBIiFAuQgtAQgoANQhVgkhLgwQheg6grhEg");
	this.shape_256.setTransform(48.8,83.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0066CC").s().p("Ai8CkQheg5grhFQAQhUBDhNQAzhDA9g3QAtgDAuAAQCTAACAAbQBFBNAQBWQAQBUgiBLQhxBJiFAtQgtARgoANQhVgkhLgxg");
	this.shape_257.setTransform(48.8,83.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(1,1,1).p("AlCAoQAQhWBBhMQAyhFA7g4QAtgCAuAAQCTAACAAZQBDBNARBXQAQBUgfBMQhxBIiDAwQgsAQgpAOQhUglhLgwQhdg6gshDg");
	this.shape_258.setTransform(48.2,81.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#0066CC").s().p("Ai5ClQhdg5gshEQAQhWBBhMQAyhEA7g5QAtgCAuAAQCTAACAAZQBDBOARBWQAQBUgfBMQhxBIiDAwQgsAQgpAOQhUglhLgwg");
	this.shape_259.setTransform(48.2,81.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(1,1,1).p("AlAApQARhVA/hNQAxhFA6g7QAsgBAvAAQCRAACBAYQBCBNARBXQARBUgcBNQhxBJiDAwQgrARgpAPQhTgmhLgwQhcg5guhEg");
	this.shape_260.setTransform(47.7,79.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0066CC").s().p("Ai2CmQhcg6guhDQARhVA/hNQAxhGA6g5QAsgDAvAAQCRAACBAZQBCBNARBXQARBUgcBMQhxBKiDAwQgrARgpAOQhTglhLgwg");
	this.shape_261.setTransform(47.7,79.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(1,1,1).p("Ak+AqQAShVA9hOQAwhGA4g7QAtgCAuAAQCRAACBAWQBABPASBXQARBUgZBNQhwBJiCAyQgrARgoAQQhTgmhLgxQhbg5gwhDg");
	this.shape_262.setTransform(47.1,76.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0066CC").s().p("AizCmQhbg5gwhDQAShVA9hOQAwhFA4g8QAtgCAuAAQCRAACBAWQBABPASBWQARBVgZBNQhwBJiCAyIhTAhQhTgmhLgxg");
	this.shape_263.setTransform(47.1,76.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(1,1,1).p("Ak7AsQAShVA7hPQAvhHA3g9QAsgCAuAAQCRAACBAWQA+BPASBWQATBUgWBOQhxBKiAAzQgrATgoAQQhSgohLgwQhag5gxhCg");
	this.shape_264.setTransform(46.6,74.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#0066CC").s().p("AiwCnQhag5gxhCQAShVA7hPQAvhHA3g8QAsgDAuAAQCRABCBAVQA+BPASBWQATBUgWBOQhxBKiAAzQgrATgoAQQhSgohLgwg");
	this.shape_265.setTransform(46.6,74.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(1,1,1).p("Ak5AtQAThVA5hPQAuhIA1g+QAsgCAvAAQCPAACCAUQA9BQASBWQATBUgTBOQhxBLh+A1QgrATgoAQQhSgohKgxQhag4gyhCg");
	this.shape_266.setTransform(46.1,72.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#0066CC").s().p("AiuCnQhZg4gyhCQAThVA5hPQAuhIA1g+QAtgCAtAAQCQAACCAUQA9BPASBXQATBUgTBOQhxBLh/A1QgqASgoARQhSgohLgxg");
	this.shape_267.setTransform(46.1,72.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(1,1,1).p("Ak3AvQAThWA4hPQAshJA0hAQAsgCAuAAQCQAACCATQA6BQAUBXQATBUgQBPQhwBKh+A3QgrATgnASQhRgphLgxQhYg5g0hAg");
	this.shape_268.setTransform(45.5,69.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0066CC").s().p("AirCoQhYg5g0hBQAThUA4hQQAshJA0g/QAsgDAuAAQCQAACCATQA6BQAUBXQATBUgQBOQhwBLh+A3QgrATgnASQhRgphLgxg");
	this.shape_269.setTransform(45.5,69.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(1,1,1).p("Ak1AvQAUhVA1hPQAshKAyhCQAsgBAuAAQCPAACCARQA5BRAUBWQAUBVgNBPQhwBLh9A4QgqAUgnASQhRgqhKgxQhYg4g1hBg");
	this.shape_270.setTransform(45,67.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#0066CC").s().p("AioCoQhYg5g1g/QAUhWA1hPQAshKAyhBQAsgCAuAAQCPAACCASQA5BQAUBWQAUBVgNBOQhwBLh9A5IhRAmQhRgqhKgxg");
	this.shape_271.setTransform(45,67.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(1,1,1).p("Ak0AwQAVhVA0hQQAqhLAxhDQAsgBAuAAQCOAACDAQQA3BRAVBXQAUBUgKBPQhwBMh8A6QgqAUgnATQhQgqhKgyQhWg4g4hAg");
	this.shape_272.setTransform(44.5,65.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#0066CC").s().p("AimCpQhWg5g4hAQAVhUA0hQQAqhMAxhDIBaAAQCOgBCDARQA3BQAVBXQAUBUgKBQQhwBLh8A6IhRAoQhQgrhKgxg");
	this.shape_273.setTransform(44.5,65.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(1,1,1).p("AkyAyQAWhVAyhQQAphMAvhEQAsgCAuAAQCNAACEAPQA1BSAVBXQAVBUgHBQQhwBLh6A8QgqAVgnATQhPgrhKgyQhWg4g5g/g");
	this.shape_274.setTransform(44,62.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0066CC").s().p("AijCpQhWg4g5g/QAWhVAyhQQAphMAvhEQAsgCAuAAQCNAACEAPQA1BSAVBWQAVBVgHBPQhwBMh6A7QgqAWgnATQhPgrhKgyg");
	this.shape_275.setTransform(44,62.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(1,1,1).p("AkwAzQAWhVAwhRQAohMAthHQAsgBAuAAQCNAACEAOQAzBSAWBXQAWBUgFBRQhvBLh6A+QgpAWgnAUQhOgshKgyQhVg4g6g/g");
	this.shape_276.setTransform(43.6,60.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#0066CC").s().p("AihCpQhVg3g6g/QAWhVAwhRQAohNAthFIBagBQCNAACEANQAzBSAWBXQAWBUgFBRQhvBLh6A+QgpAWgnAUQhOgthKgyg");
	this.shape_277.setTransform(43.6,60.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(1,1,1).p("AkvA1QAXhVAuhSQAnhNAshIQAsgBAtAAQCNAACEAMQAxBTAXBXQAWBUgBBRQhwBNh4A+QgpAXgmAUQhOgthKgyQhUg3g8g+g");
	this.shape_278.setTransform(43.1,58.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0066CC").s().p("AifCqQhUg4g8g9QAXhVAuhSQAnhNAshHQAsgCAtAAQCNAACEAMQAxBTAXBXQAWBUgBBRQhwBNh4A+QgpAXgmAUQhOgshKgzg");
	this.shape_279.setTransform(43.1,58.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(1,1,1).p("AkuA2QAXhVAthSQAmhOAqhJQAsgBAtAAQCMAACFALQAwBTAXBXQAXBUABBRQhvBNh3BAQgpAXgmAWQhOguhJgyQhTg4g+g9g");
	this.shape_280.setTransform(42.7,55.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#0066CC").s().p("AidCrQhTg5g+g8QAXhVAthSQAmhPAqhIIBZgBQCMgBCFALQAwBUAXBXQAXBUABBRQhvBNh3BAIhPAsQhOgthJgyg");
	this.shape_281.setTransform(42.7,55.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(1,1,1).p("AktA4QAYhWAqhSQAlhPAphLQAsgBAtAAQCLAACFAKQAvBUAXBXQAXBVAFBRQhvBNh2BCQgoAXgmAWQhNguhJgyQhTg5g/g7g");
	this.shape_282.setTransform(42.3,53.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0066CC").s().p("AibCsQhTg5g/g7QAYhWAqhSQAlhPAphLIBZgBQCLAACFALQAvBTAXBXQAXBVAFBQQhvBOh2BCIhOAtQhNguhJgyg");
	this.shape_283.setTransform(42.3,53.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(1,1,1).p("AksA4QAYhVAphTQAkhQAnhMQAsgBAtAAQCLAACFAJQAtBUAXBXQAZBWAHBQQhuBOh2BEQgoAYgmAXQhMgwhJgyQhRg4hBg8g");
	this.shape_284.setTransform(41.9,51.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0066CC").s().p("AiZCsQhSg4hBg8QAZhUAphUQAjhPAnhNIBZAAQCLgBCFAKQAsBUAYBWQAYBWAIBRQhuBNh2BEIhOAvQhLgwhJgyg");
	this.shape_285.setTransform(41.9,51.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(1,1,1).p("AkrA6QAZhVAnhUQAihRAmhOQAsAAAtAAQCKAACFAHQArBVAZBXQAZBWAKBRQhuBOh0BFQgoAZgmAXQhLgwhJgzQhRg3hCg7g");
	this.shape_286.setTransform(41.5,48.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#0066CC").s().p("AiYCsQhRg4hCg6QAZhWAnhTQAihRAmhOIBZAAQCKAACGAHQArBVAYBWQAYBWALBSQhuBOh0BFIhNAwQhMgwhJgzg");
	this.shape_287.setTransform(41.5,48.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(1,1,1).p("AkqA7QAZhVAmhUQAhhSAkhPQAsgBAtAAQCJAACGAHQAqBVAZBWQAZBXANBRQhuBPhzBHQgnAZgmAYQhLgxhIgzQhQg3hEg7g");
	this.shape_288.setTransform(41.1,46.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0066CC").s().p("AiXCsQhQg2hDg7QAZhVAmhUQAhhSAkhPIBYAAQCKAACGAGQApBVAZBXQAaBWANBRQhvBPhyBGIhNAyQhLgxhJg0g");
	this.shape_289.setTransform(41.1,46.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(1,1,1).p("AkpA8QAahVAjhVQAhhSAihRQAsAAAtAAQCJAACGAFQAnBVAaBXQAaBWAQBSQhuBPhxBJQgnAZgmAZQhKgxhJg0QhPg3hFg6g");
	this.shape_290.setTransform(40.6,44.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0066CC").s().p("AiVCtQhPg3hFg6QAahVAjhVQAhhSAihRIBZAAQCJAACGAFQAnBWAaBXQAaBWAQBSQhuBOhxBJIhNAyQhKgyhJgzg");
	this.shape_291.setTransform(40.6,44.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(1,1,1).p("AkoA+QAahVAihWQAfhTAhhSQAsgBAsAAQCJAACHAEQAlBXAbBXQAaBWATBSQhuBPhwBKQgnAaglAaQhKgyhIg0QhOg4hHg4g");
	this.shape_292.setTransform(40.2,41.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0066CC").s().p("AiTCuQhOg4hHg4QAahVAihWIBAilIBYAAQCJAACHADQAlBXAbBXQAaBWATBSQhuBOhwBLIhMAzQhKgxhIg0g");
	this.shape_293.setTransform(40.2,41.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(1,1,1).p("AknA/QAbhVAghWQAehUAfhUQAsAAAsAAQCIAACHADQAkBWAbBXQAbBWAWBTQhuBPhvBMQgmAbglAaQhJgzhJg0QhNg3hIg4g");
	this.shape_294.setTransform(39.8,39.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0066CC").s().p("AiRCuQhOg3hIg4QAbhVAghWIA9ioIBYAAQCIAACIACQAjBXAbBXQAbBWAWBTQhtBPhvBMIhMA1IiRhng");
	this.shape_295.setTransform(39.8,39.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(1,1,1).p("AkmBBQAchWAehWQAdhVAdhVQAsgBAsAAQCIAACHACQAiBXAcBXQAbBWAZBTQhtBQhuBOQgmAbgmAbQhIg0hIg0QhMg3hKg3g");
	this.shape_296.setTransform(39.4,37.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0066CC").s().p("AiQCuQhMg2hKg4QAchUAehXIA6iqIBYAAQCIgBCHACQAiBXAcBXQAbBWAZBTQhtBQhuBOIhMA2IiQhpg");
	this.shape_297.setTransform(39.4,37.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(1,1,1).p("AAAEYIkljXIBwlYIFrAAIBwFYg");
	this.shape_298.setTransform(39,35);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0066CC").s().p("AklBCIBwlZIFrAAIBwFZIkmDWg");
	this.shape_299.setTransform(39,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).wait(1));

	// fish
	this.instance = new lib.Symbol1();
	this.instance.setTransform(379.6,299.1,1,1,0,0,0,69.8,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:377.2,y:298.7},0).wait(1).to({x:374.8,y:298.4},0).wait(1).to({x:372.4,y:298},0).wait(1).to({x:370,y:297.7},0).wait(1).to({x:367.7,y:297.3},0).wait(1).to({x:365.3,y:297},0).wait(1).to({x:362.9,y:296.6},0).wait(1).to({x:360.5,y:296.3},0).wait(1).to({x:358.2,y:295.9},0).wait(1).to({x:355.8,y:295.6},0).wait(1).to({x:353.4,y:295.2},0).wait(1).to({x:351,y:294.9},0).wait(1).to({x:348.7,y:294.5},0).wait(1).to({x:346.3,y:294.2},0).wait(1).to({x:343.9,y:293.8},0).wait(1).to({x:341.5,y:293.5},0).wait(1).to({x:339.2,y:293.1},0).wait(1).to({x:336.8,y:292.8},0).wait(1).to({x:334.4,y:292.4},0).wait(1).to({x:332,y:292.1},0).wait(1).to({x:329.7,y:291.7},0).wait(1).to({x:327.3,y:291.4},0).wait(1).to({x:324.9,y:291},0).wait(1).to({x:322.5,y:290.7},0).wait(1).to({x:320.2,y:290.3},0).wait(1).to({x:317.8,y:290},0).wait(1).to({x:315.4,y:289.6},0).wait(1).to({x:313,y:289.3},0).wait(1).to({x:310.7,y:288.9},0).wait(1).to({x:308.3,y:288.6},0).wait(1).to({x:305.9,y:288.2},0).wait(1).to({x:303.5,y:287.9},0).wait(1).to({x:301.2,y:287.5},0).wait(1).to({x:298.8,y:287.2},0).wait(1).to({x:296.4,y:286.8},0).wait(1).to({x:294,y:286.5},0).wait(1).to({x:291.7,y:286.1},0).wait(1).to({x:289.3,y:285.8},0).wait(1).to({x:286.9,y:285.4},0).wait(1).to({x:284.5,y:285.1},0).wait(1).to({x:282.2,y:284.7},0).wait(1).to({x:279.8,y:284.4},0).wait(1).to({x:277.4,y:284},0).wait(1).to({x:275,y:283.7},0).wait(1).to({x:272.7,y:283.3},0).wait(1).to({x:270.3,y:283},0).wait(1).to({x:267.9,y:282.6},0).wait(1).to({x:265.5,y:282.3},0).wait(1).to({x:263.2,y:281.9},0).wait(1).to({x:260.8,y:281.6},0).wait(1).to({x:258.4,y:281.3},0).wait(1).to({x:256,y:280.9},0).wait(1).to({x:253.7,y:280.6},0).wait(1).to({x:251.3,y:280.2},0).wait(1).to({x:248.9,y:279.9},0).wait(1).to({x:246.5,y:279.5},0).wait(1).to({x:244.1,y:279.2},0).wait(1).to({x:241.8,y:278.8},0).wait(1).to({x:239.4,y:278.5},0).wait(1).to({x:237,y:278.1},0).wait(1).to({x:234.6,y:277.8},0).wait(1).to({x:232.3,y:277.4},0).wait(1).to({x:229.9,y:277.1},0).wait(1).to({x:227.5,y:276.7},0).wait(1).to({x:225.1,y:276.4},0).wait(1).to({x:222.8,y:276},0).wait(1).to({x:220.4,y:275.7},0).wait(1).to({x:218,y:275.3},0).wait(1).to({x:215.6,y:275},0).wait(1).to({x:213.3,y:274.6},0).wait(1).to({x:210.9,y:274.3},0).wait(1).to({x:208.5,y:273.9},0).wait(1).to({x:206.1,y:273.6},0).wait(1).to({x:203.8,y:273.2},0).wait(1).to({x:201.4,y:272.9},0).wait(1).to({x:199,y:272.5},0).wait(1).to({x:196.6,y:272.2},0).wait(1).to({x:194.3,y:271.8},0).wait(1).to({x:191.9,y:271.5},0).wait(1).to({x:189.5,y:271.1},0).wait(1).to({x:187.1,y:270.8},0).wait(1).to({x:184.8,y:270.4},0).wait(1).to({x:182.4,y:270.1},0).wait(1).to({x:180,y:269.7},0).wait(1).to({x:177.6,y:269.4},0).wait(1).to({x:175.3,y:269},0).wait(1).to({x:172.9,y:268.7},0).wait(1).to({x:170.5,y:268.3},0).wait(1).to({x:168.1,y:268},0).wait(1).to({x:165.8,y:267.6},0).wait(1).to({x:163.4,y:267.3},0).wait(1).to({x:161,y:266.9},0).wait(1).to({x:158.6,y:266.6},0).wait(1).to({x:156.3,y:266.2},0).wait(1).to({x:153.9,y:265.9},0).wait(1).to({x:151.5,y:265.5},0).wait(1).to({x:149.1,y:265.2},0).wait(1).to({x:146.8,y:264.8},0).wait(1).to({x:144.4,y:264.5},0).wait(1).to({x:142,y:264.2},0).wait(1).to({x:139.6,y:263.8},0).wait(1).to({x:137.2,y:263.5},0).wait(1).to({x:134.9,y:263.1},0).wait(1).to({x:132.5,y:262.8},0).wait(1).to({x:130.1,y:262.4},0).wait(1).to({x:127.7,y:262.1},0).wait(1).to({x:125.4,y:261.7},0).wait(1).to({x:123,y:261.4},0).wait(1).to({x:120.6,y:261},0).wait(1).to({x:118.2,y:260.7},0).wait(1).to({x:115.9,y:260.3},0).wait(1).to({x:113.5,y:260},0).wait(1).to({x:111.1,y:259.6},0).wait(1).to({x:108.7,y:259.3},0).wait(1).to({x:106.4,y:258.9},0).wait(1).to({x:104,y:258.6},0).wait(1).to({x:101.6,y:258.2},0).wait(1).to({x:99.2,y:257.9},0).wait(1).to({x:96.9,y:257.5},0).wait(1).to({x:94.5,y:257.2},0).wait(1).to({x:92.1,y:256.8},0).wait(1).to({x:89.7,y:256.5},0).wait(1).to({x:87.4,y:256.1},0).wait(1).to({x:85,y:255.8},0).wait(1).to({x:82.6,y:255.4},0).wait(1).to({x:80.2,y:255.1},0).wait(1).to({x:77.9,y:254.7},0).wait(1).to({x:75.5,y:254.4},0).wait(1).to({x:73.1,y:254},0).wait(1).to({x:70.7,y:253.7},0).wait(1).to({x:68.4,y:253.3},0).wait(1).to({x:66,y:253},0).wait(1).to({x:63.7,y:252.6},0).wait(1).to({x:61.3,y:252.3},0).wait(1).to({x:58.9,y:251.9},0).wait(1).to({x:56.5,y:251.6},0).wait(1).to({x:54.2,y:251.2},0).wait(1).to({x:51.8,y:250.9},0).wait(1).to({x:49.4,y:250.5},0).wait(1).to({x:47,y:250.2},0).wait(1).to({x:44.7,y:249.8},0).wait(1).to({x:42.3,y:249.5},0).wait(1).to({x:39.9,y:249.1},0).wait(1).to({x:37.5,y:248.8},0).wait(1).to({x:35.2,y:248.4},0).wait(1).to({x:32.8,y:248.1},0).wait(1).to({x:30.4,y:247.7},0).wait(1).to({x:28,y:247.4},0).wait(1).to({x:25.6,y:247.1},0).wait(1));

	// shark
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(589,219.1,1,1,0,0,0,245.5,193.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:193.5,x:586.7,y:218.8},0).wait(1).to({x:584.5,y:218.7},0).wait(1).to({x:582.3,y:218.5},0).wait(1).to({x:580.1,y:218.3},0).wait(1).to({x:577.9,y:218.1},0).wait(1).to({x:575.7,y:218},0).wait(1).to({x:573.5,y:217.8},0).wait(1).to({x:571.3,y:217.6},0).wait(1).to({x:569.1,y:217.5},0).wait(1).to({x:566.9,y:217.3},0).wait(1).to({x:564.7,y:217.1},0).wait(1).to({x:562.5,y:216.9},0).wait(1).to({x:560.2,y:216.8},0).wait(1).to({x:558,y:216.6},0).wait(1).to({x:555.8,y:216.4},0).wait(1).to({x:553.6,y:216.3},0).wait(1).to({x:551.4,y:216.1},0).wait(1).to({x:549.2,y:215.9},0).wait(1).to({x:547,y:215.7},0).wait(1).to({x:544.8,y:215.6},0).wait(1).to({x:542.6,y:215.4},0).wait(1).to({x:540.4,y:215.2},0).wait(1).to({x:538.2,y:215.1},0).wait(1).to({x:536,y:214.9},0).wait(1).to({x:533.7,y:214.7},0).wait(1).to({x:531.5,y:214.6},0).wait(1).to({x:529.3,y:214.4},0).wait(1).to({x:527.1,y:214.2},0).wait(1).to({x:524.9,y:214},0).wait(1).to({x:522.7,y:213.9},0).wait(1).to({x:520.5,y:213.7},0).wait(1).to({x:518.3,y:213.5},0).wait(1).to({x:516.1,y:213.4},0).wait(1).to({x:513.9,y:213.2},0).wait(1).to({x:511.7,y:213},0).wait(1).to({x:509.5,y:212.8},0).wait(1).to({x:507.3,y:212.7},0).wait(1).to({x:505,y:212.5},0).wait(1).to({x:502.8,y:212.3},0).wait(1).to({x:500.6,y:212.2},0).wait(1).to({x:498.4,y:212},0).wait(1).to({x:496.2,y:211.8},0).wait(1).to({x:494,y:211.6},0).wait(1).to({x:491.8,y:211.5},0).wait(1).to({x:489.6,y:211.3},0).wait(1).to({x:487.4,y:211.1},0).wait(1).to({x:485.2,y:211},0).wait(1).to({x:483,y:210.8},0).wait(1).to({x:480.8,y:210.6},0).wait(1).to({x:478.5,y:210.4},0).wait(1).to({x:476.3,y:210.3},0).wait(1).to({x:474.1,y:210.1},0).wait(1).to({x:471.9,y:209.9},0).wait(1).to({x:469.7,y:209.8},0).wait(1).to({x:467.5,y:209.6},0).wait(1).to({x:465.3,y:209.4},0).wait(1).to({x:463.1,y:209.2},0).wait(1).to({x:460.9,y:209.1},0).wait(1).to({x:458.7,y:208.9},0).wait(1).to({x:456.5,y:208.7},0).wait(1).to({x:454.3,y:208.6},0).wait(1).to({x:452.1,y:208.4},0).wait(1).to({x:449.8,y:208.2},0).wait(1).to({x:447.6,y:208},0).wait(1).to({x:445.4,y:207.9},0).wait(1).to({x:443.2,y:207.7},0).wait(1).to({x:441,y:207.5},0).wait(1).to({x:438.8,y:207.4},0).wait(1).to({x:436.6,y:207.2},0).wait(1).to({x:434.4,y:207},0).wait(1).to({x:432.2,y:206.8},0).wait(1).to({x:430,y:206.7},0).wait(1).to({x:427.8,y:206.5},0).wait(1).to({x:425.6,y:206.3},0).wait(1).to({x:423.3,y:206.2},0).wait(1).to({x:421.1,y:206},0).wait(1).to({x:418.9,y:205.8},0).wait(1).to({x:416.7,y:205.7},0).wait(1).to({x:414.5,y:205.5},0).wait(1).to({x:412.3,y:205.3},0).wait(1).to({x:410.1,y:205.1},0).wait(1).to({x:407.9,y:205},0).wait(1).to({x:405.7,y:204.8},0).wait(1).to({x:403.5,y:204.6},0).wait(1).to({x:401.3,y:204.5},0).wait(1).to({x:399.1,y:204.3},0).wait(1).to({x:396.8,y:204.1},0).wait(1).to({x:394.6,y:203.9},0).wait(1).to({x:392.4,y:203.8},0).wait(1).to({x:390.2,y:203.6},0).wait(1).to({x:388,y:203.4},0).wait(1).to({x:385.8,y:203.3},0).wait(1).to({x:383.6,y:203.1},0).wait(1).to({x:381.4,y:202.9},0).wait(1).to({x:379.2,y:202.7},0).wait(1).to({x:377,y:202.6},0).wait(1).to({x:374.8,y:202.4},0).wait(1).to({x:372.6,y:202.2},0).wait(1).to({x:370.4,y:202.1},0).wait(1).to({x:368.1,y:201.9},0).wait(1).to({x:365.9,y:201.7},0).wait(1).to({x:363.7,y:201.5},0).wait(1).to({x:361.5,y:201.4},0).wait(1).to({x:359.3,y:201.2},0).wait(1).to({x:357.1,y:201},0).wait(1).to({x:354.9,y:200.9},0).wait(1).to({x:352.7,y:200.7},0).wait(1).to({x:350.5,y:200.5},0).wait(1).to({x:348.3,y:200.3},0).wait(1).to({x:346.1,y:200.2},0).wait(1).to({x:343.9,y:200},0).wait(1).to({x:341.6,y:199.8},0).wait(1).to({x:339.4,y:199.7},0).wait(1).to({x:337.2,y:199.5},0).wait(1).to({x:335,y:199.3},0).wait(1).to({x:332.8,y:199.1},0).wait(1).to({x:330.6,y:199},0).wait(1).to({x:328.4,y:198.8},0).wait(1).to({x:326.2,y:198.6},0).wait(1).to({x:324,y:198.5},0).wait(1).to({x:321.8,y:198.3},0).wait(1).to({x:319.6,y:198.1},0).wait(1).to({x:317.4,y:197.9},0).wait(1).to({x:315.2,y:197.8},0).wait(1).to({x:312.9,y:197.6},0).wait(1).to({x:310.7,y:197.4},0).wait(1).to({x:308.5,y:197.3},0).wait(1).to({x:306.3,y:197.1},0).wait(1).to({x:304.1,y:196.9},0).wait(1).to({x:301.9,y:196.8},0).wait(1).to({x:299.7,y:196.6},0).wait(1).to({x:297.5,y:196.4},0).wait(1).to({x:295.3,y:196.2},0).wait(1).to({x:293.1,y:196.1},0).wait(1).to({x:290.9,y:195.9},0).wait(1).to({x:288.7,y:195.7},0).wait(1).to({x:286.4,y:195.6},0).wait(1).to({x:284.2,y:195.4},0).wait(1).to({x:282,y:195.2},0).wait(1).to({x:279.8,y:195},0).wait(1).to({x:277.6,y:194.9},0).wait(1).to({x:275.4,y:194.7},0).wait(1).to({x:273.2,y:194.5},0).wait(1).to({x:271,y:194.4},0).wait(1).to({x:268.8,y:194.2},0).wait(1).to({x:266.6,y:194},0).wait(1).to({x:264.4,y:193.8},0).wait(1).to({x:262.2,y:193.7},0).wait(1).to({x:260,y:193.5},0).wait(1));

	// scuba
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(182,69,1,1,0,0,0,77,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.937},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.749},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.695},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:0.668},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.651},0).wait(1).to({alpha:0.642},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.534},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.498},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.418},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.337},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.358},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.377},0).wait(1).to({alpha:0.387},0).wait(1).to({alpha:0.396},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.454},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.492},0).wait(1).to({alpha:0.502},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.569},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.665},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.799},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.904},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:1},0).wait(1));

	// jaws
	this.instance_3 = new lib.jawspngcopy();
	this.instance_3.setTransform(249.9,-10.6,0.478,0.519);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(402.9,49.9,1,1,0,0,0,105,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:0.478,x:249.9}}]}).to({state:[{t:this.instance_4}]},49).to({state:[{t:this.instance_3,p:{scaleX:0.397,x:275.9}}]},51).to({state:[{t:this.instance_3,p:{scaleX:0.466,x:253.9}}]},49).wait(1));

	// background
	this.instance_5 = new lib.oceanpngcopy2();
	this.instance_5.setTransform(0,0,0.178,0.172);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(1,1,1).p("APioqQiRgDhqgfQh3ghAAgwQAAgvB3giQB2giCoAAQCoAAB3AiQB2AiAAAvQAAAwh2AhQgmALgsAIIAAAtIjwAAgAGPh8IivAAIAAD5Ik0AAIAAD6ImaAAIAAjIIAAgyInCAAIAAovIAAleISQAAIAAGkICvAAIAADwICvAAIAAONIqSAAIAAmaATSo5QhbAPhyAAQgSAAgRAAAz5BPIigAAIAAl/ICgAAIAAiCIFJAAADgh8Il6AAIAAjwIF6AAAhUB9ImaAAAnuCvIsLAAIAAhgIAAl/");
	this.shape_300.setTransform(318.5,192.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0066CC").s().p("AhUMQIAAmZIAAj6ImaAAIGaAAIAAD6ImaAAIAAjJIsLAAIAAhfIigAAIAAl/ICgAAIAAiBIFJAAIAAleISQAAIAAGjIl6AAIAADwIF6AAIl6AAIAAjwIF6AAICvAAIAADwICvAAIAAOMgAnuCuIAAgxInCAAIAAouIAAIuIHCAAgADgB9IAAj5IAAD5Ik0AAgAz5BPIAAl/gAGPh8IivAAgAnuB9gAPioLIAAgfQiRgDhqgfQh3ghAAgwQAAgvB3giQB2giCoABQCogBB3AiQB2AiAAAvQAAAwh2AhQgmALgsAIQhbAPhyAAIgjAAIAjAAQByAABbgPIAAAug");
	this.shape_301.setTransform(318.5,192.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_301},{t:this.shape_300},{t:this.instance_5}]}).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,189.4,834.5,423.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;