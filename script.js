
function executeAnimation() {
    var prog = document.querySelectorAll(".prog");
    var grow = document.querySelectorAll(".grow");
    var h3 = document.querySelectorAll("#page1-right-right h3");
    var img = document.querySelector(".img-div");
    var text = document.querySelector("#page1-text h1")
    var btn = document.querySelector("#page1-text h2")
    // var clk = document.querySelector("#page1-left-left h6")
  
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
  
    var interval1, interval2, interval3; // Variables to store interval IDs
  
    function animateStep1() {
      clearInterval(interval1); // Clear previous interval if it exists
      interval1 = setInterval(function () {
        if (flag1 <= 100) {
          flag1++;
          grow[0].style.height = flag1 + "%";
          h3[0].style.color = "black";
          text.innerHTML = "Gucci Horsebit 1955"
          btn.innerHTML = "<button>EXPLORE THE COLLECTION</button>"
        } else {
          clearInterval(interval1); // Clear the interval when it reaches 100
          img.style.backgroundImage ="url('https://media.gucci.com/dynamic/b3c8/hj0zGAzYfmKA5b+KMGgjOzBOqftbqLgl3Ikj+op4yC3i8u28c5adixKclXHOawWXzHh019bgDQKmIqHq8GLu9tU6Qdj3+FaNqIE+9_41B+ymtpnzVeT_W86nlHzroDCMpXQIt4CQC2Dh_wrhugRt+IpFEnyeF4I5uCN97mYf0FZp0t1OwTX_3ZvCYc1FeVybpdAHsyQPRuuwJpED4qjr8_PYunOtb3sUW9bNenkpWaZMBQSx5895Mx_zO3APDzXlpn1lqExvGIqBICl1Z3+hIeL4NYUX63pjRKLWlsfRSTk=/Gucci_Desktop_Routing_2UP_GQJannik-2-July23_3x4.png')";
          h3[0].style.color = "#a3a3a3";
          grow[0].style.height = 0 + "%";
          setTimeout(animateStep2, 10); // Move to the next animation step after 2000ms (2 seconds)
        }
      }, 30);
    }
  
    function animateStep2() {
      clearInterval(interval2); // Clear previous interval if it exists
      interval2 = setInterval(function () {
        if (flag2 <= 100) {
          flag2++;
          grow[1].style.height = flag2 + "%";
          h3[1].style.color = "black";
          text.innerHTML = "MENS BAGS"
          btn.innerHTML = "<button>EXPLORE THE COLLECTION</button>"
        } else {
          clearInterval(interval2); // Clear the interval when it reaches 100
          img.style.backgroundImage ="url('https://media.gucci.com/dynamic/b3c8/16UmSXGt_tJeGQoWflxiclkiQ50LtrG+gtDDCrFrSXXIeEb4zQf9E3_hYKnB30GdZG3_fTPuvlhlb7Np266T8z9TDbdix+FWN0hqLGdT6Ca075OnqJyNHVdKW1HRGXX0Z94IEGsnqZN3IJ8fn1QFvePpCQT0m6N6OdT3jpD1KrOpOMxQknG_8+H3v_sbIlZAKncx3k_OGPwppnH_9uCRGvx9y6KlLvE9AX5hkUZzo5vNza_Mznv_vTrlK8hTfhwNaAy3IQO4ucAqoqBO2weTQOXul1jI7M4Wy2njzobwVyQ=/Gucci_HP-20June23_AceJune23_Carousel_Desktop_.png')";
          h3[1].style.color = "#a3a3a3";
          grow[1].style.height = 0 + "%";
          setTimeout(animateStep3, 10); // Move to the next animation step after 2000ms (2 seconds)
        }
    }, 30);
}

function animateStep3() {
    clearInterval(interval3); // Clear previous interval if it exists
    interval3 = setInterval(function () {
        if (flag3 <= 100) {
            flag3++;
            grow[2].style.height = flag3 + "%";
            h3[2].style.color = "black";
              text.innerHTML = "GUCCI ACE"
              btn.innerHTML = "<button>EXPLORE THE COLLECTION</button>"
        } else {
          clearInterval(interval3); // Clear the interval when it reaches 100
          img.style.backgroundImage ="url('https://media.gucci.com/dynamic/b3c8/6w5c20YC6pJMA3l52D7idovgwp6ckPlW+myA5i96A4RerBZTD1xfRwgOye+yeg2UOpDr4CXrnEX1ZVhmMjiVLwkeYK__a6lT54B0AqG8BBzm1qQPbAK2Cu00RcdbcBVMfhdnWG8UMVP65X674gJJ63zTv5+qBiimY5wQmrh5FPWG0OHnSufwK2dtmHLAJ8W7Yx6yZg4HLSbjX3TjYC1Vd4vWgkXoqNYvm_2G5dcV6n3ohCB+6+7qPMfxTAS292cu/Portrait_Horsebit-4-Default.png')";
          h3[2].style.color = "#a3a3a3";
          grow[2].style.height = 0 + "%";
          
          setTimeout(executeAnimation, 10); // Move to the next cycle of animation after 2000ms (2 seconds)
        }
      }, 30);
    }
  
    // Start the animation by calling the first step
    animateStep1();
  }
  
