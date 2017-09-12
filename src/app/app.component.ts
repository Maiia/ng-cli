import { Component, AfterViewInit, HostListener, Inject, Input } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public config: String = `
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    
    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',
    lazyLoading: true,
    
    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });`


  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    scrollingSpeed: 1000,
    paddingTop: '50px',
    
    css3: true,
    onLeave: function(index, nextIndex, direction){
      if(index === 1){
        $(".nav").addClass("bg-dark text-white")
      }
    },
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      console.log(anchorLink, index)
      
      if(index === 1){
        $(".nav").removeClass("bg-dark text-white")
      } else {
        $(".nav").addClass("bg-dark text-white")
      }
      //using index
      if(index == 3){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });  
      }
    }
});

  constructor(public pageService: MnFullpageService){
    console.log(this.pageService)
  }

  public ngAfterViewInit() {
      
  }
}