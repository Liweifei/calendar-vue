<template>
  <transition name="fade">
    <div class="cv-popover-ivContainer" v-if="visible" @keyup="close">
      <button class="cv-popover-ivCloseBtn" @click="close">×</button>
      <div class="cv-popover-contentBox">
        <div v-if="obj.renderHtml" v-html="obj.markContent"></div>
        <p v-else>{{ obj.markContent }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "popover",
  data() {
    return {
      visible: false,
      obj: {},
    };
  },
  methods: {
    close() {
      this.visible = false;
      document.removeEventListener("keyup", this.keyClose);
      // console.log("执行了关闭");
      if (typeof this.onClose === "function") {
        this.$nextTick(() => {
          //动画执行完毕后删除dom,v-if只能删除这个组件内的，挂载的实际上还存在，所以要删掉，不然会显示=>   <!---->
          this.onClose();
        });
      }
    },
    keyClose(e) {
      //监听esc
      if (e.keyCode == 27) {
        this.close();
      }
    },
  },
  mounted() {
    document.addEventListener("keyup", this.keyClose);
    // console.log("执行了监听");
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.cv-popover-ivContainer {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* width: 100%;
  height: 100%; */
  z-index: 19950111;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 0.35s;
  text-align: center;
  z-index: 19950111;
}

.cv-popover-ivContainer:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.cv-popover-contentBox {
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
}
.cv-popover-ivCloseBtn {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  opacity: 0.8;
  font-size: 3em;
  padding: 0 0.3em;
  color: #fff;
  background: transparent;
  border: 0;
  text-shadow: 0 0 2px #000;
  cursor: pointer;
  outline: none;
}
.cv-popover-ivCloseBtn:hover {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
