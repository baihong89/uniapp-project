(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2781:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log(e("App Launch"," at App.vue:4")),plus.screen.lockOrientation("portrait-primary"),t.request({url:"https://uniapp.dcloud.io/update",data:{appid:plus.runtime.appid,version:plus.runtime.version,imei:plus.device.imei},success:function(n){if(console.log(e("success",n," at App.vue:17")),200==n.statusCode&&n.data.isUpdate){var o="iOS"===plus.os.name?n.data.iOS:n.data.Android;t.showModal({title:"更新提示",content:n.data.note?n.data.note:"是否选择更新",success:function(e){e.confirm&&plus.runtime.openURL(o)}})}}})},onShow:function(){console.log(e("App Show"," at App.vue:36"))},onHide:function(){console.log(e("App Hide"," at App.vue:39"))}};n.default=o}).call(this,t("0de9")["default"],t("6e42")["default"])},4137:function(e,n,t){"use strict";t.r(n);var o=t("f609");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("b898");var a,r,i=t("2877"),c=Object(i["a"])(o["default"],a,r,!1,null,null,null);n["default"]=c.exports},b2af:function(e,n,t){},b898:function(e,n,t){"use strict";var o=t("b2af"),u=t.n(o);u.a},f609:function(e,n,t){"use strict";t.r(n);var o=t("2781"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=u.a},fb64:function(e,n,t){"use strict";(function(e){t("e826"),t("921b");var n=a(t("66fd")),o=a(t("4137")),u=a(t("65f7"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){i(e,n,t[n])})}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(){return t.e("components/page-head").then(t.bind(null,"1b12"))},l=function(){return t.e("components/page-foot").then(t.bind(null,"5262"))},f=function(){return t.e("components/uLink").then(t.bind(null,"1ad3"))};n.default.config.productionTip=!1,n.default.prototype.$store=u.default,n.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},n.default.component("page-head",c),n.default.component("page-foot",l),n.default.component("uLink",f),o.default.mpType="app";var p=new n.default(r({store:u.default},o.default));e(p).$mount()}).call(this,t("6e42")["createApp"])}},[["fb64","common/runtime","common/vendor"]]]);