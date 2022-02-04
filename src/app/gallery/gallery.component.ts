import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
gsap.registerPlugin(ScrollTrigger)


 export interface GalleryItem{
  src: string
  title: string
  subtitle: string
  category: string
}

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  @ViewChild('gallery') gallery: ElementRef
  @ViewChild('galleryWraper') galleryWraper: ElementRef

  @ViewChildren('galleryItemComp')  galleryItemComp : QueryList<GalleryItemComponent>
  activeImage = 1


  images: GalleryItem[] = [
    {
      src:
        "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
      title: "Dracaena Trifasciata",
      subtitle: "Live the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      src:
        "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
      title: "Cereus Penuvianus",
      subtitle: "Live the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      src:
        "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
      title: "Calliope",
      subtitle: "Live the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      src:
        "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
      title: "Golden Pothos",
      subtitle: "Living Room",
      category: "Shooting / Adv.Campaing",
    },
  ];


  constructor() { }

  ngOnInit(): void {

    
  }
  
  ngAfterViewInit(): void {
    // let sections = gsap.utils.toArray(this.galleryItemComp)

    setTimeout(()=>{

      let sections :HTMLElement[] = []
      this.galleryItemComp.forEach(el=>{
  
        el.galleryItemWraper.forEach(e=>{
          sections.push(e.nativeElement)
        })
      })
      
      let tl =gsap.timeline({
        scrollTrigger :{
            trigger: this.galleryWraper.nativeElement,
            // scroller: '#main-container',
            start: "top top",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: ()=> `+=${this.galleryWraper.nativeElement.offsetWidth}`,
            onLeave: ()=>{ ScrollTrigger.refresh()},

          }
      })

      tl.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          duration:7
      })

      
      // gsap.to(sections, {
      //     xPercent: -100 * (sections.length - 1),
      //     ease: 'none',
      //     duration:10,
      //     scrollTrigger :{
      //       trigger: this.galleryWraper.nativeElement,
      //       // scroller: '#main-container',
      //       start: "top top",
      //       pin: true,
      //       scrub: 0.5,
      //       snap: 1 / (sections.length - 1),
      //       end: ()=> `+=${this.galleryWraper.nativeElement.offsetWidth}`
      //     }
      //   })
  
    })

  }


  handelActiveImage(e){
    this.activeImage = e
    
  }


}
