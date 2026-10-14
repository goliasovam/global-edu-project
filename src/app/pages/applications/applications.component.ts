
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {
  chosenCourse = '';
  userName = '';
  userEmail = '';

  sendData(): void {
    console.log('Form submitted data:', {
      name: this.userName,
      email: this.userEmail,
      course: this.chosenCourse
    });

    alert(`Success!\nName: ${this.userName}\nEmail: ${this.userEmail}\nCourse: ${this.chosenCourse}`);
  }
}
