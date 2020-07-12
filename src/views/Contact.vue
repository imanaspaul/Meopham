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
            <h4>Feel free to contact us</h4>
          <form
            action="https://formspree.io/myynbzbk"
            method="POST"
            >

                <input type="text" name="_replyto" placeholder="email" class="form-control mb-2">

                <textarea name="message" placeholder="messages" class="form-control mb-2"></textarea>
  

            <!-- your other form fields go here -->

            <button type="submit" class="form-control btn btn-warning">Send</button>
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
