<template>
<swiper  class="swiper  slide row py-5" :options="swiperOption">
    <swiper-slide class="col-md-12  py-5 bg-white">
      <div class="row py-5 px-5">
        <div class="col-md-6">
          <h1 class="text-dark mb-5 font-weight-bold">MACHINE RENTALS </h1>
          <p class="text-dark mb-4">MINI EXCAVATORS</p>
          <button type="button" class="btn btn-outline-dark rounded">Click Here</button>
        </div>
        <div class="col-md-6">
          <img src="https://static.wixstatic.com/media/86cc0e_bf01295c101640eba5cba740f49381ae~mv2.png/v1/crop/x_2,y_0,w_898,h_600/fill/w_648,h_433,al_c,q_85,usm_0.66_1.00_0.01/165_addon_b.webp" alt="" class="img-fluid jcb-image" width="400px">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="col-md-12  py-5 bg-white">
      <div class="row py-5 px-5">
        <div class="col-md-6">
          <h1 class="text-dark mb-5 font-weight-bold">MACHINE RENTALS </h1>
          <p class="text-dark mb-4">MINI EXCAVATORS</p>
          <button type="button" class="btn btn-outline-dark rounded">Click Here</button>
        </div>
        <div class="col-md-6">
          <img src="https://static.wixstatic.com/media/86cc0e_978331d9e9334fab95283db811feed92~mv2.png/v1/crop/x_31,y_7,w_300,h_243/fill/w_420,h_340,al_c,lg_1,q_85/491_flower_s.webp" alt="" class="img-fluid jcb-image" width="400px" height="300px">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="col-md-12  py-5 bg-white">
      <div class="row py-5 px-5">
        <div class="col-md-6">
          <h1 class="text-dark mb-5 font-weight-bold">MACHINE RENTALS </h1>
          <p class="text-dark mb-4">MINI EXCAVATORS</p>
          <button type="button" class="btn btn-outline-dark rounded">Click Here</button>
        </div>
        <div class="col-md-6">
          <img src="https://static.wixstatic.com/media/86cc0e_0a283e49ac2c4f4e8c66f08a13a0eb78~mv2_d_1500_1311_s_2.png/v1/fill/w_639,h_559,al_c,q_85,usm_0.66_1.00_0.01/site-dumper_edited.webp" alt="" class="img-fluid jcb-image" width="400px">
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide , directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name: 'slider',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 100,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>
<style lang="css">

</style>