executeAnimation(); // Call the function when the website is loaded
  



gsap.to("#page1 svg",{
    scale:0.12,
    marginTop:"-125px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -7%",
        end:"top 0%",
        scrub: 2,
    }
})
gsap.to("#page1 #img-divv",{
    // delay:10,
    marginTop:"148px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -8%",
        end:"top -0%",
        scrub:2
    },
})

gsap.to("#page1 #page1-left",{
    // delay:10,
    top:"38%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -8%",
        end:"top -0%",
        scrub:2
    },
})

gsap.to("#page1 #nav h4",{
    visibility: "visible",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -10%",
        scrub:true
    },
})


gsap.to("#page1-text h1",{
    color:"black",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top -96%",
        end:"top -103%",
        // markers:true,
        scrub:1
    },
})

gsap.to("#page1-text button",{
    backgroundColor:"black",
    // mixBlendMode: "difference",
    color:"white",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top -84%",
        end:"top -100%",
        // markers:true,
        scrub:1
    },
})


gsap.to("#page1-text",{
    position:"sticky",
    color:"white",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top -121%",
        end:"top -150%",
        // markers:true,
        scrub:true
    },
})

var larow = document.querySelector("#left-arrow")
var rarow = document.querySelector("#right-arrow")
var raper = document.querySelector(".inner-raper")
var scroll1 = document.querySelector("#scroll-div #scro1")
var scroll2 = document.querySelector("#scroll-div #scro2")
var scroll3 = document.querySelector("#scroll-div #scro3")
var scroll4 = document.querySelector("#scroll-div #scro4")
var saif = 0

scroll1.style.backgroundColor = "black"
rarow.addEventListener("click",function(){
    if (saif == 0) {
        scroll1.style.backgroundColor = "transparent"
        scroll2.style.backgroundColor = "black"
        raper.style.transform = "translateX(-15%)"
        saif = 1
        
        
    }
    else if(saif == 1){
        scroll2.style.backgroundColor = "transparent"
        scroll3.style.backgroundColor = "black"
        raper.style.transform = "translateX(-40%)"
        saif = 2
    }
    
    else if(saif == 2){
        scroll3.style.backgroundColor = "transparent"
        scroll4.style.backgroundColor = "black"
        raper.style.transform = "translateX(-65%)"
        saif = 3
    }
    
    else if(saif == 3){
        scroll4.style.backgroundColor = "transparent"
        scroll1.style.backgroundColor = "black"
        raper.style.transform = "translateX(0%)"
        saif = 0
    }
})
var rafeeq = 0

larow.addEventListener("click",function(){
    if (rafeeq == 0) {
        raper.style.transform = "translateX(-40%)"
        scroll4.style.backgroundColor = "transparent"
        scroll3.style.backgroundColor = "black"
        rafeeq = 1
    }
    else if(rafeeq == 1){
        scroll3.style.backgroundColor = "transparent"
        scroll2.style.backgroundColor = "black"
        raper.style.transform = "translateX(-15%)"
        rafeeq = 2
    }
    
    else if(rafeeq == 2){
        scroll2.style.backgroundColor = "transparent"
        scroll1.style.backgroundColor = "black"
        raper.style.transform = "translateX(-0%)"
        rafeeq = 3
    }
    
    else if(rafeeq == 3){
        scroll1.style.backgroundColor = "transparent"
        scroll4.style.backgroundColor = "black"
        raper.style.transform = "translateX(-65%)"
        rafeeq = 0
    }
})


// gsap.to("#page3-left-text",{
//     // position:"static",
//     position:"sticky",
//     scrollTrigger:{
//         trigger:"#page3-left-text",
//         scroller:"body",
//         start:"top -10%",
//         end:"top -10%",
//         markers:true,
//         scrub:5,
//         // pin:true
//     },
// })

















// var main = document.querySelector("#main")
// var prog = document.querySelectorAll(".prog")
// var grow = document.querySelectorAll(".grow")
// var h3 = document.querySelectorAll("#page1-right-right h3")
// var img = document.querySelector(".img-div")
// // var img2 = document.querySelector("#img2")
// // var img3 = document.querySelector("#img3")
// var flag1 = 0
// // var newbg = "url('https://media.gucci.com/dynamic/b3c8/hj0zGAzYfmKA5b+KMGgjOzBOqftbqLgl3Ikj+op4yC3i8u28c5adixKclXHOawWXzHh019bgDQKmIqHq8GLu9tU6Qdj3+FaNqIE+9_41B+ymtpnzVeT_W86nlHzroDCMpXQIt4CQC2Dh_wrhugRt+IpFEnyeF4I5uCN97mYf0FZp0t1OwTX_3ZvCYc1FeVybpdAHsyQPRuuwJpED4qjr8_PYunOtb3sUW9bNenkpWaZMBQSx5895Mx_zO3APDzXlpn1lqExvGIqBICl1Z3+hIeL4NYUX63pjRKLWlsfRSTk=/Gucci_Desktop_Routing_2UP_GQJannik-2-July23_3x4.png')"
// var flag2 = 0
// var flag3 = 0
// var interval1, interval2, interval3;

