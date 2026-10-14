import { Component } from '@angular/core';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';

@Component({
  imports: [StatsCardComponent],
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  statsData = [
    { number: '15+', label: 'Professional Courses' },
    { number: '5,000+', label: 'Active Students' },
    { number: '94%', label: 'Employment Rate' }
  ];
}
