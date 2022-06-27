<template>
  <section class="p-xl-7 px-sm-4 px-2 bg-white py-7">
    <h2 class="mb-sm-5 mb-3 d-flex">
      <span style="animation-delay: calc(1s * 0.1)" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i
      ></span>
      <span style="animation-delay: calc(1s * 0.2)" data-aos="animate__rotateInDownLeft">5</span>
      <span style="animation-delay: calc(1s * 0.3)" data-aos="animate__rotateInDownLeft">大</span>
      <span style="animation-delay: calc(1s * 0.4)" data-aos="animate__rotateInDownLeft">部</span>
      <span style="animation-delay: calc(1s * 0.5)" data-aos="animate__rotateInDownLeft">門</span>
      <span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">介</span>
      <span style="animation-delay: calc(1s * 0.7)" data-aos="animate__rotateInDownLeft">紹</span>
    </h2>
    <!-- 平板電腦 一般 -->
    <div class="d-none d-lg-block">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col-6 col-lg-4">
          <div data-aos="animate__fadeInDown">
            <h6 class="mb-1 text-secondary">成為即戰力</h6>
            <h3 class="font-weight-bolder mb-2">ＩＴ部門</h3>
            <div class="card">
              <div style="background: linear-gradient(90deg, #ed3131, #ff744f); height: 4px"></div>
              <img
                src="https://www.denbi.ac.jp/assets/img/top/course_ie.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  業界是如何運作的呢！？讓我們快速幫助你，透過最短的時間，突破自身淺能120%！
                </p>
              </div>
            </div>
            <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
          </div>
        </div>
        <div class="col-6 col-lg-4 pt-lg-6">
          <div data-aos="animate__fadeInDown">
            <h6 class="mb-1 text-secondary">如何把點子實作出來</h6>
            <h3 class="font-weight-bolder mb-2">設計部門</h3>
            <div class="card">
              <div style="background: linear-gradient(90deg, #fc841a, #fab82a); height: 4px"></div>
              <img
                src="https://www.denbi.ac.jp/assets/img/top/course_dc.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  你是否時常有不錯的想法，但卻很難實踐出來呢？別擔心～我們設計部門，能夠帶領你完成一件構思的想法！
              讓你的點子不在是天馬行空，現在加入我們就贈送3D印表機！
                </p>
              </div>
            </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
          </div>
        </div>
        <div class="col-6 col-lg-4 pt-lg-8">
          <div data-aos="animate__fadeInDown">
            <h6 class="mb-1 text-secondary">美美噠</h6>
            <h3 class="font-weight-bolder mb-2">時尚部門</h3>
            <div class="card">
              <div style="background: linear-gradient(90deg, #4ccb43, #9fd628); height: 4px"></div>
              <img
                src="https://www.denbi.ac.jp/assets/img/top/course_ib.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  我們已經掌握了能夠勝任各種職業的在職成年人的高水平基本技能，就業率100%。美妝部落客、新娘秘書、客戶服務/銷售......你選擇哪個工作取決於你！
                </p>
              </div>
            </div>
            <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
              <router-link
                to="/front/subject"
                class="text-decoration-none d-flex align-items-center
                 justify-content-between h4 py-3 linkSit m-0 px-3"
                ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
              ></router-link>
            </p>
          </div>
        </div>
        <div class="col-6 col-lg-4">
            <div data-aos="animate__fadeInUp">
                <h6 class="mb-1 text-secondary">理想情人的職業</h6>
          <h3 class="font-weight-bolder mb-2">公職部門</h3>
          <div class="card">
            <div style="background: linear-gradient(90deg, #59c6c0, #88ddf5); height: 4px"></div>
            <img
              src="https://www.denbi.ac.jp/assets/img/top/course_sb.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                經濟衰退中 「鐵飯碗」順勢拔頭籌！
                知名人力銀行與社群平台Dcard合作，針對「理想情人的職業」進行調查，結果發現今年無論女性或男性年輕上班族，心目中理想情人的職業排行冠軍都是「公務員」。
              </p>
            </div>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
              <router-link
                to="/front/subject"
                class="text-decoration-none d-flex align-items-center
                 justify-content-between h4 py-3 linkSit m-0 px-3"
                ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
              ></router-link>
            </p>
            </div>
        </div>
        <div class="col-6 col-lg-4 pt-lg-6">
            <div data-aos="animate__fadeInUp">
                <h6 class="mb-1 text-secondary">和心愛的另一半，被家庭所需要</h6>
          <h3 class="font-weight-bolder mb-2">家庭部門</h3>
          <div class="card">
            <div style="background: linear-gradient(90deg, #7749a7, #b48ad4); height: 4px"></div>
            <img
              src="https://www.denbi.ac.jp/assets/img/top/course_ij.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                在忙碌的現代，我們很難去學習，怎麼成為一個好丈夫、好太太、好的父母親，在台灣高失婚率的年代下。讓我們幫助你們成為人人嚮往的幸福家庭吧！
              </p>
            </div>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
              <router-link
                to="/front/subject"
                class="text-decoration-none d-flex align-items-center
                 justify-content-between h4 py-3 linkSit m-0 px-3"
                ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
              ></router-link>
            </p>
            </div>
        </div>
      </div>
    </div>
    <!-- 手機模式幻燈片 -->
    <swiper
      :slides-per-view="1.3"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="d-lg-none"
    >
      <swiper-slide>
        <h6 class="mb-1 text-secondary">成為即戰力</h6>
        <h3 class="font-weight-bolder mb-2">ＩＴ部門</h3>
        <div class="card border-0">
          <div style="background: linear-gradient(90deg, #ed3131, #ff744f); height: 4px"></div>
          <img
            src="https://www.denbi.ac.jp/assets/img/top/course_ie.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              業界是如何運作的呢！？讓我們快速幫助你，透過最短的時間，突破自身淺能120%！
            </p>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h6 class="mb-1 text-secondary">生活美學你我他</h6>
        <h3 class="font-weight-bolder mb-2">設計部門</h3>
        <div class="card border-0">
          <div style="background: linear-gradient(90deg, #fc841a, #fab82a); height: 4px"></div>
          <img
            src="https://www.denbi.ac.jp/assets/img/top/course_dc.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              你是否時常有不錯的想法，但卻很難實踐出來呢？別擔心～我們設計部門，能夠帶領你完成一件構思的想法！
              讓你的點子不在是天馬行空，現在加入我們就贈送3D印表機！
            </p>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h6 class="mb-1 text-secondary">美美達</h6>
        <h3 class="font-weight-bolder mb-2">時尚部門</h3>
        <div class="card border-0">
          <div style="background: linear-gradient(90deg, #4ccb43, #9fd628); height: 4px"></div>
          <img
            src="https://www.denbi.ac.jp/assets/img/top/course_ib.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              我們已經掌握了能夠勝任各種職業的在職成年人的高水平基本技能，就業率100%。美妝部落客、新娘秘書、客戶服務/銷售......你選擇哪個工作取決於你！
            </p>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h6 class="mb-1 text-secondary">理想情人的職業</h6>
        <h3 class="font-weight-bolder mb-2">公職部門</h3>
        <div class="card border-0">
          <div style="background: linear-gradient(90deg, #59c6c0, #88ddf5); height: 4px"></div>
          <img
            src="https://www.denbi.ac.jp/assets/img/top/course_sb.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              經濟衰退中 「鐵飯碗」順勢拔頭籌！
              知名人力銀行與社群平台Dcard合作，針對「理想情人的職業」進行調查，結果發現今年無論女性或男性年輕上班族，心目中理想情人的職業排行冠軍都是「公務員」。
            </p>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h6 class="mb-1 text-secondary">被所需要的人所需要</h6>
        <h3 class="font-weight-bolder mb-2">家庭部門</h3>
        <div class="card border-0">
          <div style="background: linear-gradient(90deg, #7749a7, #b48ad4); height: 4px"></div>
          <img
            src="https://www.denbi.ac.jp/assets/img/top/course_ij.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              在忙碌的現代，我們很難去學習，怎麼成為一個好丈夫、好太太、好的父母親，在台灣高失婚率的年代下。讓我們幫助你們成為人人嚮往的幸福家庭吧！
            </p>
          </div>
          <p style="border-bottom: solid 1px rgba(85, 85, 85, 0.2)">
            <router-link
              to="/front/subject"
              class="text-decoration-none d-flex align-items-center justify-content-between
              h4 py-3 linkSit m-0 px-3"
              ><span class="">瞭解更多</span><i class="fa-solid fa-caret-right"></i
            ></router-link>
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>
.linkSit {
  color: #555555;
}
.linkSit:hover {
  background: rgba(85, 85, 85, 0.2);
  color: #000;
}
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
