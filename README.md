# Vue

# 安装vue CLI  
1. 安装nodejs
2. 设置镜像到本地  npm config set registry https://registery.npmmirror.com
3. npm install -g @vue/cli

#1. 数据绑定 
1. v-bind是单向数据绑定,js流向页面， v-model是双向数据绑定。 但是v-model只在表单类的标签，输入型元素，input，select等标签内可以使用，<p>这个标题标签不能使用  
1.1 v-bind: 数据绑定，简写为:XXX   
1.2 v-model 双向数据绑定  
  1.2.1 v-model:number, 绑定的数据类型是数字
1.3 v-on 绑定事件，简写为@
1.4 v-if 条件渲染（控制DOM是否存在）
1.5 v-show 条件渲染（控制是否显示）
1.6 v-once 只有初次渲染后，就作为静态节点。

2. el的两种写法， 挂在。
3. 事件体参数占位符号$event
~~~
<button @click=showInfo($event, 66)>点击我提示信息</ button>

showInfo(event, number)
{
    console.log(event.target.innerText); // 输出“点击我提示信息”

}
~~~
4. 事件修饰符 stop组织冒泡  015集
5. 键盘事件 keyup keydown
6. 计算属性， methods里面的方法，有返回值。或者computed:中full，get()方法只有第一次执行或者依赖数据发生变化的时候。
7. 检测属性， watch. 如果创建的时候立刻监测，immediate设置为true。深度监测number的a属性，number.a。 或者deep参数设置为true。

8. v-if DOM直接移除，v-show控制线上和隐藏，DOM结构还在。 template只能和v-if配合使用。
9. v-for 

10. vm.$set(vm.student, sex, '男')。如果之前data中的student没有性别属性，创建vue对象之后添加的。或者用Vue.set(); 不能给data直接加数据，只能给data里面的字段加数据。 
11. 数组的修改，只能通过push，pop，sort，reverse等7个数组自带的方法（被vue包装过），才会更新页面的DOM。或者通过Vue.set(vm.data.student, 2, "张三")

# 2.组件 
1. 全局注册和局部注册 
~~~
<div id="root">
    <School></School>
</div>
// 局部注册
const school = Vue.extend({
    // 1. el不要写
    // 2. data必须写成函数
    template:'
    <div>
        <h2>学校名称{{}}</h2>
    <div>
    ',
    data()
    {
        return { name: "杨村小学"}
    },
    methods:{

    }
});

new Vue({
    el:"#root",
    components:{
        school:school, //前面的school可以首字母大写School。标签也是<School></School>
    }

});

new Vue({
    el:"#root2",
    components:{
        school
    }

});

// 全局注册
const hello = Vue.component({});
Vue.component('hello', hello);

~~~

2. 安装脚手架（Vue CLI）  
在cmd命令行工具输入 npm install -g @vue/cli  前提是先安装nodejs  
如果下载速度很慢，映射到镜像  
npm config set registry https://registry.npmmirror.com


3. ref在标签上机上ref，ref=title. 使用的时候this.$refs.title就可以拿到这个title
4. props 父组件使用子组件标签，传入数据。 props可以在子组件中使用类型。 props传入的数据不要直接改，传进来赋值给data进行修改。
5. 样式 style标签加scoped，只在局部起作用
6. 自定义事件， @click.native,否则会当做自定义时间，需要用this.$.emit来处理
7. 全局事件总线 
8. 发布订阅 ，先安装pubsub-js的库  npm i pubsun-js
9. this.nextTick(), //声明周期函数，！！！和activated， deactivated
10. axios  安装
11. 解决跨域，Vue-CLI可以开启代理服务器。在vue.config.js中配置.然后Vue-cli重新启动 nup run serve
~~~
//方式一：  //缺点，1.不能配置多代理，不能控制是否走代理 2.前端不存在的资源，该请求会转发给服务器。
devServer:
{
    proxy:'http://localhost:5000'  //假如你访问的后端接口的端口号是5000
}

