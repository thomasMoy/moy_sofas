let swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
let swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

//Countdown timer
let countDownDate = new Date().getTime() + 500000;


let x = setInterval(function() {

  
let now = new Date().getTime();
    
  
let distance = countDownDate - now;
    
 
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

$('#basket-button').on('click', function(){
  let sizeOption = $('select option:selected').html();
  alert(`You have selected ${sizeOption}!`);
});

/*Size is  set in pixels... supports being written as: '250px' */let magnifierSize = 75;

/*How many times magnification of image on page.*/let magnification = 4;

function magnifier() {

  this.magnifyImg = function(ptr, magnification, magnifierSize) {
  let $pointer;
    if (typeof ptr == "string") {
      $pointer = $(ptr);
    } else if (typeof ptr == "object") {
      $pointer = ptr;
    }
    
    if(!($pointer.is('.main-image'))){
      alert('Object must be image.');
      return false;
    }

    magnification = +(magnification);

    $pointer.hover(function() {
      $(this).css('cursor', 'none');
      $('.magnify').show();
      
    let width = $(this).width();
    let height = $(this).height();
    let src = $(this).attr('src');
    let imagePos = $(this).offset();
    let image = $(this);

      if (magnifierSize == undefined) {
        magnifierSize = '150px';
      }

      $('.magnify').css({
        'background-size': width * magnification + 'px ' + height * magnification + "px",
        'background-image': 'url("' + src + '")',
        'width': magnifierSize,
        'height': magnifierSize
      });

      
    let magnifyOffset = +($('.magnify').width() / 2);
    let rightSide = +(imagePos.left + $(this).width());
    let bottomSide = +(imagePos.top + $(this).height());

      $(document).mousemove(function(e) {
        if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
          $('.magnify').hide();
          $(document).unbind('mousemove');
        }
      let backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
        $('.magnify').css({
          'left': e.pageX - magnifyOffset,
          'top': e.pageY - magnifyOffset,
          'background-position': backgroundPos
        });
      });
    }, function() {

    });
  };

  this.init = function() {
    $('body').prepend('<div class="magnify"></div>');
  }

  return this.init();
}
let magnify = new magnifier();
magnify.magnifyImg('.main-image', magnification, magnifierSize);

$("#aubergine-thumbnail").on('click', function(){
  $("#main-image-slider").empty();
  $("#thumbnail-swiper").empty();
  $("#colour-name").empty();
  $("#main-image-slider").append(`<div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/aubergine.jpeg"/>
  </div>
  <div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/aubergine2.jpeg"/>
</div>`);
$("#colour-name").html(`Aubergine`);
$("#thumbnail-swiper").append(`<div class="swiper-slide">
  <img src="images/aubergine.jpeg" />
  </div>
  <div class="swiper-slide">
  <img src="images/aubergine2.jpeg" />
  </div>`);
  magnify.magnifyImg('.main-image', magnification, magnifierSize);
});

$("#latte-thumbnail").on('click', function(){
  $("#main-image-slider").empty();
  $("#thumbnail-swiper").empty();
  $("#colour-name").empty();
  $("#main-image-slider").append(`<div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/latte.jpeg"/>
  </div>
  <div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/latte2.jpeg"/>
</div>`);

$("#colour-name").html(`Latte`);
$("#thumbnail-swiper").append(`<div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/latte.jpeg" />
  </div>
  <div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/latte2.jpeg" />
  </div>`);
  magnify.magnifyImg('.main-image', magnification, magnifierSize);
});

$("#olive-thumbnail").on('click', function(){
  $("#main-image-slider").empty();
  $("#thumbnail-swiper").empty();
  $("#colour-name").empty();
  $("#main-image-slider").append(`<div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/olive.jpeg"/>
  </div>
  <div class="swiper-slide">
  <img class="magnifiedImg main-image" src="images/olive2.jpeg"/>
</div>`);
$("#colour-name").html(`Olive`);
$("#thumbnail-swiper").append(`<div class="swiper-slide">
  <img src="images/olive.jpeg" />
  </div>
  <div class="swiper-slide">
  <img src="images/olive2.jpeg" />
  </div>`);
  magnify.magnifyImg('.main-image', magnification, magnifierSize);
});

function openItem(evt, itemName) {
  
let i, tabcontent, tablinks;

  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(itemName).style.display = "block";
  evt.currentTarget.className += " active";
}



