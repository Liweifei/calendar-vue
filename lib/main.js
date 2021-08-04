import C from './template.vue';
import popover from "./popover/popover.js";
//凡是vue插件一定有这个方法。目的是use使用，fn直接当作install方法，返回对象的话就需要个install方法

const Calendar = function (Vue) {
    Vue.use(popover)
    Vue.component(C.name, C) 
}
export default Calendar;