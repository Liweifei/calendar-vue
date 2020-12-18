// getDay()=>返回值是 0（周日） 到 6（周六） 之间的一个整数
// getDate()=>返回月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数
// new Date(year, month, x)=>配合getDay和getDate获取指定日期是星期几或日期
//                           第三个参数x如果是0配合getDate可以获取本月的天数
//                           第三个参数x配合getDay可以获取指定日期是星期几

export default {
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
    let year2 = year,month2;
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
      const thisDay=num + i;
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
      const thisDay=i + 1;//下个月是从1号开始
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