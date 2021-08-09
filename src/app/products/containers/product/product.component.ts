import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../store/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl('')
  })

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public add() {
    this.store.dispatch(new AddProduct(this.form.getRawValue()));

    this.router.navigate(['products'])
  }

}
