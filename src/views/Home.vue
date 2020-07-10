<template>
 <div class="container">
    <div class="row hero py-5">
    <div class="col-md-12">
      <div class="row align-middle py-5">
        <div class="col-md">
          <h1 class="hero-title">MACHINES FOR HIRE TO SUIT YOUR EVERY NEED</h1>
        </div>
        <div class="col-md"></div>
      </div>
    </div>
  </div>
  <Slider/>
 </div>
</template>

<script>
// @ is an alias to /src
import Sliderone from '../components/Slider/Sliderone'
export default {
  name: 'Home',
  title: 'Meopham plant hire.co.uk',
  components : {
    Slider : Sliderone
  }
}
</script>
<style lang="css">
.hero{
  background-image: url('https://static.wixstatic.com/media/86cc0e_4c46c38cd33f44cda159333bc0d45926~mv2.jpg/v1/crop/x_3,y_0,w_1514,h_912/fill/w_1279,h_770,al_c,q_85,usm_0.66_1.00_0.01/21389159_491364504531428_1316320007_o_jp.webp');
  background-repeat: no-repeat;
  background-size: 100% auto;

}
.hero-title{
  font-size: 5vw;
  font-weight: 700;
}
.jcb-image{
  width: 400px!important;
  height: 300px!important;
  object-fit: contain;
}
.button-prev::after, .button-next::after{
  color: #000!important;
}
</style>
