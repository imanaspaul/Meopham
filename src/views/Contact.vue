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
          <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
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
