function myApp(){
  var hour = new Date().getHours();
  return {
    // isNight: (hour >= 18 || hour <= 6 ? true : false)
    isNight: false
  }
}