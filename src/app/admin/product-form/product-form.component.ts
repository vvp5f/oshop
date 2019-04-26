import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import * as firebase from 'firebase';
import { ProductService } from 'src/app/product.service';
import { AngularFireList,  } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [CategoryService]

})
export class ProductFormComponent implements OnInit {
 
  categories$;

  constructor(private categoryService: CategoryService, private productService: ProductService) 
  {
    this.categories$= categoryService.getCategories();
    // console.log ("categories$: " +this.categories$)
  }

  save(product)
  {
    this.productService.create(product);
  }
  ngOnInit()
  {
    
  }

}
