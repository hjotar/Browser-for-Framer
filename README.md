# Browser for FramerJS

Framer module to add a minimal browser to your designs.

# Setup

1. Download the `<browser.coffee>` file.
2. Create or open a framer project and include `<browser.coffee>` inside the /modules folder
3. Add `<web = require "browser">` at the top of your document.

# Usage

Add `<web.browser(ui_content)>` at the end of your document, where `<ui_content>` is the main layer of your prototype.

## Example 

	document.body.style.cursor = "auto"
	
	web = require "browser"
	
	bg = new BackgroundLayer
		backgroundColor: "F2F5F5"
	
	ui_content = new Layer
		width: 800
		eight: 600
		backgroundColor: "#FFFFFF"

	web.browser(ui_content)
