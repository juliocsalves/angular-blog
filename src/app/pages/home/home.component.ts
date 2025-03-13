import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,  // ✅ Mantido como standalone
  imports: [
    MenuTitleComponent,  // ✅ Certifique-se de que é standalone
    SmallCardComponent,  // ✅ Certifique-se de que é standalone
    BigCardComponent,    // ✅ Certifique-se de que é standalone
    MenuBarComponent     // ✅ Certifique-se de que é standalone
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // mostrarCard: boolean = true;
}
