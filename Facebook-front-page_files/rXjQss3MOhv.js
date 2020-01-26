if (self.CavalryLogger) { CavalryLogger.start_js(["eT4Vf"]); }

__d("ChatTypeaheadCore",["csx","cx","fbt","Bootloader","BootloadOnRender.react","CurrentUser","DOM","JSResource","LazyComponent.react","MercuryBootloadOnInteraction.react","React","ReactDOM","WorkSMBHelpSidebar","emptyFunction","ge","gkx","onAfterDisplay","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("WorkSMBHelpSidebar").module,k=b("gkx")("678264")?b("MercuryBootloadOnInteraction.react"):b("BootloadOnRender.react"),l,m="",n=[],o={search:"._58al",settings:"._5vmb",compose:"._5q85",groupcreate:"._1-4-"},p=!1,q=b("emptyFunction"),r=b("qex")._("1211265"),s=b("qex")._("1211264");a={_handleInteraction:function(a,c){if(!b("gkx")("678264"))return;n.push(a);a==="search"&&(m=c?c:"")},_handleCompositionStart:function(){p=!0},_handleCompositionEnd:function(){p=!1,q(),q=b("emptyFunction")},takeOverRender:function(a){!p?a():q===b("emptyFunction")&&(q=a)},processInteractionsQueue:function(){n.forEach(function(a){if(!o[a])return;var c=b("DOM").scry(b("ge")("chatsearch"),o[a]);c&&c[0]&&(a!=="search"?c[0].click():l=c[0],c[0].focus())})},focusSearchField:function(a,c){if(!l){a=b("DOM").scry(a,"._3rhb input");a.length>0&&(l=a[0])}l&&(l.focus(),c.prevent())},getLastSearchQuery:function(){return m},deferRenderChatSidebarSheet:function(a){b("onAfterDisplay")(function(){b("Bootloader").loadModules(["ChatSidebarSheet.react"],function(c){var d=b("ge")("chatsidebarsheet");b("ReactDOM").render(b("React").jsx(c,{className:"fbChatSidebarMessage",viewer:b("CurrentUser").getID(),isSideBar:a}),d)},"ChatTypeaheadCore")})},init:function(a,c,d){var e=this;b("gkx")("678264")&&this.deferRenderChatSidebarSheet(d);b("ReactDOM").render(b("React").jsxs("div",{children:[b("React").jsx("div",{id:"chatsidebarsheet"}),b("React").jsx(k,{loader:b("JSResource")("ChatTypeaheadWrapper.react").__setRef("ChatTypeaheadCore"),placeholder:b("React").jsxs("div",{children:[j&&b("React").jsx(j,{}),r?null:b("React").jsx("div",{className:"_1nq2",children:b("React").jsx("div",{className:"_5iwm _5iwn _62it",children:b("React").jsx("label",{className:"_58ak _3rhb",children:b("React").jsx("input",{className:"_58al",type:"text",onChange:function(a){return e._handleInteraction("search",a.target.value)},onFocus:function(a){return e._handleInteraction("search",a.target.value)},onCompositionStart:this._handleCompositionStart,onCompositionEnd:this._handleCompositionEnd,placeholder:i._("Search")})})})}),d?b("React").jsxs("div",{className:"_531b",children:[b("React").jsx("div",{className:"_5qth _6a _6e",children:b("React").jsx("a",{href:"#",className:"button _5vmb",onClick:function(){return e._handleInteraction("settings")}})}),b("React").jsx("a",{href:"#",className:"_3a-4 _5q85",onClick:function(){return e._handleInteraction("compose")}}),s?null:b("React").jsx("div",{className:"_46fv",children:b("React").jsx("a",{href:"#",className:"_1-4-",onClick:function(){return e._handleInteraction("groupcreate")}})})]}):null]}),takeOverRender:this.takeOverRender,component:b("React").jsx(b("LazyComponent.react"),{id:c,isSidebar:d})})]}),a)}};e.exports=a}),null);
__d("SRXUIBadge.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.isInt=function(a){return parseInt(a,10)===a};d.render=function(){var a=this.props.count,c=this.props.maxcount;c==null&&(c=20);this.isInt(a)||h(0,186);this.isInt(c)||h(0,187);var d="_5ugh _5ugf _51lp"+(a>c?" _51lr":"")+(a===0?" hidden_elem":"");return b("React").jsx("span",{className:b("joinClasses")(this.props.className,d),children:a>c?c:a})};return c}(b("React").Component);e.exports=a}),null);
__d("VerseSidebarUtil",["Bootloader","CSS","DOM","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){var a=document.documentElement||"";b("CSS").addClass(a,"buddylistOff")}var h={show:function(){g();if(b("ge")("pagelet_verse_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_verse_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("VerseSidebarPagelet","pagelet_verse_sidebar",{path:""})},"VerseSidebarUtil")},remove:function(){var a=b("ge")("pagelet_verse_sidebar");a&&b("DOM").remove(a)},removeAndHideMessenger:function(){g(),h.remove()}};e.exports=h}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!1));case 2:case"end":return a.stop()}},null,this)},loadFlyoutAsChild:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!0));case 2:case"end":return a.stop()}},null,this)},_loadFlyout:function(a){__p&&__p();var c,d,e,f,h,i,j,k,l,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:if(!g){n.next=2;break}return n.abrupt("return");case 2:g=!0;n.next=5;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:c=n.sent,d=c[0],e=c[1],f=e.flyout,h=e.flyoutRoot,i=c[2],j=i.footer,k=i.event,l=i.settingsExitPoint,m=i.basicsExitPoint,d.setIsChild(!!a),d.registerFlyoutToggler(f,h),d.registerSettingsAndBasicsLinkLogging(j,k,l,m),d.loadBody();case 19:case"end":return n.stop()}},null,this)},setChildFlyoutVisible:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:if(!(!g&&!a)){h.next=2;break}return h.abrupt("return");case 2:h.next=4;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:c=h.sent;d=c[0];e=c[1];f=e.flyout;e._flyoutRoot;if(!(a===d.isFlyoutVisible())){h.next=11;break}return h.abrupt("return");case 11:d.setChildFlyoutVisible(a),d.onToggle(f,a?"show":"hide");case 13:case"end":return h.stop()}},null,this)},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})},_getDeferredFooterElements:function(){i==null&&(i=new(b("Deferred"))());return i},registerFooterElements:function(a,b,c,d){this._getDeferredFooterElements().resolve({footer:a,event:b,settingsExitPoint:c,basicsExitPoint:d})}};e.exports=j}),null);
__d("HelpLiteFlyout",["Arbiter","AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge","ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={loadBody:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:!0}).send()},resetHelp:function(a){var c=b("ge")("fbContextualHelpContent");c&&b("DOM").replace(c,a);h.isFlyoutVisible()?h.refreshHelp():b("ifRequired")("WorkGalahadQuickHelpNub.react",function(){h.refreshHelp()})},showHelp:function(){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),b("CSS").show(b("ge")("fbHelpLiteFlyout"))},openPrivacy:function(){b("CSS").hide(b("ge")("fbHelpLiteFlyout")),b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)},registerPrivacyBackLink:function(a){b("Event").listen(a,"click",h.showHelp)},registerFlyoutToggler:function(a,c){g=c;a=b("Toggler").createInstance(a);a.setSticky(!1);b("Toggler").listen("hide",c,function(a){b("Arbiter").inform("layer_hidden",{type:"HELP_LITE"}),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)});b("Toggler").listen("show",c,function(a){b("Arbiter").inform("layer_shown",{type:"HELP_LITE"}),h.showHelp()})},isFlyoutVisible:function(){return g&&b("Toggler").getActive()===g},setFlyoutVisible:function(a){a&&b("HelpLiteFlyoutBootloader").loadFlyout(),a?b("Toggler").show(g):b("Toggler").hide(g)}};e.exports=h}),null);
__d("WorkChatAvailabilityStatusLoader",["Promise","Bootloader","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={_store:null,_actions:null,_promise:null,getStoreEnforce:function(){b("nullthrows")(this._store,"Status store is not loaded");return this._store},getActionsEnforce:function(){b("nullthrows")(this._actions,"Status actions is not loaded");return this._actions},isLoaded:function(){return this._store!=null&&this._actions!=null},load:function(){var a=this;this._promise||(this._promise=new(b("Promise"))(function(c){b("Bootloader").loadModules(["WorkChatAvailabilityStatusActions","WorkChatAvailabilityStatusStore"],function(b,d){a._store=d,a._actions=b,c({store:d,actions:b})},"WorkChatAvailabilityStatusLoader")}));return this._promise}};e.exports=a}),null);
__d("MercuryParticipantListRenderer",["fbt","MercuryIDs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(){__p&&__p();var a=this;this.$6=function(c){var d=a.$5;if(d!=null){var e=b("MercuryIDs").getUserIDFromParticipantID(c.id);if(e!=null&&d[e]!=null&&d[e]!=void 0)return d[e]}return a.$2?c.short_name:c.name};this.$1=!1;this.$2=!1;this.$3=!1;this.$4=0;this.$5=null}var c=a.prototype;c.renderParticipantList=function(a){a=a.map(this.$6);switch(a.length){case 0:return h(this.$1);case 1:return i(a);case 2:return this.$3?k(a):j(a);case 3:return this.$3?m(a):l(a);default:return this.$3?o(a,this.$4):n(a,this.$4)}};c.setIsNewThread=function(a){this.$1=a;return this};c.setNameRenderer=function(a){this.$6=a;return this};c.setUseShortName=function(a){this.$2=a;return this};c.setNickname=function(a){this.$5=a;return this};c.setUseAndSeparator=function(a){this.$3=a;return this};c.setTotalParticipantCount=function(a){this.$4=a;return this};return a}();function h(a){if(a)return g._("New message");else return g._("No Participants")}function i(a){return a[0]}function j(a){return g._("{participant1}, {participant2}",[g._param("participant1",a[0]),g._param("participant2",a[1])])}function k(a){return g._("{participant1} and {participant2}",[g._param("participant1",a[0]),g._param("participant2",a[1])])}function l(a){return g._("{participant1}, {participant2}, {participant3}",[g._param("participant1",a[0]),g._param("participant2",a[1]),g._param("participant3",a[2])])}function m(a){return g._("{participant1}, {participant2}  and {participant3}",[g._param("participant1",a[0]),g._param("participant2",a[1]),g._param("participant3",a[2])])}function n(a,b){return g._("{participant1}, {participant2}, {participant3}, {others_link}",[g._param("participant1",a[0]),g._param("participant2",a[1]),g._param("participant3",a[2]),g._param("others_link",p((b||a.length)-3))])}function o(a,b){return g._("{participant1}, {participant2} and {others_link}",[g._param("participant1",a[0]),g._param("participant2",a[1]),g._param("others_link",p((b||a.length)-2))])}function p(a){if(a>1)return g._({"*":"{others_count} others"},[g._param("others_count",a,[0])]);else return g._("1 other")}e.exports=a}),null);
__d("ChatSidebarPresencePrivacyStore",["ChatDispatcher","ChatSidebarPresencePrivacyActions","FluxReduceStore","PresencePrivacy"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{currentUser:b("PresencePrivacy").getVisibility(),onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),friends:b("PresencePrivacy").getFriendsVisibility()}};d.reduce=function(a,c){switch(c.type){case b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED:return{onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),currentUser:b("PresencePrivacy").getVisibility(),friends:b("PresencePrivacy").getFriendsVisibility()};case b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED:return babelHelpers["extends"]({},a,{onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),currentUser:b("PresencePrivacy").getVisibility()})}return a};d.isUserOffline=function(){return this.getState().currentUser===b("PresencePrivacy").OFFLINE};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("ChatDispatcher"))}),null);
__d("ChatSidebar",["csx","Arbiter","AsyncRequest","Bootloader","ChatConfig","ChatDispatcher","ChatPerfInstrumentation","ChatSidebarActions","ChatSidebarBotsDispatcher","ChatSidebarBotsStore","ChatSidebarCachedViewport","ChatSidebarPresencePrivacyStore","ChatSidebarStore","ChatSidebarVisibility","CSS","CurrentUser","DOM","DOMDimensions","Event","LitestandClassicPlaceHolders","Parent","PresencePrivacy","PresenceUtil","SidebarAppsInitialVisibility","SidebarWorkTopGroupsVisibility","Style","TimeSlice","URI","ViewportBounds","emptyFunction","ge","gkx","ifRequired","onAfterDisplay","onAfterLoadSafe","qex","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("ChatSidebarBotsDispatcher").module,j=b("ChatSidebarBotsStore").module,k,l,m,n,o,p,q=!0,r=b("ChatSidebarCachedViewport").viewport,s=44,t=117,u=40,v=32,w=44,x=30,y=171,z=b("ChatConfig").get("expanded_divebar_width"),A=b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),B=b("ChatConfig").get("sidebar.hide_buddylist_off_allpage"),C=b("qex")._("1211266"),D="buddylistOff";function E(){return b("ChatSidebarStore").getVisibleType()==="sidebar"}function F(a,b){if(!E())return;b?n.hide():(n.show(),J())}function G(){return!E()||!m?0:z}function H(){b("CSS").removeClass(document.documentElement,"sidebarMode");var a=B||C||A&&new(h||(h=b("URI")))(window.location.href).getPath()!=="/";a?b("CSS").addClass(document.documentElement,D):(b("CSS").removeClass(document.documentElement,D),(A||C||B)&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ChatSidebar"));b("ChatSidebarStore").isInitialized()&&(n.hide(),b("CSS").hide(m),b("CSS").hide(l));b("Arbiter").inform("sidebar/visibility",!1,"state");b("Arbiter").inform("reflow");b("ViewportBounds").inform("change")}function I(a){J(a,S._cacheViewport)}function J(a,c){var d;b("queryThenMutateDOM")(function(){c&&c(),(!a||a.height!==r.height)&&(d=O())},function(){(a==null||a.width!==r.width)&&b("ChatSidebarVisibility").shouldShowSidebar(r,function(a,c){b("ChatSidebarActions").show(a?"sidebar":"buddylist")}),P(d)})}function K(){b("ChatSidebarVisibility").shouldShowSidebar(r,function(a,c){b("ChatSidebarActions").show(a?"sidebar":"buddylist")}),P(O())}function L(a){b("Bootloader").loadModules(["KeyboardShortcuts"],function(c){c.register("q",function(c){if(b("ChatSidebarStore").getVisibleType()!=="sidebar")return;b("requireWeak")("ChatTypeaheadCore",function(b){b.focusSearchField(a,c)})},{persistOnTransition:!0})},"ChatSidebar")}function M(a){var c=r||b("ChatSidebarVisibility").getViewport(),d=c.height;a&&a.length?(a.forEach(function(a){a&&a!==k&&!b("CSS").hasClass(a,"hidden_elem")&&(d-=b("DOMDimensions").getElementDimensions(a).height)}),p&&(d-=p.getOffset()),o&&(d-=b("DOMDimensions").getElementDimensions(o).height)):(b("ifRequired")("AppsDivebarDisplayController",function(a){a.isVisible()&&(d-=y)},function(){b("SidebarAppsInitialVisibility").visible&&(d-=y)}),b("CurrentUser").isWorkUser()&&(j&&j.hasBots()&&(d-=t),b("SidebarWorkTopGroupsVisibility").visible&&(d-=u*b("SidebarWorkTopGroupsVisibility").numGroups+v),b("gkx")("678652")&&(d-=w)),d-=s,d-=x);return Math.max(0,d)}function N(){__p&&__p();var a;(a=b("CSS")).show(l);a.show(m);a.addClass(document.documentElement,"sidebarMode");a.removeClass(document.documentElement,D);A&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ChatSidebar");n.show();b("Arbiter").inform("sidebar/visibility",!0,"state");b("LitestandClassicPlaceHolders").destroy("sidebar");b("ViewportBounds").inform("change")}function O(){return{body:S.getBodyHeight(),item:n.getItemHeight()}}function P(a){if(!a)return;var c=8,d=Math.floor((a.body-c)/a.item);n.setNumTopFriends(d,q,"sidebar");q=!1;d=Math.floor(a.body-c);b("Style").set(k,"height",a.body+"px");b("Arbiter").inform("sidebar/resized",d,"state");b("Arbiter").inform("reflow")}function Q(){var a;b("queryThenMutateDOM")(function(){a=O()},function(){return P(a)})}function R(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(b("emptyFunction")).setErrorHandler(b("emptyFunction")).setData({sidebar_mode:b("ChatSidebarStore").isEnabled(),window_id:b("PresenceUtil").getSessionID()}).setAllowCrossPageTransition(!0).send()}var S={init:function(a,c){__p&&__p();S.init=b("emptyFunction"),b("ChatPerfInstrumentation").initDivebar(),b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarStore")),b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarPresencePrivacyStore")),i&&j&&i.explicitlyRegisterStore(j),b("ChatSidebarActions").loaded(),m=a,n=c,k=b("DOM").find(a,"div.fbChatSidebarBody"),l=b("DOM").find(a,"._51x_"),o=b("DOM").find(a,"._5qqe"),b("Event").listen(window,"resize",function(){var a=babelHelpers["extends"]({},r)||{};I(a)}),b("Arbiter").subscribe("page_transition",function(a,c){b("ChatSidebarVisibility").shouldShowSidebar(r,function(a,d){d=document.documentElement||"";C||A&&c.uri.getPath()!=="/"?b("CSS").addClass(d,D):b("CSS").removeClass(d,D);b("ChatSidebarActions").show(a?"sidebar":"buddylist")},c.uri)}),b("gkx")("678653")?b("onAfterDisplay")(function(){L(a)}):L(a),n.setScrollContainer(b("Parent").byClass(n.getRoot(),"uiScrollableAreaWrap")),b("Arbiter").subscribe("chat/option-changed",function(a,b){a=b.name;(a==="hide_groups"||a==="hide_admined_pages"||a==="hide_businesses")&&Q()}),b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps","PagesDivebar/show-pages","PagesDivebar/hide-pages"],Q),b("Arbiter").subscribe("sidebar/typeahead/active",F),b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){J(),b("ChatSidebarActions").userPresenceChanged()}),b("PresencePrivacy").subscribe("privacy-changed",function(){J(),b("ChatSidebarActions").privacyChanged()}),b("ChatSidebarStore").addListener(function(){var a=b("ChatSidebarStore").getState(),c=b("ChatSidebarStore").getPrevState();if(a.visible!==c.visible)switch(a.visible){case"sidebar":N();break;case"buddylist":H();break}a.enabled!==c.enabled&&R()}),j&&j.addListener(function(){return Q()}),b("gkx")("678654")?(K(),b("onAfterLoadSafe")(function(){if(r.needsRefresh){var a=b("ChatSidebarStore").getState().visible==="sidebar";I();b("onAfterLoadSafe")(function(){a!==(b("ChatSidebarStore").getState().visible==="sidebar")&&b("Bootloader").loadModules(["ChatReliabilityInstrumentation"],function(a){a.logERROR("sidebar flashed")},"ChatSidebar")})}})):I(),b("onAfterLoadSafe")(function(){b("Bootloader").loadModules(["ChatImpressionLogger"],function(a){a.init(n)},"ChatSidebar")}),b("ViewportBounds").addPersistentRight(G),b("Arbiter").inform("sidebar/initialized",S,"state"),b("ChatSidebarActions").init(),b("ChatPerfInstrumentation").logSIDEBAR_DISPLAY_DONE()},ensureLoaded:function(){__p&&__p();if(!b("ChatSidebarStore").isEnabled())return;if(b("ChatSidebarStore").isLoaded())return;if(b("ge")("pagelet_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("SidebarPagelet","pagelet_sidebar")},"ChatSidebar");b("ChatSidebarActions").loaded()},hide:function(){if(!b("ChatSidebarStore").isEnabled())return;b("ChatSidebarActions").disable()},unhide:function(){if(b("ChatSidebarStore").isEnabled())return;b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null,function(a,c){b("ChatSidebarActions").enable(a?"sidebar":"buddylist")})},_cacheViewport:function(){r=b("ChatSidebarVisibility").getViewport()},getBodyHeight:function(){return b("gkx")("678259")?M():M(Array.from(l.childNodes))}};S.init=b("TimeSlice").guard(S.init,"ChatSidebar init");e.exports=S}),null);
__d("SRLayout.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").jsx("div",{className:b("joinClasses")(a.className,"_5aj7"),children:a.children})}e.exports=a}),null);
__d("SRLayoutColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").jsx("div",{className:b("joinClasses")(a.className,"_4bl7"),children:a.children})}e.exports=a}),null);
__d("SRLayoutFillColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").jsx("div",{className:b("joinClasses")(a.className,"_4bl9"),children:a.children})}e.exports=a}),null);
__d("SRLink.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("a",babelHelpers["extends"]({},this.props,{children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("SplitImage.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.size,c=this.props.srcs,d=this.props.border,e=this.props.className,f=this.props.halfView;if(c.length===0)return null;var g=null;c.length===1?g=this.$1(c[0],a):c.length===2?g=this.$2(c,a,d):g=this.$3(c,a,d,f);return b("React").jsx("div",{className:b("joinClasses")(e,"_55lt"),style:{width:a,height:a},children:g})};d.$1=function(a,c){return b("React").jsx(b("Image.react"),{src:a,width:c,height:c,alt:""})};d.$2=function(a,c,d){var e=Math.floor(c/2),f=-Math.floor(e/2);d="_55lu"+(d?" _57xo":"");return b("React").jsxs("div",{children:[b("React").jsx("div",{className:"_55lu",style:{width:e},children:b("React").jsx(b("Image.react"),{src:a[0],width:c,height:c,style:{marginLeft:f},alt:""})}),b("React").jsx("div",{className:d,style:{width:e},children:b("React").jsx(b("Image.react"),{src:a[1],width:c,height:c,style:{marginLeft:f},alt:""})})]})};d.$3=function(a,c,d,e){e=e===!0?Math.floor(c/3*1.5)+1:Math.floor(c/3*2);var f=-Math.floor((c-e)/2),g=Math.floor(c/2),h=c-e,i=-Math.floor((g-h)/2),j="_55lu"+(d?" _57pl":"");d="_55lu"+(d?" _57pm":"");return b("React").jsxs("div",{children:[b("React").jsx("div",{className:j,style:{width:e},children:b("React").jsx(b("Image.react"),{src:a[0],width:c,height:c,style:{marginLeft:f},alt:""})}),b("React").jsx("div",{className:d,style:{width:h,height:g},children:b("React").jsx(b("Image.react"),{src:a[1],width:g,height:g,style:{marginLeft:i},alt:""})}),b("React").jsx("div",{className:"_55lu",style:{width:h,height:g},children:b("React").jsx(b("Image.react"),{src:a[2],width:g,height:g,style:{marginLeft:i},alt:""})})]})};return c}(b("React").Component);e.exports=a}),null);
__d("ChatSidebarAdminedPage.react",["cx","Bootloader","P2BWWWNotificationConfig","React","SplitImage.react","SRLayout.react","SRLayoutColumn.react","SRLayoutFillColumn.react","SRLink.react","SRXUIBadge.react","emptyFunction","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$3=function(){var a=d.props,c=a.slot,e=a.slotOffset,f=a.totalSlots,g=a.page;b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger","PageInboxEntryPointLogger","PageInboxEntryPointEvent","PageInboxEntryPoint","PageInboxEntryPointType"],function(a,h,i,j,k){new a().setSlotClicked(e+c).setSlotsVisibleBeforeScrolling(f).setRelativeSlotClicked(d.props.slot).setSidebarSection("admined_pages").log(),b("P2BWWWNotificationConfig").pageID===g.id&&g.uri!=null&&g.uri.includes("messages")&&h.log({badgingCount:g.badgingCount,event:i.CLICK,entryPoint:j.CHAT_BAR,entryPointType:k.CHAT_BAR,pageID:g.id})},"ChatSidebarAdminedPage.react")},d.$2=function(){var a=String(d.props.page.id);b("gkx")("678659")?b("Bootloader").loadModules(["ChatSidebarHoverCardV2","MessengerChatSidebarSlotsTypedLogger"],function(b,c){b.show(a,d.$1)},"ChatSidebarAdminedPage.react"):b("Bootloader").loadModules(["MessengerChatSidebarSlotsTypedLogger"],b("emptyFunction"),"ChatSidebarAdminedPage.react");d.props.onMouseEnter&&d.props.onMouseEnter(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this.props.page;b("P2BWWWNotificationConfig").pageID===a.id&&a.uri!=null&&a.uri.includes("messages")&&b("Bootloader").loadModules(["PageInboxEntryPointLogger","PageInboxEntryPointEvent","PageInboxEntryPoint","PageInboxEntryPointType"],function(b,c,d,e){b.log({badgingCount:a.badgingCount,event:c.IMPRESSION,entryPoint:d.CHAT_BAR,entryPointType:e.CHAT_BAR,pageID:a.id})},"ChatSidebarAdminedPage.react")};d.render=function(){var a=this,c=9,d=this.props.page,e=d.imgSrc,f=[];e!=null&&(f=[e]);return b("React").jsx("li",{className:"_12um _42fz","data-id":d.id,ref:function(b){a.$1=b},onMouseOver:this.$2,onClick:this.$3,children:b("React").jsx("div",{className:"_55ln",children:b("React").jsx("div",{className:"_55lp",children:b("React").jsxs(b("SRLayout.react"),{children:[b("React").jsx(b("SRLayoutColumn.react"),{children:b("React").jsx(b("SRLink.react"),{href:d.uri,children:b("React").jsx("div",{className:"_55lq",children:b("React").jsx(b("SplitImage.react"),{size:d.imgSize,srcs:f})})})}),b("React").jsx(b("SRLayoutFillColumn.react"),{children:b("React").jsx(b("SRLink.react"),{className:"_224p",href:d.uri,children:b("React").jsx("div",{className:"_55lr",children:d.name})})}),b("React").jsx(b("SRLayoutColumn.react"),{className:"_3p8_",children:b("React").jsx("div",{className:"_5bon",children:b("React").jsx(b("SRXUIBadge.react"),{className:"_4fsv",count:d.badgingCount,maxcount:c})})})]})})})})};return c}(b("React").Component);e.exports=a}),null);
__d("ChatSidebarPageListContainer.react",["cx","ChatSidebarAdminedPage.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.adminedPages.length;return b("React").jsx("ul",{className:"_4kqp",children:a.adminedPages.map(function(d,e){return b("React").jsx(b("ChatSidebarAdminedPage.react"),{page:d,slot:e,slotOffset:0,totalSlots:c,onMouseEnter:a.onMouseEnter},d.id)})})}e.exports=a}),null);
__d("ObjectFlip",[],(function(a,b,c,d,e,f){function a(a){return Object.keys(a).reduce(function(b,c){var d=a[c];d!==null&&d!==void 0&&(b[d]=c);return b},{})}e.exports=a}),null);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||!Boolean(a)}e.exports=a}),null);
__d("XPagesBrowserController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/",{category:{type:"String"},ref:{type:"String"},cityid:{type:"Int"},similar:{type:"Int"},frompageid:{type:"Int"},actAsPageID:{type:"Int"},source:{type:"String"},pyml:{type:"Int"},viewallpywo:{type:"Bool",defaultValue:!1},notif_id:{type:"Int"},notif_page_id:{type:"Int"}})}),null);