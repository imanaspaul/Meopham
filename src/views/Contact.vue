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
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
            <input type="email" class="form-control" name="email" id="email" placeholder="email">
            <textarea name="message" class="form-control" id="message" cols="30" rows="10"></textarea>
            <button>Submit</button>
        </form>
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
