function formatString(arr){
  return arr.map(function(time){
    return format(time);
  });

  function format(str){
    let arr = str.split(' ');
    let date = arr[0];
    let month = arr[1];
    let year = arr[2];
    return `${year}-${formatMonth(month)}-${formatDate(date)}`;
  }

  function formatMonth(strMonth){
    let num = {'Jan':'01','Feb':'02', 'Mar':'03', 'Apr':'04','May':'05', 'Jun':'06','Jul':'07',
     'Aug':'08', 'Sep':'09', 'Oct':'10', 'Nov':'11','Dec':'12'}
    return num[strMonth];
  }

  function formatDate(strDate){
    let num =parseInt(strDate);
    return num < 10 ? '0'+num.toString() : num.toString();
  }
}
