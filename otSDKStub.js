(function(x){function y(){var a=this;this.implementThePolyfill=function(){var b=Element.prototype.setAttribute;Element.prototype.setAttribute=function(c,d){if("style"!==c.toLowerCase()&&b.apply(this,[c,d]),"style"!==c.toLowerCase()||d||this.removeAttribute("style"),"style"===c.toLowerCase()&&d){this.removeAttribute("style");var f;c=a.strToObj(d);for(f in c)this.style[f]=c[f]}}}}function C(a,b,c){function d(l){return l?(";"!==(l=l.trim()).charAt(l.length-1)&&(l+=";"),l.trim()):null}void 0===c&&(c=
!1);var f=d(a.getAttribute("style")),g=d(b);b="";b=c&&f?function(){for(var l=f.split(";").concat(g.split(";")).filter(function(D){return 0!==D.length}),m="",n="",t=l.length-1;0<=t;t--){var A=l[t].substring(0,l[t].indexOf(":")+1).trim();0>m.indexOf(A)&&(m+=A,n+=l[t]+";")}return n}():g;a.setAttribute("style",b)}function r(){}function k(){var a=this;this.iabType=null;this.iabTypeAdded=!0;this.crossOrigin=null;this.isAmp=!1;this.domainId="";this.isPreview=this.isReset=!1;this.nonce=this.geoFromUrl="";
this.setAttributePolyfillIsActive=!1;this.storageBaseURL="";this.charset=null;this.buildType="BUILDMODE";this.addBannerSDKScript=function(b){var c=a.getRegionSet(b),d=(c.GCEnable||(a.updateGtmMacros(),a.gtmUpdated=!0),a.iabTypeAdded&&("IAB2"!==c.Type&&"IAB2V2"!==c.Type||(a.iabType=c.Type,a.intializeIabStub()),"IAB2"!==c.Type)&&"IAB2V2"!==c.Type&&a.removeTcf(),c.IsGPPEnabled?B.init():B.removeGppApi(),e.stubScriptElement.cloneNode(!0)),f="";f=b.UseSDKRefactor?(e.isMigratedURL&&(d.src=e.storageBaseURL+
"/scripttemplates/new/scripttemplates/"+e.stubFileName+".js"),e.storageBaseURL+"/scripttemplates/new/scripttemplates/"+b.Version+"/"+e.bannerScriptName):"5.11.0"===b.Version?(e.isMigratedURL&&(d.src=e.storageBaseURL+"/scripttemplates/old/scripttemplates/"+e.stubFileName+".js"),e.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+e.bannerScriptName):(e.isMigratedURL&&(d.src=e.storageBaseURL+"/scripttemplates/"+e.stubFileName+".js"),e.storageBaseURL+"/scripttemplates/"+b.Version+"/"+e.bannerScriptName);
"charset data-language data-document-language data-domain-script crossorigin data-ignore-ga".split(" ").forEach(function(g){e.stubScriptElement.getAttribute(g)&&d.setAttribute(g,e.stubScriptElement.getAttribute(g))});a.charset=e.stubScriptElement.getAttribute("charset");a.isAmp=!!e.stubScriptElement.getAttribute("amp");window.otStubData={bannerBaseDataURL:e.bannerBaseDataURL,crossOrigin:a.crossOrigin,domainData:b,domainId:a.domainId,geoFromUrl:a.geoFromUrl,isAmp:a.isAmp,isPreview:a.isPreview,isReset:a.isReset,
mobileOnlineURL:e.mobileOnlineURL,nonce:a.nonce,otDataLayer:a.otDataLayer,regionRule:c,setAttributePolyfillIsActive:a.setAttributePolyfillIsActive,storageBaseURL:a.storageBaseURL,stubElement:d,urlParams:a.urlParams,userLocation:e.userLocation,gtmUpdated:a.gtmUpdated,previewMode:a.previewMode,charset:a.charset,stubUrl:e.stubScriptElement.getAttribute("src")};a.jsonp(f,null)};this.intializeIabStub=function(){var b=window;a.iabTypeAdded?(void 0===b.__tcfapi&&(window.__tcfapi=a.executeTcfApi),a.addIabFrame()):
a.addBackwardIabFrame();b.receiveOTMessage=a.receiveIabMessage;(b.attachEvent||window.addEventListener)("message",b.receiveOTMessage,!1)};this.addIabFrame=function(){var b=window;!b.frames.__tcfapiLocator&&(b.document.body?a.addLocator("CMP"):setTimeout(a.addIabFrame,5))};this.addBackwardIabFrame=function(){var b=window;!b.frames.__tcfapiLocator&&(b.document.body?a.addLocator("TCF"):setTimeout(a.addIabFrame,5))};this.addLocator=function(b){var c=window,d=c.document.createElement("iframe");C(d,"display: none;",
!0);d.name="__tcfapiLocator";d.setAttribute("title",b+" Locator");c.document.body.appendChild(d)};this.receiveIabMessage=function(b){var c,d,f,g="string"==typeof b.data,l={};try{l=g?JSON.parse(b.data):b.data}catch(m){}l.__cmpCall&&"IAB2"===a.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");l.__tcfapiCall&&"IAB2"===a.iabType&&(c=l.__tcfapiCall.callId,d=l.__tcfapiCall.command,f=l.__tcfapiCall.parameter,l=l.__tcfapiCall.version,a.executeTcfApi(d,f,function(m,n){m=
{__tcfapiReturn:{returnValue:m,success:n,callId:c,command:d}};b&&b.source&&b.source.postMessage&&b.source.postMessage(g?JSON.stringify(m):m,"*")},l))};this.executeTcfApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if(a.iabType="IAB2",!b.length)return window.__tcfapi.a||[];c=b[0];var d=b[1],f=b[2];b=b[3];"function"==typeof f&&c&&("ping"===c?a.getPingRequest(f):a.addToQueue(c,d,f,b))};this.addToQueue=function(b,c,d,f){var g=window;g.__tcfapi.a=g.__tcfapi.a||[];g.__tcfapi.a.push([b,
c,d,f])};this.getPingRequest=function(b){var c,d;void 0===c&&(c=!1);b&&(d=!(c={}),"IAB2"!==a.iabType&&"IAB2V2"!==a.iabType||(c={gdprApplies:e.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},d=!0),b(c,d))};this.initConsentSDK()}var v,w,e=new function(){this.optanonCookieName="OptanonConsent";this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.vendorsServiceData=
[];this.IABCookieValue="";this.oneTrustIABCookieName="eupubconsent";this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal";this.isStubReady=!0;this.geolocationCookiesParam="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");this.stubFileName="otSDKStub";this.DATAFILEATTRIBUTE="data-domain-script";this.bannerScriptName="otBannerSdk.js";this.mobileOnlineURL=[];this.isMigratedURL=!1;this.migratedCCTID="[[OldCCTID]]";
this.migratedDomainId="[[NewDomainId]]";this.userLocation={country:"",state:"",stateName:""}};(h=q=q||{})[h.Days=1]="Days";h[h.Weeks=7]="Weeks";h[h.Months=30]="Months";h[h.Years=365]="Years";(h=p=p||{}).Name="OTGPPConsent";h[h.ChunkSize=4E3]="ChunkSize";h.ChunkCountParam="GPPCookiesCount";(h=v=v||{}).CPRA="usca";h.CCPA="usca";h.CDPA="usva";h.USNATIONAL="usnat";h.COLORADO="usco";h.CTDPA="usct";h.UCPA="usut";h.IAB2V2="tcfeuv2";(h=w=w||{})[h.CPRA=8]="CPRA";h[h.CCPA=8]="CCPA";h[h.CDPA=9]="CDPA";h[h.USNATIONAL=
7]="USNATIONAL";h[h.COLORADO=10]="COLORADO";h[h.UCPA=11]="UCPA";h[h.CTDPA=12]="CTDPA";h[h.IAB2V2=2]="IAB2V2";var E=(p.Name,"PRODUCTION"),F=((h={})[q.Days]="PCenterVendorListLifespanDay",h[q.Weeks]="LfSpnWk",h[q.Months]="PCenterVendorListLifespanMonth",h[q.Years]="LfSpnYr",y.prototype.camelize=function(a){return(a=a.replace("--","")).split("-").map(function(b,c){var d=b?b[0].toUpperCase()+b.slice(1):"";return 0===c?b:d}).join("")},y.prototype.strToObj=function(a){var b={};a=a.split(";").map(function(f){return f.trim()});
for(var c=0,d=void 0;c<a.length;++c)if(/:/.test(a[c])){if(!(d=a[c].split(/:(.+)/))[1])return null;b[this.camelize(d[0])]=d[1].trim()}return b},y),u,p;(p=u=u||{}).ping="ping";p.addEventListener="addEventListener";p.removeEventListener="removeEventListener";p.hasSection="hasSection";p.getSection="getSection";p.getField="getField";p.getGPPData="getGPPData";var B=new function(){var a=this;this.LOCATOR_NAME="__gppLocator";this.win=window;this.customInit="CUSTOMINIT";this.init=function(){a.win.__gpp&&"function"==
typeof a.win.__gpp||(a.win.__gpp=a.executeGppApi,window.addEventListener("message",a.messageHandler,!1),a.addFrame(a.LOCATOR_NAME))};this.removeGppApi=function(){delete a.win.__gpp;var b=document.querySelectorAll("iframe[name\x3d"+a.LOCATOR_NAME+"]")[0];b&&b.parentElement.removeChild(b)};this.executeGppApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];var d=null==(d=a.win)?void 0:d.__gpp;if(d.queue=d.queue||[],d.events=d.events||[],!b.length||1===b.length&&"queue"===b[0])return d.queue;
if(1===b.length&&"events"===b[0])return d.events;c=b[0];d=1<b.length?b[1]:null;b=2<b.length?b[2]:null;switch(c){case u.ping:return a.getPingRequest(d);case u.addEventListener:return a.addEventListener(d,b);case u.removeEventListener:return a.removeEventListener(b);default:return void a.addToQueue(c,d,b)}};this.getPingRequest=function(b){var c,d,f={gppVersion:1.1,cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:(c=[],d={},Object.keys(w).forEach(function(g){var l={};
d=g=(l[g]=w[g],Object.assign(l,d))}),Object.keys(v).map(function(g){return{name:g,value:v[g]}}).forEach(function(g){g=d[g.name]+":"+g.value;c.push(g)}),c.filter(function(g,l){return c.indexOf(g)===l})),currentAPI:"",cmpId:Number.parseInt("28"),sectionList:[],applicableSections:[0],gppString:"",parsedSections:{}};return b&&b(f,!0),f};this.addFrame=function(b){var c,d=a.win.document;a.win.frames[b]||(d.body?((c=d.createElement("iframe")).style.cssText="display:none",c.name=b,c.setAttribute("title",
"GPP Locator"),d.body.appendChild(c)):setTimeout(function(){a.addFrame(b)},5))};this.addEventListener=function(b,c){var d=a.win.__gpp;return d.events=d.events||[],null!=d&&d.lastId||(d.lastId=0),d.lastId++,d.events.push({id:d.lastId,callback:b,parameter:c}),{eventName:"listenerRegistered",listenerId:d.lastId,data:!0,pingData:a.getPingRequest()}};this.removeEventListener=function(b){var c=!1,d=a.win.__gpp;return d.events=d.events||[],d.events=d.events.filter(function(f){return f.id.toString()!==b.toString()||
!(c=!0)}),{eventName:"listenerRemoved",listenerId:b,data:c,pingData:a.getPingRequest()}};this.addToQueue=function(b,c,d){var f=a.win.__gpp;f.queue=f.queue||[];f.queue.push([b,c,d])};this.messageHandler=function(b){var c,d="string"==typeof b.data;try{var f=d?JSON.parse(b.data):b.data}catch(g){f=null}f&&f.__gppCall&&(c=f.__gppCall,(0,a.win.__gpp)(c.command,function(g,l){g={__gppReturn:{returnValue:g,success:l,callId:c.callId}};b&&b.source&&b.source.postMessage&&b.source.postMessage(d?JSON.stringify(g):
g,b.origin||"*")},c.parameter))};this.customInit||this.init()},z=(r.initCSPTrustedType=function(a){var b=new URL(a);window.DOMPurify&&window.trustedTypes&&window.trustedTypes.createPolicy&&(window.OtTrustedType.TrustedTypePolicy=window.trustedTypes.createPolicy("ot-trusted-type-policy",{createHTML:function(c){return window.DOMPurify.sanitize(c)},createScript:function(c){return window.DOMPurify.sanitize(c)},createScriptURL:function(c){var d=[document.location.hostname,b.hostname];try{var f=new URL(c,
location.origin)}catch(g){return"about:blank#error"}return f.hostname&&!d.includes(f.hostname)?"about:blank#blocked":f.href}}))},r.isCspTrustedType=function(){var a;return(null==(a=window.OtTrustedType)?void 0:a.isCspTrustedTypeEnabled)&&(null==(a=window.OtTrustedType)?void 0:a.TrustedTypePolicy)},r.createScriptURL=function(a){return r.isCspTrustedType()?window.OtTrustedType.TrustedTypePolicy.createScriptURL(a):a},r.checkAndAssignCspTrustedTypeEnabled=function(a){a=null==(a=a.TenantFeatures)?void 0:
a.CookieV2CSPTrustedType;return window.OtTrustedType={isCspTrustedTypeEnabled:a},a},r);k.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();this.ensureHtmlGroupDataInitialised();this.setStubScriptElement();this.setOTDataLayer();this.getParam();this.fetchBannerSDKDependency();this.captureNonce()};k.prototype.captureNonce=function(){this.nonce=e.stubScriptElement.nonce||e.stubScriptElement.getAttribute("nonce")||null};k.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL();
this.crossOrigin=e.stubScriptElement.getAttribute("crossorigin")||null;this.previewMode="true"===e.stubScriptElement.getAttribute("data-preview-mode");this.otFetch(e.bannerDataParentURL,this.getLocation.bind(this))};k.prototype.setDomainIfBulkDomainEnabled=function(a){var b=a&&a.TenantFeatures,c=window.location.hostname,d=a.Domain,f=a.BulkDomainCheckUrl;b&&b.CookieV2BulkDomainManagement&&c!==d&&a.ScriptType===E&&((b=window.sessionStorage)&&b.getItem("bulkDomainMgmtEnabled")?this.handleBulkDomainMgmt({isValid:"true"===
window.sessionStorage.getItem("bulkDomainMgmtEnabled")},a):(d={location:e.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,url:c},this.otFetch(f,this.handleBulkDomainMgmt,!1,d,a)))};k.prototype.getLocation=function(a){if(this.setDomainIfBulkDomainEnabled(a),this.updateVersion(a),(a.TenantFeatures&&a.TenantFeatures.CookieV2CSP||a.CookieV2CSPEnabled)&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new F).implementThePolyfill()),z.checkAndAssignCspTrustedTypeEnabled(a)&&z.initCSPTrustedType(e.storageBaseURL),
!a.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(a);var b,c=window;c.OneTrust&&c.OneTrust.geolocationResponse?(c=c.OneTrust.geolocationResponse,this.setGeoLocation(c.countryCode,c.stateCode),this.addBannerSDKScript(a)):(c=this.readCookieParam(e.optanonCookieName,e.geolocationCookiesParam))||a.SkipGeolocation?(b=c.split(";")[0],c=c.split(";")[1],this.setGeoLocation(b,c),this.addBannerSDKScript(a)):this.getGeoLocation(a)};
k.prototype.handleBulkDomainMgmt=function(a,b){window.sessionStorage&&window.sessionStorage.setItem("bulkDomainMgmtEnabled",JSON.stringify(a.isValid));a.isValid&&(b.Domain=window.location.hostname)};k.prototype.getGeolocationURL=function(a){a.TenantFeatures;var b=""+e.stubScriptElement.getAttribute("src").split(e.stubFileName)[0]+a.Version;return RegExp("^file://","i").test(b)&&a.MobileSDK?(b="/"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",e.storageBaseURL+
b):a.GeolocationUrl};k.prototype.geoLocationJsonCallback=function(a,b){b&&this.setGeoLocation(b.country,b.state,b.stateName);this.addBannerSDKScript(a)};k.prototype.getGeoLocation=function(a){var b=this.getGeolocationURL(a);this.otFetch(b,this.geoLocationJsonCallback.bind(this,a),!0)};k.prototype.setOTDataLayer=function(){var a="data-dLayer-ignore",b=e.stubScriptElement.hasAttribute(a);a=e.stubScriptElement.getAttribute(a);this.otDataLayer={ignore:b&&"true"===a||b&&""===a,name:e.stubScriptElement.getAttribute("data-dLayer-name")||
"dataLayer"}};k.prototype.setGeoLocation=function(a,b,c){e.userLocation={country:a,state:void 0===b?"":b,stateName:void 0===c?"":c}};k.prototype.otFetch=function(a,b,c,d,f){void 0===c&&(c=!1);void 0===d&&(d=null);var g=window.sessionStorage&&window.sessionStorage.getItem("otPreviewData");if(RegExp("^file://","i").test(a))this.otFetchOfflineFile(a,b);else if(0<=a.indexOf("/consent/")&&this.previewMode&&g)g=JSON.parse(g).domainJson,b(g);else{e.mobileOnlineURL.push(a);g=new XMLHttpRequest;if(g.onload=
function(m){var n;this&&this.responseText?n=this.responseText:m&&m.target&&(n=m.target.responseText);f?b(JSON.parse(n),f):b(JSON.parse(n))},g.onerror=function(){b()},g.open("GET",a),g.withCredentials=!1,c&&g.setRequestHeader("accept","application/json"),d)for(var l in d)g.setRequestHeader(l,d[l]);g.send()}};k.prototype.otFetchOfflineFile=function(a,b){var c=(a=a.replace(".json",".js")).split("/"),d=c[c.length-1].split(".js")[0];this.jsonp(a,function(){b(window[d])})};k.prototype.jsonp=function(a,
b){var c=document.createElement("script"),d=z.createScriptURL(a);c.setAttribute("src",d);this.nonce&&c.setAttribute("nonce",this.nonce);c.async=!0;c.type="text/javascript";this.crossOrigin&&c.setAttribute("crossorigin",this.crossOrigin);document.getElementsByTagName("head")[0].appendChild(c);RegExp("^file://","i").test(a)||e.mobileOnlineURL.push(a);b&&(c.onload=c.onerror=function(){b()})};k.prototype.getRegionSet=function(a){var b,c=e.userLocation,d=a.RuleSet.filter(function(n){return!0===n.Default});
if(!c.country&&!c.state)return d&&0<d.length?d[0]:null;d=c.state.toLowerCase();c=c.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===a.RuleSet[f].Global)var g=a.RuleSet[f];else{var l=a.RuleSet[f].States;if(l[c]&&0<=l[c].indexOf(d)){var m=a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(c)&&(b=a.RuleSet[f])}return m||b||g};k.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData();this.initializeGroupData();this.initializeHostData();this.initializeGenVenData()};
k.prototype.initializeGroupData=function(){var a=this.readCookieParam(e.optanonCookieName,"groups");a&&(e.optanonHtmlGroupData=this.deserialiseStringToArray(a))};k.prototype.initializeHostData=function(){var a=this.readCookieParam(e.optanonCookieName,"hosts");a&&(e.optanonHostData=this.deserialiseStringToArray(a))};k.prototype.initializeGenVenData=function(){var a=this.readCookieParam(e.optanonCookieName,"genVendors");a&&(e.genVendorsData=this.deserialiseStringToArray(a))};k.prototype.initializeIABData=
function(){this.validateIABGDPRApplied();this.validateIABGlobalScope()};k.prototype.validateIABGlobalScope=function(){var a=this.readCookieParam(e.optanonCookieName,e.oneTrustIsIABCrossConsentEnableParam);a?"true"===a?(e.hasIABGlobalScope=!0,e.isStubReady=!1):(e.hasIABGlobalScope=!1,e.IABCookieValue=this.getCookie(e.oneTrustIABCookieName)):e.isStubReady=!1};k.prototype.validateIABGDPRApplied=function(){var a=this.readCookieParam(e.optanonCookieName,e.geolocationCookiesParam).split(";")[0];a?this.isBoolean(a)?
e.oneTrustIABgdprAppliesGlobally="true"===a:e.oneTrustIABgdprAppliesGlobally=0<=e.EUCOUNTRIES.indexOf(a):e.isStubReady=!1};k.prototype.isBoolean=function(a){return"true"===a||"false"===a};k.prototype.readCookieParam=function(a,b){if(a=this.getCookie(a)){var c={};var d=a.split("\x26");for(a=0;a<d.length;a+=1){var f=d[a].split("\x3d");c[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g," ")}return b&&c[b]?c[b]:b&&!c[b]?"":c}return""};k.prototype.getCookie=function(a){if(this.isAmp)return(JSON.parse(window.localStorage.getItem(this.domainId))||
{})[a]||null;for(var b=a+"\x3d",c=document.cookie.split(";"),d=0;d<c.length;d+=1){for(a=c[d];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null};k.prototype.updateGtmMacros=function(){for(var a=[],b=e.optanonHtmlGroupData.length,c=0;c<b;c++)this.endsWith(e.optanonHtmlGroupData[c],":1")&&a.push(e.optanonHtmlGroupData[c].replace(":1",""));b=e.optanonHostData.length;for(c=0;c<b;c++)this.endsWith(e.optanonHostData[c],":1")&&a.push(e.optanonHostData[c].replace(":1",
""));b=e.genVendorsData.length;for(c=0;c<b;c++)this.endsWith(e.genVendorsData[c],":1")&&a.push(e.genVendorsData[c].replace(":1",""));b=e.vendorsServiceData.length;for(c=0;c<b;c++)this.endsWith(e.vendorsServiceData[c],":1")&&a.push(e.vendorsServiceData[c].replace(":1",""));var d;b=","+this.serialiseArrayToString(a)+",";c=(window.OnetrustActiveGroups=b,window.OptanonActiveGroups=b,window);var f=(this.otDataLayer.ignore||void 0===c[this.otDataLayer.name]?this.otDataLayer.ignore||(c[this.otDataLayer.name]=
[{event:"OneTrustLoaded",OnetrustActiveGroups:b},{event:"OptanonLoaded",OptanonActiveGroups:b}]):c[this.otDataLayer.name].constructor===Array&&(c[this.otDataLayer.name].push({OnetrustActiveGroups:b}),c[this.otDataLayer.name].push({OptanonActiveGroups:b})),new CustomEvent("consent.onetrust",{detail:a}));!this.otDataLayer.ignore&&a.length&&(c[this.otDataLayer.name].constructor===Array&&c[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:b}),d=new CustomEvent("OneTrustGroupsUpdated",
{detail:a}));setTimeout(function(){a.length&&window.dispatchEvent(f);d&&window.dispatchEvent(d)})};k.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]};k.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)};k.prototype.serialiseArrayToString=function(a){return a.toString()};k.prototype.getStubQueryParam=function(a){return!a||2>(a=a.split("?")).length?null:(new URLSearchParams(a[1])).get("did")};k.prototype.setStubScriptElement=function(){e.stubScriptElement=
document.querySelector("script[src*\x3d'"+e.stubFileName+"']");var a=e.stubScriptElement&&e.stubScriptElement.getAttribute("src");a=a&&this.getStubQueryParam(a);e.stubScriptElement&&e.stubScriptElement.hasAttribute(e.DATAFILEATTRIBUTE)?this.domainId=e.stubScriptElement.getAttribute(e.DATAFILEATTRIBUTE).trim():a?this.domainId=a:e.stubScriptElement||(e.stubScriptElement=document.querySelector("script[src*\x3d'"+e.migratedCCTID+"']"),e.stubScriptElement&&(e.isMigratedURL=!0,this.domainId=e.migratedDomainId.trim()))};
k.prototype.setDomainDataFileURL=function(){var a=e.stubScriptElement.getAttribute("src"),b=-1<a.indexOf("/consent");a&&(e.isMigratedURL?e.storageBaseURL=a.split("/consent/"+e.migratedCCTID)[0]:e.storageBaseURL=(b?a.split("/consent"):a.split("/scripttemplates/"+e.stubFileName))[0]);this.storageBaseURL=e.storageBaseURL;this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId+="-test":this.isPreview=!1;e.bannerBaseDataURL=e.storageBaseURL&&e.storageBaseURL+"/consent/"+this.domainId;e.bannerDataParentURL=
e.bannerBaseDataURL+"/"+this.domainId+".json"};k.prototype.initCustomEventPolyfill=function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent("CustomEvent");return d.initCustomEvent(b,c.bubbles,c.cancelable,c.detail),d}"function"!=typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)};k.prototype.removeTcf=function(){delete window.__tcfapi;var a=document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];a&&a.parentElement.removeChild(a)};
k.prototype.getParamForIE=function(){return{get:function(a){a=(new RegExp("[?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?null:decodeURI(a[1])||""}}};k.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var a="true"===this.urlParams.get("otreset"),b="true"===this.urlParams.get("otpreview"),c=(this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase(),
this.readCookieParam("otpreview","expiry")),d=this.readCookieParam("otpreview","geo");this.isReset=a||c&&new Date(c)<new Date;this.isPreview=!this.isReset&&(b||c&&new Date(c)>new Date);this.setGeoParam(this.geoFromUrl||d)};k.prototype.setGeoParam=function(a){var b;a&&((b=window).OneTrust||(b.OneTrust={}),a=a.split(","),b.OneTrust.geolocationResponse={countryCode:a[0],stateCode:a[1]})};k.prototype.updateVersion=function(a){"debug"!==this.buildType&&"cybuild"!==this.buildType||(a.Version="VERSION")};
var h=k,q=new h;return x.OtSDKStub=h,x.otSdkStub=q,x})({});