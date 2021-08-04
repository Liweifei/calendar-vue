import C from './popover.vue';

//凡是vue插件一定有这个方法。目的是use使用，fn直接当作install方法，返回对象的话就需要个install方法
let instance;
const Popover = function (Vue) {
    Vue.prototype.$SHOW_CV_POPOVER = function (obj) {
        const factory = Vue.extend(C);//创建组件构造器
        let option={//传递删除dom方法过去
            onClose(){
                Popover.close()
            }
        }
        const c = new factory({
            data:option
        });//从构造器拿到新的组件
        instance = c.$mount(document.createElement("div"));//挂载到空元素上
        document.body.appendChild(instance.$el); //将dom添加到body上
        instance.obj = obj;
        instance.visible = true;
    }
}
Popover.close=function(){//关闭后删除dom
    // console.log("执行了close");
    if(instance && instance.$el){
        document.body.removeChild(instance.$el);
    }
}
export default Popover;