import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { LecturasService } from '../servicio/lecturas.service';

@Component({
  selector: 'app-base',
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent implements OnInit {
  datos: any[] = [];

  constructor(private lecturasService: LecturasService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.lecturasService.obtenerTodos<any>().subscribe({
      next: (datos) => {
        console.log('Datos recibidos:', datos);
        this.datos = datos;
      },
      
    });
  }
}
