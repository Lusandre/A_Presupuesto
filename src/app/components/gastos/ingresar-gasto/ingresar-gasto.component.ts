import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css'],
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorecto = false;
    this.textIncorrecto = 'Cantidad incorrecta';
  }

  ngOnInit(): void {}
  agregarGasto() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }
    if (this.nombreGasto == '' || this.cantidad <= 0) {
      this.textIncorrecto = 'Cantidad incorrecta';
      this.formularioIncorecto = true;
    } else {
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      };

      this._presupuestoService.agregarGasto(GASTO);

      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
