import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,  // ✅ Necessário para permitir `imports`
  imports: [MenuTitleComponent,
    SmallCardComponent,
    BigCardComponent,
    MenuBarComponent
  ],  // ✅ Importando os componentes utilizados no template
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // ✅ Correção: era "styleUrl", mas deve ser "styleUrls"
})
export class HomeComponent {}
