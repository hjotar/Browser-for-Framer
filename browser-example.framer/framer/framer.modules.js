require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"browser":[function(require,module,exports){
exports.browser = function(layer) {
  var browser, handler, i, j, sub_handler, topbar;
  browser = new Layer({
    name: "browser_UI",
    width: layer.width,
    height: layer.height + 27,
    backgroundColor: "#FFFFFF",
    clip: true
  });
  browser.addChild(layer);
  browser.center();
  browser.style.borderRadius = "5px 5px 3px 3px";
  browser.style.boxShadow = "0px 36px 36px -24px rgba(0,0,0,0.08), 0px 48px 36px -34px rgba(0,0,0,0.04), 0px -8px 32px 0px rgba(0,0,0,0.04), 0px 40px 20px -18px rgba(0, 0, 0, 0.06), 0px 8px 16px -5px rgba(0, 0, 0, 0.06)";
  window.onresize = function() {
    return browser.center();
  };
  layer.y = 27;
  topbar = new Layer({
    name: ".",
    height: 27,
    width: browser.width,
    backgroundColor: "F7F9FA"
  });
  topbar.style.boxShadow = "0px 1px 0px 0px #F2F4F5, inset 0px 1px 0px 0px #FAFCFC";
  topbar.superLayer = browser;
  handler = new Layer({
    name: ".",
    x: 10,
    y: 8,
    width: 42,
    height: 10,
    backgroundColor: "transparent"
  });
  handler.superLayer = topbar;
  for (i = j = 0; j <= 2; i = ++j) {
    sub_handler = new Layer({
      name: ".",
      width: 10,
      height: 10,
      x: i * 17,
      borderRadius: 8,
      opacity: 0.6,
      backgroundColor: "D9DBDB",
      clip: false
    });
    sub_handler.style.border = "1px solid rgba(0,0,0,0.12)";
    sub_handler.superLayer = handler;
  }
  handler.subLayers[0].backgroundColor = "EB5B54";
  handler.subLayers[1].backgroundColor = "F7BE33";
  return handler.subLayers[2].backgroundColor = "6ACD44";
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvYnJvd3Nlci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgTW9kdWxlIGNyZWF0ZWQgYnkgSm9yZGkgVGFtYmlsbG9cbiMgVmFyaWFibGUgbmFtZWQgXCJsYXllclwiIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgdGhlIHdvcmtpbmcgVUlcblxuZXhwb3J0cy5icm93c2VyID0gKGxheWVyKSAtPlxuXG5cdGJyb3dzZXIgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiBcImJyb3dzZXJfVUlcIlxuXHRcdHdpZHRoOiBsYXllci53aWR0aFxuXHRcdGhlaWdodDogbGF5ZXIuaGVpZ2h0ICsgMjdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiXG5cdFx0Y2xpcDogdHJ1ZVxuXG5cdGJyb3dzZXIuYWRkQ2hpbGQobGF5ZXIpXG5cdGJyb3dzZXIuY2VudGVyKClcblx0YnJvd3Nlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweCA1cHggM3B4IDNweFwiXG5cdGJyb3dzZXIuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMzZweCAzNnB4IC0yNHB4IHJnYmEoMCwwLDAsMC4wOCksIDBweCA0OHB4IDM2cHggLTM0cHggcmdiYSgwLDAsMCwwLjA0KSwgMHB4IC04cHggMzJweCAwcHggcmdiYSgwLDAsMCwwLjA0KSwgMHB4IDQwcHggMjBweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggOHB4IDE2cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCJcblxuXHR3aW5kb3cub25yZXNpemUgPSAtPlxuXHRcdGJyb3dzZXIuY2VudGVyKClcblxuXHRsYXllci55ID0gMjdcblxuXHR0b3BiYXIgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiBcIi5cIlxuXHRcdGhlaWdodDogMjcsIHdpZHRoOiBicm93c2VyLndpZHRoXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIkY3RjlGQVwiXG5cdHRvcGJhci5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAxcHggMHB4IDBweCAjRjJGNEY1LCBpbnNldCAwcHggMXB4IDBweCAwcHggI0ZBRkNGQ1wiXG5cdHRvcGJhci5zdXBlckxheWVyID0gYnJvd3NlclxuXG5cdGhhbmRsZXIgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiBcIi5cIlxuXHRcdHg6IDEwLCB5OiA4XG5cdFx0d2lkdGg6IDQyLCBoZWlnaHQ6IDEwLCBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHRoYW5kbGVyLnN1cGVyTGF5ZXIgPSB0b3BiYXJcblxuXHRmb3IgaSBpbiBbMC4uMl1cblx0XHRzdWJfaGFuZGxlciA9IG5ldyBMYXllclxuXHRcdFx0bmFtZTogXCIuXCJcblx0XHRcdHdpZHRoOjEwLCBoZWlnaHQ6MTAsIHg6aSoxN1xuXHRcdFx0Ym9yZGVyUmFkaXVzOiA4LCBvcGFjaXR5OiAwLjZcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJEOURCREJcIiwgY2xpcDpmYWxzZVxuXHRcdHN1Yl9oYW5kbGVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMilcIlxuXHRcdHN1Yl9oYW5kbGVyLnN1cGVyTGF5ZXIgPSBoYW5kbGVyXG5cblx0aGFuZGxlci5zdWJMYXllcnNbMF0uYmFja2dyb3VuZENvbG9yID0gXCJFQjVCNTRcIlxuXHRoYW5kbGVyLnN1YkxheWVyc1sxXS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkY3QkUzM1wiXG5cdGhhbmRsZXIuc3ViTGF5ZXJzWzJdLmJhY2tncm91bmRDb2xvciA9IFwiNkFDRDQ0XCIiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBREdBLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLFNBQUMsS0FBRDtBQUVqQixNQUFBO0VBQUEsT0FBQSxHQUFjLElBQUEsS0FBQSxDQUNiO0lBQUEsSUFBQSxFQUFNLFlBQU47SUFDQSxLQUFBLEVBQU8sS0FBSyxDQUFDLEtBRGI7SUFFQSxNQUFBLEVBQVEsS0FBSyxDQUFDLE1BQU4sR0FBZSxFQUZ2QjtJQUdBLGVBQUEsRUFBaUIsU0FIakI7SUFJQSxJQUFBLEVBQU0sSUFKTjtHQURhO0VBT2QsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsS0FBakI7RUFDQSxPQUFPLENBQUMsTUFBUixDQUFBO0VBQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFkLEdBQTZCO0VBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBZCxHQUEwQjtFQUUxQixNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFBO1dBQ2pCLE9BQU8sQ0FBQyxNQUFSLENBQUE7RUFEaUI7RUFHbEIsS0FBSyxDQUFDLENBQU4sR0FBVTtFQUVWLE1BQUEsR0FBYSxJQUFBLEtBQUEsQ0FDWjtJQUFBLElBQUEsRUFBTSxHQUFOO0lBQ0EsTUFBQSxFQUFRLEVBRFI7SUFDWSxLQUFBLEVBQU8sT0FBTyxDQUFDLEtBRDNCO0lBRUEsZUFBQSxFQUFpQixRQUZqQjtHQURZO0VBSWIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFiLEdBQXlCO0VBQ3pCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO0VBRXBCLE9BQUEsR0FBYyxJQUFBLEtBQUEsQ0FDYjtJQUFBLElBQUEsRUFBTSxHQUFOO0lBQ0EsQ0FBQSxFQUFHLEVBREg7SUFDTyxDQUFBLEVBQUcsQ0FEVjtJQUVBLEtBQUEsRUFBTyxFQUZQO0lBRVcsTUFBQSxFQUFRLEVBRm5CO0lBRXVCLGVBQUEsRUFBaUIsYUFGeEM7R0FEYTtFQUlkLE9BQU8sQ0FBQyxVQUFSLEdBQXFCO0FBRXJCLE9BQVMsMEJBQVQ7SUFDQyxXQUFBLEdBQWtCLElBQUEsS0FBQSxDQUNqQjtNQUFBLElBQUEsRUFBTSxHQUFOO01BQ0EsS0FBQSxFQUFNLEVBRE47TUFDVSxNQUFBLEVBQU8sRUFEakI7TUFDcUIsQ0FBQSxFQUFFLENBQUEsR0FBRSxFQUR6QjtNQUVBLFlBQUEsRUFBYyxDQUZkO01BRWlCLE9BQUEsRUFBUyxHQUYxQjtNQUdBLGVBQUEsRUFBaUIsUUFIakI7TUFHMkIsSUFBQSxFQUFLLEtBSGhDO0tBRGlCO0lBS2xCLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBbEIsR0FBMkI7SUFDM0IsV0FBVyxDQUFDLFVBQVosR0FBeUI7QUFQMUI7RUFTQSxPQUFPLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLGVBQXJCLEdBQXVDO0VBQ3ZDLE9BQU8sQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsZUFBckIsR0FBdUM7U0FDdkMsT0FBTyxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxlQUFyQixHQUF1QztBQTNDdEIifQ==