方式二：
devServer:{

}
~~~
# 3.插槽  
1. 默认插槽
2. 命名插槽，template标签解析后没有DOM解析后不会有template的标签
3. 作用域插槽，子类向父类传数据， "template scope='demoName'>"标签包裹。数据在子组件，插槽里面可以自定义样式

# 4. Vuex 状态和版本管理
1. 安装 Vuex 
~~~
npm i vuex  //Vue3默认用的是Vuex4, Vue3默认用的是Vuex3，不能混用  

import vuex from 'vuex'

Vue.use(vuex) 
~~~
2. vuex模块化，需要把namespaced设置为true
设置http请求： 
~~~
const countOptions = 
{
    namespaced: true,
    actions:{},
    mutations:{},
    state:{},
    getters:{}
}
~~~


# 5.路由 
1. 安装 Vue router
~~~
新建router.js文件
import VueRouter from 'vue-router' //使用路由
import About from './about.vue'
import Home from './home.vue'
import News from './news.vue'

export default new VueRouter({
    routes:[
        {
            {
                path:'/about',
                component:About
            },
            {
                path:'/homr',
                component:Home,
                children:[
                    {
                        path:"news",
                        component:News
                    }，
                ] //二级路由
            },
        },
    ]
})

import Vue from 'vue'              // 引用vue

Vue.use(VueRouter) //应用插件

~~~

2. router-link标签实现路由切换， router-view制定呈现位置

3. 多级路由
~~~
export default new VueRouter({
    routes:[
        {
            {
                path:'/about',
                component:About
            },
            {
                path:'/home',
                component:Home,
                children:[
                    {
                        path:"news",
                        component:News
                    }，
                ] //二级路由
            },
        },
    ]
})

// router-link 中的to需要带上完整的路由 to="/home/news"
~~~
4. 路由带参数
~~~
<router-link to="/home/message/detail?id=idVal&title=titleVal"></router-link>
<router-link :to="{
    path:'/home/message/detail',
    query:{
        id: m.id,
        title: m.title

    }
}"></router-link> 

~~~
5. 命名路由。 路由过长，加name属性，直接取name
~~~
export default new VueRouter({
    routes:[
        {
            {
                name:"guanyu",
                path:'/about',
                component:About
            }
        },
    ]
})

使用的时候加上名字
<router-link to="/home/message/detail?id=idVal&title=titleVal"></router-link>
<router-link :to="{
    // path:'/home/message/detail',   //path不用传了
    name:"guanyu"
    query:{
        id: m.id,
        title: m.title

    }
}"></router-link> 

~~~

6. 路由history ，router-link如果不需要记录历史记录， 标签加上replace。默认是push模式
~~~
//直接跳转到页面
this.$router.push({
    name:'',
    params:{
        id:'***',
        title:'***'
    }
});

前进和后退
this.$router.back();
this.$router.forward();
this.$router.go(3); 前进3
~~~

7. 缓存路由组件 
~~~
// 不写include,缓存所有的。
// 换粗多个用数组  <keep-alive :include="['News','Message']">
<keep-alive include="组件名">
    <router-view></router-view>
</keep-alive>
~~~

8. 新的声明周期钩子，
~~~
activated(){  //激活路由组件

} ,
deactivated()  // 组件失活
{

}
~~~

