import { Component, signal } from '@angular/core';
import { Navbar } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('gerador-certificados');
  exibeNavbar = true;
}
