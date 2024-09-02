<template>
    <div>
        <div>count:{{$store.state.count}}</div>
        <div>length:{{$store.state.length}}</div>
        <MyHeader :receive="receive"></MyHeader>
        <MyList :todos="todos" :deleteTodo="deleteTodo"></MyList>
        <MyFooter></MyFooter>
    </div>>
</template>

<script>
import MyFooter from './MyFooter.vue'
import MyHeader from './MyHeader.vue'
import MyList from './MyList.vue'
import { getCurrentInstance } from 'vue'
const cxt = getCurrentInstance();
console.log('cxt',cxt);
const bus = cxt?.proxy.$EventBus;
console.log('bus',bus);

export default {
    name:"TodoListDemo",
    components:{ MyFooter, MyHeader, MyList},
    data(){
        return {
            name:"TodoListDemo",
            todos:[
                {name:'汽车', id:1, done: true},
                {name:'飞机', id:2, done: false},
                {name:'军舰', id:3, done: true}
            ]
        }
    },
    methods:
    {
        receive(value)
        {
            console.log('store',this);
            console.log('store2',this.$store);
            console.log('store3',this.$store.state);
            console.log('storeCount',this.$store.state.count);
            console.log(value);
            this.todos.push(value);
        },
        deleteTodo(id)
        {
            console.log('store',this);
            console.log('store2',this.$store);
            console.log('store3',this.$store.state);
            console.log('storeCount',this.$store.state.count);
            console.log('deletedTodo');
            this.todos = this.todos.filter((todo) => {return todo.id != id});
            console.log('todos', this.todos);
        }
    },
    computed:{

    },
    watch:{

    }
    // ,
    // mounted()
    // {
    //     debugger;
    //     bus.on('receive', (value)=>{
    //         console.log(value);
    //         this.todos.push(value);
    //     });

    //     bus.on('deleteTodo', (id)=>{
    //         console.log('deletedTodo');
    //         this.todos = this.todos.filter((todo) => {return todo.id != id});
    //         console.log('todos', this.todos);
    //     });
    // }
}

</script>

<style>

</style>