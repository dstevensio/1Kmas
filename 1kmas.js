b.onload = function() {
  for($ in a) a[$[0]+($[6]||'')]=a[$];

  with(a){
    fillStyle='#000';fc(0,0,300,150); //black background
    ba();m(0,100);fillStyle='#fff';l(75,20);l(115,40);l(125,25);l(200,90);l(210,30);l(230,40);l(245,20);l(265,20);l(280,15);l(285,35);l(295,70);l(300,90);l(300,149);l(0,149);f(); // white mountain & snow backdrop
    ba();m(47,50);fillStyle='#a9a9a9';l(52,50);l(57,40);l(67,45);l(77,40);l(97,40);l(154,50);l(200,90);l(210,60);l(220,60);l(240,50);l(270,30);l(284,30);l(320,130);l(-20,120);f(); // gray part of mountains
    fillStyle='#855E42';fc(140,55,10,7);ba();m(138,56);l(145,52);l(152,56);f(); // cabin
    ba();m(20,130);fillStyle='#CFB52B';l(60,130);l(95,100);
    f();
    
  }

};  