<template>
    <div class="container">
        <div class="row py-5 bg-white text-dark">
        <Mapone/>
        <div class="col-md-6 p-5">
            <p>Unit 2 Heron Hill Lane Culverstone Meopham DA13 0QL</p>
            <p>Mob: 07718915718   Tel:   01474 812749</p>
            <p>joepayne123@hotmail.com</p>
        </div>
        <div class="col-md-6 p-5">
          <input type="text" name="name" id="" placeholder="name" class="form-control mb-5">
          <input type="email" name="email" id="" placeholder="email" class="form-control mb-5">
          <input type="text" name="subject" id="" placeholder="subject" class="form-control mb-5">
          <textarea name="message" id="message" cols="30" rows="10" class="form-control mb-5"></textarea>
          <button class="btn btn-warning">Submit</button>
        </div>
        </div>
    </div>
</template>

<script>
import Mapone from '../components/Maps/Mapone'

export default {
    components : {
        Mapone
    }
}
</script>
