// getDay()=>返回值是 0（周日） 到 6（周六） 之间的一个整数
// getDate()=>返回月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数
// new Date(year, month, x)=>配合getDay和getDate获取指定日期是星期几或日期
//                           第三个参数x如果是0配合getDate可以获取本月的天数
//                           第三个参数x配合getDay可以获取指定日期是星期几

export default {
  birthdayImg: "data:image/png;base64,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",
  sundayStart: false,// 默认是周一开始，周一或周天开始相应的位置也要改一下
  MonthDays: 0,// 一个月共几填=>计算数据集合的长度（你的日历共有几排=>每排肯定是七个，礼拜1-天），公式用:Math.ceil(（当月总天数+当月第一天是礼拜几）/7)
  startDay: false,// 当月第一天是礼拜几=>用于补足上月数据展示
  endDay: false,// 当月最后一天是礼拜几=>用于补足下月数据展示
  sundayStart: false,// 默认是周一开始，周一或周天开始相应的位置也要改一下
  arrayPreNum: 0,// 计算第一排需要补充上个月的天数（因为你本月一号有可能是周2等）
  // 获取某个月的实际天数
  getMonthDays(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;//month+1 配合下面获取上个月的最后一天
    const d = new Date(year, month, 0);
    //思想是获取上个与的最后一天
    //我们初始化d为三月份的第0天，由于JavaScript中day的范围为1~31中的值，
    //所以当设为0时，会向前 一天，也即表示上个月的最后一天
    return d.getDate();
  },
  init(date) {//初始化数据及格式化日期
    const year = date.getFullYear();
    const month = date.getMonth();//month+1 配合下面获取上个月的最后一天
    this.startDay = new Date(year, month, 1).getDay();//当月第一天是礼拜几
    const d = new Date(year, month + 1, 0);
    this.MonthDays = d.getDate();//这个月的总月数
    this.endDay = d.getDay();//当月最后一天是礼拜几
    this.setArrayPreNum();//计算第一排要补上个月多少天
    return date;
  },
  strToDateObj(date) {//js字符串转date对象
    // var s = '2018-10-09 10:23:12';
    if (typeof date === "string") {
      date = date.replace(/-/g, "/");
      date = new Date(date);
      const isValidDate = date instanceof Date && !isNaN(date.getTime());//判断日期是否有效
      if (!isValidDate) {
        throw "日期格式错误，格式为:YYYY-MM-DD"
      }
    }
    return date;
  },
  // 计算第一排需要补充上个月的天数
  setArrayPreNum() {
    const startDay = this.startDay;
    //特殊情况对于0（星期天），也是看你布局位置
    //非0情况，如果你的布局是周末在前的，补充的个数就等于当月第一天所在的星期几，2就是2个，周末在后就需要减一
    this.arrayPreNum = this.sundayStart ?
      startDay === 0 ? 7 : startDay :
      startDay === 0 ? 6 : startDay - 1;
  },
  //获取当前日期上个月或者下个月
  resetprevOrNextDateObj(date, type = 'next') {
    const timeArray = this.dateFormatStr(date).split('/');
    const year = parseInt(timeArray[0]);
    const month = parseInt(timeArray[1]);
    let year2 = year, month2;
    if (type === 'next') {//计算上下一个月的日期是多少
      month2 = month + 1;
      if (month2 == 13) {
        year2 += 1;
        month2 = 1;
      }
    } else {
      month2 = month - 1;
      if (month2 == 0) {
        year2 -= 1;
        month2 = 12;
      }
    }
    const t2 = `${year2}/${month2}/01`;//补充当天期日，避免ie，new Date兼容性问题
    return new Date(t2);
  },
  // 上个月末尾的一些日期
  getPrevMonthList(date) {
    let arr = [];
    const leftNum = this.arrayPreNum;//需要补充上个月的天数
    const preDate = this.resetprevOrNextDateObj(date, 'prev');//拿到上个月的date对象
    const num = this.getMonthDays(preDate) - leftNum + 1;//计算当前开始的日期，长度为leftNum，+1是因为1月返回的是0；
    // 上个月多少开始
    for (let i = 0; i < leftNum; i++) {
      const thisDay = num + i;
      const nowTime = `${preDate.getFullYear()}/${preDate.getMonth() + 1}/${thisDay}`;
      arr.push({
        id: thisDay,
        date: nowTime,
        isToday: false,
        whitchMonth: 'prev',
      });
    }
    return arr;
  },
  // 下个月末尾的一些日期
  getRightArr(date) {
    let arr = [];
    const nextDate = this.resetprevOrNextDateObj(date, 'next');//拿到下个月的date对象
    const leftLength = this.MonthDays + this.arrayPreNum;//计算前面一共已经排好的数量=上个月补的天数+这个月的天数
    const rightNum = 7 - leftLength % 7;//计算后面还需要补的天数
    for (let i = 0; i < rightNum; i++) {
      const thisDay = i + 1;//下个月是从1号开始
      const nowTime = `${nextDate.getFullYear()}/${nextDate.getMonth() + 1}/${thisDay}`;
      arr.push({
        id: thisDay,
        date: nowTime,
        isToday: false,
        whitchMonth: 'next',
      });
    }
    return arr;
  },
  // format日期.date转string
  dateFormatStr(date) {
    // date = typeof date === 'string' ? new Date(date.replace(/\-/g, '/')) : date;
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    return formatDate;
  },
  // 获取当月的天数数据
  getThisMonthList(date) {
    const arr = [];
    const dayLength = this.MonthDays;//当月天数
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const toDay = this.dateFormatStr(new Date());
    for (let i = 1; i <= dayLength; i++) {
      const dateItem = `${year}/${month}/${i}`;
      arr.push({
        id: i,
        date: dateItem,
        isToday: toDay === dateItem,
        whitchMonth: "current",
      });
    }
    return arr;
  },
  // 获取某月的列表 用于渲染
  getMonthList(date) {
    date = this.init(date);//初始化数据及格式化日期
    return [...this.getPrevMonthList(date), ...this.getThisMonthList(date), ...this.getRightArr(date)];
  },
};