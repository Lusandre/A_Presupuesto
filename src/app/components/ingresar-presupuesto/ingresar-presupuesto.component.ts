import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css'],
})
export class IngresarPresupuestoComponent implements OnInit {
  cantidad: number;
  cantidadIncorecta: boolean;

  constructor(
    private _presupuestoService: PresupuestoService,
    private router: Router
  ) {
    this.cantidad = 0;
    this.cantidadIncorecta = false;
  }

  ngOnInit(): void {}
  agregar() {
    if (this.cantidad > 0) {
      this.cantidadIncorecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gastos']);
      return;
    } else {
      this.cantidadIncorecta = true;
      return;
    }
  }
}
