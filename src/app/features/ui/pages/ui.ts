import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ui.html',
  styleUrls: ['./ui.scss']
})
export class UIComponent {
  readonly year = new Date().getFullYear();
}
