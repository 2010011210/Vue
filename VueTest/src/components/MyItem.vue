<template>
    <li>
        <input type="checkbox" :checked="todoObj.done">
        <span>{{todoObj.name}}</span>

        <button @click="remove">删除</button>
    </li>
</template>

<script>
export default {
    name:"MyItem",
    data(){
        return {
            name:"item",
        }
    },
    props:['todoObj','deleteTodo'],
    methods:
    {
        remove()
        {
            console.log(this.todoObj.id)
            this.deleteTodo(this.todoObj.id);
        }

    },
    computed:{

    },
    watch:{

    }
    // ,
    // mounted()
    // {
    //     console.log('todoObj',this.todoObj);
    // }
}

</script>

<style>
li{
    width: 400px;
}
/* li:hover button{
    display: block;
} */
</style>