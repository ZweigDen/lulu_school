<template>
  <section class="bg-white pb-sm-7 pt-3">
    <div class="d-flex justify-content-center">
      <a href="https://www.facebook.com/chieh.s.teng" class="communitySit d-block"
        ><i class="fa-brands fa-facebook-f h4"></i>
        <p class="d-none">FB</p></a
      >
      <a href="https://www.facebook.com/chieh.s.teng" class="communitySit d-block mx-5"
        ><i class="fa-brands fa-instagram h4"></i>
        <p class="d-none">IG</p></a
      >
      <a href="https://www.facebook.com/chieh.s.teng" class="communitySit d-block"
        ><i class="fa-brands fa-line h4"></i>
        <p class="d-none">Line</p></a
      >
    </div>
  </section>
</template>

<style>
.communitySit {
  width: 3rem;
  height: 3rem;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  position: relative;
}
.communitySit i {
  color: #212529;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.communitySit:hover {
  border: 1px solid #212529;
}
</style>
