<template>
  <section class="p-lg-7 p-3 pt-7">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">常</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">見</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">問</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">題</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- bg -->
  <section
    class="bgSet mb-7"
    :style="{ 'background-image': 'url(' + require('@/assets/images/charm-02.jpg') + ')' }"
  ></section>
  <section class="p-2 p-sm-7">
    <div class="card mb-5">
      <div
        class="card-header btn text-start p-3 d-flex align-items-center"
        data-bs-toggle="collapse"
        data-bs-target="#qa0"
      >
        <i class="fab fa-quora text-info h2 me-4"></i>
        校長為什麼是隻貓？
      </div>
      <div class="collapse" id="qa0">
        <div class="card card-body">
          <div class="d-flex align-items-center">
            <i class="fas fa-comment-dots text-info h2 me-4"></i>
            呼嚕貓校長有雙博士學位。是不可質疑的！
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-5">
      <div
        class="card-header btn text-start p-3 d-flex align-items-center"
        data-bs-toggle="collapse"
        data-bs-target="#qa1"
      >
        <i class="fab fa-quora text-info h2 me-4"></i>
        我只有高中畢業，能夠參加入學考試嗎？
      </div>
      <div class="collapse" id="qa1">
        <div class="card card-body">
          <div class="d-flex align-items-center">
            <i class="fas fa-comment-dots text-info h2 me-4"></i>
            如果你在入學當年的 9 月 1 日之前年滿 18 歲，則可以參加考試。
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-5">
      <div
        class="card-header btn text-start p-3 d-flex align-items-center"
        data-bs-toggle="collapse"
        data-bs-target="#qa2"
      >
        <i class="fab fa-quora text-info h2 me-4"></i>
        入學後能夠換科系嗎？
      </div>
      <div class="collapse" id="qa2">
        <div class="card card-body">
          <div class="d-flex align-items-center">
            <i class="fas fa-comment-dots text-info h2 me-4"></i>
            不能。由於將在兩年的有限時間內獲得專業知識和技能，因此我們將在入學後開設各個領域的專業課程。因此，在選擇前請謹慎選擇。
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-5">
      <div
        class="card-header btn text-start p-3 d-flex align-items-center"
        data-bs-toggle="collapse"
        data-bs-target="#qa3"
      >
        <i class="fab fa-quora text-info h2 me-4"></i>
        有獎學金制度嗎？
      </div>
      <div class="collapse" id="qa3">
        <div class="card card-body">
          <div class="d-flex align-items-center">
            <i class="fas fa-comment-dots text-info h2 me-4"></i>
            有。我們為有才華和經濟困難的人提供菁英貓貓獎學金制度。此外，苗栗國公民服務組織和公共獎學金制度也適用。
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-5">
      <div
        class="card-header btn text-start p-3 d-flex align-items-center"
        data-bs-toggle="collapse"
        data-bs-target="#qa4"
      >
        <i class="fab fa-quora text-info h2 me-4"></i>
        有經濟上的困難，能夠打工嗎？
      </div>
      <div class="collapse" id="qa4">
        <div class="card card-body">
          <div class="d-flex align-items-center">
            <i class="fas fa-comment-dots text-info h2 me-4"></i>
            校內有提供許多打工機會，我們禁止校外打工，如果經濟困難可以參考學費方案。<router-link
              to="/front/school/fee"
              >點選此處</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-center p-5 mb-4">
    <router-link
      to="/"
      class="text-decoration-none text-dark"
      data-aos="animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1 magnifyText"></i>
    </router-link>
  </section>
</template>

<style scoped>
.bgSet {
    height: 40vh;
    width: 100%;
    background-position: center center;
    background-size: cover;
}
</style>
