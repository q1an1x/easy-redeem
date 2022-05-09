"use strict";(self["webpackChunkeasy_redeem"]=self["webpackChunkeasy_redeem"]||[]).push([[644],{260:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(3673),i=a(2323);const d={style:{border:"2px solid #000000"}},r={class:"pin scancardium"};function l(e,t,a,l,n,c){return(0,s.wg)(),(0,s.iD)("table",d,[(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",r,(0,i.zw)(a.pin),1)])])])}const n={name:"PINDisplay",props:{pin:{type:String}}};var c=a(4260);const o=(0,c.Z)(n,[["render",l],["__scopeId","data-v-ba0e4242"]]),m=o},5644:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var s=a(3673),i=a(2323),d=a(8880);const r={class:"flex-break"},l={key:0},n={class:"text-subtitle1 q-mb-lg"},c={key:0},o={class:"text-h6"},m={class:"subtitle1"},p={class:"text-caption q-mt-md"},u={key:1},g={class:"text-h4"},h={class:"text-subtitle1"},k={key:2},v={class:"q-mt-xl flex flex-center q-gutter-x-md"},f={class:"text-subtitle2"};function w(e,t,a,w,b,_){const $=(0,s.up)("PINDisplay"),x=(0,s.up)("q-btn"),y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(y,{padding:"",class:"flex flex-center",onClick:t[3]||(t[3]=e=>b.redeeming=!0)},{default:(0,s.w5)((()=>[(0,s._)("div",r,[b.cards.length?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",n,(0,i.zw)(e.$t("redeem.cardRemaining",{count:b.cards.length})),1),(0,s.Wm)(d.uT,{"leave-active-class":"animated fadeOut absolute"},{default:(0,s.w5)((()=>[b.redeeming?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",o,(0,i.zw)(e.$t("redeem.clickAnywhere")),1),(0,s._)("div",m,(0,i.zw)(e.$t("redeem.toRedeem")),1)]))])),_:1}),(0,s.Wm)(d.uT,{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight absolute"},{default:(0,s.w5)((()=>[b.redeeming&&!b.skipping?((0,s.wg)(),(0,s.iD)("div",{key:b.cards[0].pin},[(0,s.Wm)($,{pin:b.cards[0].pin},null,8,["pin"]),(0,s._)("div",p,(0,i.zw)(e.$t("redeem.cardAddedAt",{time:b.cards[0].timeAdded})),1)])):(0,s.kq)("",!0)])),_:1})])):((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",g,(0,i.zw)(e.$t("redeem.noAvailableCards")),1),(0,s._)("div",h,(0,i.zw)(e.$t("redeem.addCardsToRedeem")),1),(0,s.Wm)(x,{color:"primary",icon:w.matAdd,class:"q-mt-md",label:e.$t("redeem.addCardsButton"),onClick:t[0]||(t[0]=t=>e.$router.push("/cards")),"no-caps":""},null,8,["icon","label"])])),b.cards.length&&b.redeeming?((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",v,[(0,s._)("span",f,(0,i.zw)(e.$t("redeem.markAs")),1),(0,s.Wm)(x,{color:"positive","no-caps":"",label:"redeemed",icon:w.matCheckCircle,onClick:t[1]||(t[1]=e=>_.mark("redeemed"))},null,8,["icon"]),(0,s.Wm)(x,{color:"negative","no-caps":"",label:"invalid",icon:w.matError,onClick:t[2]||(t[2]=e=>_.mark("invalid"))},null,8,["icon"])])])):(0,s.kq)("",!0)])])),_:1})}a(71);var b=a(6060),_=a(260);const $={name:"Redeem",components:{PINDisplay:_.Z},setup(){return{matAdd:b.vML,matCheckCircle:b.f3D,matError:b.di5}},data(){return{cards:[],redeeming:!1,skipping:!1}},mounted(){this.load()},methods:{load(){let e=this.$q.localStorage.getItem("cards");e&&(this.cards=JSON.parse(e)),this.cards=this.filterOk(this.cards)},filterOk(e){return e.filter((e=>"ok"===e.status))},mark(e){this.$nextTick((()=>{this.skipping=!0;let t=this.cards[0];t.status=e,t.timeUpdated=(new Date).toLocaleString();let a=this.$utils.fetchCards(this.$q.localStorage),s=0;for(const e of a)t.pin===e.pin&&(a[s]=t),s++;this.$q.localStorage.set("cards",JSON.stringify(a));let i=JSON.parse(this.$q.localStorage.getItem("preferences"));i&&!i.autoRedeemNextCard&&(this.redeeming=!1),this.load(),this.$utils.notifyPositive(this.$t("redeem.marked",{status:e})),this.$nextTick((()=>{this.skipping=!1}))}))}}};var x=a(4260),y=a(4379),C=a(2165),q=a(7518),D=a.n(q);const S=(0,x.Z)($,[["render",w]]),z=S;D()($,"components",{QPage:y.Z,QBtn:C.Z})}}]);