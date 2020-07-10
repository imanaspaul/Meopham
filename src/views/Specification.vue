<template>
            <div class="container   text-dark">
            <div class="row bg-white  py-5 text-center" v-if="car">
            <h1>{{car.title}} Specification</h1>
            <h3>{{car.name}}</h3>
            <div class="col-md-12">
                <div v-for="(img,i) in car.details" :key="i">
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
    name: "specification",
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
    }
}
</script>