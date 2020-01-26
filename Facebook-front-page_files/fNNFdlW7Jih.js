if (self.CavalryLogger) { CavalryLogger.start_js(["BgDxx"]); }

__d("BaseAsyncLoader",["KeyedCallbackManager","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a,c,d){__p&&__p();var e=new(b("KeyedCallbackManager"))(),f=!1,g=[];function h(){if(!g.length||f)return;f=!0;b("setTimeoutAcrossTransitions")(j,0)}function i(a){f=!1,a.forEach(e.unsubscribe.bind(e)),h()}function j(){__p&&__p();var b={},c=[];g=g.filter(function(a){var d=e.getUnavailableResources(a);if(d.length){d.forEach(function(a){b[a]=!0});c.push(a);return!0}return!1});var h=Object.keys(b);h.length?d(a,h,c,k.bind(null,c),l.bind(null,c)):f=!1}function k(a,b){b=b.payload[c]||b.payload;e.addResourcesAndExecute(b);i(a)}function l(a){i(a)}return{get:function(a,b){a=e.executeOrEnqueue(a,b);b=e.getUnavailableResources(a);b.length&&(g.push(a),h())},getCachedKeys:function(){return Object.keys(e.getAllResources())},getNow:function(a){return e.getResource(a)||null},set:function(a){e.addResourcesAndExecute(a)}}}function a(a,b){throw new Error("BaseAsyncLoader can't be instantiated")}Object.assign(a.prototype,{_getLoader:function(){g[this._endpoint]||(g[this._endpoint]=h(this._endpoint,this._type,this.send));return g[this._endpoint]},get:function(a,b){return this._getLoader().get(a,b)},getCachedKeys:function(){return this._getLoader().getCachedKeys()},getNow:function(a){return this._getLoader().getNow(a)},reset:function(){g[this._endpoint]=null},set:function(a){this._getLoader().set(a)}});e.exports=a}),null);
__d("AjaxLoader",["AsyncRequest","BaseAsyncLoader","LogHistory"],(function(a,b,c,d,e,f){__p&&__p();var g=b("LogHistory").getInstance("ajax_loader");function a(a,b){this._endpoint=a,this._type=b}Object.assign(a.prototype,b("BaseAsyncLoader").prototype);a.prototype.send=function(a,c,d,e,f){new(b("AsyncRequest"))().setURI(a).setData({ids:c}).setMethod("POST").setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(a){e(a)}).setTimeoutHandler(10*1e3,function(a){f(),g.error("fetch_timeout","{}")}).setErrorHandler(function(a){f(),g.error("fetch_error",JSON.stringify({error_type:a.errorSummary,error_text:a.errorDescription}))}).send()};e.exports=a}),null);
__d("ChatSidebarActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({AFTER_DOM_LOAD:null,INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarPresencePrivacyActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({PRIVACY_CHANGED:null,USER_PRESENCE_CHANGED:null});e.exports=a}),null);
__d("ChatSidebarRecentCallsActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RECENT_CALLS_UPDATED:null});e.exports=a}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarPresencePrivacyActions","ChatSidebarRecentCallsActions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").INIT})},afterDomLoad:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").AFTER_DOM_LOAD})},loaded:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").LOADED})},disable:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!1,sidebarType:"buddylist"})},enable:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!0,sidebarType:a})},show:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SHOW,sidebarType:a})},userPresenceChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})},privacyChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})},recentCallsUpdated:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED,calls:a})}};e.exports=a}),null);
__d("ChatSidebarDropdownConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SOUND:"sound",ADVANCED_SETTINGS:"advanced_settings",BLOCK_SETTINGS:"block_settings",TURN_OFF_DIALOG:"turn_off_dialog",CLOSE_ALL_TABS:"close_all_tabs",LOWER_ALL_TABS:"lower_all_tabs",TOGGLE_DISCOVER_BOTS:"toggle_discover_bots",SIDEBAR:"sidebar",HIDE_GROUPS:"hide_groups",ONLINE:"online",VIDEOCALL_ON:"videoon",VIDEOCALL_OFF:"videooff",PAUSE:"pause",SHOW_APPS:"show_apps",HIDE_APPS:"hide_apps",HIDE_MARKETPLACE:"hide_marketplace",SHOW_TICKER:"show_ticker",HIDE_TICKER:"hide_ticker",HIDE_ADMINED_PAGES:"hide_admined_pages",HIDE_BUSINESSES:"hide_businesses",EMOJI_SETTINGS:"emoji_settings",TURN_OFF_CHAT_TABS:"turn_off_chat_tabs"});e.exports=a}),null);
__d("FBRTCDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("FBRTCStore",["FBRTCDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("FBRTCDispatcher"))||this}var d=c.prototype;d.__emitChange=function(){this.__emitter.emit(this.__changeEvent)};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("FBRTCCallBlockingStore",["Arbiter","AsyncRequest","Bootloader","ChannelConstants","FBRTCDispatcher","FBRTCStore","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=0,i=null,j="call_block_setting_changed";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.init=function(a){this.$FBRTCCallBlockingStore1(a),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("videocall_block_setting"),this.$FBRTCCallBlockingStore2.bind(this))};d.__onDispatch=function(a){if(a.type!==j)return;this.$FBRTCCallBlockingStore1(a.data)};d.$FBRTCCallBlockingStore1=function(a){switch(a){case 0:g=!1;this.$FBRTCCallBlockingStore3();break;case-1:g=!0;this.$FBRTCCallBlockingStore3();break;default:g=!0,this.$FBRTCCallBlockingStore4(a)}this.__emitChange()};d.$FBRTCCallBlockingStore4=function(a){i===null&&(i=b("setTimeoutAcrossTransitions")(this.turnOnVideoCalling.bind(this),a*1e3))};d.getBlockingStatus=function(){return g};d.turnOnVideoCalling=function(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({call_blocked_until:0}).send()};d.turnOffVideoCalling=function(a){h=a,new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({call_blocked_until:a}).send()};d.$FBRTCCallBlockingStore3=function(){i&&(b("clearTimeout")(i),i=null)};d.$FBRTCCallBlockingStore5=function(){b("FBRTCDispatcher").dispatch({type:j,data:0}),b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:"rtc_enabled"})},"FBRTCCallBlockingStore")};d.$FBRTCCallBlockingStore6=function(){b("FBRTCDispatcher").dispatch({type:j,data:h}),b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:h===-1?"rtc_disabled_permanently":"rtc_disabled_temporarily"})},"FBRTCCallBlockingStore")};d.$FBRTCCallBlockingStore2=function(a,c){b("FBRTCDispatcher").dispatch({type:j,data:c.obj.value})};return c}(b("FBRTCStore"));e.exports=new a()}),null);
__d("ChatOptions",["Arbiter","ArbiterMixin","Bootloader","ChannelConstants","ChatSidebarActions","ChatSidebarDropdownConstants","FBRTCCallBlockingStore","JSLogger","PresenceUtil","mixin","ChatOptionsInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g=b("JSLogger").create("chat_options"),h={};(function(){__p&&__p();var a=b("ChatOptionsInitialData");for(var c in a){var d=a[c];switch(c){case"call_blocked_until":b("FBRTCCallBlockingStore").init(d);break;case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:d!==-1&&(h[c]=!!d);break;default:h[c]=!!d}}})();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getSetting=function(a){return h[a]};d.setSetting=function(a,c,d){__p&&__p();if(a==="sidebar_mode"){b("Bootloader").loadModules(["ChatSidebarVisibility"],function(a){return a.shouldShowSidebarIgnoreEnabled(null,function(a,d){c?b("ChatSidebarActions").enable(a?"sidebar":"buddylist"):b("ChatSidebarActions").disable()})},"ChatOptions");return}if(this.getSetting(a)==c)return;d&&(d="from_"+d,g.log(d,{name:a,new_value:c,old_value:this.getSetting(a)}));h[a]=!!c;b("Arbiter").inform("chat/option-changed",{name:a,value:c})};return c}(b("mixin")(b("ArbiterMixin")));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"),function(a,c){a=c.obj;if(a.window_id===b("PresenceUtil").getSessionID())return;i.setSetting(a.setting,!!a.value,"channel")});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.chat_options=h});var i=new a();e.exports=i}),null);
__d("ChatSidebarPreloadStore",["InitialChatFriendsList"],(function(a,b,c,d,e,f){"use strict";a={onLoaded:function(a){a({buddies:(a=b("InitialChatFriendsList")).list,groups:a.groups,shortProfiles:a.shortProfiles,nearby:a.nearby,adminedPages:a.adminedPages,marketplaceThreads:a.marketplaceThreads,pageListModule:a.pageListModule,pymmList:b("InitialChatFriendsList").pymmList||{},recentPageList:b("InitialChatFriendsList").recentPageList,profiles:[]})}};e.exports=a}),null);
__d("ChatProfileStore",["ChatSidebarPreloadStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};a={init:function(){b("ChatSidebarPreloadStore").onLoaded(function(a){var b=a.profiles,c=a.nearby;return b.filter(function(a){return!c||c.indexOf(a.id)===-1}).forEach(function(a){var b=new Date();b=a.birthdate&&b.getDate()===a.birthdate.day&&b.getMonth()+1===a.birthdate.month;var c=a.profile_picture&&a.profile_picture.uri?a.profile_picture.uri:null;g[a.id]={id:a.id,is_birthday:b,thumbSrc:c,name:a.name,is_messenger_only:!!a.is_messenger_only}})})},get:function(a){return g[a]}};e.exports=a}),null);
__d("XChatUserInfoAllAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/user_info_all/",{viewer:{type:"Int",required:!0}})}),null);
__d("ShortProfilesBootstrapper",["Promise","AsyncRequest","BanzaiODS","CurrentUser","JSLogger","XChatUserInfoAllAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=5,h=1e4,i=b("XChatUserInfoAllAsyncController").getURIBuilder().setInt("viewer",b("CurrentUser").getID()).getURI(),j=b("JSLogger").create("short_profiles");a=function(){__p&&__p();function a(a){__p&&__p();var c=this;this.$1=a;this.$2=new(b("Promise"))(function(a,b){c.$3=a,c.$4=b});this.$5=!1;this.$6=null;this.$7=0;this.$8=0;this.$9=0;this.$10=!1;this.$11=!1}var c=a.prototype;c.fetchAll=function(){__p&&__p();var a=this;this.$12();if(this.$5||this.$6)return this.$2;if(this.$7>=g){this.$13();return this.$2}this.$7++;this.$14();this.$6=new(b("AsyncRequest"))(i).setHandler(function(b){a.$6=null,a.$5=!0,a.$15(),a.$1(b.payload),a.$3()}).setErrorHandler(function(){a.$6=null,a.$8++,a.$16()}).setTimeoutHandler(h,function(){a.$6=null,a.$9++,a.$17(),a.fetchAll()}).setAllowCrossPageTransition(!0);this.$6.send();return this.$2};c.isBootstrapped=function(){return this.$5};c.isBootstrapping=function(){return!!this.$6};c.getAttemptCount=function(){return this.$7};c.getErrorCount=function(){return this.$8};c.getTimeoutCount=function(){return this.$9};c.$12=function(){this.$10||(j.log("bootstrap_start"),b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.starts"),this.$10=!0)};c.$14=function(){j.log("bootstrap_attempt"),b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.attempts")};c.$15=function(){j.log("bootstrap_success"),b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.successes"),this.$7>1&&b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.successes_after_retries")};c.$16=function(){j.log("bootstrap_error"),b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.errors")};c.$17=function(){j.log("bootstrap_timeout"),b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.timeouts")};c.$13=function(){this.$11||(j.log("bootstrap_giveup"),b("BanzaiODS").bumpEntityKey(3303,"chat.web","typeahead.bootstrap.giveups"),this.$11=!0,this.$4())};return a}();e.exports=a}),null);
__d("XChatUserInfoAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/user_info/",{ids:{type:"IntVector",defaultValue:[]}})}),null);
__d("ShortProfiles",["AjaxLoader","Arbiter","CurrentUser","JSLogger","ShortProfilesBootstrapper","URI","XChatUserInfoAsyncController","emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=null,i=new(b("AjaxLoader"))(b("XChatUserInfoAsyncController").getURIBuilder().getURI().toString(),"profiles"),j={get:function(a,b){this.getMulti([a],function(c){return b(c[a],a)})},getMulti:function(a,c){i.get(a,c||b("emptyFunction"))},getNow:function(a){return i.getNow(a)||null},getMultiNow:function(a){var b={};a.forEach(function(a){return b[a]=j.getNow(a)});return b},getCachedProfileIDs:function(){return i.getCachedKeys()},hasAll:function(){return!!h&&h.isBootstrapped()},fetchAll:function(){h||(h=new(b("ShortProfilesBootstrapper"))(function(a){i.set(a)}));return h.fetchAll()},set:function(a,b){var c={};c[a]=b;this.setMulti(c)},setMulti:function(a){__p&&__p();if(b("CurrentUser").isWorkUser()){var c={};Object.keys(a).forEach(function(d){var e=a[d];(e.type!=="fb4c"||!e.uri)&&(c[d]=e);var f=new(g||(g=b("URI")))(e.uri).setDomain("").setProtocol("").toString();c[d]=babelHelpers["extends"]({},e,{uri:f})});a=c}i.set(a)}};b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,c){a=j.getCachedProfileIDs();var d=b("JSLogger").getEntries(function(a){return a.cat=="short_profiles"||a.cat=="chat_typeahead"});c.chat_typeahead={bootstrapped:h&&h.isBootstrapped(),bootstrapping:h&&h.isBootstrapping(),bootstrap_attempts:h&&h.getAttemptCount(),bootstrap_errors:h&&h.getErrorCount(),bootstrap_timeouts:h&&h.getTimeoutCount(),entries:a,entry_count:a.length,history:d}});e.exports=j}),null);
__d("ChatSortUsers",["ShortProfiles","TokenizeUtil"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){if(g[a])return g[a];var c=(b("ShortProfiles").getNow(a)||{}).name;return c?g[a]=b("TokenizeUtil").flatten(c):"~"}a={sortAlphabetical:function(a,b){a=h(a);b=h(b);return a!==b?a<b?-1:1:0}};e.exports=a}),null);
__d("ChatUnreadCountActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({COUNT_UPDATED:null})}),null);
__d("ChatSidebarParticipantTooltipBuilder",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=10,i="\n";function a(a,b){var c=[],d=Math.min(h,a.length);a=a.slice(0,d);a.forEach(function(a){a=a.name;a&&c.push(a)});d<b&&c.push(g._("and {num} more...",[g._param("num",b-d)]));return c.join(i)}e.exports={buildParticipantsTooltip:a,MAX_NUM_PARTICIPANTS_TO_RENDER:h}}),null);
__d("OrderedFriendsList",["AvailableListConstants","ChatProfileStore","ChatSidebarParticipantTooltipBuilder","ChatSidebarPreloadStore","CurrentUser","MercuryIDs","PresenceStatus","SearchableEntry","ShortProfiles","createArrayFromMixed","isValidUniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={},i=[],j={};function k(a){a=String(a);return b("MercuryIDs").isValid(a)?a:b("MercuryIDs").getParticipantIDFromUserID(a)}function l(a,c){a=b("createArrayFromMixed")(a);c(a.filter(function(a){a=b("ShortProfiles").getNow(a);return!a||o(a)||a.is_nonfriend_messenger_contact}))}function m(a){g=[];var c=0;a.forEach(function(a){var d=a.slice(0,-2);a=a.slice(-1);b("PresenceStatus").get(d)==a&&(g[c]=d,h[d]=c++)})}function n(a){var c=0;a.forEach(function(a){var d=a.slice(0,-2);a=a.slice(-1);a==b("AvailableListConstants").ACTIVE&&(i[c]=d,j[d]=c++)})}function o(a){return a.type==="friend"||b("CurrentUser").isWorkUser()&&a.type==="fb4c"}var p={contains:function(a){return a in h},getList:function(a){if(g&&g.length){l(g,a);return}b("ChatSidebarPreloadStore").onLoaded(function(b){b=b.buddies;m(b);l(g,a)})},getSearchableEntries:function(a,c,d){__p&&__p();p.getList(function(e){__p&&__p();b("ChatSidebarPreloadStore").onLoaded(function(f){__p&&__p();var g=f.groups,h=f.recentPageList;b("ShortProfiles").getMulti(e.slice(0,a),function(a){var b=[];for(var e in a)b.push(p.normalizeProfileEntry(a[e],e));a=c?g.map(p.normalizeThreadEntry):[];var f=h.map(p.normalizePageEntry);d(b.concat(a,f).filter(function(a){return!!a}).sort(function(a,b){return a.getOrder()-b.getOrder()}))})})})},normalizePageEntry:function(a,c){var d=a.searchTokens||[],e=a.name,f=null;return new(b("SearchableEntry"))({uniqueID:a.id||c,keywordString:d.join(" "),order:c,photo:a.imgSrc,title:e,subtitle:f,type:"page",uri:a.uri,auxiliaryData:{isVerified:a.isVerified}})},normalizeProfileEntry:function(a,c){var d=a.searchTokens||[],e=a.name,f=null;return new(b("SearchableEntry"))({uniqueID:a.id||c,keywordString:d.join(" "),order:p.getRank(a.id||c),photo:a.thumbSrc,title:e,subtitle:f,type:a.type,uri:a.uri,auxiliaryData:{isMessengerUser:a.is_messenger_user}})},normalizeThreadEntry:function(a,c){__p&&__p();var d=a.mercury_thread,e=a.participants_to_render.map(function(a){return babelHelpers["extends"]({},a,{id:k(a.id)})});d.participants=d.participants.map(k);var f=a.text,g=null;f||(f=d.name);var h=b("ChatSidebarParticipantTooltipBuilder").buildParticipantsTooltip(e,d.participants.length-1),i=e.map(function(a){return a.name}).join(", ");!f?f=i:g=i;i=a.uid;return!f||!b("isValidUniqueID")(i)?null:new(b("SearchableEntry"))({uniqueID:i,order:c,photo:d.image_src,title:f,subtitle:g,type:"thread",auxiliaryData:{participantsToRender:e,tooltipContent:h,thread:d}})},getRank:function(a){return a in h?h[a]:g?g.length:0},getActiveList:function(a){if(i.length>0){a(i);return}p.getList(function(b){return a(b)})},getActiveRank:function(a){return a in j?j[a]:p.getRank(a)}};(function(){b("ChatSidebarPreloadStore").onLoaded(function(a){var c=a.buddies;a=a.shortProfiles;b("ShortProfiles").setMulti(a);n(c);m(c)}),b("ChatProfileStore").init()})();e.exports=p}),null);
__d("PresenceStatusStore",["ChatDispatcher","FluxStore","PresenceStatus","PresenceStatusActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("ChatDispatcher"))||this}var d=c.prototype;d.__onDispatch=function(a){a=a.type;switch(a){case b("PresenceStatusActionTypes").AVAILABILITY_CHANGED:this.__emitChange();break;default:break}};d.get=function(a){return b("PresenceStatus").get(a)};d.getIsPlaying=function(a){return b("PresenceStatus").isPlayingCanvasGameUser(a)};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ShortProfilesActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({PROFILE_UPDATED:null})}),null);
__d("ShortProfilesStore",["ChatDispatcher","ChatProfileStore","FluxStore","ShortProfiles","ShortProfilesActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("ChatDispatcher"))||this}var d=c.prototype;d.__onDispatch=function(a){a=a.type;switch(a){case b("ShortProfilesActionTypes").PROFILE_UPDATED:this.__emitChange();break;default:break}};d.getNow=function(a){var c=b("ChatProfileStore").get(a);c||(c=b("ShortProfiles").getNow(a));return c};d.getMulti=function(a){b("ShortProfiles").getMulti(a,this.$ShortProfilesStore1)};d.$ShortProfilesStore1=function(a){b("ChatDispatcher").dispatch({type:b("ShortProfilesActionTypes").PROFILE_UPDATED})};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setEndpoint=function(a){this.$1.endpoint=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTabsOpen=function(a){this.$1.tabs_open=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={duration:!0,endpoint:!0,event:!0,tabs_open:!0,time:!0,weight:!0};e.exports=a}),null);
__d("ChatPerfInstrumentation",["Promise","BaseEventEmitter","ChatPerfTypedLogger","CurrentUser","FantaConst","PresenceState","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("CurrentUser").isWorkUser();c=a?b("FantaConst").cookieIDs.WORK_COOKIE_ID:b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID;d=b("PresenceState").getInitial();var h=d&&d[c]?d[c].length:0,i;f={_startTime:Number,_sidebarStartTime:Number,init:function(){this._startTime=(g||(g=b("performanceAbsoluteNow")))();return new(b("Promise"))(function(a){return a()})},initDivebar:function(){this._sidebarStartTime=(g||(g=b("performanceAbsoluteNow")))()},_log:function(a,c){c=(g||(g=b("performanceAbsoluteNow")))()-(c||this._startTime);i&&i.emit(a,c);var d=new(b("ChatPerfTypedLogger"))();d.setEvent(a).setDuration(c);d.setTabsOpen(h);d.log()},addPerfTimingsListener:function(a,c){i||(i=new(b("BaseEventEmitter"))());return i.once(a,c)},logInitStores:function(){this.logInitStores=b("emptyFunction"),this._log("chat_init_stores")},logInitData:function(){this.logInitData=b("emptyFunction"),this._log("chat_init_data")},logInitUI:function(){this.logInitUI=b("emptyFunction"),this._log("chat_init_ui")},logInitSound:function(){this.logInitSound=b("emptyFunction"),this._log("chat_init_sound")},logDisplayDone:function(){this.logDisplayDone=b("emptyFunction"),this._log("chat_display_done")},logTTI:function(){this.logTTI=b("emptyFunction"),this._log("tti")},logCHAT_CONVERSATION_TTI:function(){this.logCHAT_CONVERSATION_TTI=b("emptyFunction"),this._log("chat_conversation_tti")},logSIDEBAR_FROM_CLIENT_TTI:function(){this.logSIDEBAR_FROM_CLIENT_TTI=b("emptyFunction"),this._log("sidebar_from_client_tti",this._sidebarStartTime)},logSIDEBAR_DISPLAY_DONE:function(){this.logSIDEBAR_DISPLAY_DONE=b("emptyFunction"),this._log("sidebar_display_done",this._sidebarStartTime)}};e.exports=f}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("MercuryBootloadOnInteraction.react",["React","createCancelableFunction","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={Component:null},d.$2=function(a){a=d.state.interactionType==="click"?"click":a.type;d.setState({interactionType:a},function(){b("promiseDone")(d.props.loader.load(),function(a){d.props.takeOverRender?d.props.takeOverRender(function(){return d.$1(a)}):d.$1(a)})})},d.$3=function(a){d.setState({Component:a})},d.$4=function(a){d.state.interactionType!=="click"&&d.setState({interactionType:void 0})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("createCancelableFunction")(this.$3)};d.componentWillUnmount=function(){this.$1.cancel()};d.render=function(){__p&&__p();var a={onFocus:this.$2,onMouseOver:this.$2,onClick:this.$2,onBlur:this.$4};if(!this.state.Component)return b("React").cloneElement(this.props.placeholder,a);a=this.state.Component;var c={};switch(this.state.interactionType){case"focus":c.autoFocus=!0;break;case"click":c.clicked=!0;break}return b("React").cloneElement(this.props.component,babelHelpers["extends"]({},c,{LazyLoadedComponent:a}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ChatSidebarHideReason",[],(function(a,b,c,d,e,f){a=Object.freeze({VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2,OFF_HOMEPAGE:3});e.exports=a}),null);
__d("PresenceOrderedList",["ChatSidebarPreloadStore","ChatSortUsers","PresencePrivacy","PresenceStatus"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function h(a,c){__p&&__p();var d=[];a.forEach(function(a){var e=a[0];a=a[1];if(d.length>=c)return;if(b("PresencePrivacy").getFriendVisibility(e)==b("PresencePrivacy").BLACKLISTED)return;a==b("PresenceStatus").get(e)&&d.push(e)});return d}a=function(){"use strict";__p&&__p();function a(){this.$1=null}var c=a.prototype;c.getSorted=function(a,c){var d=this;if(this.$1){c(h(this.$1,a));return}b("ChatSidebarPreloadStore").onLoaded(function(b){b=b.buddies;d.$1=g(b);c(h(d.$1,a))})};c.getAvailableSorted=function(a){var c=b("PresenceStatus").getOnlineIDs();a&&(c=c.filter(function(b){return a&&a.indexOf(b)===-1}));return c.sort(b("ChatSortUsers").sortAlphabetical)};c.getAllSorted=function(a){var c=[],d=this.$1||[];b("PresenceStatus").getAllIDs().concat(d.map(function(a){return a[0]})).forEach(function(a){return c.indexOf(a)===-1&&c.push(a)});a&&(c=c.filter(function(b){return a&&a.indexOf(b)===-1}));return c.sort(b("ChatSortUsers").sortAlphabetical)};return a}();e.exports=new a()}),null);
__d("ChatSidebarStore",["AvailableListConstants","ChatConfig","ChatDispatcher","ChatOptions","ChatOptionsInitialData","ChatSidebarActionTypes","ChatUnreadCountActionTypes","CurrentUser","FluxStore","InitialChatFriendsList","PresenceOrderedList","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","PresenceStatusStore","ShortProfiles","ShortProfilesActionTypes","ShortProfilesStore","gkx","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function i(a,c,d){d===void 0&&(d=[]);return a.reduce(function(a,e){var f=e[0];e=e[1];a.length<c&&b("PresencePrivacy").getFriendVisibility(f)!==b("PresencePrivacy").BLACKLISTED&&e===b("PresenceStatus").get(f)&&!d.includes(f)&&a.push(f);return a},[])}function j(a){return b("PresencePrivacy").getVisibility()==b("PresencePrivacy").ONLINE?a.filter(function(a){return b("PresencePrivacy").allows(a)}):a}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("ChatDispatcher"))||this;c.$ChatSidebarStore2={enabled:!1,initTime:0,initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null};c.setupShortProfiles();c.$ChatSidebarStore3={enabled:!!b("ChatOptionsInitialData").sidebar_mode,initTime:(g||(g=b("performanceAbsoluteNow")))(),initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null};return c}var d=c.prototype;d.setupShortProfiles=function(){var a=b("InitialChatFriendsList").shortProfiles;a&&b("ShortProfiles").setMulti(a)};d.__onDispatch=function(a){__p&&__p();var c=a.type;this.$ChatSidebarStore2=babelHelpers["extends"]({},this.$ChatSidebarStore3);switch(c){case b("ChatSidebarActionTypes").INIT:this.$ChatSidebarStore2.initialized||(this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initTime:(g||(g=b("performanceAbsoluteNow")))()}));this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initialized:!0});break;case b("ChatSidebarActionTypes").AFTER_DOM_LOAD:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{isAfterDomLoad:!0});break;case b("ChatSidebarActionTypes").LOADED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{loaded:!0});break;case b("ChatSidebarActionTypes").SHOW:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{visible:a.sidebarType});break;case b("ChatSidebarActionTypes").SET_ENABLED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{enabled:a.enabled,visible:a.sidebarType});break}if(b("gkx")("678655")&&(c===b("PresenceStatusActionTypes").AVAILABILITY_CHANGED||c===b("ShortProfilesActionTypes").PROFILE_UPDATED||c===b("ChatUnreadCountActionTypes").COUNT_UPDATED)){this.__emitChange();return}for(var d in this.$ChatSidebarStore3)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore3,d)&&this.$ChatSidebarStore3[d]!==this.$ChatSidebarStore2[d]){this.__emitChange();break}};d.getPrevState=function(){return this.$ChatSidebarStore2};d.getState=function(){return this.$ChatSidebarStore3};d.isInitialized=function(){return this.$ChatSidebarStore3.initialized};d.isLoaded=function(){return this.$ChatSidebarStore3.loaded};d.isAfterDomLoad=function(){return this.$ChatSidebarStore3.isAfterDomLoad};d.isEnabled=function(){return this.$ChatSidebarStore3.enabled};d.getInitTime=function(){return this.$ChatSidebarStore3.initTime};d.getVisibleType=function(){return this.$ChatSidebarStore3.visible};d.getUsersData=function(a){__p&&__p();a=this.getOrderedPresenceUserList(a);var c=b("InitialChatFriendsList").nearby,d=b("CurrentUser").isWorkUser()?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return!a||a.type==="fb4c"}):b("PresenceOrderedList").getAvailableSorted(a.concat(c)),e=b("CurrentUser").isWorkUser()?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return a&&a.type!=="fb4c"}):[];a=a.filter(function(a){return!c||c.indexOf(a)===-1});var f=j(a);a=b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_WHITELIST&&b("PresencePrivacy").getVisibility()?a.filter(function(a){return!b("PresencePrivacy").allows(a)}):[];return{availableUsers:d,topUsers:f,workOthers:e,offlineUsers:a}};d.getExtraData=function(a){__p&&__p();var c,d=(c=b("InitialChatFriendsList")).groups,e=c.nearby,f=c.adminedPages,g=c.marketplaceThreads,h=c.pageListModule;c=c.pymmList;a--;b("ChatConfig").get("show_header")&&a--;var i=!b("ChatOptions").getSetting("hide_businesses")&&c&&c.pages;i&&(a-=3);f=b("ChatOptions").getSetting("hide_admined_pages")?[]:f;f.length&&(a-=f.length+1);var k=a,l=a;d=this.getGroupsToShow(d);var m=d.length;m===0&&!b("ChatOptions").getSetting("hide_groups")&&m++;m>0&&(l-=m+1);b("ChatConfig").get("nearby_friends_www_chatbar")&&e.length>0&&(l-=e.length+1);b("ChatConfig").get("show_admined_pages")&&f.length>0&&(l-=f.length+1);m=i&&c?c:{pages:[]};b("ChatConfig").get("show_businesses")&&m.pages.length>0&&(l-=2);l=Math.min(a,Math.max(l,b("ChatConfig").get("min_top_friends")||0));i=j(e);return{isUserOffline:b("PresencePrivacy").isUserOffline(),groups:d,numTopFriends:l,nearby:i,marketplaceThreads:g,maxThreadSlots:k,adminedPages:f,pageListModule:h,pymmList:m}};d.getGroupsToShow=function(a){if(b("ChatOptions").getSetting("hide_groups"))return[];return a.length>1?a.sort(function(a,c){return b("PresenceStatus").getGroup(c.mercury_thread.participants)-b("PresenceStatus").getGroup(a.mercury_thread.participants)}).slice(0,b("ChatConfig").getNumber("num_groups_to_show")):a};d.getOrderedPresenceUserList=function(a){if(this.$ChatSidebarStore1&&Array.isArray(this.$ChatSidebarStore1))return i(this.$ChatSidebarStore1,a);this.$ChatSidebarStore1=h(b("InitialChatFriendsList").list)||[];return i(this.$ChatSidebarStore1,a)};d.getStatusMap=function(a,c){var d={},e={};a.forEach(function(a){if(c){var f=b("PresenceStatusStore").getIsPlaying(a);d[a]=f}f=b("PresenceStatusStore").get(a);f===b("AvailableListConstants").ACTIVE&&(e[a]=f)});return{statusMap:e,playingMap:d}};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatSidebarVisibility",["ChatConfig","ChatSidebarHideReason","ChatSidebarStore","OrderedFriendsList","URI","getViewportDimensions","qex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("ChatConfig").get("sidebar.min_friends"),i=b("ChatConfig").get("sidebar.minimum_width"),j=b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),k=b("qex")._("1211266"),l={getViewport:function(){return b("getViewportDimensions")()},shouldShowSidebar:function(a,c,d){l.shouldShowSidebarIgnoreEnabled(a,function(a,d){var e=b("ChatSidebarStore").isEnabled();c(a&&e,e?d:d.concat([b("ChatSidebarHideReason").NOT_ENABLED]))},d)},shouldShowSidebarIgnoreEnabled:function(a,c,d){__p&&__p();var e=this;b("OrderedFriendsList").getActiveList(function(f){var g=a||l.getViewport();g=g.width>i;f=f.length<h;var m=!0,n=[];(j||k)&&!e.isOnHomepage(d)&&(m=!1,n.push(b("ChatSidebarHideReason").OFF_HOMEPAGE));g||(m=!1,n.push(b("ChatSidebarHideReason").VIEWPORT_INCAPABLE));f&&(m=!1,n.push(b("ChatSidebarHideReason").LOW_FRIEND_COUNT));c(m,n)})},isOnHomepage:function(a){a=a?a.getPath():new(g||(g=b("URI")))(window.location.href).getPath();return a==="/"},isSidebarVisible:function(){return b("ChatSidebarStore").getVisibleType()==="sidebar"},isBuddyListVisible:function(){return b("ChatSidebarStore").getVisibleType()==="buddylist"}};e.exports=l}),null);
__d("onAfterDisplay",["NavigationMetrics","TimeSlice","requestIdleCallback"],(function(a,b,c,d,e,f){"use strict";var g=[],h=!1;function a(a){a=b("TimeSlice").guard(a,"onAfterDisplay invocation",{propagationType:b("TimeSlice").PropagationType.ORPHAN});h?b("requestIdleCallback")(a):g.push(a)}b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,c){["all_pagelets_displayed","e2e"].indexOf(c.event)>-1&&!h&&(h=!0,g.forEach(function(a){b("requestIdleCallback")(a)}))});e.exports=a}),null);