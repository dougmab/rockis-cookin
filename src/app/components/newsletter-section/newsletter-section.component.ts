import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss'],
})
export class NewsletterSectionComponent {
  onSubmit(e: Event): void {
    alert('Formulário enviado! (mentira)');
    e.preventDefault();
  }
}
