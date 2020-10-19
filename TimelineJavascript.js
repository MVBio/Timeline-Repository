
var completed = 159;
var total = 310;

 let paper = 1;

 var bodywidth = window.innerWidth;

    var percentage = completed / total ;
    var antipercentage = 1 - percentage;

    var perc = Math.round(percentage * 1000);
    var percent = perc / 10;

    var antiperc = Math.round(antipercentage * 1000);
    var antipercent = antiperc / 10;

    document.getElementById("completed").style.width = percentage * 100 + '%';
    document.getElementById("notcompleted").style.width = antipercentage * 100 + '%';

    document.getElementById("completed").innerText = percent + '%' + '      (of the way to Qingdao)';
    document.getElementById("notcompleted").innerText = antipercent + '%';

  function scroll123() {


    var bodyrect2005 = document.body.getBoundingClientRect();
    var rect2005 = document.getElementById('2005.tag').getBoundingClientRect();
    var calc2005 = rect2005.top - bodyrect2005.y;
    var height2005 = calc2005 + "px";
    document.getElementById('2005').style.height = height2005;
    console.log(calc2005)

    var bodyrect2006 = document.body.getBoundingClientRect();
    var rect2006 = document.getElementById('2006.tag').getBoundingClientRect();
    var calc2006 = rect2006.top - bodyrect2006.y;
    var height2006 = calc2006 - calc2005 + "px";
    document.getElementById('2006').style.height = height2006;
    console.log(calc2006)

    var bodyrect2007 = document.body.getBoundingClientRect();
    var rect2007 = document.getElementById('2007.tag').getBoundingClientRect();
    var calc2007 = rect2007.top - bodyrect2007.y;
    var height2007 = calc2007 - calc2006 + "px";
    document.getElementById('2007').style.height = height2007;
    console.log(calc2007)

    var bodyrect2008 = document.body.getBoundingClientRect();
    var rect2008 = document.getElementById('2008.tag').getBoundingClientRect();
    var calc2008 = rect2008.top - bodyrect2008.y;
    var height2008 = calc2008 - calc2007 + "px";
    document.getElementById('2008').style.height = height2008;

    var bodyrect2009 = document.body.getBoundingClientRect();
    var rect2009 = document.getElementById('2009.tag').getBoundingClientRect();
    var calc2009 = rect2009.top - bodyrect2009.y;
    var height2009 = calc2009 - calc2008 + "px";
    document.getElementById('2009').style.height = height2009;

    var bodyrect2010 = document.body.getBoundingClientRect();
    var rect2010 = document.getElementById('2010.tag').getBoundingClientRect();
    var calc2010 = rect2010.top - bodyrect2010.y;
    var height2010 = calc2010 - calc2009 + "px";
    document.getElementById('2010').style.height = height2010;

    var bodyrect2011 = document.body.getBoundingClientRect();
    var rect2011 = document.getElementById('2011.tag').getBoundingClientRect();
    var calc2011 = rect2011.top - bodyrect2011.y;
    var height2011 = calc2011 - calc2010 + "px";
    document.getElementById('2011').style.height = height2011;

    var bodyrect2012 = document.body.getBoundingClientRect();
    var rect2012 = document.getElementById('2012.tag').getBoundingClientRect();
    var calc2012 = rect2012.top - bodyrect2012.y;
    var height2012 = calc2012 - calc2011 + "px";
    document.getElementById('2012').style.height = height2012;

    var bodyrect2013 = document.body.getBoundingClientRect();
    var rect2013 = document.getElementById('2013.tag').getBoundingClientRect();
    var calc2013 = rect2013.top - bodyrect2013.y;
    var height2013 = calc2013 - calc2012 + "px";
    document.getElementById('2013').style.height = height2013;

    var bodyrect2014 = document.body.getBoundingClientRect();
    var rect2014 = document.getElementById('2014.tag').getBoundingClientRect();
    var calc2014 = rect2014.top - bodyrect2014.y;
    var height2014 = calc2014 - calc2013 + "px";
    document.getElementById('2014').style.height = height2014;
  }


  function sidebarfunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("bar");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
      text.style.float = "right";
      text.style.width = "15%";
      text.style.height = "0px";
    } else {
      text.style.display = "none";
    }
  }

  function mainfunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("main");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
      text.style.float = "left";
      text.style.width = "85%";
      text.style.height = "280px";
    } else {
      text.style.display = "block";
      text.style.float = "left";
      text.style.width = "100%";
      text.style.height = "280px";
    }
  }

  function showChat() {
    // Get the checkbox
    var checkBox = document.getElementById("chatCheck");
    // Get the output text
    var chat = document.getElementById("chat");

    // If the checkbox is checked, display the output text
    if (chatCheck.checked == true) {
      chat.style.display = "block";
    } else {
      chat.style.display = "none";
    }
  }

  // a key map of allowed keys
  var allowedKeys = {
    54: '6',
    57: '9',
  }

  // the 'official' Konami Code sequence
  var konamiCode = ['6', '9'];

  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;

  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

      // move to the next key in the konami code sequence
      konamiCodePosition++;

      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;

        document.getElementById("progress").style.display = "none";

        activateCheats();
        zero();
        document.getElementById("rickroll").pause();
      }
    } else //if you type past 6-9-

    {
      zero();

      if (rock % 2 == 0) {
        var paper = 2;
        document.getElementById("rickroll").play();
      }


      if (konamiCodePosition < 2) {
        nomorenicegif();
        nomorenicevideo();
        document.getElementById(69).style.display = "block";
        document.getElementById(3).style.display = "none";
      }
    }
  });

  function activateCheats() {
    playvideo();
    nicegif();
    document.getElementById(69).style.display = "none";
    document.getElementById(3).style.display = "block";

  }

  function nicegif() {
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/sTYFsFVK0c1lAnkj4T/giphy.gif')";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundSize = "contain";
  }

  function nomorenicegif() {
    document.body.style.backgroundImage = "none";
  }

  function zero() {
    konamiCodePosition = 0;
  }




