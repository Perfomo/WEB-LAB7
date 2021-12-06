window.onload = function()
{
    let num1 = 0
    let slogan = ["Всё надоело... Может пора отдохнуть?", "Работа, работа, а когда же отдых?", "Когда в последний раз загорал на пляже, купался в море?"];
    function slogan_op1()
    {
        document.querySelector('.slogan').classList.remove("anim_slogan_op0");
        document.querySelector('.slogan').classList.add("anim_slogan_op1");
    }
    function slogan_op0()
    {
        document.querySelector('.slogan').classList.remove("anim_slogan_op1");
        document.querySelector('.slogan').classList.add("anim_slogan_op0");
    }
    function slogan_func()
    {
        slogan_op1();
        if (num1 == 3)
        {
            num1 = 0;
        } 
        document.querySelector(".slogan").innerHTML = slogan[num1];
        num1++;
        setTimeout(slogan_op0,3000);
    }
    slogan_func();
    setInterval(slogan_func, 9001);

    function remove_arr (arr,x)
    {
        if (x==0)
        {
            arr.shift();
        }
        else
        {
            arr.splice(t,1);
        }
        return arr;
    }
    let hot_jpg = ["images/hot_1.jpg", "images/hot_2.jpg", "images/hot_3.jpg", "images/hot_4.jpg", "images/hot_5.jpg","images/hot_6.jpg","images/hot_7.jpeg","images/norm_1.jpg", "images/norm_2.jpg","images/norm_3.jpg", "images/norm_4.jpg", "images/norm_5.jpg"];
    let t = Math.floor(Math.random()*11);
    document.querySelector('.cont1').style.backgroundImage = `url(${hot_jpg[t]})`;
    hot_jpg = remove_arr(hot_jpg, t);
    t = Math.floor(Math.random()*10);
    document.querySelector('.cont3').style.backgroundImage = `url(${hot_jpg[t]})`;


    let all_img = document.querySelectorAll('.main'); 

    // $(function () {
    //     /* set variables locally for increased performance */
    //     var scroll_timer;
    //     var displayed = false;
    //     var $message = $('.scrollup a');
    //     var $window = $(window);
    //     var top = $(document.body).children(0).position().top;
    //     /* react to scroll event on window */
    //     $window.scroll(function () {
    //     window.clearTimeout(scroll_timer);
    //     scroll_timer = window.setTimeout(function () {
    //     if($window.scrollTop() <= top)
    //     {
    //     displayed = false;
    //     $message.fadeOut(500);
    //     }
    //     else if(displayed == false)
    //     {
    //     displayed = true;
    //     $message.stop(true, true).show().click(function () { $message.fadeOut(500); });
    //     }
    //     }, 100);
    //     });
    //     });
  let scrollup = document.querySelector('.scrollup');

  window.onscroll = () => {
    scroll();
    highlightCenter(); 
    if (window.scrollY > 700)
    {
      scrollup.classList.remove('hide');
      console.log("govno");
    }
    else if (window.scrollY < 700)
    {
      scrollup.classList.add('hide');
      console.log("add");
    }
  };
  scrollup.onclick = () =>
  {
    window.scrollTo({top:0, left:0, behavior: 'smooth'});
  };
  



  // window.onscroll = function () { scroll(); highlightCenter() };
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
  
  function highlightCenter() {
    let articles = document.querySelectorAll(".content");
    let p = document.querySelectorAll(".hot_text");

    for (let i = 0; i < articles.length; i++) {
      if (isElementInViewport(articles[i])) {
        articles[i].classList.add("hover");
        p[i].classList.add("hover");
      } else {
        articles[i].classList.remove("hover");
        p[i].classList.remove("hover");
      }
    }
  }
     
  
 };
 