import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgGxSplitTextDirective } from 'ng-gx-split-text';
import gsap from 'gsap'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('text', { static: true, read: NgGxSplitTextDirective }) text: NgGxSplitTextDirective;
  reveal = false
  constructor() { }

  ngOnInit(): void {

          
  }


ngAfterViewInit():void{
  this.text.initSplit();
  gsap.fromTo(
    this.text.words, 
    {y: 300, opacity: 0}, 
    {y: 0, opacity:1 , 
    duration:1 , 
    stagger:.2,  
    ease:"Power2.out",
      scrollTrigger:{
        trigger: '#location-text',
        start:"bottom top",
        toggleActions: "restart none none reverse",
        refreshPriority: 1,
        // toggleClass: {targets: ".location", className: "is-reveal"},
        onEnter: ()=>{ this.reveal = true},
        onLeaveBack: ()=>{ this.reveal = false},
    }} 
  )
}


  // runTextAnimation(IntersectionObserverEntry){
  //   IntersectionObserverEntry.map(entry =>{
  //     if(entry.isIntersecting){
        
  //       this.reveal = true
  //       if(!this.text.isInit) this.text.initSplit();
        
  //       gsap.fromTo(this.text.words, {y: 200, opacity: 0}, {y: 0, opacity:1 , duration:1 , stagger:.1,  ease:"Power2.out"})
  //     }else{
  //       this.reveal = false
  //     }
  //   })
  // }

}
