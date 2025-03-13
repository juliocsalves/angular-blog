import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: true,  // ✅ Isso é necessário para ser importado em standalone components
  templateUrl: './menu-title.component.html',
  styleUrls: [
    './menu-title.component.css',
    './menu-title.responsive.component.css'
  ]
})
export class MenuTitleComponent {}
