<template>
    <div>
        <div>{{name}}</div>
        <ul>
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :deleteTodo="deleteTodo"></MyItem>
        </ul>
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
import bus from '../event-bus.js'

export default {
    name:"MyList",
    components:{ MyItem },
    data(){
        return {
            name:"MyList",
        }
    },
    props:['todos','deleteTodo'],
    methods:
    {

    },
    computed:{

    },
    watch:{

    }
    //,
    // mounted:{

    // }
}

</script>

<style>

</style>