
window.onload = function(){

    let hamburger = document.querySelector('[data-js="header-hamburger"]');
    let body = document.querySelector('body');
    const vid = document.querySelector('video');
    const btn_play = document.querySelector('.btn-play');
    const btn_pause = document.querySelector('.btn-pause');
    var btn_myBar = document.getElementById("btn-myBar"); 

    hamburger.onclick = function(){
        body.classList.toggle('menu-isOpen');
        
    };

    btn_play.onclick = function() {
        vid.play();
    };
    btn_pause.onclick = function() {
        vid.pause();
    }

    
    vid.onprogress = function() {
        // alert("Downloading video");
    };


    btn_myBar.onclick = function() {
        var elem = document.getElementById("myBar"); 
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
          }
        }
        return frame();
    }


    // function move() {
    //     var elem = document.getElementById("myBar"); 
    //     var width = 10;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //       if (width >= 100) {
    //         clearInterval(id);
    //       } else {
    //         width++; 
    //         elem.style.width = width + '%'; 
    //         elem.innerHTML = width * 1 + '%';
    //       }
    //     }
    //   }

}