let rock = 1;
let bed = 1;
let quack = 0;

  // a key map of allowed keys
  var allowedKeys2 = {
    52: '4',
    50: '2',
    48: '0',
  };

  // the 'official' Konami Code sequence
  var konamiCode2 = ['4', '2', '0'];

  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition2 = 0;

  // add keydown event listener
  document.addEventListener('keydown', function(e2) {

    // get the value of the key code from the key map
    var key2 = allowedKeys2[e2.keyCode];
    // get the value of the required key from the konami code
    var requiredKey2 = konamiCode2[konamiCodePosition2];

    // compare the key with the required key
    if (key2 == requiredKey2) {

      // move to the next key in the konami code sequence
      konamiCodePosition2++;


      // if the last key is reached, activate cheats
      if (konamiCodePosition2 == konamiCode2.length) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;

        document.getElementById("progress").style.display = "none";

        nicegif2();
        playvideo2();
        activateCheats2();
        zero2()
        document.getElementById("rickroll").pause();
      }
    } else //if key is incorrect
    //if you type past 4-2-0-

    {
      zero2();

      if (rock % 2 == 0 && paper % 2 == 0) {
        document.getElementById("rickroll").play();
      }

      if (konamiCodePosition2 < 3) //konamiCodePosition2 is 0 or 1
      {
        nomorenicevideo2();

        document.getElementById(5).style.display = "none";

      }
    }
  });




    function ricky() {

      rock++

      var vid3 = document.getElementById("rickroll");
      document.getElementById("rickroll").classList.toggle("rickyroll");
      if (vid3.paused === true) {
        vid3.currentTime = "0";
        vid3.play();
        pressed1();
        //document.getElementById("firstfew").style = "opacity: 0"
        document.getElementById("rickroll2").style.display = "none";
        document.getElementById("progress").style.display = "none";
        document.getElementById("optional").style.display = "block";
      } else {
        vid3.pause();
        pressed2();
        //document.getElementById("firstfew").style = "opacity: 0"
        document.getElementById("rickroll2").style.display = "none";
        document.getElementById("progress").style.display = "block";
        document.getElementById("optional").style.display = "none";

      }
    }

    function pressed1() {
      var pressed = 1;
    }

    function pressed2() {
      var pressed = 2;
    }

  function activateCheats2() {
    document.getElementById(69).style.display = "none";
    document.getElementById(5).style.display = "block";
  }

  function nicegif2() {
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/Wzewn6bO0OuOa0ifog/giphy.gif')";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundSize = "contain";
  }

  function zero2() {
    konamiCodePosition2 = 0;
  }

  function playvideo() {
    var vid = document.getElementById("vidplay");
    vid.currentTime = "0";
    vid.play();
    vid.loop = true;
    vid.volume = 1;
  }

  function nomorenicevideo() {
    var vid = document.getElementById("vidplay");
    vid.pause();
  }



  function playvideo2() {
    var vid2 = document.getElementById("vidplay2");
    vid2.currentTime = "0";
    vid2.play();
    vid2.loop = true;
    vid2.volume = 1;
  }

  function nomorenicevideo2() {
    var vid2 = document.getElementById("vidplay2");
    vid2.pause();
  }



  function sidebarfunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("bar");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
      text.style.float = "right";
      text.style.width = "15%";
      text.style.height = "0px";
    } else {
      text.style.display = "none";
    }
  }

  function mainfunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("main");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
      text.style.float = "left";
      text.style.width = "85%";
      text.style.height = "280px";
    } else {
      text.style.display = "block";
      text.style.float = "left";
      text.style.width = "100%";
      text.style.height = "280px";
    }
  }

  function scroll2010() {
    var ten = getElementById('2010.tag')
    ten.scrollIntoView()
  }

  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }










  function ontext() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }




  function ontext2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }




  function ontext3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }




  function ontext4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }




  function ontext5() {
    var x = document.getElementById("myDIV5");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo5() {
    var x = document.getElementById("myDIV5");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo5() {
    var x = document.getElementById("myDIV5");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext6() {
    var x = document.getElementById("myDIV6");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo6() {
    var x = document.getElementById("myDIV6");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo6() {
    var x = document.getElementById("myDIV6");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext7() {
    var x = document.getElementById("myDIV7");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo7() {
    var x = document.getElementById("myDIV7");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo7() {
    var x = document.getElementById("myDIV7");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext8() {
    var x = document.getElementById("myDIV8");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo8() {
    var x = document.getElementById("myDIV8");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo8() {
    var x = document.getElementById("myDIV8");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext9() {
    var x = document.getElementById("myDIV9");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo9() {
    var x = document.getElementById("myDIV9");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo9() {
    var x = document.getElementById("myDIV9");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext10() {
    var x = document.getElementById("myDIV10");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo10() {
    var x = document.getElementById("myDIV10");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo10() {
    var x = document.getElementById("myDIV10");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext11() {
    var x = document.getElementById("myDIV11");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo11() {
    var x = document.getElementById("myDIV11");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo11() {
    var x = document.getElementById("myDIV11");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext12() {
    var x = document.getElementById("myDIV12");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo12() {
    var x = document.getElementById("myDIV12");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo12() {
    var x = document.getElementById("myDIV12");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext13() {
    var x = document.getElementById("myDIV13");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo13() {
    var x = document.getElementById("myDIV13");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo13() {
    var x = document.getElementById("myDIV13");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext14() {
    var x = document.getElementById("myDIV14");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo14() {
    var x = document.getElementById("myDIV14");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo14() {
    var x = document.getElementById("myDIV14");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext15() {
    var x = document.getElementById("myDIV15");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo15() {
    var x = document.getElementById("myDIV15");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo15() {
    var x = document.getElementById("myDIV15");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext16() {
    var x = document.getElementById("myDIV16");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo16() {
    var x = document.getElementById("myDIV16");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo16() {
    var x = document.getElementById("myDIV16");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext17() {
    var x = document.getElementById("myDIV17");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo17() {
    var x = document.getElementById("myDIV17");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo17() {
    var x = document.getElementById("myDIV17");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext18() {
    var x = document.getElementById("myDIV18");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo18() {
    var x = document.getElementById("myDIV18");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo18() {
    var x = document.getElementById("myDIV18");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext19() {
    var x = document.getElementById("myDIV19");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo19() {
    var x = document.getElementById("myDIV19");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo19() {
    var x = document.getElementById("myDIV19");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext20() {
    var x = document.getElementById("myDIV20");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo20() {
    var x = document.getElementById("myDIV20");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo20() {
    var x = document.getElementById("myDIV20");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext21() {
    var x = document.getElementById("myDIV21");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo21() {
    var x = document.getElementById("myDIV21");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo21() {
    var x = document.getElementById("myDIV21");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext22() {
    var x = document.getElementById("myDIV22");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo22() {
    var x = document.getElementById("myDIV22");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo22() {
    var x = document.getElementById("myDIV22");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext23() {
    var x = document.getElementById("myDIV23");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo23() {
    var x = document.getElementById("myDIV23");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo23() {
    var x = document.getElementById("myDIV23");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext24() {
    var x = document.getElementById("myDIV24");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo24() {
    var x = document.getElementById("myDIV24");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo24() {
    var x = document.getElementById("myDIV24");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext25() {
    var x = document.getElementById("myDIV25");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo25() {
    var x = document.getElementById("myDIV25");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo25() {
    var x = document.getElementById("myDIV25");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext26() {
    var x = document.getElementById("myDIV26");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo26() {
    var x = document.getElementById("myDIV26");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo26() {
    var x = document.getElementById("myDIV26");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext27() {
    var x = document.getElementById("myDIV27");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo27() {
    var x = document.getElementById("myDIV27");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo27() {
    var x = document.getElementById("myDIV27");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext28() {
    var x = document.getElementById("myDIV28");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo28() {
    var x = document.getElementById("myDIV28");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo28() {
    var x = document.getElementById("myDIV28");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext29() {
    var x = document.getElementById("myDIV29");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo29() {
    var x = document.getElementById("myDIV29");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo29() {
    var x = document.getElementById("myDIV29");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext30() {
    var x = document.getElementById("myDIV30");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo30() {
    var x = document.getElementById("myDIV30");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo30() {
    var x = document.getElementById("myDIV30");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext31() {
    var x = document.getElementById("myDIV31");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo31() {
    var x = document.getElementById("myDIV31");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo31() {
    var x = document.getElementById("myDIV31");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext32() {
    var x = document.getElementById("myDIV32");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo32() {
    var x = document.getElementById("myDIV32");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo32() {
    var x = document.getElementById("myDIV32");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext33() {
    var x = document.getElementById("myDIV33");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo33() {
    var x = document.getElementById("myDIV33");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo33() {
    var x = document.getElementById("myDIV33");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext34() {
    var x = document.getElementById("myDIV34");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo34() {
    var x = document.getElementById("myDIV34");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo34() {
    var x = document.getElementById("myDIV34");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function ontext35() {
    var x = document.getElementById("myDIV35");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function onvideo35() {
    var x = document.getElementById("myDIV35");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function offvideo35() {
    var x = document.getElementById("myDIV35");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
