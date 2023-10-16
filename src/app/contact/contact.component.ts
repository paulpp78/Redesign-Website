import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  faqData = {
    iconClass: 'iconoir-chat-bubble-empty',
    title: 'FAQ',
  };

  recruitmentData = {
    iconClass: 'iconoir-empty-page',
    title: 'LA PORTE RECRUTE',
  };

  mapData = {
    iconClass: 'iconoir-map',
    title: 'DÉCOUVRIR LA COMMUNE',
    link: 'https://porte-du-hainaut.carte-interactive.net/#/home',
  };

  mailData = {
    iconClass: 'iconoir-mail',
    title: 'ÉCRIS-NOUS',
    email: 'prenom.nom@etu.u-paris.fr',
  };

  contactInfo = {
    phone: '03 27 09 05 05',
    hours: '8h-12h 14-20h',
    location: {
      address: 'Site Minier de Wallers-Arenberg',
      city: '59135 WALLERS-ARENBERG',
    },
    socialMediaLinks: {
      facebook: 'https://www.facebook.com/LaPorteduHainaut',
      twitter:
        'https://twitter.com/i/flow/login?redirect_after_login=%2FPorteduHainaut',
      linkedin: 'https://www.linkedin.com/company/la-porte-du-hainaut/',
    },
  };
  selectedPost: string = 'developpeur';
  nom: string = '';
  prenom: string = '';
  telephone: string = '';
  email: string = '';

  openRecruitmentModal() {
    const modal = document.getElementById('modalRecrutement');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeRecruitmentModal() {
    const modal = document.getElementById('modalRecrutement');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  submitApplication() {
    console.log('Formulaire soumis avec succès !');
    console.log('Poste demandé :', this.selectedPost);
    console.log('Nom :', this.nom);
    console.log('Prénom :', this.prenom);
    console.log('Téléphone :', this.telephone);
    console.log('Email :', this.email);
  }
}