/** @type {import('tailwindcss').Config} */
module.exports = {
  	"content": [
    		"./src/**/*.{js,jsx,ts,tsx}"
  	],
  	"theme": {
    		"extend": {
      			"colors": {
        				"black": "#000",
        				"burlywood": {
          					"100": "#e1bf7f",
          					"200": "rgba(225, 191, 127, 0.5)"
        				},
        				"white": "#fff",
        				"gray": {
          					"100": "#010101",
          					"200": "rgba(255, 255, 255, 0.5)",
          					"300": "rgba(0, 0, 0, 0.5)",
          					"400": "rgba(255, 255, 255, 0.4)",
          					"500": "rgba(255, 255, 255, 0.6)"
        				},
        				"dimgray": "#666",
        				"red": "#ff0000"
      			},
      			"spacing": {
        				"num-1442": "1442px",
        				"num-360": "360px",
        				"num-226": "226px",
        				"num-630": "630px",
        				"num-847": "847px",
        				"num-62": "62px",
        				"num-25": "25px",
        				"num-357": "357px",
        				"num-1": "1px solid #fff",
        				"num-2": "1px solid rgba(255, 255, 255, 0.4)",
        				"num-11": "1px solid #666",
        				"num-21": "1px dashed rgba(255, 255, 255, 0.4)"
      			},
      			"fontFamily": {
        				"sen": "Sen",
        				"archivo-black": "Archivo Black",
        				"space-grotesk": "Space Grotesk",
        				"inherit": "inherit"
      			},
      			"padding": {
        				"num-12": "12px",
        				"num-21": "21px"
      			}
    		},
    		"fontSize": {
      			"num-16": "16px",
      			"num-20": "20px",
      			"num-24": "24px",
      			"num-inherit": "inherit"
    		},
    		"letterSpacing": {
      			"num--0_03": "-0.03em"
    		}
  	},
  	"corePlugins": {
    		"preflight": false
  	}
}