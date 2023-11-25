import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() selectCard: EventEmitter<string> = new EventEmitter<string>();

  onCardClick() {
    this.selectCard.emit(this.product._id);
  }
}
