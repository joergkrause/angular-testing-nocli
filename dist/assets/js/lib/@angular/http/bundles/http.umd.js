!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("rxjs/Observable"),require("@angular/platform-browser")):"function"==typeof define&&define.amd?define("@angular/http",["exports","@angular/core","rxjs/Observable","@angular/platform-browser"],t):t((e.ng=e.ng||{},e.ng.http={}),e.ng.core,e.Rx,e.ng.platformBrowser)}(this,function(e,t,r,n){"use strict";var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};function s(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[]},e}(),i={Get:0,Post:1,Put:2,Delete:3,Options:4,Head:5,Patch:6};i[i.Get]="Get",i[i.Post]="Post",i[i.Put]="Put",i[i.Delete]="Delete",i[i.Options]="Options",i[i.Head]="Head",i[i.Patch]="Patch";var u={Unsent:0,Open:1,HeadersReceived:2,Loading:3,Done:4,Cancelled:5};u[u.Unsent]="Unsent",u[u.Open]="Open",u[u.HeadersReceived]="HeadersReceived",u[u.Loading]="Loading",u[u.Done]="Done",u[u.Cancelled]="Cancelled";var p={Basic:0,Cors:1,Default:2,Error:3,Opaque:4};p[p.Basic]="Basic",p[p.Cors]="Cors",p[p.Default]="Default",p[p.Error]="Error",p[p.Opaque]="Opaque";var c={NONE:0,JSON:1,FORM:2,FORM_DATA:3,TEXT:4,BLOB:5,ARRAY_BUFFER:6};c[c.NONE]="NONE",c[c.JSON]="JSON",c[c.FORM]="FORM",c[c.FORM_DATA]="FORM_DATA",c[c.TEXT]="TEXT",c[c.BLOB]="BLOB",c[c.ARRAY_BUFFER]="ARRAY_BUFFER";var l={Text:0,Json:1,ArrayBuffer:2,Blob:3};l[l.Text]="Text",l[l.Json]="Json",l[l.ArrayBuffer]="ArrayBuffer",l[l.Blob]="Blob";var d=function(){function e(t){var r=this;this._headers=new Map,this._normalizedNames=new Map,t&&(t instanceof e?t.forEach(function(e,t){e.forEach(function(e){return r.append(t,e)})}):Object.keys(t).forEach(function(e){var n=Array.isArray(t[e])?t[e]:[t[e]];r.delete(e),n.forEach(function(t){return r.append(e,t)})}))}return e.fromResponseHeaderString=function(t){var r=new e;return t.split("\n").forEach(function(e){var t=e.indexOf(":");if(t>0){var n=e.slice(0,t),o=e.slice(t+1).trim();r.set(n,o)}}),r},e.prototype.append=function(e,t){var r=this.getAll(e);null===r?this.set(e,t):r.push(t)},e.prototype.delete=function(e){var t=e.toLowerCase();this._normalizedNames.delete(t),this._headers.delete(t)},e.prototype.forEach=function(e){var t=this;this._headers.forEach(function(r,n){return e(r,t._normalizedNames.get(n),t._headers)})},e.prototype.get=function(e){var t=this.getAll(e);return null===t?null:t.length>0?t[0]:null},e.prototype.has=function(e){return this._headers.has(e.toLowerCase())},e.prototype.keys=function(){return Array.from(this._normalizedNames.values())},e.prototype.set=function(e,t){Array.isArray(t)?t.length&&this._headers.set(e.toLowerCase(),[t.join(",")]):this._headers.set(e.toLowerCase(),[t]),this.mayBeSetNormalizedName(e)},e.prototype.values=function(){return Array.from(this._headers.values())},e.prototype.toJSON=function(){var e=this,t={};return this._headers.forEach(function(r,n){var o=[];r.forEach(function(e){return o.push.apply(o,e.split(","))}),t[e._normalizedNames.get(n)]=o}),t},e.prototype.getAll=function(e){return this.has(e)&&this._headers.get(e.toLowerCase())||null},e.prototype.entries=function(){throw new Error('"entries" method is not implemented on Headers class')},e.prototype.mayBeSetNormalizedName=function(e){var t=e.toLowerCase();this._normalizedNames.has(t)||this._normalizedNames.set(t,e)},e}(),h=function(){function e(e){void 0===e&&(e={});var t=e.body,r=e.status,n=e.headers,o=e.statusText,s=e.type,a=e.url;this.body=null!=t?t:null,this.status=null!=r?r:null,this.headers=null!=n?n:null,this.statusText=null!=o?o:null,this.type=null!=s?s:null,this.url=null!=a?a:null}return e.prototype.merge=function(t){return new e({body:t&&null!=t.body?t.body:this.body,status:t&&null!=t.status?t.status:this.status,headers:t&&null!=t.headers?t.headers:this.headers,statusText:t&&null!=t.statusText?t.statusText:this.statusText,type:t&&null!=t.type?t.type:this.type,url:t&&null!=t.url?t.url:this.url})},e}(),f=function(e){function r(){return e.call(this,{status:200,statusText:"Ok",type:p.Default,headers:new d})||this}return s(r,e),r.decorators=[{type:t.Injectable}],r.ctorParameters=function(){return[]},r}(h),y=function(){return function(){}}(),m=function(){return function(){}}(),b=function(){return function(){}}();function _(e){if("string"!=typeof e)return e;switch(e.toUpperCase()){case"GET":return i.Get;case"POST":return i.Post;case"PUT":return i.Put;case"DELETE":return i.Delete;case"OPTIONS":return i.Options;case"HEAD":return i.Head;case"PATCH":return i.Patch}throw new Error('Invalid request method. The method "'+e+'" is not supported.')}var v=function(e){return e>=200&&e<300};var g=function(){function e(){}return e.prototype.encodeKey=function(e){return w(e)},e.prototype.encodeValue=function(e){return w(e)},e}();function w(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var O=function(){function e(e,t){void 0===e&&(e=""),void 0===t&&(t=new g),this.rawParams=e,this.queryEncoder=t,this.paramsMap=function(e){void 0===e&&(e="");var t=new Map;return e.length>0&&e.split("&").forEach(function(e){var r=e.indexOf("="),n=-1==r?[e,""]:[e.slice(0,r),e.slice(r+1)],o=n[0],s=n[1],a=t.get(o)||[];a.push(s),t.set(o,a)}),t}(e)}return e.prototype.clone=function(){var t=new e("",this.queryEncoder);return t.appendAll(this),t},e.prototype.has=function(e){return this.paramsMap.has(e)},e.prototype.get=function(e){var t=this.paramsMap.get(e);return Array.isArray(t)?t[0]:null},e.prototype.getAll=function(e){return this.paramsMap.get(e)||[]},e.prototype.set=function(e,t){if(void 0!==t&&null!==t){var r=this.paramsMap.get(e)||[];r.length=0,r.push(t),this.paramsMap.set(e,r)}else this.delete(e)},e.prototype.setAll=function(e){var t=this;e.paramsMap.forEach(function(e,r){var n=t.paramsMap.get(r)||[];n.length=0,n.push(e[0]),t.paramsMap.set(r,n)})},e.prototype.append=function(e,t){if(void 0!==t&&null!==t){var r=this.paramsMap.get(e)||[];r.push(t),this.paramsMap.set(e,r)}},e.prototype.appendAll=function(e){var t=this;e.paramsMap.forEach(function(e,r){for(var n=t.paramsMap.get(r)||[],o=0;o<e.length;++o)n.push(e[o]);t.paramsMap.set(r,n)})},e.prototype.replaceAll=function(e){var t=this;e.paramsMap.forEach(function(e,r){var n=t.paramsMap.get(r)||[];n.length=0;for(var o=0;o<e.length;++o)n.push(e[o]);t.paramsMap.set(r,n)})},e.prototype.toString=function(){var e=this,t=[];return this.paramsMap.forEach(function(r,n){r.forEach(function(r){return t.push(e.queryEncoder.encodeKey(n)+"="+e.queryEncoder.encodeValue(r))})}),t.join("&")},e.prototype.delete=function(e){this.paramsMap.delete(e)},e}(),R=function(){function e(){}return e.prototype.json=function(){return"string"==typeof this._body?JSON.parse(this._body):this._body instanceof ArrayBuffer?JSON.parse(this.text()):this._body},e.prototype.text=function(e){if(void 0===e&&(e="legacy"),this._body instanceof O)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(e){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error("Invalid value for encodingHint: "+e)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()},e.prototype.arrayBuffer=function(){return this._body instanceof ArrayBuffer?this._body:function(e){for(var t=new Uint16Array(e.length),r=0,n=e.length;r<n;r++)t[r]=e.charCodeAt(r);return t.buffer}(this.text())},e.prototype.blob=function(){if(this._body instanceof Blob)return this._body;if(this._body instanceof ArrayBuffer)return new Blob([this._body]);throw new Error("The request body isn't either a blob or an array buffer")},e}(),T=function(e){function t(t){var r=e.call(this)||this;return r._body=t.body,r.status=t.status,r.ok=r.status>=200&&r.status<=299,r.statusText=t.statusText,r.headers=t.headers,r.type=t.type,r.url=t.url,r}return s(t,e),t.prototype.toString=function(){return"Response with status: "+this.status+" "+this.statusText+" for URL: "+this.url},t}(R),C=0,E="__ng_jsonp__",A=null;function B(){var e="object"==typeof window?window:{};return null===A&&(A=e[E]={}),A}var S=function(){function e(){}return e.prototype.build=function(e){var t=document.createElement("script");return t.src=e,t},e.prototype.nextRequestID=function(){return"__req"+C++},e.prototype.requestCallback=function(e){return E+"."+e+".finished"},e.prototype.exposeConnection=function(e,t){B()[e]=t},e.prototype.removeConnection=function(e){B()[e]=null},e.prototype.send=function(e){document.body.appendChild(e)},e.prototype.cleanup=function(e){e.parentNode&&e.parentNode.removeChild(e)},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[]},e}(),N="JSONP injected script did not invoke callback.",P="JSONP requests must use GET request method.",x=function(){function e(e,t,n){var o=this;if(this._dom=t,this.baseResponseOptions=n,this._finished=!1,e.method!==i.Get)throw new TypeError(P);this.request=e,this.response=new r.Observable(function(r){o.readyState=u.Loading;var s=o._id=t.nextRequestID();t.exposeConnection(s,o);var a=t.requestCallback(o._id),i=e.url;i.indexOf("=JSONP_CALLBACK&")>-1?i=i.replace("=JSONP_CALLBACK&","="+a+"&"):i.lastIndexOf("=JSONP_CALLBACK")===i.length-"=JSONP_CALLBACK".length&&(i=i.substring(0,i.length-"=JSONP_CALLBACK".length)+"="+a);var c=o._script=t.build(i),l=function(e){if(o.readyState!==u.Cancelled){if(o.readyState=u.Done,t.cleanup(c),!o._finished){var s=new h({body:N,type:p.Error,url:i});return n&&(s=n.merge(s)),void r.error(new T(s))}var a=new h({body:o._responseData,url:i});o.baseResponseOptions&&(a=o.baseResponseOptions.merge(a)),r.next(new T(a)),r.complete()}},d=function(e){if(o.readyState!==u.Cancelled){o.readyState=u.Done,t.cleanup(c);var s=new h({body:e.message,type:p.Error});n&&(s=n.merge(s)),r.error(new T(s))}};return c.addEventListener("load",l),c.addEventListener("error",d),t.send(c),function(){o.readyState=u.Cancelled,c.removeEventListener("load",l),c.removeEventListener("error",d),o._dom.cleanup(c)}})}return e.prototype.finished=function(e){this._finished=!0,this._dom.removeConnection(this._id),this.readyState!==u.Cancelled&&(this._responseData=e)},e}(),q=function(e){function r(t,r){var n=e.call(this)||this;return n._browserJSONP=t,n._baseResponseOptions=r,n}return s(r,e),r.prototype.createConnection=function(e){return new x(e,this._browserJSONP,this._baseResponseOptions)},r.decorators=[{type:t.Injectable}],r.ctorParameters=function(){return[{type:S},{type:h}]},r}(y),L=/^\)\]\}',?\n/,M=function(){function e(e,t,n){var o=this;this.request=e,this.response=new r.Observable(function(r){var s=t.build();s.open(i[e.method].toUpperCase(),e.url),null!=e.withCredentials&&(s.withCredentials=e.withCredentials);var a=function(){var t=1223===s.status?204:s.status,o=null;204!==t&&"string"==typeof(o=void 0===s.response?s.responseText:s.response)&&(o=o.replace(L,"")),0===t&&(t=o?200:0);var a,i=d.fromResponseHeaderString(s.getAllResponseHeaders()),u=("responseURL"in(a=s)?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):null)||e.url,p=s.statusText||"OK",c=new h({body:o,status:t,headers:i,statusText:p,url:u});null!=n&&(c=n.merge(c));var l=new T(c);if(l.ok=v(t),l.ok)return r.next(l),void r.complete();r.error(l)},u=function(e){var t=new h({body:e,type:p.Error,status:s.status,statusText:s.statusText});null!=n&&(t=n.merge(t)),r.error(new T(t))};if(o.setDetectedContentType(e,s),null==e.headers&&(e.headers=new d),e.headers.has("Accept")||e.headers.append("Accept","application/json, text/plain, */*"),e.headers.forEach(function(e,t){return s.setRequestHeader(t,e.join(","))}),null!=e.responseType&&null!=s.responseType)switch(e.responseType){case l.ArrayBuffer:s.responseType="arraybuffer";break;case l.Json:s.responseType="json";break;case l.Text:s.responseType="text";break;case l.Blob:s.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return s.addEventListener("load",a),s.addEventListener("error",u),s.send(o.request.getBody()),function(){s.removeEventListener("load",a),s.removeEventListener("error",u),s.abort()}})}return e.prototype.setDetectedContentType=function(e,t){if(null==e.headers||null==e.headers.get("Content-Type"))switch(e.contentType){case c.NONE:break;case c.JSON:t.setRequestHeader("content-type","application/json");break;case c.FORM:t.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");break;case c.TEXT:t.setRequestHeader("content-type","text/plain");break;case c.BLOB:var r=e.blob();r.type&&t.setRequestHeader("content-type",r.type)}},e}(),F=function(){function e(e,t){void 0===e&&(e="XSRF-TOKEN"),void 0===t&&(t="X-XSRF-TOKEN"),this._cookieName=e,this._headerName=t}return e.prototype.configureRequest=function(e){var t=n.ɵgetDOM().getCookie(this._cookieName);t&&e.headers.set(this._headerName,t)},e}(),j=function(){function e(e,t,r){this._browserXHR=e,this._baseResponseOptions=t,this._xsrfStrategy=r}return e.prototype.createConnection=function(e){return this._xsrfStrategy.configureRequest(e),new M(e,this._browserXHR,this._baseResponseOptions)},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:a},{type:h},{type:b}]},e}(),k=function(){function e(e){void 0===e&&(e={});var t=e.method,r=e.headers,n=e.body,o=e.url,s=e.search,a=e.params,i=e.withCredentials,u=e.responseType;this.method=null!=t?_(t):null,this.headers=null!=r?r:null,this.body=null!=n?n:null,this.url=null!=o?o:null,this.params=this._mergeSearchParams(a||s),this.withCredentials=null!=i?i:null,this.responseType=null!=u?u:null}return Object.defineProperty(e.prototype,"search",{get:function(){return this.params},set:function(e){this.params=e},enumerable:!0,configurable:!0}),e.prototype.merge=function(t){return new e({method:t&&null!=t.method?t.method:this.method,headers:t&&null!=t.headers?t.headers:new d(this.headers),body:t&&null!=t.body?t.body:this.body,url:t&&null!=t.url?t.url:this.url,params:t&&this._mergeSearchParams(t.params||t.search),withCredentials:t&&null!=t.withCredentials?t.withCredentials:this.withCredentials,responseType:t&&null!=t.responseType?t.responseType:this.responseType})},e.prototype._mergeSearchParams=function(e){return e?e instanceof O?e.clone():"string"==typeof e?new O(e):this._parseParams(e):this.params},e.prototype._parseParams=function(e){var t=this;void 0===e&&(e={});var r=new O;return Object.keys(e).forEach(function(n){var o=e[n];Array.isArray(o)?o.forEach(function(e){return t._appendParam(n,e,r)}):t._appendParam(n,o,r)}),r},e.prototype._appendParam=function(e,t,r){"string"!=typeof t&&(t=JSON.stringify(t)),r.append(e,t)},e}(),D=function(e){function r(){return e.call(this,{method:i.Get,headers:new d})||this}return s(r,e),r.decorators=[{type:t.Injectable}],r.ctorParameters=function(){return[]},r}(k),H=function(e){function t(t){var r=e.call(this)||this,n=t.url;r.url=t.url;var o,s,a=t.params||t.search;if(a){var i=void 0;if((i="object"!=typeof a||a instanceof O?a.toString():(o=a,s=new O,Object.keys(o).forEach(function(e){var t=o[e];t&&Array.isArray(t)?t.forEach(function(t){return s.append(e,t.toString())}):s.append(e,t.toString())}),s).toString()).length>0){var u="?";-1!=r.url.indexOf("?")&&(u="&"==r.url[r.url.length-1]?"":"&"),r.url=n+u+i}}return r._body=t.body,r.method=_(t.method),r.headers=new d(t.headers),r.contentType=r.detectContentType(),r.withCredentials=t.withCredentials,r.responseType=t.responseType,r}return s(t,e),t.prototype.detectContentType=function(){switch(this.headers.get("content-type")){case"application/json":return c.JSON;case"application/x-www-form-urlencoded":return c.FORM;case"multipart/form-data":return c.FORM_DATA;case"text/plain":case"text/html":return c.TEXT;case"application/octet-stream":return this._body instanceof G?c.ARRAY_BUFFER:c.BLOB;default:return this.detectContentTypeFromBody()}},t.prototype.detectContentTypeFromBody=function(){return null==this._body?c.NONE:this._body instanceof O?c.FORM:this._body instanceof X?c.FORM_DATA:this._body instanceof I?c.BLOB:this._body instanceof G?c.ARRAY_BUFFER:this._body&&"object"==typeof this._body?c.JSON:c.TEXT},t.prototype.getBody=function(){switch(this.contentType){case c.JSON:case c.FORM:return this.text();case c.FORM_DATA:return this._body;case c.TEXT:return this.text();case c.BLOB:return this.blob();case c.ARRAY_BUFFER:return this.arrayBuffer();default:return null}},t}(R);var J=function(){},U="object"==typeof window?window:J,X=U.FormData||J,I=U.Blob||J,G=U.ArrayBuffer||J;function K(e,t){return e.createConnection(t).response}function z(e,t,r,n){var o=e;return t?o.merge(new k({method:t.method||r,url:t.url||n,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType})):o.merge(new k({method:r,url:n}))}var Y=function(){function e(e,t){this._backend=e,this._defaultOptions=t}return e.prototype.request=function(e,t){var r;if("string"==typeof e)r=K(this._backend,new H(z(this._defaultOptions,t,i.Get,e)));else{if(!(e instanceof H))throw new Error("First argument must be a url string or Request instance.");r=K(this._backend,e)}return r},e.prototype.get=function(e,t){return this.request(new H(z(this._defaultOptions,t,i.Get,e)))},e.prototype.post=function(e,t,r){return this.request(new H(z(this._defaultOptions.merge(new k({body:t})),r,i.Post,e)))},e.prototype.put=function(e,t,r){return this.request(new H(z(this._defaultOptions.merge(new k({body:t})),r,i.Put,e)))},e.prototype.delete=function(e,t){return this.request(new H(z(this._defaultOptions,t,i.Delete,e)))},e.prototype.patch=function(e,t,r){return this.request(new H(z(this._defaultOptions.merge(new k({body:t})),r,i.Patch,e)))},e.prototype.head=function(e,t){return this.request(new H(z(this._defaultOptions,t,i.Head,e)))},e.prototype.options=function(e,t){return this.request(new H(z(this._defaultOptions,t,i.Options,e)))},e.decorators=[{type:t.Injectable}],e.ctorParameters=function(){return[{type:y},{type:k}]},e}(),V=function(e){function r(t,r){return e.call(this,t,r)||this}return s(r,e),r.prototype.request=function(e,t){if("string"==typeof e&&(e=new H(z(this._defaultOptions,t,i.Get,e))),!(e instanceof H))throw new Error("First argument must be a url string or Request instance.");if(e.method!==i.Get)throw new Error("JSONP requests must use GET request method.");return K(this._backend,e)},r.decorators=[{type:t.Injectable}],r.ctorParameters=function(){return[{type:y},{type:k}]},r}(Y);function Q(){return new F}function $(e,t){return new Y(e,t)}function W(e,t){return new V(e,t)}var Z=function(){function e(){}return e.decorators=[{type:t.NgModule,args:[{providers:[{provide:Y,useFactory:$,deps:[j,k]},a,{provide:k,useClass:D},{provide:h,useClass:f},j,{provide:b,useFactory:Q}]}]}],e.ctorParameters=function(){return[]},e}(),ee=function(){function e(){}return e.decorators=[{type:t.NgModule,args:[{providers:[{provide:V,useFactory:W,deps:[q,k]},S,{provide:k,useClass:D},{provide:h,useClass:f},q]}]}],e.ctorParameters=function(){return[]},e}(),te=new t.Version("5.2.0");e.BrowserXhr=a,e.JSONPBackend=q,e.JSONPConnection=x,e.CookieXSRFStrategy=F,e.XHRBackend=j,e.XHRConnection=M,e.BaseRequestOptions=D,e.RequestOptions=k,e.BaseResponseOptions=f,e.ResponseOptions=h,e.ReadyState=u,e.RequestMethod=i,e.ResponseContentType=l,e.ResponseType=p,e.Headers=d,e.Http=Y,e.Jsonp=V,e.HttpModule=Z,e.JsonpModule=ee,e.Connection=m,e.ConnectionBackend=y,e.XSRFStrategy=b,e.Request=H,e.Response=T,e.QueryEncoder=g,e.URLSearchParams=O,e.VERSION=te,e.ɵe=S,e.ɵf=R,e.ɵa=Q,e.ɵb=$,e.ɵc=W,Object.defineProperty(e,"__esModule",{value:!0})});