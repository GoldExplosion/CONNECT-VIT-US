if (self.CavalryLogger) { CavalryLogger.start_js(["LmXGv"]); }

__d("FormTypeABTester",["Base64","Event"],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();var c=32,d=65,e=90,f=48,g=57,h=58,i=63,j=91,k=94,l=0,m=0,n=0,o=0,p=[],q=null,r=[],s=[],t=[],u=[];for(var v=0;v<10;v++)r.push(0),s.push(0);for(var v=0;v<10;v++)s.push(0),t.push(0),u.push(0);v=function(a){__p&&__p();var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;a%=128;a>=d&&a<=e||a==c?l++:a>=f&&a<=g?m++:a>=h&&a<=i||a>=j&&a<=k?n++:o++;p[a]=b;if(q!=null&&q!==0){var r=b-q;r>=0&&(a>=d&&a<=e||a==c)&&(r<400?s[Math.floor(r/20)]++:r<1e3?t[Math.floor((r-400)/60)]++:r<3e3&&u[Math.floor((r-1e3)/200)]++)}q=b};var w=function(a){var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;b=b-p[a%128];b>=50&&b<250&&r[Math.floor((b-50)/20)]++},x=function(a){var b=Math.max.apply(Math,a),c=[];a.forEach(function(a){c.push(Math.floor(a*63/(b||1)))});return c};this.getDataVect=function(){var a=s.concat(t,u);return x(a).concat(x(r),[l/2,m/2,n/2,o/2])};this.getData=function(){return b("Base64").encodeNums(this.getDataVect())};b("Event").listen(a,{keyup:w.bind(this),keydown:v.bind(this)})}e.exports=a}),null);
__d("LoginFormController",["Button","Cookie","DeferredCookie","Event","FormTypeABTester","WebStorage","ge","goURI","guid"],(function(a,b,c,d,e,f){__p&&__p();var g;f.init=function(a,c,d,e,f){__p&&__p();if(e)var h=new(b("FormTypeABTester"))(a);b("Event").listen(a,"submit",function(){e&&a.ab_test_data&&(a.ab_test_data.value=h.getData());var d=b("guid")();a.guid&&(a.guid.value=d);window.__cookieReload&&window.clearInterval(window.__cookieReload);b("Button").setEnabled(c,!1);window.setTimeout(b("Button").setEnabled.bind(null,c,!0),15e3);b("DeferredCookie").flushAllCookies()});f=b("ge")("lgnjs");if(f){var i=Math.floor(Date.now()/1e3);f.value=i}var j=(g||(g=b("WebStorage"))).getSessionStorage();f=j!=null?parseInt(j.getItem("LoginPollRateLimit"),10):0;var k=d!=null;f>i-60&&(k=!1);if(k){var l;f=function(){b("Cookie").get("c_user")!=null&&(window.clearInterval(l),j!=null&&j.setItem("LoginPollRateLimit",Math.floor(Date.now()/1e3)),b("goURI")(d))};l=window.setInterval(f,1e3);f()}}}),null);
__d("LoginbarPopover",["CSS","ge","getActiveElement"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a={init:function(a,c,d){var e=this,f=b("ge")("email",d);setTimeout(function(){return e.show(a,d,f)},g);c.addEventListener("click",function(a){a.kill(),e.toggle(d,f)});a.style.visibility="visible"},show:function(a,c,d){b("CSS").show(c);a=b("getActiveElement")().tagName.toLowerCase();a!=="input"&&a!=="textarea"&&d.focus()},toggle:function(a,c){b("CSS").toggle(a),b("CSS").shown(a)&&c.focus()}};e.exports=a}),null);
__d("ScreenDimensionsAutoSet",[],(function(a,b,c,d,e,f){function g(){if(!window.btoa)return"";var a={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(a))}a={setInputValue:function(a){a.value=g()},getScreenDimensions:g};e.exports=a}),null);
__d("SketchBase",["Promise","regeneratorRuntime","Alea","Base64","md5","performanceNow","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=10,i=16,j=function(){return new(b("Promise"))(function(a){b("setTimeout")(a)})},k=function(){__p&&__p();function a(a,c,d){this.seed=a,this.rounds=c,this.rng=b("Alea")(a),this.ctx=d.getContext("2d"),this.width=d.width,this.height=d.height}var c=a.prototype;c.solveAllRoundsAsync=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:c=Date.now()+h,d=0;case 2:if(!(d<this.rounds)){e.next=11;break}a(d);if(!(Date.now()>c)){e.next=8;break}e.next=7;return b("regeneratorRuntime").awrap(j());case 7:c=Date.now()+h;case 8:d++;e.next=2;break;case 11:case"end":return e.stop()}},null,this)};c.solveAsync=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.pickPrimitiveAndDraw.bind(this)));case 2:case"end":return a.stop()}},null,this)};c.solveOnePrimitiveAsync=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.getDrawFunction(a)));case 2:case"end":return c.stop()}},null,this)};c.getDrawFunction=function(a){switch(a){case"text":return this.drawText.bind(this);case"bezier":return this.drawBezier.bind(this);case"circle":return this.drawCircle.bind(this);case"emoji":return this.drawEmoji.bind(this);default:return function(){return void 0}}};c.pickPrimitive=function(a){var b=["emoji","circle","bezier","text"];return b[a%b.length]};c.pickPrimitiveAndDraw=function(a){a=this.getDrawFunction(this.pickPrimitive(a));a()};c.drawText=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b=Math.floor(this.rng()*100).toString(),c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawEmoji=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b="\ud83d\ude03",c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawBezier=function(){this.ctx.beginPath();var a=this.rng()*this.width,b=this.rng()*this.height,c=this.rng()*this.width,d=this.rng()*this.height,e=this.rng()*this.width,f=this.rng()*this.height;this.ctx.moveTo(a,b);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,c,d);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,e,f);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,a,b);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fill()};c.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width/5,0,2*Math.PI),this.ctx.fillStyle=this.makeRadialGradient(),this.applyShadow(),this.ctx.fill(),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.makeRadialGradient(),this.ctx.stroke()};c.makeRadialGradient=function(){var a=this.ctx.createRadialGradient(this.rng()*this.width,this.rng()*this.height,0,this.rng()*this.width,this.rng()*this.height,this.width*2);a.addColorStop(0,this.makeColor());a.addColorStop(.5,this.makeColor());a.addColorStop(1,this.makeColor());return a};c.makeColor=function(){var a=Math.floor(this.rng()*255),b=Math.floor(this.rng()*255),c=Math.floor(this.rng()*255);return"rgb("+a+","+b+","+c+")"};c.applyShadow=function(){this.ctx.shadowColor=this.makeColor(),this.ctx.shadowBlur=this.rng()*50,this.ctx.shadowOffsetX=this.rng()*15,this.ctx.shadowOffsetY=this.rng()*15};c.rngRange=function(a,b){var c=Math.min(a,b);a=Math.max(a,b);return this.rng()*(a-c)+c};return a}(),l={createCanvasAndSolveAllPrimitives:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";f={hash:"",hash_bezier:"",hash_circle:"",hash_emoji:"",hash_text:"",hash2:"",rounds:d,seed:a,seed2:c,time_taken:0};document.body&&document.body.appendChild(e);i.next=8;return b("regeneratorRuntime").awrap(l.solveAsync(e,a,d));case 8:g=i.sent;i.next=11;return b("regeneratorRuntime").awrap(l.solveAsync(e,c,d));case 11:h=i.sent;f.hash=g.hash;f.hash2=h.hash;f.time_taken=g.time_taken+h.time_taken;i.next=17;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"text"));case 17:f.hash_text=i.sent;i.next=20;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"bezier"));case 20:f.hash_bezier=i.sent;i.next=23;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"circle"));case 23:f.hash_circle=i.sent;i.next=26;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"emoji"));case 26:f.hash_emoji=i.sent;document.body&&document.body.removeChild(e);return i.abrupt("return",f);case 29:case"end":return i.stop()}},null,this)},encode:function(a){return b("Base64").encode(JSON.stringify(a))},getHash:function(a){return new(b("Promise"))(function(c){b("setTimeout")(function(){c(b("md5")(a.toDataURL()))},i)})},solveAsync:function(a,c,d){__p&&__p();var e,f,h,i,j,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:e=new k(c,d,a);e.ctx.clearRect(0,0,e.width,e.height);f=(g||(g=b("performanceNow")))();n.next=5;return b("regeneratorRuntime").awrap(e.solveAsync());case 5:h=(g||(g=b("performanceNow")))();i=parseInt((h-f)*1e3,10);n.next=9;return b("regeneratorRuntime").awrap(l.getHash(a));case 9:j=n.sent;m={hash:j,time_taken:i};return n.abrupt("return",m);case 12:case"end":return n.stop()}},null,this)},solvePrimitive:function(a,c,d,e){__p&&__p();var f,g;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:f=new k(c,d,a);f.ctx.clearRect(0,0,f.width,f.height);h.next=4;return b("regeneratorRuntime").awrap(f.solveOnePrimitiveAsync(e));case 4:h.next=6;return b("regeneratorRuntime").awrap(l.getHash(a));case 6:g=h.sent;return h.abrupt("return",g);case 8:case"end":return h.stop()}},null,this)}};e.exports=l}),null);
__d("XSISketchResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sketch_results/",{})}),null);
__d("SketchBlue",["regeneratorRuntime","AsyncRequest","Form","SketchBase","XSISketchResultsController","emptyFunction","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g={solveIntern:function(a,c,d,e){var f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:g.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(a,d,e));case 2:f=g.sent,c.textContent=f.hash;case 4:case"end":return g.stop()}},null,this)},solveAndCallAsyncController:function(a,c,d){var e,f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:e=i.sent,f=b("SketchBase").encode(e),h=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(h).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return i.stop()}},null,this)},solveAndUpdateForm:function(a,c,d,e){var f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.solveAndEncode(a,c,d,e=="login_form"?"login":e=="reg"?"registration":""));case 2:f=i.sent,h=document.getElementById(e),b("Form").createHiddenInputs({skstamp:f},h);case 5:case"end":return i.stop()}},null,this)},solveAndEncode:function(a,c,d,e){__p&&__p();var f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:f=i.sent;h=babelHelpers["extends"]({},f,{surface:e});return i.abrupt("return",b("SketchBase").encode(h));case 5:case"end":return i.stop()}},null,this)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){var e,f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").createCanvasAndSolveAllPrimitives(a,c,d));case 2:e=h.sent,f=b("SketchBase").encode(e),g=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(g).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return h.stop()}},null,this)},createCanvasAndSolve:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";b("nullthrows")(document.body).appendChild(e);i.next=7;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,a,d));case 7:f=i.sent;i.next=10;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,c,d));case 10:g=i.sent;h={hash:f.hash,hash2:g.hash,rounds:d,seed:a,seed2:c,time_taken:f.time_taken+g.time_taken};b("nullthrows")(document.body).removeChild(e);return i.abrupt("return",h);case 14:case"end":return i.stop()}},null,this)}};e.exports=g}),null);
__d("BrowserPrefillLogging",["BanzaiLogger","DamerauLevenshtein","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initContactpointFieldLogging:function(a){this.contactpointFieldID=a.contactpointFieldID;this._updateContactpoint();this.serverPrefillContactpoint=a.serverPrefill;a=b("ge")(this.contactpointFieldID);if(a==null)return;a.addEventListener("input",this._mayLogContactpointPrefillViaDropdown.bind(this));window.addEventListener("load",this._mayLogContactpointPrefillOnload.bind(this));return},registerCallback:function(a){this.regeisteredCallbacks=this.regeisteredCallbacks||[],this.regeisteredCallbacks.push(a)},_invokeCallbacks:function(a,b){if(this.regeisteredCallbacks==null||this.regeisteredCallbacks.size===0)return;this.regeisteredCallbacks.forEach(function(c){c(a,b)})},initPasswordFieldLogging:function(a){this.passwordFieldID=a.passwordFieldID;this._updatePassword();a=b("ge")(this.passwordFieldID);if(a==null)return;a.addEventListener("input",this._mayLogPasswordPrefillViaDropdown.bind(this));window.addEventListener("load",this._mayLogPasswordPrefillOnload.bind(this))},updatePrefill:function(a,c,d){var e,f=(e=b("ge"))("prefill_source"),g=e("prefill_type"),h=e("first_prefill_source"),i=e("first_prefill_type"),j=e("had_cp_prefilled"),k=e("had_password_prefilled");e=e("prefill_contact_point");f!=null&&(f.value=c);g!=null&&(g.value=d);e!=null&&a!=null&&(e.value=a);i!=null&&(i.value==null||i.value=="")&&(i.value=d);h!=null&&(h.value==null||h.value=="")&&(h.value=c);j!=null&&(j.value==null||j.value==="false")&&d==="contact_point"&&(j.value="true");k!=null&&(k.value==null||k.value==="false")&&d==="password"&&(k.value="true")},_mayLogContactpointPrefillOnload:function(){this._updateContactpoint();if(this.previousContactpoint==null||this.previousContactpoint==="")return;var a=this.previousContactpoint===this.serverPrefillContactpoint?"server_prefill":"browser_onload";this._logBrowserPrefill(a,"contact_point");this._invokeCallbacks(a,"contact_point")},_mayLogPasswordPrefillOnload:function(){this._updatePassword();if(this.previousPassword==null||this.previousPassword==="")return;this._logBrowserPrefill("browser_onload","password");this._invokeCallbacks("browser_onload","password")},_mayLogContactpointPrefillViaDropdown:function(){__p&&__p();var a=b("ge")(this.contactpointFieldID);if(a==null||a.value==null)return;if(this._isBrowserPrefill(this.previousContactpoint,a.value)===!1){this._updateContactpoint();return}this._updateContactpoint();this._logBrowserPrefill("browser_dropdown","contact_point");this._invokeCallbacks("browser_dropdown","contact_point")},_mayLogPasswordPrefillViaDropdown:function(){__p&&__p();var a=b("ge")(this.passwordFieldID);if(a==null||a.value==null)return;if(this._isBrowserPrefill(this.previousPassword,a.value)===!1){this._updatePassword();return}this._updatePassword();this._logBrowserPrefill("browser_dropdown","password");this._invokeCallbacks("browser_dropdown","password")},_isBrowserPrefill:function(a,c){if(c==="")return!1;if(c===a)return!1;if(c.length===1||a.length===c.length+1||c.length===a.length+1)return!1;var d=b("DamerauLevenshtein").DamerauLevenshteinDistance(c,a);return d===a.length-c.length?!1:!0},_updateContactpoint:function(){var a=b("ge")(this.contactpointFieldID);this.previousContactpoint=a!=null&&a.value!=null?a.value:""},_updatePassword:function(){var a=b("ge")(this.passwordFieldID);this.previousPassword=a!=null&&a.value!=null?a.value:""},_logBrowserPrefill:function(a,c){var d=null;c==="contact_point"&&(d=this.previousContactpoint);a!=="server_prefill"&&this.updatePrefill(d,a,c);b("BanzaiLogger").create({signal:!0}).log("LoginEventsLoggerConfig",{event:"browser_autocomplete",prefill_contact_point:d,prefill_source:a,prefill_type:c})}};e.exports=a}),null);