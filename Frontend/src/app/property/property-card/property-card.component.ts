import { sharedStylesheetJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{

  property:any={
    ID:1,
    "Name":"Sayed House",
    "Type":"House",
    "Price":12000
  }
}
