!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("rxjs/observable/of"),require("rxjs/operator/concatMap"),require("rxjs/operator/filter"),require("rxjs/operator/map"),require("tslib"),require("@angular/common"),require("rxjs/Observable")):"function"==typeof define&&define.amd?define("@angular/common/http",["exports","@angular/core","rxjs/observable/of","rxjs/operator/concatMap","rxjs/operator/filter","rxjs/operator/map","tslib","@angular/common","rxjs/Observable"],t):t((e.ng=e.ng||{},e.ng.common=e.ng.common||{},e.ng.common.http={}),e.ng.core,e.Rx.Observable.prototype,e.Rx.Observable.prototype,e.Rx.Observable.prototype,e.Rx.Observable.prototype,e.tslib,e.ng.common,e.Rx)}(this,function(e,t,r,n,o,s,a,i,u){"use strict";var p=function(){return function(){}}(),c=function(){return function(){}}(),d=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var r=e.indexOf(":");if(r>0){var n=e.slice(0,r),o=n.toLowerCase(),s=e.slice(r+1).trim();t.maybeSetNormalizedName(n,o),t.headers.has(o)?t.headers.get(o).push(s):t.headers.set(o,[s])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(r){var n=e[r],o=r.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(t.headers.set(o,n),t.maybeSetNormalizedName(r,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(r){t.headers.set(r,e.headers.get(r)),t.normalizedNames.set(r,e.normalizedNames.get(r))})},e.prototype.clone=function(t){var r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);var n=("a"===e.op?this.headers.get(t):void 0)||[];n.push.apply(n,r),this.headers.set(t,n);break;case"d":var o=e.value;if(o){var s=this.headers.get(t);if(!s)return;0===(s=s.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(r){return e(t.normalizedNames.get(r),t.headers.get(r))})},e}(),l=function(){function e(){}return e.prototype.encodeKey=function(e){return h(e)},e.prototype.encodeValue=function(e){return h(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}();function h(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var f=function(){function e(e){void 0===e&&(e={});var t,r,n,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new l,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=e.fromString,r=this.encoder,n=new Map,t.length>0&&t.split("&").forEach(function(e){var t=e.indexOf("="),o=-1==t?[r.decodeKey(e),""]:[r.decodeKey(e.slice(0,t)),r.decodeValue(e.slice(t+1))],s=o[0],a=o[1],i=n.get(s)||[];i.push(a),n.set(s,i)}),n)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(t){var r=e.fromObject[t];o.map.set(t,Array.isArray(r)?r:[r])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var r=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return r+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat([t]),r},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var r=("a"===t.op?e.map.get(t.param):void 0)||[];r.push(t.value),e.map.set(t.param,r);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var n=e.map.get(t.param)||[],o=n.indexOf(t.value);-1!==o&&n.splice(o,1),n.length>0?e.map.set(t.param,n):e.map.delete(t.param)}}),this.cloneFrom=null)},e}();function y(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function m(e){return"undefined"!=typeof Blob&&e instanceof Blob}function v(e){return"undefined"!=typeof FormData&&e instanceof FormData}var b=function(){function e(e,t,r,n){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new d),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=t;else{var a=t.indexOf("?"),i=-1===a?"?":a<t.length-1?"&":"";this.urlWithParams=t+i+s}}else this.params=new f,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:y(this.body)||m(this.body)||v(this.body)||"string"==typeof this.body?this.body:this.body instanceof f?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:v(this.body)?null:m(this.body)?this.body.type||null:y(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof f?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var r=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,i=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,p=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,r){return e.set(r,t.setHeaders[r])},u)),t.setParams&&(p=Object.keys(t.setParams).reduce(function(e,r){return e.set(r,t.setParams[r])},p)),new e(r,n,s,{params:p,headers:u,reportProgress:i,responseType:o,withCredentials:a})},e}(),g={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};g[g.Sent]="Sent",g[g.UploadProgress]="UploadProgress",g[g.ResponseHeader]="ResponseHeader",g[g.DownloadProgress]="DownloadProgress",g[g.Response]="Response",g[g.User]="User";var w=function(){return function(e,t,r){void 0===t&&(t=200),void 0===r&&(r="OK"),this.headers=e.headers||new d,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),T=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.type=g.ResponseHeader,r}return a.__extends(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(w),x=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.type=g.Response,r.body=void 0!==t.body?t.body:null,r}return a.__extends(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(w),E=function(e){function t(t){var r=e.call(this,t,0,"Unknown Error")||this;return r.name="HttpErrorResponse",r.ok=!1,r.status>=200&&r.status<300?r.message="Http failure during parsing for "+(t.url||"(unknown url)"):r.message="Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,r.error=t.error||null,r}return a.__extends(t,e),t}(w);function P(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var C=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,a){var i,u=this;if(void 0===a&&(a={}),e instanceof b)i=e;else{var p=void 0;p=a.headers instanceof d?a.headers:new d(a.headers);var c=void 0;a.params&&(c=a.params instanceof f?a.params:new f({fromObject:a.params})),i=new b(e,t,void 0!==a.body?a.body:null,{headers:p,params:c,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials})}var l=n.concatMap.call(r.of(i),function(e){return u.handler.handle(e)});if(e instanceof b||"events"===a.observe)return l;var h=o.filter.call(l,function(e){return e instanceof x});switch(a.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.map.call(h,function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body});case"blob":return s.map.call(h,function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body});case"text":return s.map.call(h,function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body});case"json":default:return s.map.call(h,function(e){return e.body})}case"response":return h;default:throw new Error("Unreachable: unhandled observe type "+a.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new f).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,r){return void 0===r&&(r={}),this.request("PATCH",e,P(r,t))},e.prototype.post=function(e,t,r){return void 0===r&&(r={}),this.request("POST",e,P(r,t))},e.prototype.put=function(e,t,r){return void 0===r&&(r={}),this.request("PUT",e,P(r,t))},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:p}]},e}(),N=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),O=new t.InjectionToken("HTTP_INTERCEPTORS"),j=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[]},e}(),k=0,R=function(){return function(){}}(),H=function(){function e(e,t){this.callbackMap=e,this.document=t}return e.prototype.nextCallback=function(){return"ng_jsonp_callback_"+k++},e.prototype.handle=function(e){var t=this;if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");return new u.Observable(function(r){var n=t.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,"="+n+"$1"),s=t.document.createElement("script");s.src=o;var a=null,i=!1,u=!1;t.callbackMap[n]=function(e){delete t.callbackMap[n],u||(a=e,i=!0)};var p=function(){s.parentNode&&s.parentNode.removeChild(s),delete t.callbackMap[n]},c=function(e){u||(p(),i?(r.next(new x({body:a,status:200,statusText:"OK",url:o})),r.complete()):r.error(new E({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")})))},d=function(e){u||(p(),r.error(new E({error:e,status:0,statusText:"JSONP Error",url:o})))};return s.addEventListener("load",c),s.addEventListener("error",d),t.document.body.appendChild(s),r.next({type:g.Sent}),function(){u=!0,s.removeEventListener("load",c),s.removeEventListener("error",d),p()}})},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:R},{type:void 0,decorators:[{type:t.Inject,args:[i.DOCUMENT]}]}]},e}(),S=function(){function e(e){this.jsonp=e}return e.prototype.intercept=function(e,t){return"JSONP"===e.method?this.jsonp.handle(e):t.handle(e)},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:H}]},e}(),I=/^\)\]\}',?\n/;var A=function(){return function(){}}(),L=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[]},e}(),z=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new u.Observable(function(r){var n=t.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach(function(e,t){return n.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&n.setRequestHeader("Content-Type",o)}if(e.responseType){var s=e.responseType.toLowerCase();n.responseType="json"!==s?s:"text"}var a=e.serializeBody(),i=null,u=function(){if(null!==i)return i;var t,r=1223===n.status?204:n.status,o=n.statusText||"OK",s=new d(n.getAllResponseHeaders()),a=("responseURL"in(t=n)&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null)||e.url;return i=new T({headers:s,status:r,statusText:o,url:a})},p=function(){var t=u(),o=t.headers,s=t.status,a=t.statusText,i=t.url,p=null;204!==s&&(p=void 0===n.response?n.responseText:n.response),0===s&&(s=p?200:0);var c=s>=200&&s<300;if("json"===e.responseType&&"string"==typeof p){var d=p;p=p.replace(I,"");try{p=""!==p?JSON.parse(p):null}catch(e){p=d,c&&(c=!1,p={error:e,text:p})}}c?(r.next(new x({body:p,headers:o,status:s,statusText:a,url:i||void 0})),r.complete()):r.error(new E({error:p,headers:o,status:s,statusText:a,url:i||void 0}))},c=function(e){var t=new E({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error"});r.error(t)},l=!1,h=function(t){l||(r.next(u()),l=!0);var o={type:g.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&n.responseText&&(o.partialText=n.responseText),r.next(o)},f=function(e){var t={type:g.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),r.next(t)};return n.addEventListener("load",p),n.addEventListener("error",c),e.reportProgress&&(n.addEventListener("progress",h),null!==a&&n.upload&&n.upload.addEventListener("progress",f)),n.send(a),r.next({type:g.Sent}),function(){n.removeEventListener("error",c),n.removeEventListener("load",p),e.reportProgress&&(n.removeEventListener("progress",h),null!==a&&n.upload&&n.upload.removeEventListener("progress",f)),n.abort()}})},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:A}]},e}(),U=new t.InjectionToken("XSRF_COOKIE_NAME"),M=new t.InjectionToken("XSRF_HEADER_NAME"),q=function(){return function(){}}(),F=function(){function e(e,t,r){this.doc=e,this.platform=t,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=i.ɵparseCookieValue(e,this.cookieName),this.lastCookieString=e),this.lastToken},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:t.Inject,args:[i.DOCUMENT]}]},{type:void 0,decorators:[{type:t.Inject,args:[t.PLATFORM_ID]}]},{type:void 0,decorators:[{type:t.Inject,args:[U]}]}]},e}(),J=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t.handle(e);var n=this.tokenService.getToken();return null===n||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,n)})),t.handle(e)},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:q},{type:void 0,decorators:[{type:t.Inject,args:[M]}]}]},e}();function _(e,t){return void 0===t&&(t=[]),t?t.reduceRight(function(e,t){return new N(e,t)},e):e}function B(){return"object"==typeof window?window:{}}var D=function(){function e(){}return e.disable=function(){return{ngModule:e,providers:[{provide:J,useClass:j}]}},e.withOptions=function(t){return void 0===t&&(t={}),{ngModule:e,providers:[t.cookieName?{provide:U,useValue:t.cookieName}:[],t.headerName?{provide:M,useValue:t.headerName}:[]]}},e.decorators=[{type:t.NgModule,args:[{providers:[J,{provide:O,useExisting:J,multi:!0},{provide:q,useClass:F},{provide:U,useValue:"XSRF-TOKEN"},{provide:M,useValue:"X-XSRF-TOKEN"}]}]}],e.ctorParameters=function(){return[]},e}(),K=function(){function e(){}return e.decorators=[{type:t.NgModule,args:[{imports:[D.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})],providers:[C,{provide:p,useFactory:_,deps:[c,[new t.Optional,new t.Inject(O)]]},z,{provide:c,useExisting:z},L,{provide:A,useExisting:L}]}]}],e.ctorParameters=function(){return[]},e}(),X=function(){function e(){}return e.decorators=[{type:t.NgModule,args:[{providers:[H,{provide:R,useFactory:B},{provide:O,useClass:S,multi:!0}]}]}],e.ctorParameters=function(){return[]},e}();e.HttpBackend=c,e.HttpHandler=p,e.HttpClient=C,e.HttpHeaders=d,e.HTTP_INTERCEPTORS=O,e.JsonpClientBackend=H,e.JsonpInterceptor=S,e.HttpClientJsonpModule=X,e.HttpClientModule=K,e.HttpClientXsrfModule=D,e.ɵinterceptingHandler=_,e.HttpParams=f,e.HttpUrlEncodingCodec=l,e.HttpRequest=b,e.HttpErrorResponse=E,e.HttpEventType=g,e.HttpHeaderResponse=T,e.HttpResponse=x,e.HttpResponseBase=w,e.HttpXhrBackend=z,e.XhrFactory=A,e.HttpXsrfTokenExtractor=q,e.ɵa=j,e.ɵb=R,e.ɵc=B,e.ɵd=L,e.ɵg=F,e.ɵh=J,e.ɵe=U,e.ɵf=M,Object.defineProperty(e,"__esModule",{value:!0})});