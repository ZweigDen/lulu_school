"use strict";(self["webpackChunklulu_school"]=self["webpackChunklulu_school"]||[]).push([[975],{6975:function(a,t,e){e.r(t),e.d(t,{default:function(){return A}});var s=e(6252),i=e(3577);const l=a=>((0,s.dD)("data-v-1746da21"),a=a(),(0,s.Cn)(),a),r=(0,s.uE)('<section class="p-sm-7 pt-7 p-5" data-v-1746da21><p class="h1 d-flex" data-v-1746da21><span style="animation-delay:calc(1s * 0.1);" data-aos="animate__rotateInDownLeft" data-v-1746da21><i class="fas fa-exclamation" data-v-1746da21></i></span><span style="animation-delay:calc(1s * 0.2);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｎ</span><span style="animation-delay:calc(1s * 0.3);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｅ</span><span style="animation-delay:calc(1s * 0.4);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｗ</span><span style="animation-delay:calc(1s * 0.5);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｓ</span><span style="animation-delay:calc(1s * 0.6);" data-aos="animate__rotateInDownLeft" data-v-1746da21>＆</span><span style="animation-delay:calc(1s * 0.6);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｂ</span><span style="animation-delay:calc(1s * 0.6);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｌ</span><span style="animation-delay:calc(1s * 0.6);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｏ</span><span style="animation-delay:calc(1s * 0.6);" data-aos="animate__rotateInDownLeft" data-v-1746da21>Ｇ</span></p></section>',1),n={class:"p-sm-7 p-5",style:{background:"#f4f4f4"}},o={class:"bg-white rounded-3 shadow-sm text-center p-5"},c={class:"mb-4 d-flex justify-content-center align-items-center"},d={class:"text-secondary"},p={class:"mb-5 border-bottom pb-6"},u={class:"d-flex justify-content-center mb-5"},h=["src"],m={class:"border-bottom mb-5"},_=l((()=>(0,s._)("div",{class:"hvr-icon-float-in text-dark text-center"},[(0,s._)("h3",{class:"me-1"},"返回文章列表"),(0,s._)("i",{class:"fa-solid fa-circle-arrow-left h3 hvr-icon"})],-1))),w={class:"p-5"},f={class:"card swiperHover"},v=["src"],y={class:"card-body"},b={class:"card-text text-dark"};function g(a,t,e,l,g,x){const k=(0,s.up)("router-link"),D=(0,s.up)("swiper-slide"),I=(0,s.up)("swiper");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("section",n,[(0,s._)("div",o,[(0,s._)("div",null,[(0,s._)("div",c,[(0,s._)("h4",{class:(0,i.C_)(["me-2 border p-1 px-2 rounded-pill",{"text-warning border-warning":"閒聊"===g.article.author,"text-success border-success":"消息"===g.article.author,"text-danger border-danger":"重要"===g.article.author,"text-primary border-primary":"一般"===g.article.author}])},(0,i.zw)(g.article.author),3),(0,s._)("h5",d,(0,i.zw)(g.article.create_at),1)]),(0,s._)("h2",p,(0,i.zw)(g.article.title),1),(0,s._)("div",u,[(0,s._)("img",{src:g.article.image,alt:"",style:{width:"70%"}},null,8,h)]),(0,s._)("h4",m,(0,i.zw)(g.article.content),1),(0,s.Wm)(k,{to:"/front/articles",class:"text-decoration-none"},{default:(0,s.w5)((()=>[_])),_:1})])])]),(0,s._)("section",w,[(0,s.Wm)(I,{"slides-per-view":1.3,"space-between":20,freeMode:!0,modules:l.modules,breakpoints:g.swiperOptions.breakpoints,class:"mySwiper ps-md-5 ps-3"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.articles,(a=>((0,s.wg)(),(0,s.j4)(D,{key:a.id,class:"border-bottom",onClick:t=>x.goToArticle(a)},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{to:"/",class:"text-decoration-none"},{default:(0,s.w5)((()=>[(0,s._)("div",f,[(0,s._)("img",{src:a.image,class:"card-img-top",alt:"...",style:{"border-radius":"15px"}},null,8,v),(0,s._)("div",y,[(0,s._)("p",b,(0,i.zw)(a.title),1)])])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["slides-per-view","modules","breakpoints"])])],64)}var x=e(3181),k=e(1911),D={data(){return{id:"",article:"",articles:[],filterData:[],swiperOptions:{breakpoints:{767:{slidesPerView:3.2,spaceBetween:20},1024:{slidesPerView:4.3,spaceBetween:35}}}}},components:{Swiper:x.tq,SwiperSlide:x.o5},setup(){return{modules:[k.Rv]}},watch:{id(){console.log(this.id)}},methods:{getArticle(){const a=`https://vue3-course-api.hexschool.io/api/lulu_school/article/${this.id}`;this.$http.get(a).then((a=>{a.data.success&&(this.article=a.data.article,this.getArticles())}))},getArticles(){const a="https://vue3-course-api.hexschool.io/api/lulu_school/articles";this.$http.get(a).then((a=>{a.data.success&&(this.articles=a.data.articles,this.filterArticles())}))},goToArticle(a){this.$router.push(`/front/article/${a.id}`)},filterArticles(){this.articles.forEach((a=>{a.author===this.article.author&&this.filterData.push(a)}))}},created(){this.id=this.$route.params.id,this.getArticle()}},I=e(3744);const L=(0,I.Z)(D,[["render",g],["__scopeId","data-v-1746da21"]]);var A=L}}]);
//# sourceMappingURL=975.e653bc4c.js.map