<template>
            <div class="container   text-dark">
            <div class="row bg-white  py-5 text-center" v-if="car">
            <h1>{{car.title}}</h1>
            <h3>{{car.name}}</h3>
           <div class="col-md-6 offset-md-3 py-4">
                <div class="row">
                <div class="col-md-6">
                      SPECIFICATIONS <br>
                    <button class="btn btn-warning my-2" @click="gotoSpeci(car.id)">
                        Click here to view
                    </button>
                </div>
                <div class="col-md-6">
                      PDF Technical Specification <br>
                   <a class="btn btn-warning my-2" :href="car.pdf" target="_blank">
                        Click here to view
                    </a>
                </div>
            </div>
          
           </div>
             <div class="col-md-12">
                <div v-for="(img,i) in car.images" :key="i">
                    <transition name="fade">
                    <img :src="img" alt="i" class="img-fluid py-3">
                    </transition>
                </div>
            </div>
        </div>
            </div>


</template>
<script>
import cars from '../cars'
export default {
    name: "cardetails",
    title: `Machines's details | Meopham plant hire.co.uk`,
    data(){
        return{
            car: null
        }
    },
    created(){
       for (let i = 0; i < cars.length; i++) {
           if(cars[i].id == this.$route.params.id){
                this.car = cars[i]
            } 
       }
    },
    methods : {
        gotoSpeci(number){
            this.$router.push(`/specification/${number}`)
        }
    }
}
</script>