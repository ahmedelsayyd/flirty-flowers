import { Component, OnInit , AfterViewInit} from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit, AfterViewInit {

reveal = false
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    ScrollTrigger.create({
      trigger: 'img',
      start: "top 80%",
      toggleActions: "restart none none reverse",
      onEnter: ()=>{ this.reveal = true},
      onLeaveBack: ()=>{ this.reveal = false},
    })

  }

}
