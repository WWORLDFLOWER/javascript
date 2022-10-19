function get_avg(my_arr){

    var total = 0;

    for(let i = 0; i < my_arr.length; i++){
        total = total + my_arr[i];
    }
    var avg =(total /my_arr.length).toFixed(2);
    return avg;
}

function uniq_arr(my_arr){
    var line_ids_unique = [];
    
}

// 設定 cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // 取得 cookie 的值
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // 檢查某 cookie 是否存在
  function checkCookie(cname) {
    var cookie_value = getCookie(cname);
    if (cookie_value != "") {
      return true;
    } else {
      return false;
    }
  }