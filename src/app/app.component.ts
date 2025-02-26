import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CouressComponent } from './couress/couress.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CouressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Advance_Angular';

}
