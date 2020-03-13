export function isApp() {
  const ua = navigator.userAgent;
  const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua);
  const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua);
  const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua);
  const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua);
  const isWechat = /micromessenger/i.test(ua);
  if (isWechat) return false;
  return isAndroid || isIpad || isIpod || isIphone;
}

export function checkDevice() {
  const ua = navigator.userAgent;
  const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua);
  const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua);
  const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua);
  const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua);
  const isWechat = /micromessenger/i.test(ua);
  return {
    isAndroid,
    isIpad,
    isIpod,
    isIphone,
    isWechat
  };
}

export function getAges(str) {
  var returnAge;
  var strBirthdayArr = str.split('/');
  var birthYear = strBirthdayArr[0];
  var birthMonth = strBirthdayArr[1];
  var birthDay = strBirthdayArr[2];
  var d = new Date();
  var nowYear = d.getFullYear();
  var nowMonth = d.getMonth() + 1;
  var nowDay = d.getDate();
  if (nowYear === birthYear) {
    returnAge = 0;
  } else {
    var ageDiff = nowYear - birthYear;
    if (ageDiff > 0) {
      if (nowMonth === birthMonth) {
        var dayDiff = nowDay - birthDay;
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      } else {
        var monthDiff = nowMonth - birthMonth;
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      }
    } else {
      returnAge = 0;
    }
  }
  return returnAge;
}

export const convertDateFromString = function(dateString) {
  if (dateString) {
    let arr1 = dateString.split(' ');
    let sdate = arr1[0].split('-');
    let sSecond = arr1[1].split(':');
    let date = new Date(sdate[0], sdate[1] - 1, sdate[2], sSecond[0], sSecond[1]);
    return date;
  }
};

export const formatDuring = function(ss) {
  let days = parseInt(ss / (60 * 60 * 24));
  let hours = parseInt((ss % (60 * 60 * 24)) / (60 * 60));
  let minutes = parseInt((ss % (60 * 60)) / 60);
  let resStr = '';
  let isDay = false;
  if (days > 0) {
    resStr += days + ' 天 ';
    isDay = true;
  }
  if (isDay || hours > 0) {
    resStr += hours + ' 时 ';
  }
  resStr += minutes + ' 分';
  return resStr;
};

export const dateTimeFormat = function(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (typeof date === 'string') {
    return date;
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  let nowDate = new Date().getDate();
  // console.log('nowDate', nowDate);
  if (nowDate === o['d+']) {
    let arr = fmt.split(' ');
    return '今日 ' + arr[1];
  }
  return fmt;
};

export const dateFormat = function(date, fmt = 'yyyy-MM-dd') {
  if (typeof date === 'string') {
    return date;
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate() // 日
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
};
export function dateFormat2(date, fmt) {
  let ret;
  let opt = {
      'Y+': date.getFullYear().toString(), // 年
      'm+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'M+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
      };
  };
  return fmt;
};

export const toDate = function(str) {
  let dateTime = str.split(' ');
  let _date = dateTime[0].split('-');
  let _time = dateTime[1].split(':');
  return new Date(
    parseInt(_date[0]),
    parseInt(_date[1]) - 1,
    parseInt(_date[2]),
    parseInt(_time[0]),
    parseInt(_time[1]),
    parseInt(_time[2])
  );
};

export function scrollTop(el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;
    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }
    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }

  scroll(from, to, step);
}

export function convertBase64ToBlob(base64) {
  let base64Arr = base64.split(',');
  let imgtype = '';
  let base64String = '';
  if (base64Arr.length > 1) {
    // 如果是图片base64，去掉头信息
    base64String = base64Arr[1];
    imgtype = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'));
  }
  // 将base64解码
  let bytes = atob(base64String);
  // let bytes = base64;
  let bytesCode = new ArrayBuffer(bytes.length);
  // 转换为类型化数组
  let byteArray = new Uint8Array(bytesCode);
  // 将base64转换为ascii码
  for (let i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i);
  }
  // 生成Blob对象（文件对象）
  return new Blob([bytesCode], { type: imgtype });
}

