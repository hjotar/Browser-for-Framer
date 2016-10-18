# Module created by Jordi Tambillo
# Variable named "layer" will be interpreted as the working UI

exports.browser = (layer) ->

	browser = new Layer
		name: "browser_UI"
		width: layer.width
		height: layer.height + 27
		backgroundColor: "#FFFFFF"
		clip: true

	browser.addChild(layer)
	browser.center()
	browser.style.borderRadius = "5px 5px 3px 3px"
	browser.style.boxShadow = "0px 36px 36px -24px rgba(0,0,0,0.08), 0px 48px 36px -34px rgba(0,0,0,0.04), 0px -8px 32px 0px rgba(0,0,0,0.04), 0px 40px 20px -18px rgba(0, 0, 0, 0.06), 0px 8px 16px -5px rgba(0, 0, 0, 0.06)"

	window.onresize = ->
		browser.center()

	layer.y = 27

	topbar = new Layer
		name: "."
		height: 27, width: browser.width
		backgroundColor: "F7F9FA"
	topbar.style.boxShadow = "0px 1px 0px 0px #F2F4F5, inset 0px 1px 0px 0px #FAFCFC"
	topbar.superLayer = browser

	handler = new Layer
		name: "."
		x: 10, y: 8
		width: 42, height: 10, backgroundColor: "transparent"
	handler.superLayer = topbar

	for i in [0..2]
		sub_handler = new Layer
			name: "."
			width:10, height:10, x:i*17
			borderRadius: 8, opacity: 0.6
			backgroundColor: "D9DBDB", clip:false
		sub_handler.style.border = "1px solid rgba(0,0,0,0.12)"
		sub_handler.superLayer = handler

	handler.subLayers[0].backgroundColor = "EB5B54"
	handler.subLayers[1].backgroundColor = "F7BE33"
	handler.subLayers[2].backgroundColor = "6ACD44"