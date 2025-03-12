import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true, // 🚀 Necessário para usar "imports" diretamente no componente
  imports: [
    RouterOutlet,
    SmallCardComponent,
    BigCardComponent,
    MenuTitleComponent,
    MenuBarComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Correção do plural
})
export class AppComponent {
  title = 'angular-blog';
}
