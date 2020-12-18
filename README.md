## calendar-vue
一款高效、简洁、功能丰富的考勤日历插件

## Install
```javascript
	npm i calendar-vue -S
	
	//main.js
	import cv from "calendar-vue";
	Vue.use(cv)
```
## Attribute
| 属性              | 类型  | 说明             | 默认  | 是否必传 |
| ------------------- | ------- | ------------------ | ------- | -------- |
| sundayStart         | Boolean | 日历是否周天开始 | FALSE   | FALSE    |
| titleColor          | String  | title颜色        | #333333 | FALSE    |
| weeklabelColor      | String  | 礼拜几字体颜色 | #9da5b1 | FALSE    |
| arrowColor          | String  | 箭头颜色       | #4b7df6 | FALSE    |
| itembgColor         | String  | 默认日期背景颜色 | #fff    | FALSE    |
| itemlabelColor      | String  | 默认日期字体颜色 | #333333 | FALSE    |
| crrentdaybgColor    | String  | 今天的背景颜色 | #4b7df6 | FALSE    |
| crrentdaylabelColor | String  | 今天的字体颜色 | #fff    | FALSE    |
| hoverbgColor        | String  | 鼠标经过背景颜色 | #4b7df6 | FALSE    |
| hoverlabelColor     | String  | 鼠标经过字体颜色 | #fff    | FALSE    |
| prevColor           | String  | 当月之前的日期颜色 | #cccccc | FALSE    |
| nextColor           | String  | 当月之后的日期颜色 | #cccccc | FALSE    |
| markArr             | Array   | 需要标记的日期列表 | []      | FALSE    |

## markArr
| 属性      | 类型  | 说明                                                             | 格式     |
| ----------- | ------- | ------------------------------------------------------------------ | ---------- |
| date        | String  | 需要标记的日期，注意小于10的月份和日期不需要在前面补0，如2020/2/14 | YYYY/MM/DD |
| color       | String  | 要标记日期底部图标或字的颜色                         | #333333    |
| isLabel     | Boolean | 要标记日期底部是否显示文字                            | true/false |
| label       | String  | 要标记日期底部设置显示文字时的label                 |            |
| userPopover | Boolean | 有额外信息标记的时候是否使用默认的Popover显示   | true/false |
| markContent | String  | 额外需要标注的内容                                        |            |
| renderHtml  | Boolean | 额外需要标注的内容是否采用渲染html的格式         | true/false |


## 回调函数
| 函数名     | 说明                  | 返回值                                |
| ------------- | ----------------------- | ---------------------------------------- |
| onclickdate   | 点击具体日期时的回调 | object，包含日期时间以及主动传递的mark值 |
| onchangemonth | 点击上/下一个月时的回调 | Date对象                               |
## API
| 函数名         | 说明         | 参数格式         | 调用示例                                                                                                   |
| ----------------- | -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| jumpToMonth(date) | 跳转到指定月份 | date对象或YYYY-MM-DD | <Calendar-vue
          ref="cv"
        ></Calendar-vue>

//调用方法
this.$refs.cv.jumpToMonth("2020-03-12"); |

## Other
如果有其他问题邮件沟通1195669615@qq.com或者加qq1195669615