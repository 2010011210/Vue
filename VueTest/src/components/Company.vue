<template>
    <div>
        <h1 v-if="isShowCompany">{{ name }}</h1>
        <input v-model="count" />
        <button @click="add">Add</button>
        <button @click="addWithParams($event,66)">AddWithParams</button>
        <a href="http://www.baidu.com" @click.prevent="showInfo">点击我提示信息</a>
        <div @click="showInfo('div')" class="demo">
            <button @click.stop="showInfo('button')">冒泡事件</button>
        </div>
        <!--1.事件-->
        <!-- 事件只触发一次 once-->
        <button @click.once="showInfo('button')">事件只触发一次</button>

        <!--self 自由点击本身，才触发-->
        <div @click.self="showInfo('self div')" class="demo">
            <button @click.stop="showInfo('button')">self事件</button>
        </div>

        <!--键盘事件-->
        <!-- keyup.enter  回车键弹起的时候触发 
        还有 delete
        esc
        space
        tab
        up
        down
        left
        right 
        -->
        <input type="text" placeholder="按下回传提示" @keyup.enter="showInfo('keyup')" />
        
        <!--计算属性-->
        <p>计算属性</p>
        <div>{{fullName}}</div>
        <!--计算属性-->
        <input v-model="fullName2"/>

        <!--列表-->
        <p>列表</p>
        <input v-model="keyWord" />
        <ul>
            <li v-for="(p, index) in persons" :key="index">
                {{p.name}}
            </li>
        </ul>

        <ul>
            <li v-for="(p, index) in comPersons" :key="index">
                {{p.name}}
            </li>
        </ul>

        <School ref="sch" address="南岗区" schoolName="哈尔滨工厂大学"></School>
        <MyHeader></MyHeader>
        <MyList></MyList>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import School from './School.vue'
import MyFooter from './MyFooter.vue'
import MyHeader from './MyHeader.vue'
import MyList from './MyList.vue'


export default {
    name:"Company",
    components:{School, MyFooter, MyHeader, MyList},
    data(){
        return {
            name:"BYD",
            count: 0,
            keyWord:'',
            firstName:'张',
            secondName:'三',
            numbers:{
                a:1,
                b:2
            },
            persons:[
                {name:'张三',id:123},
                {name:'王五',id:234},
                {name:'马六',id:789}
            ]
        }
    },
    methods:
    {
        add(number)
        {
            console.log('refs',this.$refs.sch);
            console.log('refs.name',this.$refs.sch.name);
            this.count++;
            console.log("触发add方法")
        },
        addWithParams($event,number)
        {
            console.log(number);
            console.log($event);
            this.count++;
            console.log("触发add方法")
        },
        showInfo(name)
        {
            alert('ok' + name);
        }
    },
    computed:{
        isShowCompany()  // 计算属性
        {
            return this.count == 3;  
        },
        fullName()  //计算属性，简写，只考虑读，不考虑修改
        {
            return this.firstName + '-'+ this.secondName;
        },
        fullName2: //计算属性的完全写法
        {
            get()
            {
                return this.firstName + '-'+ this.secondName;
            },
            set(value)
            {
                let arr = value.split("-");
                if(arr.length == 2)
                {
                    this.firstName = arr[0];
                    this.secondName = arr[1];
                }
            }
        },
        comPersons()
        {
            return this.persons.filter((p) => {
                return p.name.indexOf(this.keyWord) != -1;
            });

        }
    },
    watch:{
        count:{
            handler(newValue, oldValue)
            {
                console.log("count被修改:"+ newValue +':' +oldValue );
            }
        },
        // count(newValue, oldValue)  //简写形式
        // {
        //     console.log("count被修改:"+ newValue +':' +oldValue );
        // },
        fullName:{  //计算属性也可监视
            immediate:true, //初始化的时候，handler调用一下
            handler(newValue, oldValue)
            {
                console.log("fullName被修改:"+ newValue +':' +oldValue );
            }
        },
        // 'numbers.a': //只监测a
        // {
        //     handler(newV, oldV)
        //     {

        //     }
        // },
        numbers: //只监测numbers里面的任意一个元素
        {
            deep:true, //深度监测
            handler(newV, oldV)
            {

            }
        }
    }
}

</script>

<style>
.demo{
    width: 300px;
    height: 50px;
    background-color: aqua;
}
</style>