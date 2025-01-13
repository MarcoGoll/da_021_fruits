import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleFruitComponent } from './single-fruit/single-fruit.component';
import { FruitlistDataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingleFruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistDataService);

  fontColorGood = 'green';
  fontColorBad = 'red';



  howItWorks: string = "bad";

  logIndex(index: number) {
    console.log(index);
  }

  logName(name: string) {
    console.log(name);
  }

}
