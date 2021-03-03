<template>
    <div class="list">
        <header>
            <h1>搜索结果</h1>
            <router-link to="/home" class="goback-btn icon-chevron-left"></router-link>
            <span class="total">共{{search_list.length}}条</span>
        </header>
        <ul id="scrollMenu" class="good-list">
            <li v-for='(item,index) in search_list' :key='index'>
            <img :src="item.img" @click="show_detail(item)"/>
            <h4>{{item.name}}</h4>
            <p>{{item.description}}</p>
            <strong>￥{{item.price}}</strong>
            <button @click="point(item)" :class='["pointer-btn",item.checked?"ac":""]' :disabled='item.checked'><b>点餐</b><i>已点</i></button></li>
        </ul>
        <div style="text-align=center" v-if="search_list.length==0">没有搜到结果</div>
    </div>
</template>
<script>
export default {
    name:'list',
    data(){
        return{
            shopping_cart:[],
            search_list:[],
            keyword:'',
            goods:[]
        }
    },
    created(){
        this.keyword = this.$store.state.keyword
        this.goods = this.$store.state.goods
        this.shopping_cart = this.$store.state.shopping_cart
        for(let key in this.goods){
            if(this.goods[key].name.includes(this.keyword) && this.keyword != ''){
                this.search_list.push(this.goods[key])
            }
        }
    },
    methods:{
        point(item) {
            this.shopping_cart.push({
                id:item.id,
                name:item.name,
                price:item.price,
                num:1
            })
            this.$store.commit('update_shopping_cart',this.shopping_cart)
        }
    },
}
</script>