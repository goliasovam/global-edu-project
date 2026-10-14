import { Component } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  imports: [CourseCardComponent],
  selector: 'app-catalog',
  standalone: true,
  styleUrl: './catalog.component.scss',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {}
