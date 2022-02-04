import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgGxSplitTextDirective } from 'ng-gx-split-text';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('text', { static: true, read: NgGxSplitTextDirective }) text: NgGxSplitTextDirective;
  reveal = false
  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    
      
     this.text.initSplit();

      gsap.fromTo(this.text.lineWords, 
      {y: 20, opacity: 0}, 
      {y: -20, 
      opacity:1 , 
      duration:.6 , 
      stagger:.06,  
      ease:"Power4.out",
        scrollTrigger:{
          trigger: this.text.lineWords,
          start:"top 80%",
          toggleActions: "restart none none reverse",
          // toggleClass: {targets: "#headline", className: "is-reveal"},
          onEnter: ()=>{ this.reveal = true},
        }
      })

}



  runTextAnimation(IntersectionObserverEntry){
    // IntersectionObserverEntry.map(entry =>{
      
    //   if(entry.isIntersecting){

    //     if(!this.text.isInit) this.text.initSplit();
    //     this.reveal = true

    //       this.text.initSplit();

    //       gsap.fromTo(this.text.lineWords, 
    //       {y: 20, opacity: 0}, 
    //       {y: -20, opacity:1 , duration:.6 , stagger:.06,  ease:"Power4.out"
    //       scrollTrigger:{
    //         trigger: this.text.lineWords,
    //         start:"top top",
    //         toggleActions: "play none none none"
    //       }}
    //       )
    //   }else{
    //     this.reveal = false
    //   }
    //})
  }

}
