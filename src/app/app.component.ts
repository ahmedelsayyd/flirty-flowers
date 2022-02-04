import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  preloader: boolean = true
  setTimeout :any

  locoScroll
  
  constructor(@Inject(DOCUMENT)  private document: Document){}

  ngOnInit(): void {

      this.setTimeout = setTimeout(()=>{
        this.preloader = false
      }, 3000)

    // setTimeout(() => { 
    //   this.initLocomotiveScroll()
    // }, 3000);
      
  }
    
  ngAfterViewInit(): void {

  }

    
//  initLocomotiveScroll(){

//     const scrollEl = document.querySelector("#main-container")    
//     let locoScroll = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       class: "is-reveal"
//     })


//     locoScroll.on("scroll", () => {
//       ScrollTrigger.update();
//     });

//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         if (locoScroll) {
//           return arguments.length
//             ? locoScroll.scrollTo(value, 0, 0)
//             : locoScroll.scroll.instance.scroll.y;
//         }
//         return null;
//       },
//       scrollLeft(value) {
//         if (locoScroll) {
//           return arguments.length
//             ? locoScroll.scrollTo(value, 0, 0)
//             : locoScroll.scroll.instance.scroll.x;
//         }
//         return null;
//       }
//     });


//     const lsUpdate = () => {
//       if (locoScroll) {
//         locoScroll.update();
//       }
//     };


//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();

//   }

  ngOnDestroy(): void {
      this.setTimeout.clearInterval()
      // if (locoScroll) {
      //   ScrollTrigger.removeEventListener("refresh", lsUpdate);
      //   locoScroll.destroy();
      //   locoScroll = null;
      //   console.log("Kill", locoScroll);
      // }
  }

}
