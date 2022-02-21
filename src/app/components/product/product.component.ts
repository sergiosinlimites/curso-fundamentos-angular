import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, OnDestroy } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit, OnDestroy{
  @Input() product: Product
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit');
  }

  // ngDoCheck(){
  //   console.log('ngDoCheck')
  // }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

  addToCart(){
    console.log('agregado');
    this.productClicked.emit(this.product.id);
  }
}
