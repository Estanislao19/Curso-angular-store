import { CommonModule } from '@angular/common';
import { Component,Input, Output ,EventEmitter} from '@angular/core';
import { Product } from '@shared/models/product.model';
import {ReversePipe} from '@shared/pipes/reverse.pipe'
import {TimeAgoPipe} from '@shared/pipes/time-ago.pipe'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversePipe,TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;


  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('este fue un click desde el hijo');
    this.addToCart.emit(this.product)//este producto quiero que lo agregues al carrito de compras
  }
}
