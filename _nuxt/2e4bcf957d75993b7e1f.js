(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(t,e,n){},102:function(t,e,n){"use strict";n(101)},103:function(t,e,n){"use strict";n.r(e);var o={components:{contentBox:n(21).default},props:{text:String},data:function(){return{}},computed:{},methods:{},watch:{}},c=(n(102),n(6)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-title"},[e("contentBox",{staticClass:"head-title-box"},[e("div",[this._v(this._s(this.text))])])],1)}),[],!1,null,null,null);e.default=component.exports},164:function(t,e,n){},165:function(t,e,n){},182:function(t,e,n){"use strict";n(164)},183:function(t,e,n){"use strict";n(165)},193:function(t,e,n){"use strict";n.r(e);var o={components:{},props:{content:Object},data:function(){return{}},computed:{},methods:{},watch:{}},c=(n(182),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"newlist",attrs:{to:"/new?key="+t.content.key}},[n("div",{staticClass:"newlist-date"},[t._v(t._s(t.content.date))]),t._v(" "),n("div",{staticClass:"newlist-text"},[t._v(t._s(t.content.text))]),t._v(" "),n("div",{staticClass:"newlist-btn"},[t._v("Read more")])])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,n){"use strict";n.r(e);var o={head:{title:"News"},layout:"default",components:{contentBox:n(21).default,headTitle:n(103).default,newlistContent:n(193).default},props:{},data:function(){return{contents:[{date:"2021/10",text:"First shipment arrive to jkt",key:2},{date:"2021/04",text:"Officially moved to tokopedia tower",key:1},{date:"2021/02",text:"PT AGT officially set up, obtained NIB/SIUP/NPWP",key:0}]}},mounted:function(){},computed:{},methods:{},watch:{}},c=(n(183),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("headTitle",{attrs:{text:"News"}}),t._v(" "),n("contentBox",{staticClass:"news-outer"},[n("div",{staticClass:"news-head"},[t._v("Latest")]),t._v(" "),n("div",{staticClass:"news-box"},[n("newlistContent",{attrs:{content:t.contents[0]}})],1),t._v(" "),n("div",{staticClass:"news-head"},[t._v("Articles")]),t._v(" "),n("div",{staticClass:"news-box"},t._l(t.contents,(function(content,t){return n("newlistContent",{key:t,attrs:{content:content}})})),1)])],1)}),[],!1,null,"ad77a924",null);e.default=component.exports}}]);