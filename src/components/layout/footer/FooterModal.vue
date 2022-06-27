<template>
  <section class="bg-black px-lg-7 px-sm-4 p-4 text-white footerLink">
    <div class="mb-4">
      <p class="h4">幼獸未來創造學院</p>
      <h3>呼嚕貓教育學校</h3>
    </div>
    <div
      class="d-md-flex justify-content-between align-items-center
      border-bottom border-secondary pb-4"
    >
      <div class="">
        <p class="text-secondary m-0">
          〒360 苗栗國中央地區 ｜ 大麻喵喵街27-8 (<a
            href="https://www.google.com.tw/maps/place/苗栗車站/@24.57002,120.8201543,17z/data=!3m1!4b1!4m5!3m4!1s0x3469ac120c3f77a1:0x8998154fa69bd5e!8m2!3d24.57002!4d120.822343?hl=zh-TW"
            >Google Map <i class="fa-solid fa-arrow-up-right-from-square"></i></a
          >)
        </p>
        <p class="text-secondary">TEL：0968-911-231 / FAX：0968-911-231</p>
      </div>
      <div class="d-flex justify-content-center">
        <a href="https://www.facebook.com/chieh.s.teng" class="d-block footerSit"
          ><i class="fa-brands fa-facebook-f h5"></i>
          <p class="d-none">FB</p></a
        >
        <a href="https://www.facebook.com/chieh.s.teng" class="d-block mx-4 footerSit"
          ><i class="fa-brands fa-instagram h5"></i>
          <p class="d-none">IG</p></a
        >
        <a href="https://www.facebook.com/chieh.s.teng" class="d-block footerSit"
          ><i class="fa-brands fa-line h5"></i>
          <p class="d-none">Line</p></a
        >
      </div>
    </div>
  </section>
  <section class="bg-black px-lg-7 px-sm-4 p-4 text-white otherLink
  d-lg-flex justify-content-between">
    <ul class="list-unstyled d-flex flex-wrap justify-content-between">
      <li>
        <a class="text-decoration-none" href="#"
          ><i class="fa-solid fa-dumbbell me-1"></i>LULU體態教室</a
        >
      </li>
      <li class="ms-lg-5 mb-3 mb-sm-0">
        <a class="text-decoration-none" href="#"><i class="fa-solid fa-caravan me-1"></i>LU營趣</a>
      </li>
      <li class="ms-lg-5">
        <a class="text-decoration-none" href="#"><i class="fa-solid fa-tree me-1"></i>植日森</a>
      </li>
      <li class="ms-lg-5">
        <a class="text-decoration-none" href="#"><i class="fa-solid fa-handshake me-1"></i>廠商業配</a>
      </li>
    </ul>
    <div class="text-secondary">&copy; 2022 LULU ALL RIGHTS RESERVED</div>
  </section>
</template>

<style scoped>
.footerLink a {
  color: #6c757d;
}
.footerLink a:hover {
  color: #fff;
}
.footerSit {
  width: 3rem;
  height: 3rem;
  border: 1px solid #6c757d;
  border-radius: 50%;
  position: relative;
}
.footerSit i {
  color: #6c757d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.footerSit:hover {
  border: 1px solid #fff;
}
.footerSit:hover i {
  color: #fff;
}
/* 其他連結 */
.otherLink a {
    color: #6c757d;
}
.otherLink a:hover {
    color:#fff;
}
</style>
