# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Browser Example"
	author: "Jordi Tambillo"
	twitter: "hjotar"
	description: ""


document.body.style.cursor = "auto"

web = require "browser"

bg = new BackgroundLayer
	backgroundColor: "F2F5F5"

ui_content = new Layer
	width: 800
	height: 600
	backgroundColor: "#FFFFFF"

# Add browser to UI
web.browser(ui_content)