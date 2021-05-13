<template>
  <div class="vue-calendar-ui" :class="{'vue-calendar-small':min}">
    <div class="cv-controlBox">
      <div
        class="cv-arrowLeft"
        :style="{ 'border-color': arrowColor }"
        @click="handlePrevAndNexMonth('prev')"
      ></div>
      <h3 class="cv-title" :style="{ color: titleColor }">
        {{ today | formatDate }}
      </h3>
      <div
        class="cv-arrowRight"
        :style="{ 'border-color': arrowColor }"
        @click="handlePrevAndNexMonth('next')"
      ></div>
    </div>
    <div class="cv-contentBox">
      <ul class="cv-top" :style="{ color: weeklabelColor }">
        <li v-for="(item, index) in labelArr" :key="index" class="cv-label">
          {{ item }}
        </li>
      </ul>
      <ul class="cv-main">
        <li
          class="cv-item"
          :class="{
            'cv-prev': item.whitchMonth === 'prev',
            'cv-next': item.whitchMonth === 'next',
          }"
          v-for="(item, index) in arrList"
          :key="index"
        >
          <div
            class="cv-date"
            :class="{
              'cv-today': item.isToday,
            }"
            :style="{
              'background-color': item.isBirthday
                ? birthdaybgColor
                : item.isToday
                ? crrentdaybgColor
                : item.date === clickDay
                ? clickdaybgColor
                : index === mouseIndex
                ? hoverbgColor
                : itembgColor,
              color: item.isBirthday
                ? birthdaylabelColor
                : item.isToday
                ? crrentdaylabelColor
                : item.date === clickDay
                ? clickdaylabelColor
                : index === mouseIndex
                ? hoverlabelColor
                : item.whitchMonth === 'prev'
                ? prevColor
                : item.whitchMonth === 'next'
                ? nextColor
                : itemlabelColor,
            }"
            @mouseenter="mouseIndex = index"
            @mouseleave="mouseIndex = null"
            @click="handleClickDate(item)"
          >
            <!-- 
            上面style匹配
            0、生日样式放最大
            1、当天的样式权重第2
            2、点击的效果放第3
            3、hover的效果放第4
            4、最后是默认的样式
           -->
            {{ item.id }}
            <span
              class="cv-click-Box"
              v-if="item.mark && item.userPopover"
              @click="showPopover(item)"
            ></span>
            <img
              v-if="item.isBirthday"
              class="cv-today-birthday"
              :src="birthdayImg"
              alt=""
            />
          </div>
          <span
            v-if="item.mark"
            class="cv-circle"
            :class="{ 'cv-circle-label': item.isLabel }"
            :style="{ 'background-color': item.color, color: item.color }"
          >
            {{ item.isLabel ? item.label : null }}
            <span
              class="cv-click-Box"
              v-if="item.mark && item.userPopover"
              @click="showPopover(item)"
            ></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import util from "./util";
