import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { Toolbar } from './shared/presentation/components/toolbar/toolbar';

@Component({
  imports: [RouterOutlet, RouterLink, MatSidenavModule, MatListModule, Toolbar],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  tittle = 'barnes-and-noble-inventory';
}
