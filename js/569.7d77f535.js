(self["webpackChunklulu_school"]=self["webpackChunklulu_school"]||[]).push([[569],{7424:function(t,e,s){
/*!
  * Bootstrap modal.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(4072),s(9286),s(8737),s(1810),s(5695),s(1358),s(744),s(1127))})(0,(function(t,e,s,i,o,l,a,n){"use strict";const d=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},r=d(e),c=d(s),u=d(i),h=d(o),p=d(l),m=d(a),_="modal",g="bs.modal",b=`.${g}`,f=".data-api",w="Escape",k=`hide${b}`,y=`hidePrevented${b}`,v=`hidden${b}`,P=`show${b}`,U=`shown${b}`,D=`resize${b}`,x=`click.dismiss${b}`,C=`keydown.dismiss${b}`,$=`click${b}${f}`,T="modal-open",A="fade",L="show",M="modal-static",S=".modal.show",B=".modal-dialog",E=".modal-body",z='[data-bs-toggle="modal"]',N={backdrop:!0,keyboard:!0,focus:!0},V={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class j extends h.default{constructor(t,e){super(t,e),this._dialog=c.default.findOne(B,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new u.default,this._addEventListeners()}static get Default(){return N}static get DefaultType(){return V}static get NAME(){return _}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=r.default.trigger(this._element,P,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(T),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=r.default.trigger(this._element,k);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(L),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])r.default.off(t,b);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new p.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new m.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=c.default.findOne(E,this._dialog);s&&(s.scrollTop=0),t.reflow(this._element),this._element.classList.add(L);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,r.default.trigger(this._element,U,{relatedTarget:e})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){r.default.on(this._element,C,(t=>{if(t.key===w)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),r.default.on(window,D,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),r.default.on(this._element,x,(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(T),this._resetAdjustments(),this._scrollBar.reset(),r.default.trigger(this._element,v)}))}_isAnimated(){return this._element.classList.contains(A)}_triggerBackdropTransition(){const t=r.default.trigger(this._element,y);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;"hidden"===s||this._element.classList.contains(M)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(M),this._queueCallback((()=>{this._element.classList.remove(M),this._queueCallback((()=>{this._element.style.overflowY=s}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._scrollBar.getWidth(),i=s>0;if(i&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=`${s}px`}if(!i&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=`${s}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const s=j.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof s[t])throw new TypeError(`No method named "${t}"`);s[t](e)}}))}}return r.default.on(document,$,z,(function(e){const s=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),r.default.one(s,P,(e=>{e.defaultPrevented||r.default.one(s,v,(()=>{t.isVisible(this)&&this.focus()}))}));const i=c.default.findOne(S);i&&j.getInstance(i).hide();const o=j.getOrCreateInstance(s);o.toggle(this)})),n.enableDismissTrigger(j),t.defineJQueryPlugin(j),j}))},3569:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Qt}});var i=s(6252),o=s(3577);const l={class:"w-100 p-4"},a={class:"mb-5"},n={class:"d-flex align-items-center justify-content-between"},d=(0,i._)("h2",null,"教師列表",-1),r=(0,i._)("i",{class:"fa-solid fa-plus me-2"},null,-1),c=(0,i.Uk)("新增教師 "),u=[r,c],h=(0,i._)("label",{for:"inputState",class:"form-label"},[(0,i._)("p",{class:"d-none"},"State"),(0,i._)("select",{id:"inputState",class:"form-select rounded-3 p-2 px-3"},[(0,i._)("option",{selected:""},"新->舊..."),(0,i._)("option",null,"按類別")])],-1),p={class:"table table-striped table-hover"},m=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{scope:"col"},"分類"),(0,i._)("th",{scope:"col"},"姓名"),(0,i._)("th",{scope:"col"},"職位"),(0,i._)("th",{scope:"col"},"啟用"),(0,i._)("th",{scope:"col"},"刪除"),(0,i._)("th",{scope:"col"},"修改")])],-1),_={scope:"row"},g={key:0},b=(0,i._)("i",{class:"far fa-check-square text-success h3"},null,-1),f=[b],w={key:1},k=(0,i._)("i",{class:"far fa-times-circle h3 text-warning"},null,-1),y=[k],v=["onClick"],P=(0,i._)("i",{class:"fas fa-trash-alt"},null,-1),U=[P],D=["onClick"],x=(0,i._)("i",{class:"fas fa-pen"},null,-1),C=[x];function $(t,e,s,r,c,b){const k=(0,i.up)("AddEdit"),P=(0,i.up)("CheckDelete");return(0,i.wg)(),(0,i.iD)("section",l,[(0,i._)("section",a,[(0,i._)("div",n,[d,(0,i._)("button",{type:"button",class:"btn btn-outline-dark btn-lg rounded-3",onClick:e[0]||(e[0]=t=>b.openModal(!0))},u),h])]),(0,i._)("section",null,[(0,i._)("table",p,[m,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.products,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("th",_,(0,o.zw)(t.category),1),(0,i._)("td",null,(0,o.zw)(t.title),1),(0,i._)("td",null,(0,o.zw)(t.unit),1),t.is_enabled?((0,i.wg)(),(0,i.iD)("td",g,f)):((0,i.wg)(),(0,i.iD)("td",w,y)),(0,i._)("td",null,[(0,i._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>b.checkDelete(t)},U,8,v)]),(0,i._)("td",null,[(0,i._)("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:e=>b.openModal(!1,t)},C,8,D)])])))),128))])])]),(0,i.Wm)(k,{ref:"addedit",isNew:c.isNew,product:c.product,onRender:b.getProducts},null,8,["isNew","product","onRender"]),(0,i.Wm)(P,{product:c.product,onDelete:b.deleteProduct,loading:c.loadingStatus,ref:"check"},null,8,["product","onDelete","loading"])])}var T=s(9963);const A={id:"productModal",ref:"modal",class:"modal fade","data-bs-keyboard":"false","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},L={class:"modal-dialog modal-dialog-centered modal-xl"},M={class:"modal-content border-0 rounded-3"},S={class:"modal-header"},B={id:"productModalLabel",class:"modal-title"},E={key:0},z={key:1},N=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),V={class:"modal-body"},j={class:"row"},R={class:"col-sm-4"},I={class:"form-group mb-4"},H={for:"imageUrl"},q=(0,i.Uk)("主要圖片 "),O=["src"],Y=(0,i._)("div",{class:"mb-1"},"多圖新增",-1),Z={key:0},F={class:"form-group"},W={for:"imageUrl"},K=(0,i.Uk)("圖片網址 "),Q=["onUpdate:modelValue"],J=["src"],G={key:0},X={key:1},tt={key:1},et={class:"col-sm-8"},st={class:"form-group"},it={for:"title"},ot=(0,i.Uk)("教師姓名 "),lt={class:"row"},at={class:"form-group col-md-6"},nt={for:"category"},dt=(0,i.Uk)("部門分類 "),rt=(0,i._)("option",{disabled:"",selected:""},"請選擇分類",-1),ct=(0,i._)("option",null,"ＩＴ",-1),ut=(0,i._)("option",null,"設計",-1),ht=(0,i._)("option",null,"時尚",-1),pt=(0,i._)("option",null,"公職",-1),mt=(0,i._)("option",null,"家庭",-1),_t=[rt,ct,ut,ht,pt,mt],gt={class:"form-group col-md-6"},bt={for:"price"},ft=(0,i.Uk)("職位 "),wt=(0,i._)("option",{disabled:"",selected:""},"請選擇職位",-1),kt=(0,i._)("option",null,"主任",-1),yt=(0,i._)("option",null,"教師",-1),vt=(0,i._)("option",null,"顧問",-1),Pt=[wt,kt,yt,vt],Ut=(0,i._)("hr",null,null,-1),Dt={class:"row g-2"},xt={class:"form-group col"},Ct={for:"description"},$t=(0,i.Uk)("座右銘 "),Tt={class:"form-group col"},At={for:"content"},Lt=(0,i.Uk)("想說的話 "),Mt={class:"form-group"},St={class:"form-check"},Bt={class:"form-check-label",for:"is_enabled"},Et=(0,i._)("span",{class:"d-none"},"是否啟用",-1),zt=(0,i.Uk)(" 是否啟用 "),Nt={class:"modal-footer"},Vt=(0,i._)("div",{class:"spinner-border",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")],-1),jt=[Vt];function Rt(t,e,s,l,a,n){return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",L,[(0,i._)("div",M,[(0,i._)("div",S,[(0,i._)("h3",B,[s.isNew?((0,i.wg)(),(0,i.iD)("span",E,"新增教師")):((0,i.wg)(),(0,i.iD)("span",z,"編輯教師"))]),N]),(0,i._)("div",V,[(0,i._)("div",j,[(0,i._)("div",R,[(0,i._)("div",I,[(0,i._)("label",H,[q,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>a.tempProduct.imageUrl=t)},null,512),[[T.nr,a.tempProduct.imageUrl]])]),(0,i._)("img",{class:"img-fluid",src:a.tempProduct.imageUrl,alt:""},null,8,O)]),Y,Array.isArray(a.tempProduct.imagesUrl)?((0,i.wg)(),(0,i.iD)("div",Z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tempProduct.imagesUrl,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"mb-1",key:e},[(0,i._)("div",F,[(0,i._)("label",W,[K,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t=>a.tempProduct.imagesUrl[e]=t},null,8,Q),[[T.nr,a.tempProduct.imagesUrl[e]]])])]),(0,i._)("img",{class:"img-fluid",src:t,alt:""},null,8,J)])))),128)),!a.tempProduct.imagesUrl.length||a.tempProduct.imagesUrl[a.tempProduct.imagesUrl.length-1]?((0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=t=>a.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):((0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>a.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):((0,i.wg)(),(0,i.iD)("div",tt,[(0,i._)("button",{class:"btn btn-outline-secondary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...t)=>n.createImages&&n.createImages(...t))}," 新增陣列圖片 ")]))]),(0,i._)("div",et,[(0,i._)("div",st,[(0,i._)("label",it,[ot,(0,i.wy)((0,i._)("input",{id:"title","onUpdate:modelValue":e[4]||(e[4]=t=>a.tempProduct.title=t),type:"text",class:"form-control",placeholder:"請輸入姓名"},null,512),[[T.nr,a.tempProduct.title]])])]),(0,i._)("div",lt,[(0,i._)("div",at,[(0,i._)("label",nt,[dt,(0,i.wy)((0,i._)("select",{class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>a.tempProduct.category=t)},_t,512),[[T.bM,a.tempProduct.category]])])]),(0,i._)("div",gt,[(0,i._)("label",bt,[ft,(0,i.wy)((0,i._)("select",{class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>a.tempProduct.unit=t)},Pt,512),[[T.bM,a.tempProduct.unit]])])])]),Ut,(0,i._)("div",Dt,[(0,i._)("div",xt,[(0,i._)("label",Ct,[$t,(0,i.wy)((0,i._)("textarea",{id:"description","onUpdate:modelValue":e[7]||(e[7]=t=>a.tempProduct.description=t),type:"text",class:"form-control",placeholder:"教師口頭禪"},"\n                    ",512),[[T.nr,a.tempProduct.description]])])]),(0,i._)("div",Tt,[(0,i._)("label",At,[Lt,(0,i.wy)((0,i._)("textarea",{id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>a.tempProduct.content=t),type:"text",class:"form-control",placeholder:"想對學生說的話"},"\n                    ",512),[[T.nr,a.tempProduct.content]])])])]),(0,i._)("div",Mt,[(0,i._)("div",St,[(0,i._)("label",Bt,[Et,(0,i.wy)((0,i._)("input",{id:"is_enabled","onUpdate:modelValue":e[9]||(e[9]=t=>a.tempProduct.is_enabled=t),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[T.e8,a.tempProduct.is_enabled]])]),zt])])])])]),(0,i._)("div",Nt,[(0,i._)("div",{class:(0,o.C_)(["text-center",{"d-none":0==a.loading}])},jt,2),(0,i._)("button",{type:"button",class:(0,o.C_)(["btn btn-outline-danger me-5",{"d-none":1==a.loading}]),"data-bs-dismiss":"modal"}," 取消 ",2),(0,i._)("button",{type:"button",class:(0,o.C_)(["btn btn-secondary",{"d-none":1==a.loading}]),onClick:e[10]||(e[10]=t=>n.updateProduct(a.tempProduct))}," 確認 ",2)])])])],512)}var It=s(7424),Ht=s.n(It),qt={props:["product","isNew"],data(){return{tempProduct:{},status:"",modal:"",loading:!1}},watch:{product(){this.tempProduct=this.product},loading(){this.status=this.loading}},mounted(){this.modal=new(Ht())(this.$refs.modal)},methods:{createImages(){this.tempProduct.imagesUrl=[""]},updateProduct(t){this.loading=!0,t.checkBtn="0",this.tempProduct.origin_price=0,this.tempProduct.price=0;let e="https://vue3-course-api.hexschool.io/api/lulu_school/admin/product",s="post";t.id&&(e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/product/${t.id}`,s="put"),this.$http[s](e,{data:t}).then((t=>{t.data.success?(this.$emit("render"),this.loading=!1,this.hideModal()):(alert(t.data.message),this.loading=!1)})).catch((t=>{console.log(t)}))},openModal(){this.modal.show()},hideModal(){this.modal.hide()}}},Ot=s(3744);const Yt=(0,Ot.Z)(qt,[["render",Rt]]);var Zt=Yt,Ft=s(6576),Wt={data(){return{test:"",loadingStatus:"",products:[],product:{},pagination:{},isNew:!1}},components:{AddEdit:Zt,CheckDelete:Ft.Z},methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/products?page=${t}`;this.$http.get(e).then((t=>{t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.isNew=t,this.isNew?this.product={imagesUrl:[]}:this.product={...e},this.$refs.addedit.openModal()},checkDelete(t){this.product=t,this.$refs.check.openModal()},deleteProduct(t){this.loadingStatus=t;const e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/product/${t}`;this.$http.delete(e).then((t=>{t.data.success&&(this.getProducts(),this.loadingStatus="",this.$refs.check.hideModal())}))}},mounted(){this.getProducts()}};const Kt=(0,Ot.Z)(Wt,[["render",$]]);var Qt=Kt},6576:function(t,e,s){"use strict";s.d(e,{Z:function(){return D}});var i=s(6252),o=s(3577);const l={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",ref:"modal"},a={class:"modal-dialog modal-dialog-centered"},n={class:"modal-content"},d={class:"modal-header"},r={class:"modal-title",id:"staticBackdropLabel"},c=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},h={class:"d-flex align-items-center"},p=["src"],m={class:"ms-2 d-flex flex-column"},_={class:"mb-3"},g={class:"modal-footer"},b=(0,i._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),f={class:"d-flex justify-content-center"};function w(t,e,s,w,k,y){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",a,[(0,i._)("div",n,[(0,i._)("div",d,[(0,i._)("h5",r,(0,o.zw)(s.product.title),1),c]),(0,i._)("div",u,[(0,i._)("div",h,[(0,i._)("img",{src:s.product.imageUrl,alt:"",style:{width:"300px",height:"200px"}},null,8,p),(0,i._)("div",m,[(0,i._)("p",_,"描述："+(0,o.zw)(s.product.content),1),(0,i._)("p",null,"說明："+(0,o.zw)(s.product.description),1)])])]),(0,i._)("div",g,[b,(0,i._)("div",f,[(0,i._)("div",{class:(0,o.C_)(["spinner-border text-danger mb-1",{"d-none":k.status!==s.product.id}]),role:"status"},null,2),(0,i._)("button",{type:"button",class:(0,o.C_)(["btn btn-danger",{"d-none":k.status==s.product.id}]),onClick:e[0]||(e[0]=e=>t.$emit("delete",s.product.id))}," 刪除 ",2)])])])])],512)}var k=s(7424),y=s.n(k),v={props:["product","loading"],watch:{loading(){this.status=this.loading}},data(){return{modal:"",status:""}},mounted(){this.modal=new(y())(this.$refs.modal)},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}}},P=s(3744);const U=(0,P.Z)(v,[["render",w]]);var D=U}}]);
//# sourceMappingURL=569.7d77f535.js.map