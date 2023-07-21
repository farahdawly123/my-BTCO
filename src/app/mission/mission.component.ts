import { Component, ViewChild } from '@angular/core';
import { TinySliderInstance, TinySliderSettings } from 'tiny-slider';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  //mission --------------------------------------------------------
  @ViewChild('tinySlider', { static: false }) tinySlider!: TinySliderInstance;
  // ADD THE SLIDER CONFIG HERE (show tiny slider documentation for more)
  public tinySliderConfig: TinySliderSettings = {
    gutter: 20,
    items: 1,
    mouseDrag: true,

    //  autoplay:true,

  };
  ngOnInit(): void {
    // Change the background of the navbar to bg-black
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('bg-black');
    }
  }
}
