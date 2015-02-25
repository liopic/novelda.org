var counter = 0;
var anim = setInterval( function(){
    var obj1 = document.getElementById('shape1');
    obj1.style.opacity = (Math.sin(counter/17) +1)/2;
    var obj2 = document.getElementById('shape2');
    obj2.style.opacity = (Math.sin(counter/11) +1)/2;
//    var obj3 = document.getElementById('shape3');
//    obj3.style.opacity = (Math.sin(counter/13) +1)/2;
    counter++;
    },
    100);
