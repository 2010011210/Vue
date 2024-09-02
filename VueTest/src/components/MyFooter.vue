<template>
    <div>
        <div>{{name}}</div>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script>
export default {
    name:"MyFooter",
    data(){
        return {
            name:"footer",
        }
    },
    props:[],
    methods:
    {
        add()
        {
            console.log('add');
            //this.$store.dispatch('jia',6);
            this.$store.commit('JIA',6);
        },
        minus()
        {
            console.log('minus');
            this.$store.dispatch('jian');
        }

    },
    computed:{

    },
    watch:{


    }
}

</script>

<style>

</style>