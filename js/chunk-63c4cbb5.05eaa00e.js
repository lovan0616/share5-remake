(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63c4cbb5"],{"1bfb":function(t,e,s){},2785:function(t,e,s){},"608c":function(t,e,s){},"81b6":function(t,e,s){},"8b2a":function(t,e,s){"use strict";s("81b6")},b1dc:function(t,e,s){"use strict";s("2785")},fd3f:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog"},[s("div",{staticClass:"tab-mode d-md-none"},[s("v-tabs",{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tabs-slider",{staticClass:"red darken-2"}),s("v-tab",{staticClass:"grey lighten-5 text--darken-2 red--text"},[t._v("All Posts")]),s("v-tab",{staticClass:"grey lighten-5 text--darken-2 red--text"},[t._v("Featured Post")]),s("v-tab",{staticClass:"grey lighten-5 text--darken-2 red--text"},[t._v("Recent Posts")])],1),s("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab-item",[s("v-container",[s("v-row",t._l(t.posts,(function(t){return s("v-col",{key:t.id,attrs:{cols:"12",sm:"12"}},[s("PostCard",{attrs:{post:t}})],1)})),1)],1)],1),s("v-tab-item",[s("v-container",[s("v-row",t._l(t.featuredPosts,(function(t){return s("v-col",{key:t.id,attrs:{cols:"12",sm:"12"}},[s("PostCard",{attrs:{post:t}})],1)})),1)],1)],1),s("v-tab-item",[s("v-container",[s("v-row",t._l(t.recentPosts,(function(t){return s("v-col",{key:t.id,attrs:{cols:"12",sm:"12"}},[s("PostCard",{attrs:{post:t}})],1)})),1)],1)],1)],1)],1),s("div",{staticClass:"wide-mode d-none d-md-flex"},[s("v-container",[s("v-row",[s("v-col",{attrs:{md:"8"}},t._l(t.posts,(function(t){return s("PostCard",{key:t.id,attrs:{post:t}})})),1),s("v-col",{attrs:{md:"4"}},[s("div",{staticClass:"side-section my-5 grey lighten-3"},[s("v-card",{staticClass:"pa-2 transparent",attrs:{outlined:""}},[s("v-card-title",{staticClass:"red--text text--darken-2 headline"},[t._v("Featured Post")]),s("v-divider"),t._l(t.featuredPosts,(function(t){return s("PostCardMini",{key:t.id,attrs:{post:t}})}))],2),s("v-card",{staticClass:"pa-2 transparent",attrs:{outlined:""}},[s("v-card-title",{staticClass:"red--text text--darken-2 headline"},[t._v("Recent Post")]),s("v-divider"),t._l(t.recentPosts,(function(t){return s("PostCardMini",{key:t.id,attrs:{post:t}})}))],2)],1)])],1)],1)],1)])},r=[],n=(s("4de4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"postCard"},[s("v-card",{staticClass:"card d-flex pa-2 mt-5"},[s("v-avatar",{attrs:{tile:"",size:"210"}},[s("v-img",{attrs:{src:t.post.thumbnail}})],1),s("v-card-text",[s("h6",{staticClass:"text-h6"},[t._v(t._s(t.post.title))]),s("p",{staticClass:"truncate mt-2 content"},[t._v(t._s(t.post.content))])])],1)],1)}),a=[],o={name:"PostCard",props:{post:{type:Object,required:!0}}},l=o,c=(s("8b2a"),s("2877")),h=s("6544"),d=s.n(h),u=s("8212"),f=s("b0af"),v=s("99d9"),p=s("adda"),m=Object(c["a"])(l,n,a,!1,null,"3739b9fe",null),b=m.exports;d()(m,{VAvatar:u["a"],VCard:f["a"],VCardText:v["a"],VImg:p["a"]});var g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"postCard"},[s("v-card",{staticClass:"card d-flex pa-2 my-5"},[s("v-avatar",{attrs:{tile:"",size:"100"}},[s("v-img",{attrs:{src:t.post.thumbnail}})],1),s("v-card-text",[s("h6",{staticClass:"text-h6"},[t._v(t._s(t.post.title))])])],1)],1)},w=[],C={name:"PostCardMini",props:{post:{type:Object,required:!0}}},x=C,O=Object(c["a"])(x,g,w,!1,null,null,null),$=O.exports;d()(O,{VAvatar:u["a"],VCard:f["a"],VCardText:v["a"],VImg:p["a"]});var y={name:"Blog",components:{PostCard:b,PostCardMini:$},data:function(){return{tab:null,posts:[{id:1,thumbnail:"./thumbnail/pic1.jpg",title:"【SHARE喃喃】這是最好的時代，也是最壞的時代",featured:!1,date:new Date("3/08/2015"),content:"（文：柏毅） 陸先銘先生的個展：雙城記─「浮城過影」正在中山的台北當代藝術館展出中。 活在台北的你、你還有你，是否也認同狄更斯在《雙城記》開頭所寫的：「這是最好的時代，這是最壞的時代；這是智慧的年代，這是愚蠢的年代；這是信仰的時期，這是懷疑的時期；這是光明的季節，這是黑暗的季節；這是希望之春，這是絕望之冬......」。從大賣場提出一袋一袋，纖細雙手無力拉動堆積如山的紙板都是重量；平日急忙刷卡通過閘門、周末偷閒騎Ubike，起個大早就是一步一步都是通勤；紗織數300針以上、反發度高，再燈火通明的都市都能找到的一隅安靜的、比較不冷的都是床。"},{id:2,thumbnail:"./thumbnail/pic2.jpg",title:"【SHARE筆記】拜訪：人生百味",featured:!0,date:new Date("3/07/2015"),content:"（參訪：威融、柏毅／文：威融） 談及街友議題時，阿德強調街友只是群聚性問題的代名詞，背後擁有諸多因素。他們不能配合長期固定的工作的原因：家庭、健康、心裡障礙等。這些悖於社會主流價值判斷，代表我們可以忽視、接受現狀的想法，是值得商榷的。即使像台北市社會局政府擁有較多資源，但政府的社福制度是鑑於防備心態，依據個人的戶籍資料、審核申請者是否符合補助條件；但往往排斥到真正需要的朋友。社福另一個弊病是將資訊公布網路，但街友們並無法上網得到資訊，以及年長者使用網路慣性不同，需大量人力去溝通；另一方面，街友平日步行移動打零工，常耗時3~4小時，也降低了他們嘗試不同工作的企圖心，「試想，如果你一整天有超過八成的時間在通勤和打零工，要有翻身的想法並且去執行是很難的」阿德說。 "},{id:3,thumbnail:"./thumbnail/pic3.jpg",title:"【SHARE筆記】拜訪：臺灣夢想城鄉營造協會",featured:!1,date:new Date("3/02/2015"),content:"（參訪：威融、柏毅、泉潽／文：柏毅） 「來，你們幫忙我接著這個。」今天SHARE5前往剝皮寮，和夢想城鄉協會的執行長徐敏雄聊聊天，騎著機車抵達的徐敏雄老師將手上的長餘一公尺的木條交給我們。剝皮寮的「長壽茶桌仔」舊址現為夢想城鄉協會提供學員學作木工的場所，四處散落著各種木製品，有些被當作書架擺了些書、有些較小拿來收藏紙膠帶剛剛好、還有個是貓床的半成品靜靜躺在桌上，等待學員拿擱在一旁的鐵鎚和釘子敲敲打打完成它。"},{id:4,thumbnail:"./thumbnail/pic4.jpg",title:"【SHARE筆記】拜訪：台北華陰街恩友中心",featured:!1,date:new Date("2/26/2015"),content:"（參訪：柏毅、威融／文：威融）恩友中心提供午晚餐，庇護所，及合作診所義診活動(憑恩友卡，一個月換證一次)。用餐採取大鍋菜(2樓烹煮)，食物的來源是和傳統市場合作，半買半送的形式，隔幾天會送食物、不定期會有水果捐助。多數街友帶著家當(大包塑膠袋或背包)來，進來後可以拿到一本聖經和詩歌選集，牧師講道時，多數街友認真聆聽，少部分打盹，讀聖經時較多人齊念，唱歌時較少，但大家還是會緊盯著手上的書。近車站的恩友中心，來者多數是街友，但遠離車站或鄉鎮等，則多獨居老人或低收入戶家庭。多數參與的街友非基督徒，牧師期待透過講道的方式給予他們精神支柱，也希望能讓他們受洗，但用餐後即離去的街友仍是多數。"},{id:5,thumbnail:"./thumbnail/pic5.jpg",title:"【SHARE喃喃】我想，不過是寢室的模樣不一樣吧",featured:!1,date:new Date("2/10/2015"),content:"當你在車站、地下道、天橋上，或任何一個匆匆路過的地方瞥見這般景像時，想到了些什麼？也許你想到雜物堆疊不甚雅觀，也許你想到待回兒回來的人蓬頭垢面、衣衫襤褸，又或許你不特別想什麼，只是加緊腳步離去。每當夜幕漸漸垂下，這群你或許想到些什麼或不曾想到過的人，慢慢聚集在這兒，他們就和你我一樣，一天過了、累了，也準備好要歇息了。我們拉開房門、他們卸下家當；我們窩進棉被、他們窩進紙箱；我們好夢噩夢、他們好夢噩夢；我們醒來、他們醒來，然後一天又來了，都一樣。那麼究竟哪裡不一樣？我想，不過是寢室的模樣不一樣吧(笑。除此之外，你和我和他們，都有情緒、都有秘密、都有故事、都有24小時的一天，都要把一天過好，所以都要努力，而努力了一整天之後累了想睡了、也就都睡了。關於你和我和他們，其實，真的都一樣"}]}},computed:{featuredPosts:function(){return this.posts.filter((function(t){return!0===t.featured}))},recentPosts:function(){return this.posts.filter((function(t,e){return e<3}))}}},k=y,S=(s("b1dc"),s("62ad")),_=s("a523"),T=s("ce7e"),j=s("0fd9"),A=(s("c975"),s("ac1f"),s("5319"),s("5530")),P=s("4e82"),I=s("1c87"),V=s("7560"),B=s("80d2"),R=s("58df"),M=Object(R["a"])(I["a"],Object(P["a"])("tabsBar"),V["a"]),W=M.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({"v-tab":!0},I["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,s=this.generateRouteLink(),i=s.tag,r=s.data;return r.attrs=Object(A["a"])(Object(A["a"])({},r.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),r.on=Object(A["a"])(Object(A["a"])({},r.on),{},{keydown:function(t){t.keyCode===B["o"].enter&&e.click(t),e.$emit("keydown",t)}}),t(i,r,this.$slots.default)}}),E=s("1e6c"),z=E["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=E["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),D=(s("b0c0"),s("a9e3"),s("1bfb"),s("b85c")),N=(s("99af"),s("caad"),s("fb6a"),s("608c"),s("9d26")),L=s("0789"),H=s("604c"),X=s("e4cd"),U=s("dc22"),q=s("c3f0"),F=Object(R["a"])(H["a"],X["a"]).extend({name:"base-slide-group",directives:{Resize:U["a"],Touch:q["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(A["a"])(Object(A["a"])({},H["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,s=t.wrapper;return e>Math.abs(this.scrollOffset)+s},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var s="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(s)];return this.showArrows||i?this.$createElement(N["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(L["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,s,i){var r=s?-1:1,n=r*i+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,s=t.wrapper,i=e.clientWidth-s.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,s,i){var r=t.clientWidth,n=s?e.content-t.offsetLeft-r:t.offsetLeft;s&&(i=-i);var a=e.wrapper+i,o=r+n,l=.4*r;return n<=i?i=Math.max(n-l,0):a<=o&&(i=Math.min(i-(a-o-l),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset:function(t,e,s){var i=t.offsetLeft,r=t.clientWidth;if(s){var n=e.content-i-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,n))}var a=i+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,s=e.content,i=e.wrapper;t.widths={content:s?s.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),J=(F.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),s("d10f")),G=Object(R["a"])(F,J["a"],V["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({},F.options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=F.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var s,i=this.items,r=t.path,n=e.path,a=!1,o=!1,l=Object(D["a"])(i);try{for(l.s();!(s=l.n()).done;){var c=s.value;if(c.to===r?a=!0:c.to===n&&(o=!0),a&&o)break}}catch(h){l.e(h)}finally{l.f()}!a&&o&&(this.internalValue=void 0)}}},render:function(t){var e=F.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),K=s("f665"),Q=K["a"].extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(A["a"])(Object(A["a"])({},K["a"].options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||H["a"].options.methods.getValue.call(this,t,e)}}}),Y=s("a9ad"),Z=Object(R["a"])(Y["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),tt=s("a452"),et=Object(R["a"])(Y["a"],tt["a"],V["a"]),st=et.extend().extend({name:"v-tabs",directives:{Resize:U["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(A["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(B["f"])(this.slider.height),left:this.isReversed?void 0:Object(B["f"])(this.slider.left),right:this.isReversed?Object(B["f"])(this.slider.right):void 0,top:this.vertical?Object(B["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(B["f"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var s=e.$el;t.slider={height:t.vertical?s.scrollHeight:Number(t.sliderSize),left:t.vertical?0:s.offsetLeft,right:t.vertical?0:s.offsetLeft+s.offsetWidth,top:s.offsetTop,width:t.vertical?Number(t.sliderSize):s.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var s=this,i={style:{height:Object(B["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){s.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,i),this.setBackgroundColor(this.backgroundColor,i),this.$createElement(G,i,[this.genSlider(e),t])},genItems:function(t,e){var s=this;return t||(e.length?this.$createElement(Q,{props:{value:this.internalValue},on:{change:function(t){s.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(Z,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,s=[],i=[],r=this.$slots.default||[],n=r.length,a=0;a<n;a++){var o=r[a];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":s.push(o);break;default:i.push(o)}else i.push(o)}return{tab:i,slider:e,items:t,item:s}}},render:function(t){var e=this.parseNodes(),s=e.tab,i=e.slider,r=e.items,n=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(s,i),this.genItems(r,n)])}}),it=Object(c["a"])(k,i,r,!1,null,"eee286c6",null);e["default"]=it.exports;d()(it,{VCard:f["a"],VCardTitle:v["b"],VCol:S["a"],VContainer:_["a"],VDivider:T["a"],VRow:j["a"],VTab:W,VTabItem:z,VTabs:st,VTabsItems:Q,VTabsSlider:Z})}}]);
//# sourceMappingURL=chunk-63c4cbb5.05eaa00e.js.map