export default {
  name: "vue-calendar-ui",
  props: {
    // sundayStart: false,// 默认是周一开始，周一或周天开始相应的位置也要改一下
    min: {
      type: Boolean,
      default: false,
    },
    sundayStart: {
      type: Boolean,
      default: false,
    },
    titleColor: {
      //title颜色，默认333333
      type: String,
      default: "#333333",
    },
    weeklabelColor: {
      //礼拜几字体颜色，默认9da5b1
      type: String,
      default: "#9da5b1",
    },
    arrowColor: {
      //箭头颜色，默认4b7df6
      type: String,
      default: "#4b7df6",
    },
    itembgColor: {
      //默认日期背景颜色，默认fff
      type: String,
      default: "#fff",
    },
    itemlabelColor: {
      //默认日期字体颜色，默认333333
      type: String,
      default: "#333333",
    },
    birthdayImg: {
      //生日顶部图片
      type: String,
      default: util.birthdayImg,
    },
    birthdaybgColor: {
      //当天生日背景颜色，默认#FFF5E7
      type: String,
      default: "#FFF5E7",
    },
    birthdaylabelColor: {
      //当天生日字体颜色，默认fff
      type: String,
      default: "#333333",
    },
    crrentdaybgColor: {
      //今天的背景颜色，默认4b7df6
      type: String,
      default: "#4b7df6",
    },
    crrentdaylabelColor: {
      //今天的字体颜色，默认fff
      type: String,
      default: "#fff",
    },
    clickdaybgColor: {
      //当前点击日期的背景颜色，默认rgba(51, 51, 51,0.8)
      type: String,
      default: "rgba(51, 51, 51,0.8)",
    },
    clickdaylabelColor: {
      //当前点击日期的字体颜色，默认fff
      type: String,
      default: "#fff",
    },
    hoverbgColor: {
      //鼠标经过背景颜色，默认4b7df6
      type: String,
      default: "#4b7df6",
    },
    hoverlabelColor: {
      //鼠标经过字体颜色，默认#fff
      type: String,
      default: "#fff",
    },
    prevColor: {
      //当月之前的日期颜色，默认cccccc
      type: String,
      default: "#cccccc",
    },
    nextColor: {
      //当月之后的日期颜色，默认cccccc
      type: String,
      default: "#cccccc",
    },
    markArr: {
      //需要标记的日期列表
      type: Array,
      default: () => {
        return [
          // {
          //   date: "2021/05/24", //YYYY-MM-DD
          //   color: "#EE1E1E", //图标或字的颜色
          //   isLabel: false,
          //   label: "旷旷旷旷旷旷旷旷",
          //   userPopover: true, //默认false
          //   markContent: "<span style='color:red'>今天是个好日子</span>", //需要标注的内容
          //   renderHtml: true, //需要标注的内容是否采用渲染html的格式
          // },
          // {
          //   date: "2021/05/23", //YYYY-MM-DD
          //   color: "#EE1E1E", //图标或字的颜色
          //   isLabel: true,
          //   label: "旷旷旷旷旷旷旷旷",
          //   userPopover: true, //默认false
          //   markContent: "<span style='color:red'>今天是个好日子</span>", //需要标注的内容
          //   renderHtml: true, //需要标注的内容是否采用渲染html的格式
          // },
        ];
      },
    },
    birthdayArr: {
      //需要标记的日期列表
      type: Array,
      default: () => {
        return [
          // "2021/05/31", "2021/05/30"
        ];
      },
    },
  },
  data() {
    return {
      title: "",
      today: new Date(),
      clickDay: null,
      labelArrBackup: ["一", "二", "三", "四", "五", "六"],
      labelArr: ["一", "二", "三", "四", "五", "六"], //"日"由是否星期天为起始日决定
      arrList: [],
      mouseIndex: null, //当前鼠标经过的时间
    };
  },
  watch: {
    markArr: {
      handler() {
        this.initMarkContent();
      },
      deep: true,
    },
    birthdayArr: {
      handler() {
        this.initBirthday();
      },
      deep: true,
    },
  },
  created() {
    const sundayStart = this.sundayStart;
    util.sundayStart = sundayStart;
    if (sundayStart) {
      this.labelArr = ["日", ...this.labelArrBackup];
    } else {
      this.labelArr = [...this.labelArrBackup, "日"];
    }
    this.today = util.strToDateObj(this.today); //先初始化时间，保证为date对象
    this.getList();
  },
  filters: {
    formatDate(date) {
      const formatDate = `${date.getFullYear()}年-${date.getMonth() + 1}月`;
      return formatDate;
    },
  },
  methods: {
    getList() {
      this.arrList = util.getMonthList(this.today);
      this.initMarkContent();
      this.initBirthday();
    },
    initMarkContent() {
      //初始化需要mark的信息
      this.arrList.forEach((item) => {
        item.mark = false;
        let markItem = this.markArr.find(
          (list) => util.dateFormatStr(new Date(list.date)) === item.date
        );
        if (markItem) Object.assign(item, markItem, { mark: true });
      });
      this.$forceUpdate();
    },
    initBirthday() {
      //初始化需要生日信息
      this.arrList.forEach((item) => {
        const io = this.birthdayArr.some((date) => {
          return util.dateFormatStr(new Date(date)) === item.date;
        });
        Object.assign(item, { isBirthday: io });
      });
      this.$forceUpdate();
    },
    handlePrevAndNexMonth(type) {
      //点击获取下或下个月数据
      const today = this.today;
      this.today = util.resetprevOrNextDateObj(today, type);
      this.$emit("onchangemonth", {
        day1: this.today,
        type,
      });
      this.getList();
    },
    jumpToMonth(date) {
      //点击获取指定月数据
      this.today = util.strToDateObj(date); //先初始化时间，保证为date对象
      this.getList();
    },
    showPopover(item) {
      //点击展示popover
      this.$SHOW_CV_POPOVER(item);
    },
    handleClickDate(item) {
      //点击日期
      const thisItem = { ...item };
      const date = item.date;
      this.clickDay = date;
      item.whitchMonth != "current" && this.jumpToMonth(date);
      this.$emit("onclickdate", item);
    },
  },
};
</script>

<style>
@import "./main.css";
</style>
