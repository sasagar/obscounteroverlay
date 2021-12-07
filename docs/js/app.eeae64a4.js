(function(a){function t(t){for(var d,r,b=t[0],f=t[1],o=t[2],v=0,u=[];v<b.length;v++)r=b[v],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(d in f)Object.prototype.hasOwnProperty.call(f,d)&&(a[d]=f[d]);s&&s(t);while(u.length)u.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],d=!0,b=1;b<e.length;b++){var f=e[b];0!==c[f]&&(d=!1)}d&&(n.splice(t--,1),a=r(r.s=e[0]))}return a}var d={},c={app:0},n=[];function r(t){if(d[t])return d[t].exports;var e=d[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=a,r.c=d,r.d=function(a,t,e){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var d in a)r.d(e,d,function(t){return a[t]}.bind(null,d));return e},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="";var b=window["webpackJsonp"]=window["webpackJsonp"]||[],f=b.push.bind(b);b.push=t,b=b.slice();for(var o=0;o<b.length;o++)t(b[o]);var s=f;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"2f88":function(a,t,e){"use strict";e("ac79")},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var d=e("7a23");function c(a,t,e,c,n,r){var b=Object(d["resolveComponent"])("router-view");return Object(d["openBlock"])(),Object(d["createBlock"])(b)}var n={name:"App"},r=(e("7920"),e("6b0d")),b=e.n(r);const f=b()(n,[["render",c]]);var o=f,s=e("6c02"),v=function(a){return Object(d["pushScopeId"])("data-v-4f7cab68"),a=a(),Object(d["popScopeId"])(),a},u={class:"container"},l=v((function(){return Object(d["createElementVNode"])("h1",null,"OBS用カウントダウンオーバーレイ",-1)})),i=v((function(){return Object(d["createElementVNode"])("h2",null,"どんな物か",-1)})),p=Object(d["createTextVNode"])("オーバーレイ用ページ"),y=Object(d["createTextVNode"])(" のアドレスを利用して、OBSにカウントダウンを表示させる事ができます。"),m=v((function(){return Object(d["createElementVNode"])("br",null,null,-1)})),h=Object(d["createTextVNode"])(" 何も指定しなかったときには、自動的に2100/01/01 00:00:00までのカウントダウンになります。都度指定をすることが可能です。 "),O=Object(d["createStaticVNode"])('<section data-v-4f7cab68><h2 data-v-4f7cab68>指定の仕方</h2><p data-v-4f7cab68> URLの後ろに<code data-v-4f7cab68>?</code>をつけて、更に必要な情報を<code data-v-4f7cab68>key=value</code>形式で記述し、複数の情報を<code data-v-4f7cab68>&amp;</code>で繋ぐことが出来ます。指定できる物は以下の通りです。 </p><table data-v-4f7cab68><thead data-v-4f7cab68><tr data-v-4f7cab68><th data-v-4f7cab68>key</th><th data-v-4f7cab68>役割</th><th data-v-4f7cab68>規定値</th><th data-v-4f7cab68>指定の条件等</th><th data-v-4f7cab68>例</th></tr></thead><tbody data-v-4f7cab68><tr data-v-4f7cab68><td data-v-4f7cab68><span class="danger" data-v-4f7cab68>必須</span><br data-v-4f7cab68>time</td><td data-v-4f7cab68>終了時間の指定</td><td data-v-4f7cab68> 000000<br data-v-4f7cab68><span class="note" data-v-4f7cab68>（システム上の規定値）</span></td><td data-v-4f7cab68> HHMMSS形式<br data-v-4f7cab68><span class="note" data-v-4f7cab68>durationかtimeかのいずれかの指定が必須です。timeよりもdurationが優先されます。</span></td><td data-v-4f7cab68><code data-v-4f7cab68>time=213000</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>date</td><td data-v-4f7cab68>終了日の指定</td><td data-v-4f7cab68> 21000101<br data-v-4f7cab68><span class="note" data-v-4f7cab68>（システム上の規定値）</span></td><td data-v-4f7cab68> YYYYMMDD形式<br data-v-4f7cab68><span class="note" data-v-4f7cab68>省略時は終了時間の指定を基準に直近の日付が自動で指定されます。</span></td><td data-v-4f7cab68><code data-v-4f7cab68>date=20211123</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68><span class="danger" data-v-4f7cab68>必須</span><br data-v-4f7cab68>duration</td><td data-v-4f7cab68>期間の指定</td><td data-v-4f7cab68>（なし）</td><td data-v-4f7cab68> HHMMSS形式<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 99時間59分59秒まで対応。<br data-v-4f7cab68> ページがロードされたタイミングからのカウントダウンなので注意。<br data-v-4f7cab68>（再読込するとそこから再スタート）<br data-v-4f7cab68> durationかtimeかのいずれかの指定が必須です。timeよりもdurationが優先されます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>duration=240000</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>d</td><td data-v-4f7cab68>日付部分の表示切り替え</td><td data-v-4f7cab68> true<br data-v-4f7cab68><span class="note" data-v-4f7cab68>表示状態</span></td><td data-v-4f7cab68> true / false または 0 / 1<br data-v-4f7cab68><span class="note" data-v-4f7cab68> falseまたは0と指定することで、日付のブロックを消すことができます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>d=0</code><br data-v-4f7cab68><code data-v-4f7cab68>d=false</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>h</td><td data-v-4f7cab68>時間部分の表示切り替え</td><td data-v-4f7cab68> true<br data-v-4f7cab68><span class="note" data-v-4f7cab68>表示状態</span></td><td data-v-4f7cab68> true / false または 0 / 1<br data-v-4f7cab68><span class="note" data-v-4f7cab68> falseまたは0と指定することで、時間のブロックを消すことができます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>h=0</code><br data-v-4f7cab68><code data-v-4f7cab68>h=false</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>m</td><td data-v-4f7cab68>分部分の表示切り替え</td><td data-v-4f7cab68> true<br data-v-4f7cab68><span class="note" data-v-4f7cab68>表示状態</span></td><td data-v-4f7cab68> true / false または 0 / 1<br data-v-4f7cab68><span class="note" data-v-4f7cab68> falseまたは0と指定することで、分のブロックを消すことができます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>m=0</code><br data-v-4f7cab68><code data-v-4f7cab68>m=false</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>s</td><td data-v-4f7cab68>秒部分の表示切り替え</td><td data-v-4f7cab68> true<br data-v-4f7cab68><span class="note" data-v-4f7cab68>表示状態</span></td><td data-v-4f7cab68> true / false または 0 / 1<br data-v-4f7cab68><span class="note" data-v-4f7cab68> falseまたは0と指定することで、秒のブロックを消すことができます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>s=0</code><br data-v-4f7cab68><code data-v-4f7cab68>s=false</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>l</td><td data-v-4f7cab68>ラベル部分の表示切り替え</td><td data-v-4f7cab68> true<br data-v-4f7cab68><span class="note" data-v-4f7cab68>表示状態</span></td><td data-v-4f7cab68> true / false または 0 / 1<br data-v-4f7cab68><span class="note" data-v-4f7cab68> falseまたは0と指定することで、フリップの下にあるラベルを消すことができます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>l=0</code><br data-v-4f7cab68><code data-v-4f7cab68>l=false</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>a</td><td data-v-4f7cab68>アニメーションの有無切替</td><td data-v-4f7cab68> true<br data-v-4f7cab68><span class="note" data-v-4f7cab68>アニメーションあり</span></td><td data-v-4f7cab68> true / false または 0 / 1<br data-v-4f7cab68><span class="note" data-v-4f7cab68> falseまたは0と指定することで、フリップのアニメーションが無い状態にする事ができます。<br data-v-4f7cab68> そのときには背景がなくなりますので注意が必要です。（文字色の指定などを調整して下さい。） </span></td><td data-v-4f7cab68><code data-v-4f7cab68>a=0</code><br data-v-4f7cab68><code data-v-4f7cab68>a=false</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>cds</td><td data-v-4f7cab68>カウントダウンの文字サイズ</td><td data-v-4f7cab68> 3<br data-v-4f7cab68><span class="note" data-v-4f7cab68>3rem相当</span></td><td data-v-4f7cab68> 数値<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 通常の表示を3として考えて調整してみて下さい。<br data-v-4f7cab68> このサイズを少し大きめに指定して、OBS内で縮小するとキレイに見えやすいです。<br data-v-4f7cab68> 逆に小さくして、OBS内で拡大すると荒れて見える可能性が高まります。<br data-v-4f7cab68> 内部的には、このサイズ指定にremがついてフォントサイズが指定されます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>cds=4</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>lbs</td><td data-v-4f7cab68>ラベルの文字サイズ</td><td data-v-4f7cab68> 1.2<br data-v-4f7cab68><span class="note" data-v-4f7cab68>1.2rem相当</span></td><td data-v-4f7cab68> 数値<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 通常の表示を1.2として考えて調整してみて下さい。<br data-v-4f7cab68> このサイズを少し大きめに指定して、OBS内で縮小するとキレイに見えやすいです。<br data-v-4f7cab68> 逆に小さくして、OBS内で拡大すると荒れて見える可能性が高まります。<br data-v-4f7cab68> 内部的には、このサイズ指定にremがついてフォントサイズが指定されます。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>lbs=1.1</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>mc</td><td data-v-4f7cab68>メインカラー</td><td data-v-4f7cab68>ec685c</td><td data-v-4f7cab68> #なしHEX色コード<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 16進数6桁の色コードを指定します。<br data-v-4f7cab68> #を付けずに合計6文字で指定します。<br data-v-4f7cab68> フリップの上部にあたる文字色の指定になります。<br data-v-4f7cab68> アニメーションをオフにしている場合には、全体の文字色になります。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>mc=#223a4c</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>sfc</td><td data-v-4f7cab68>サブカラー</td><td data-v-4f7cab68>ec685c</td><td data-v-4f7cab68> #なしHEX色コード<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 16進数6桁の色コードを指定します。<br data-v-4f7cab68> #を付けずに合計6文字で指定します。<br data-v-4f7cab68> フリップの下部にあたる文字色の指定になります。<br data-v-4f7cab68> アニメーションをオフにしている場合には、無効になります。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>sfc=#223a4c</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>mfbc</td><td data-v-4f7cab68>メインフリップカラー</td><td data-v-4f7cab68>222222</td><td data-v-4f7cab68> #なしHEX色コード<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 16進数6桁の色コードを指定します。<br data-v-4f7cab68> #を付けずに合計6文字で指定します。<br data-v-4f7cab68> フリップの上部にあたる背景色の指定です。<br data-v-4f7cab68> アニメーションをオフにしている場合には、無効になります。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>mfbc=#223a4c</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>sfbc</td><td data-v-4f7cab68>サブフリップカラー</td><td data-v-4f7cab68>393939</td><td data-v-4f7cab68> #なしHEX色コード<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 16進数6桁の色コードを指定します。<br data-v-4f7cab68> #を付けずに合計6文字で指定します。<br data-v-4f7cab68> フリップの下部にあたる背景色の指定です。<br data-v-4f7cab68> アニメーションをオフにしている場合には、無効になります。<br data-v-4f7cab68> メインのフリップカラーより少しだけ明るめにすると、それっぽく見えると思います。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>sfbc=#223a4c</code></td></tr><tr data-v-4f7cab68><td data-v-4f7cab68>lbc</td><td data-v-4f7cab68>ラベルカラー</td><td data-v-4f7cab68>222222</td><td data-v-4f7cab68> #なしHEX色コード<br data-v-4f7cab68><span class="note" data-v-4f7cab68> 16進数6桁の色コードを指定します。<br data-v-4f7cab68> #を付けずに合計6文字で指定します。<br data-v-4f7cab68> ラベル部分の文字色になります。 </span></td><td data-v-4f7cab68><code data-v-4f7cab68>lbc=#223a4c</code></td></tr></tbody></table></section><section data-v-4f7cab68><h2 data-v-4f7cab68>サンプルパラメータ</h2><p data-v-4f7cab68> 例えば、2022年10月15日 22:00:00までのカウントダウンを、文字色白でラベルを消したいとなった場合には、以下のような文字列を後ろに付ける事になります。<br data-v-4f7cab68><code data-v-4f7cab68>?date=20221015&amp;time=220000&amp;mc=ffffff&amp;sfc=ffffff&amp;l=0</code></p></section>',2),j=v((function(){return Object(d["createElementVNode"])("footer",null,"©SASAPIYOGAMES.",-1)}));function w(a,t,e,c,n,r){var b=Object(d["resolveComponent"])("router-link");return Object(d["openBlock"])(),Object(d["createElementBlock"])(d["Fragment"],null,[Object(d["createElementVNode"])("div",u,[l,Object(d["createElementVNode"])("section",null,[i,Object(d["createElementVNode"])("p",null,[Object(d["createVNode"])(b,{to:"/CountDown"},{default:Object(d["withCtx"])((function(){return[p]})),_:1}),y,m,h])]),O]),j],64)}var g={setup:function(){}};e("2f88");const q=b()(g,[["render",w],["__scopeId","data-v-4f7cab68"]]);var S=q;function M(a,t,e,c,n,r){var b=Object(d["resolveComponent"])("vue3-flip-countdown");return Object(d["openBlock"])(),Object(d["createBlock"])(b,{deadline:this.deadline,showDays:this.showDays,showHours:this.showHours,showMinutes:this.showMinutes,showSeconds:this.showSeconds,showLabels:this.showLabels,flipAnimation:this.enableAnimation,countdownSize:this.countdownSize,labelSize:this.labelSize,mainColor:this.mainColor,secondFlipColor:this.secondFlipColor,mainFlipBackgroundColor:this.mainFlipBackgroundColor,secondFlipBackgroundColor:this.secondFlipBackgroundColor,labelColor:this.labelColor},null,8,["deadline","showDays","showHours","showMinutes","showSeconds","showLabels","flipAnimation","countdownSize","labelSize","mainColor","secondFlipColor","mainFlipBackgroundColor","secondFlipBackgroundColor","labelColor"])}e("a9e3"),e("ac1f"),e("5319"),e("fb6a");var C={name:"CountDown",setup:function(){var a,t,e=Object(s["c"])(),c=new Date,n="21000101",r="000000",b=!0,f=!0,o=!0,v=!0,u=!0,l=!0,i="3rem",p="1.2rem",y="#ec685c",m="#ec685c",h="#222222",O="#393939",j="#222222";Object(d["onBeforeMount"])((function(){if("undefined"!=typeof e.query.date&&(n=e.query.date),"undefined"!=typeof e.query.time){r=e.query.time;var d=x(c,"HHmmss");if(1*d>=1*r){if("undefined"==typeof e.query.date){var s=new Date(c);s.setDate(c.getDate()+1),n=x(s,"yyyyMMdd")}}else if("undefined"==typeof e.query.date){var w=new Date(c);n=x(w,"yyyyMMdd")}}if("undefined"!=typeof e.query.duration){var g=e.query.duration,q=new Date(c),S=Number(g.substr(0,2)),M=Number(g.substr(2,2)),C=Number(g.substr(4,2));q.setHours(c.getHours()+S),q.setMinutes(c.getMinutes()+M),q.setSeconds(c.getSeconds()+C),n=x(q,"yyyyMMdd")}"undefined"==typeof e.query.d||"false"!=e.query.d&&0!=e.query.d||(b=!1),"undefined"==typeof e.query.h||"false"!=e.query.h&&0!=e.query.h||(f=!1),"undefined"==typeof e.query.m||"false"!=e.query.m&&0!=e.query.m||(o=!1),"undefined"==typeof e.query.s||"false"!=e.query.s&&0!=e.query.s||(v=!1),"undefined"==typeof e.query.l||"false"!=e.query.l&&0!=e.query.l||(u=!1),"undefined"==typeof e.query.a||"false"!=e.query.a&&0!=e.query.a||(l=!1);var B=n.substr(0,4)+"-"+n.substr(4,2)+"-"+n.substr(6,2)+" "+r.substr(0,2)+":"+r.substr(2,2)+":"+r.substr(4,2);a=new Date(B),t=new Date(a).toLocaleString(),"undefined"!=typeof e.query.cds&&(i=e.query.cds+"rem"),"undefined"!=typeof e.query.lbs&&(p=e.query.lbs+"rem"),"undefined"!=typeof e.query.mc&&(y="#"+e.query.mc),"undefined"!=typeof e.query.sfc&&(m="#"+e.query.sfc),"undefined"!=typeof e.query.mfbc&&(h="#"+e.query.mfbc),"undefined"!=typeof e.query.sfbc&&(O="#"+e.query.sfbc),"undefined"!=typeof e.query.lc&&(j="#"+e.query.lc)}));var w=Object(d["computed"])((function(){return t})),g=Object(d["computed"])((function(){return b})),q=Object(d["computed"])((function(){return f})),S=Object(d["computed"])((function(){return o})),M=Object(d["computed"])((function(){return v})),C=Object(d["computed"])((function(){return u})),B=Object(d["computed"])((function(){return l})),k=Object(d["computed"])((function(){return i})),H=Object(d["computed"])((function(){return p})),D=Object(d["computed"])((function(){return y})),N=Object(d["computed"])((function(){return m})),E=Object(d["computed"])((function(){return h})),F=Object(d["computed"])((function(){return O})),V=Object(d["computed"])((function(){return j})),x=function(a,t){return t=t.replace(/yyyy/g,a.getFullYear()),t=t.replace(/MM/g,("0"+(a.getMonth()+1)).slice(-2)),t=t.replace(/dd/g,("0"+a.getDate()).slice(-2)),t=t.replace(/HH/g,("0"+a.getHours()).slice(-2)),t=t.replace(/mm/g,("0"+a.getMinutes()).slice(-2)),t=t.replace(/ss/g,("0"+a.getSeconds()).slice(-2)),t=t.replace(/SSS/g,("00"+a.getMilliseconds()).slice(-3)),t};return{deadline:w,showDays:g,showHours:q,showMinutes:S,showSeconds:M,showLabels:C,enableAnimation:B,countdownSize:k,labelSize:H,mainColor:D,secondFlipColor:N,mainFlipBackgroundColor:E,secondFlipBackgroundColor:F,labelColor:V}}};const B=b()(C,[["render",M]]);var k=B,H=[{path:"/",name:"Usage",component:S},{path:"/CountDown",name:"CountDown",component:k}],D=Object(s["a"])({history:Object(s["b"])(""),routes:H}),N=D,E=e("243e"),F=e.n(E);Object(d["createApp"])(o).use(N).use(F.a).mount("#app")},7920:function(a,t,e){"use strict";e("f8bc")},ac79:function(a,t,e){},f8bc:function(a,t,e){}});
//# sourceMappingURL=app.eeae64a4.js.map