// // function startanime(){



// prog.forEach(function(elem){

//     main.addEventListener("",function(){
//         clearInterval(interval1)
//         interval1 = setInterval(function () {
//             if (flag1 <= 100) {
//                 flag1++
//                 grow[0].style.height = flag1 + "%"
//                 h3[0].style.color = "black"
                
//             }
//             else if(flag1 > 100) {
//                 clearInterval(interval1)
//                 h3[0].style.color = "#a3a3a3"
//                 grow[0].style.height = 0 +"%"  
//                 img.style.backgroundImage = "url('https://media.gucci.com/dynamic/b3c8/hj0zGAzYfmKA5b+KMGgjOzBOqftbqLgl3Ikj+op4yC3i8u28c5adixKclXHOawWXzHh019bgDQKmIqHq8GLu9tU6Qdj3+FaNqIE+9_41B+ymtpnzVeT_W86nlHzroDCMpXQIt4CQC2Dh_wrhugRt+IpFEnyeF4I5uCN97mYf0FZp0t1OwTX_3ZvCYc1FeVybpdAHsyQPRuuwJpED4qjr8_PYunOtb3sUW9bNenkpWaZMBQSx5895Mx_zO3APDzXlpn1lqExvGIqBICl1Z3+hIeL4NYUX63pjRKLWlsfRSTk=/Gucci_Desktop_Routing_2UP_GQJannik-2-July23_3x4.png')"

//             }
//         },30)
        
//         setTimeout(function(){
//             clearInterval(interval2)
//             interval2 = setInterval(function () {
//                 if (flag2 <= 100) {
//                     flag2++
//                     grow[1].style.height = flag2 + "%"
//                     h3[1].style.color = "black"
                    
                    
//                 }
//                 else if(flag2 > 100) {
//                     clearInterval(interval2)
//                     h3[1].style.color = "#a3a3a3"
//                     grow[1].style.height = 0 +"%"
//                     img.style.backgroundImage = "url('https://media.gucci.com/dynamic/b3c8/16UmSXGt_tJeGQoWflxiclkiQ50LtrG+gtDDCrFrSXXIeEb4zQf9E3_hYKnB30GdZG3_fTPuvlhlb7Np266T8z9TDbdix+FWN0hqLGdT6Ca075OnqJyNHVdKW1HRGXX0Z94IEGsnqZN3IJ8fn1QFvePpCQT0m6N6OdT3jpD1KrOpOMxQknG_8+H3v_sbIlZAKncx3k_OGPwppnH_9uCRGvx9y6KlLvE9AX5hkUZzo5vNza_Mznv_vTrlK8hTfhwNaAy3IQO4ucAqoqBO2weTQOXul1jI7M4Wy2njzobwVyQ=/Gucci_HP-20June23_AceJune23_Carousel_Desktop_.png')"
                    
                    
            
//         }
//     },30)
// },3000);

// setTimeout(function(){
//     clearInterval(interval3)
//    interval3 = setInterval(function () {
        
//         if (flag3 <= 100) {
//             flag3++
//             grow[2].style.height = flag3 + "%"
//             h3[2].style.color = "black"
            
            
//         }
        
//         else if(flag3 > 100) {
//             clearInterval(interval3)
//             h3[2].style.color = "#a3a3a3"
//             grow[2].style.height = 0 +"%"  
//             img.style.backgroundImage = "url('https://media.gucci.com/dynamic/b3c8/6w5c20YC6pJMA3l52D7idovgwp6ckPlW+myA5i96A4RerBZTD1xfRwgOye+yeg2UOpDr4CXrnEX1ZVhmMjiVLwkeYK__a6lT54B0AqG8BBzm1qQPbAK2Cu00RcdbcBVMfhdnWG8UMVP65X674gJJ63zTv5+qBiimY5wQmrh5FPWG0OHnSufwK2dtmHLAJ8W7Yx6yZg4HLSbjX3TjYC1Vd4vWgkXoqNYvm_2G5dcV6n3ohCB+6+7qPMfxTAS292cu/Portrait_Horsebit-4-Default.png')"


// }
// },30)
// },6000);

        

//     })

// })

// // }






















































// var main = document.querySelector("#main")
// var prog = document.querySelectorAll(".prog")
// var grow = document.querySelectorAll(".grow")
// var h3 = document.querySelector("#page1-right-right h3")
// var flag = 0

// prog.forEach(function abcd (elem){
//     main.addEventListener("mousemove",function(){
//         setInterval(function () {
//             if (flag <= 100) {
//                 flag++
//                 grow.style.height = flag + "%"
//                 h3.style.color = "black"

//             }
//             else if(flag > 100) {
//                 clearInterval()
//                 h3.style.color = "#a3a3a3"
//                 // grow.style.height = 0 +"%"  
//             }
//         },500)
//     })
    

// })

