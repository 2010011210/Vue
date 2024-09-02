<template>
    <div>
        <div>{{name}}</div>
        <input v-model="keyWord" placeholder="请输入名称" @keyup.enter="add">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name:"MyHeader",
    data(){
        return {
            name:"header",
            keyWord: ""
        }
    },
    props:['receive'],
    methods:
    {
        add()
        {
            if(!this.keyWord.trim()){
                alert('输入内容为空');
                return;
            }
            const todoObj = {id:nanoid(), name: this.keyWord, done:false };
            this.receive(todoObj);
            this.keyWord = "";
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