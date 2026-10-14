import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-course-card',
  standalone: true,
  styleUrl: './course-card.component.scss',
  templateUrl: './course-card.component.html',
})
export class CourseCardComponent {
  @Input() title = '';
  @Input() description = '';
}
