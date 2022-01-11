<template>
  <div class="main">
    <vue-calendar-ui min :mark-arr="markArr" :birthday-arr="birthdayArr" future-disabled></vue-calendar-ui>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      markArr: [
        {
          date: "2021/08/24", //YYYY-MM-DD
          color: "#EE1E1E", //图标或字的颜色
          isLabel: false,
          label: "旷旷旷旷旷旷旷旷",
          userPopover: true, //默认false
          markContent: "<span style='color:red'>今天是个好日子</span>", //需要标注的内容
          renderHtml: true, //需要标注的内容是否采用渲染html的格式
        },
        {
          date: "2021/08/04", //YYYY-MM-DD
          color: "#EE1E1E", //图标或字的颜色
          isLabel: true,
          label: "旷旷旷旷旷旷旷旷",
          userPopover: true, //默认false
          markContent: "<span style='color:red'>今天是个好日子</span>", //需要标注的内容
          renderHtml: true, //需要标注的内容是否采用渲染html的格式
        },
      ],
      birthdayArr: ["2021/08/11", "2021/08/30"],
    };
  },
};
</script>
<style>
  .main{
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 100px;
  }
</style>