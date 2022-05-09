"use strict";(self["webpackChunkeasy_redeem"]=self["webpackChunkeasy_redeem"]||[]).push([[329],{5329:(t,e,l)=>{l.r(e),l.d(e,{default:()=>L});var a=l(3673),s=l(2323);const d={class:"q-mb-md"},i={class:"text-h4"},o={class:"text-subtitle1"},n={class:"q-gutter-x-sm"},c={class:"text-h6"},r={class:"text-caption"},u={class:"text-caption text-black"};function p(t,e,l,p,m,b){const f=(0,a.up)("q-btn"),h=(0,a.up)("q-item-label"),w=(0,a.up)("q-item-section"),g=(0,a.up)("q-item"),$=(0,a.up)("q-list"),k=(0,a.up)("q-btn-dropdown"),C=(0,a.up)("q-table"),_=(0,a.up)("q-card-section"),q=(0,a.up)("q-input"),y=(0,a.up)("q-card-actions"),v=(0,a.up)("q-card"),S=(0,a.up)("q-dialog"),W=(0,a.up)("q-page"),Z=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(W,{padding:""},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a._)("div",i,(0,s.zw)(t.$t("cards.title")),1),(0,a._)("div",o,(0,s.zw)(t.$t("cards.subtitle")),1)]),(0,a.Wm)(C,{title:t.$t("cards.table.title"),columns:m.columns,rows:m.cards,selection:"multiple",selected:m.selectedCards,"onUpdate:selected":e[4]||(e[4]=t=>m.selectedCards=t),"row-key":"pin","no-data-label":t.$t("cards.table.noData"),"rows-per-page-label":t.$t("cards.table.rowsPerPage"),"selected-rows-label":b.selectedRowsLabel,"icon-first-page":p.matFirstPage,"icon-last-page":p.matLastPage,"pagination-label":b.paginationLabel},{"top-left":(0,a.w5)((()=>[(0,a.Wm)(f,{label:t.$t("cards.table.export"),icon:p.matSystemUpdateAlt,color:"primary",outline:"","no-caps":"",onClick:b.exportTable},null,8,["label","icon","onClick"])])),"top-right":(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(f,{label:t.$t("cards.add.button"),icon:p.matAdd,color:"primary","no-caps":"",onClick:e[0]||(e[0]=t=>m.showAddDialog=!0)},null,8,["label","icon"]),(0,a.Wm)(k,{color:"primary",label:t.$t("cards.table.options"),"no-caps":"",disable:!m.selectedCards.length},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(g,{clickable:"",onClick:e[1]||(e[1]=t=>b.mark("ok"))},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$t("cards.table.markOk")),1)])),_:1})])),_:1})])),_:1})),[[Z]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(g,{clickable:"",onClick:e[2]||(e[2]=t=>b.mark("redeemed"))},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$t("cards.table.markRedeemed")),1)])),_:1})])),_:1})])),_:1})),[[Z]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(g,{clickable:"",onClick:e[3]||(e[3]=t=>b.mark("invalid"))},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$t("cards.table.markInvalid")),1)])),_:1})])),_:1})])),_:1})),[[Z]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(g,{clickable:"",onClick:b.deleteSelected},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$t("cards.table.delete")),1)])),_:1})])),_:1})])),_:1},8,["onClick"])),[[Z]])])),_:1})])),_:1},8,["label","disable"])])])),_:1},8,["title","columns","rows","selected","no-data-label","rows-per-page-label","selected-rows-label","icon-first-page","icon-last-page","pagination-label"]),(0,a.Wm)(S,{modelValue:m.showAddDialog,"onUpdate:modelValue":e[6]||(e[6]=t=>m.showAddDialog=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,(0,s.zw)(t.$t("cards.add.title")),1)])),_:1}),(0,a.Wm)(_,{class:"q-pt-none q-gutter-y-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{filled:"",modelValue:m.cardInput,"onUpdate:modelValue":e[5]||(e[5]=t=>m.cardInput=t),label:t.$t("cards.table.title"),type:"textarea"},null,8,["modelValue","label"]),(0,a._)("div",r,(0,s.zw)(t.$t("cards.add.caption")),1),(0,a._)("div",u,(0,s.zw)(t.$t("cards.add.count",{count:b.filterPins(m.cardInput.split("\n")).length})),1)])),_:1}),(0,a.Wm)(y,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(f,{flat:"",label:t.$t("cards.table.cancel")},null,8,["label"]),[[Z]]),(0,a.wy)((0,a.Wm)(f,{flat:"",label:t.$t("cards.add.button"),onClick:b.add},null,8,["label","onClick"]),[[Z]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}l(5363),l(7768),l(71);var m=l(2841),b=l(6060);function f(t,e,l){let a=void 0!==e?e(t,l):t;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),`"${a}"`}const h={name:"Cards",setup(){return{matAdd:b.vML,matFileUpload:b.$hy,matFirstPage:b.NaY,matLastPage:b.qzL,matSystemUpdateAlt:b.hKe,matDone:b.itb}},mounted(){this.load()},data(){const t=[{name:"pin",label:this.$t("cards.table.pin"),field:"pin"},{name:"status",label:this.$t("cards.table.status"),field:"status"},{name:"timeAdded",label:this.$t("cards.table.timeAdded"),field:"timeAdded"},{name:"timeUpdated",label:this.$t("cards.table.timeUpdated"),field:"timeUpdated"}];return{showAddDialog:!1,cardInput:"",cards:[],selectedCards:[],columns:t}},methods:{add(){let t=this.cardInput.replaceAll(" ","").split("\n");t=this.filterPins(t);let e=[],l=new Date;for(const s of t)e.push({pin:s,status:"ok",timeAdded:l.toLocaleString(),timeUpdated:l.toLocaleString()});let a=this.$utils.fetchCards(this.$q.localStorage);this.$q.localStorage.set("cards",JSON.stringify(a.concat(e))),this.load(),this.$utils.notifyPositive(this.$t("cards.add.added",{count:t.length})),this.cardInput=""},filterPins(t){t=t.map((t=>t.trim())),t=t.filter((t=>t));let e=JSON.parse(this.$q.localStorage.getItem("preferences"));return e&&e.importAppleValidation&&(t=t.filter((t=>"X"===t[0]&&16===t.length))),t},load(){let t=this.$q.localStorage.getItem("cards");t&&(this.cards=JSON.parse(t).reverse())},selectedRowsLabel(t){return this.$t("cards.table.selectedRows",{records:t})},paginationLabel(t,e,l){return this.$t("cards.table.pagination",{first:t,last:e,total:l})},exportTable(){const t=[this.columns.map((t=>f(t.label)))].concat(this.cards.map((t=>this.columns.map((e=>f("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format,t))).join(",")))).join("\r\n");(0,m.Z)("table-export.csv",t,"text/csv")},mark(t){let e=this.$utils.fetchCards(this.$q.localStorage);for(const l of this.selectedCards){let a=0;for(const s of e)l.pin===s.pin&&(e[a].status=t),a++}this.$q.localStorage.set("cards",JSON.stringify(e)),this.load(),this.$utils.notifyPositive(this.$t("cards.marked",{status:t,count:this.selectedCards.length})),this.selectedCards=[]},deleteSelected(){let t=this.$utils.fetchCards(this.$q.localStorage),e=t.length;while(e--)for(const l of this.selectedCards)if(l.pin===t[e].pin){t.splice(e,1);break}this.$q.localStorage.set("cards",JSON.stringify(t)),this.load(),this.$utils.notifyPositive(this.$t("cards.deleted",{count:this.selectedCards.length})),this.selectedCards=[]}}};var w=l(4260),g=l(4379),$=l(5076),k=l(2165),C=l(2670),_=l(7011),q=l(3414),y=l(2035),v=l(2350),S=l(6778),W=l(151),Z=l(5589),x=l(4842),A=l(9367),P=l(677),Q=l(7518),U=l.n(Q);const I=(0,w.Z)(h,[["render",p]]),L=I;U()(h,"components",{QPage:g.Z,QTable:$.Z,QBtn:k.Z,QBtnDropdown:C.Z,QList:_.Z,QItem:q.Z,QItemSection:y.Z,QItemLabel:v.Z,QDialog:S.Z,QCard:W.Z,QCardSection:Z.Z,QInput:x.Z,QCardActions:A.Z}),U()(h,"directives",{ClosePopup:P.Z})}}]);