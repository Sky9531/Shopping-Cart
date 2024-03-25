import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css'
})
export class AppChildComponent {
  @Input() product: any; 
  @Output() addToCartClicked = new EventEmitter<string>();
   addedToCart: boolean = false; 

  handleClick() {
    
    this.addToCartClicked.emit(this.product.name);
    this.addedToCart = true;
  }

}
