/* 객체 -------------------------------------------*/
var Body ={
  setColor:function(color) {
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links = {
  setColor:function(color){
  // var i = 0;
  // aList = document.querySelectorAll('a');
  // while(i<aList.length) {
  //   aList[i].style.color = color;
  //   i = i+1;
  //   }
  // }
  /* jquery 사용 */
  $('a').css('color',color);
  }
}
/* 객체 -------------------------------------------*/


function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value==='night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
    }

  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    Links.setColor('blue');
    }
}
