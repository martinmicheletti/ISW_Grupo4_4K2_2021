import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { trigger } from '@angular/animations';
import { Cart } from './model/cart';
import { Producto } from './model/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TP6-ISW-GRUPO4';

  public carrito = new Cart();

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.carrito.productos.push(new Producto(1, 'Producto 1'));
    this.carrito.productos.push(new Producto(1, 'Producto 2'));
  }

  public openCart() {
    const dialogRef = this.dialog.open(CartModalComponent, {
      width: '250px',
      data: this.carrito
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carrito = result;
    });
  }
}
