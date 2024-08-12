<template>
    <div>
        <h1 v-if="isShowCompany">{{ name }}</h1>
        <input v-model="count" />
        <button @click="add">Add</button>
    </div>
</template>

<script>
export default {
    name:"Company",
    data(){
        return {
            name:"BYD",
            count: 0
        }
    },
    methods:
    {
        add()
        {
            this.count++;
            console.log("触发add方法")
        }
    },
    computed:{
        isShowCompany()
        {
            return this.count == 3;
        }
    }
}

</script>

<style>

</style>