;!function(){
 
/* mousetrap v1.4.5 craig.is/killing/mice */
(function(J,r,f){function s(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,c;for(c in n)a[c]?b=!0:n[c]=0;b||(u=!1)}function C(a,b,c,d,e,v){var g,k,f=[],h=c.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!d&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||c.metaKey||c.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=d&&k.seq==d&&k.level==v;(!d&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,c){m.stopCallback(b,b.target||b.srcElement,c)||!1!==a(b,c)||(b.preventDefault&&b.preventDefault(),b.stopPropagation&&b.stopPropagation(),
b.returnValue=!1,b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,c,d){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(c,b,a);"keyup"!==d&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(d||E(b[g+1]).action);F(b[g],f,d,a,g)}}function E(a,b){var c,
d,e,f=[];c="+"===a?["+"]:a.split("+");for(e=0;e<c.length;++e)d=c[e],G[d]&&(d=G[d]),b&&"keypress"!=b&&H[d]&&(d=H[d],f.push("shift")),w(d)&&f.push(d);c=d;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[c]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:d,modifiers:f,action:e}}function F(a,b,c,d,e){q[a+":"+c]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,c):(c=E(a,c),l[c.key]=l[c.key]||[],C(c.key,c.modifiers,{type:c.action},
d,a,e),l[c.key][d?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:d,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,c){a=a instanceof Array?a:[a];for(var d=0;d<a.length;++d)F(a[d],b,c);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,c){var d=C(a,b,c),e;b={};var f=0,g=!1;for(e=0;e<d.length;++e)d[e].seq&&(f=Math.max(f,d[e].level));for(e=0;e<d.length;++e)d[e].seq?d[e].level==f&&(g=!0,
b[d[e].seq]=1,x(d[e].callback,c,d[e].combo)):g||x(d[e].callback,c,d[e].combo);d="keypress"==c.type&&I;c.type!=u||w(a)||d||t(b);I=g&&"keydown"==c.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);
 
/**
 * utils
 **/
var okhjon = (function() {
  var o           = {},
      noop        = function(){},
      hasSStorage = (window.sessionStorage && typeof sessionStorage.getItem == 'function');
 
  // set an item in a session-persistent storage if it's available
  o.sessionSet = !hasSStorage ? noop : function(k, v) {
    sessionStorage.setItem("okhjon." + k, v);
  };
 
  // get an item from a session-persistent storage if it's available
  o.sessionGet = !hasSStorage ? noop : function(k) {
    return sessionStorage.getItem("okhjon." + k);
  };
 
  return o;
})();
 
/**
 * "Zen" mode (IE: 10+)
 **/
var html        = document.getElementsByTagName('html')[0],
    zenShortcuts = ['alt+z', /* a la Vim: */ ', z'];
 
Mousetrap.bind(zenShortcuts, function toggleZenMode() {
  html.classList.toggle('zen');
  okhjon.sessionSet('zen', html.classList.contains('zen'));
});
 
if (okhjon.sessionGet('zen') == 'true') {
  html.classList.add('zen');
}
 
/**
 * Vim-like Keyboard Shortcuts
 **/
var $win = $(window),
    $doc = $(document);
 
 
Mousetrap.bind('g g',     function() { $win.scrollTop(0); });
Mousetrap.bind('shift+g', function() { $win.scrollTop($doc.height()); });
 
}();