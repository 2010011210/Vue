<template>
    <div>
        <div>{{name}}</div>
        <div>{{address}}</div>
        <div>{{schoolName}}</div>
        <h1 v-if="isShowCompany">{{ name }}</h1>

    </div>
</template>

<script>
export default {
    name:"School",
    data(){
        return {
            name:"School",
            
        }
    },
    props:[],
    methods:
    {

    },
    computed:{

    },
    watch:{


    }
}

</script>

<style>

</style>