9. 全局路由守卫， 独享路由守卫,组件内守卫
~~~
const router = new  VueRouter({
    routes:[
        {
            {
                path:'/about',
                component:About
            },
            {
                path:'/home',
                component:Home,
                meta:{isAuth: false},  //
                children:[
                    {
                        path:"news",
                        component:News
                    }，
                ] //二级路由
            },
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path === "/home/news")
    {
        // if(to.meta.isAuth) //或者在每个组件路由上做个是否需要判断的标记
        if(localStorage.getItem('school') === 'yangCunXiaoXue')
        {
            next();
        } else
        {
            alert("学校不对，无权查看");
        }
    } else
    {
        next();
    }

} )

// 独享路由守卫
const router = new  VueRouter({
    mode:'hash', //有history和hash两种模式，history参数拼在后面，hash会带#，
    routes:[
        {
            {
                path:'/about',
                component:About,
                beforeEnter：(to, from, next)=>
                {
                    if(to.path === "/home/news")
                    {
                        if(to.meta.isAuth)
                        {
                            next();
                        } else
                        {
                            alert("学校不对，无权查看");
                        }
                    } else
                    {
                        next();
                    }
                }
            },
            {
                path:'/home',
                component:Home,
                meta:{isAuth: false},  //
                children:[
                    {
                        path:"news",
                        component:News
                    }，
                ] //二级路由
            },
        },
    ]
})

//组件内守卫, 在组件中写beforeRouteEnter和beforeRouteLeave的方法
beforeRouteEnter(to, from, next)
{
    if(to.path === "/home/news")
    {
        // if(to.meta.isAuth) //或者在每个组件路由上做个是否需要判断的标记
        if(localStorage.getItem('school') === 'yangCunXiaoXue')
        {
            next();
        } else
        {
            alert("学校不对，无权查看");
        }
    } else
    {
        next();
    }
}
~~~

# 上线
1. 编译 npm run build

# ElementUI
1. 安装
~~~
npm i element-plus

//全部引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

// 按需引入 文档：https://element.eleme.cn/#/zh-CN/component/quickstart
// 还需要安装 npm install babel-plugin-component -D

import {Button, Row} from 'element-ui'

Vue.component(Button.name, Button)

~~~






   
      


# 堆和栈 
 参考文档：https://blog.csdn.net/m0_49768044/article/details/131391832
1. 每当程序执行函数调用、变量声明或其他类型的操作时，都会在栈中添加一个栈帧，用于存储函数的执行环境
2. 堆内存则是用于分配程序中动态数据结构的内存空间，它的生命周期不由程序的函数调用栈管理，因此堆空间通常会被程序员直接管理

## 1.角色不同
1. 栈是一种高效的内存结构，用于存放基础数据类型和引用类型的变量，大大简化内存的管理，提高了程序的执行效率
2. 堆空间则为程序提供了极为灵活的空间分配和管理手段，既可以手动管理，也可以交由垃圾回收机制自动管理，带来了很大的方便

## 2.堆和栈的区别和联系
### 区别
1. 堆与栈的管理方式不同；栈是由系统自动分配和管理的，而堆需要程序员手动进行分配和管理。即栈回收时自动回收的。堆的回收可以通过托管对象，会自动回收，非托管的需要自己回收。
2. 堆和栈的内存大小不同；栈的大小是固定的，由操作系统指定，而堆空间通常由系统分配初始大小，程序员可以自由地调整大小
3. 堆和栈的数据存储方式不同；栈空间用于存储基本数据类型和引用类型的地址，堆空间则用于存储动态分配的对象和复杂数据结构

### 联系
1. 堆和栈都是内存区域。 两种都是内存空间。堆也是内存空间，不是存放在磁盘上的。

## 3.堆和栈的回收
1. 栈的生命周期在函数执行期间，由操作系统自动管理，当函数执行完毕或变量作用域结束时，栈上的内存会自动被回收
2. 由程序员手动释放或由GC自动回收

## 4. 栈的特点 （自动分配和释放、固定大小、速度快，后进先出）
1. 自动分配和释放：栈空间是由操作系统自动分配和管理的，创建和销毁栈的操作都不需要程序员手动干预。当程序执行完一个函数后，操作系统就会自动回收该函数的局部变量和临时变量所占用的栈空间
2. 栈的大小是由操作系统在程序运行时预先分配的，程序员无法直接改变栈的大小。因此，栈的空间大小是固定的，且在程序运行时不可被修改
3. 速度快：由于栈空间是由操作系统直接分配和管理的，因此栈的访问速度比较快，不像堆需要动态申请和释放内存。另外，栈的空间地址是连续的，因此访问数据也比较方便
4. 栈采用后进先出的存储方式，即最后进栈的元素，最先出栈。这是因为栈底部是固定的，每个元素只能从栈顶进入和离开栈。

# 5.redis  
1. redis的写和读都是单线程的。 但持久化，异步删除，集群数据同步是单线程的。