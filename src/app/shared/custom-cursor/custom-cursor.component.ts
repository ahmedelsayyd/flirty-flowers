import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 , ViewChild} from '@angular/core';


interface CursorPosition{
  mouseX: number
  mouseY: number
  destinationX: number
  destinationY: number
  distanceX: number
  distanceY: number
  key: number
}

@Component({
  selector: 'custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss']
})



export class CustomCursorComponent implements OnInit, AfterViewInit {
  @ViewChild('cursor') cursor:ElementRef;
  @ViewChild('secondaryCursor') secondaryCursor:ElementRef;

  positionRef:CursorPosition = {
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1};


  @HostListener('document:mousemove', ['$event']) trackCursor(event){

    const {clientX, clientY} = event
    
    
    const mouseX = clientX;
    const mouseY = clientY;

    this.positionRef.mouseX = mouseX - this.secondaryCursor.nativeElement.clientWidth / 2
    this.positionRef.mouseY = mouseY - this.secondaryCursor.nativeElement.clientHeight / 2

    this.rendrer.setStyle(
      this.cursor.nativeElement, 'transform', 
      `translate3d(${mouseX - this.cursor.nativeElement.clientWidth / 2}px, 
                    ${mouseY - this.cursor.nativeElement.clientHeight / 2}px, 0)`)

  }


  constructor(private rendrer: Renderer2) { }

  ngOnInit(): void {

  }
  
  
  
  ngAfterViewInit(): void {
    this.followMouse()
  }


  followMouse(){
    
    this.positionRef.key = requestAnimationFrame(this.followMouse.bind(this));
    
    const{mouseX, mouseY, destinationX, destinationY, distanceX, distanceY} = this.positionRef

    if(!destinationX || !destinationY){

      this.positionRef.destinationX = mouseX
      this.positionRef.destinationY = mouseY

    }else{

      this.positionRef.distanceX = (mouseX - destinationX) * 0.2
      this.positionRef.distanceY = (mouseY - destinationY) * 0.2


      if((Math.abs(this.positionRef.distanceX) + Math.abs(this.positionRef.distanceY)) < 0.1){

        this.positionRef.destinationX = mouseX
        this.positionRef.destinationY = mouseY
      }else{

        this.positionRef.destinationX += distanceX
        this.positionRef.destinationY += distanceY
      }
    }

    this.rendrer.setStyle(this.secondaryCursor.nativeElement, 'transform', `translate3d(${destinationX}px, ${destinationY}px, 0)`)


  }
}
