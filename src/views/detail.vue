<template>
    <div class="detail">
        <header>
            <h1>详情</h1>
            <a class="goback-btn icon-chevron-left" @click="goback"></a>
        </header>
        <div class="cont">
            <h4>
                {{$route.params.item.name}}
                <span class="price">￥{{$route.params.item.price}}</span>
            </h4>
            <button class="plus-btn icon-shopping-cart" :class='$route.params.item.checked? "ac":""' :disabled='$route.params.item.checked' @click="order()"></button>
        </div>
        
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(src,index) in $route.params.item.slide' :key="index">
                    <img class="slide-img" :src="src"/>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="describe">
            {{$route.params.item.describe}}
        </div>
    </div>
</template>
<script>
import swiper from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
    name:'detail',
    data(){
        return{
            shopping_cart:[]
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        order(){
            this.shopping_cart.push({
                id:this.$route.params.item.id,
                name:this.$route.params.item.name,
                price:this.$route.params.item.price,
                num:1
            })
            this.$route.params.item.checked = true
        }
    },
    created(){
        this.shopping_cart = this.$store.state.shopping_cart
    },
    mounted(){
        let mySwiper = new swiper('.swiper-container',{
            autoplay:{
                delay:2500,
                disableOnInteraction:false,
            },
            pagination:{
                el:'.swiper-pagination'
            }
        })
        mySwiper
    }
}
</script>