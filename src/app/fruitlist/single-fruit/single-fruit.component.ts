import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-fruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss'
})
export class SingleFruitComponent {
  @Input() fruit = {
    name: "Apfel",
    img: "apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews: [{ name: "Kevin W.", text: "ist lecker" }, { name: "Arne P.", text: "nicht so meins" }],
  };  //Default-Fall

  inputData = "";

  @Output("fruitName") fruitname = new EventEmitter<string>(); // Emit => wer von außen draufguckt (bei uns der Partent!) bekommt durch emit(); mitgeteilt das sich hier etwas ändert. 

  sendInputData() {
    this.fruitname.emit(this.inputData); //.emit() => Schmeißt ein Event was vom Parent ausgelesen werden kann. In diesem Beispiel wird als Event der inhalt der Variablen "inputData" geliefert
    this.inputData = ""; //InputDaten löschen, nachdem Sie an den Parent geliefert wurden
  }
}
