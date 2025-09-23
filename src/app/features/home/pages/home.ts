import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  readonly year = new Date().getFullYear();
  notiStatus = '';

  askPermission(): Promise<NotificationPermission> {
    if (typeof Notification === 'undefined') {
      this.notiStatus = 'Notificaciones no soportadas en este navegador.';
      return Promise.resolve('denied');
    }
    return Notification.requestPermission().then((perm) => {
      if (perm === 'granted') this.notiStatus = 'Permiso concedido ';
      else if (perm === 'denied') this.notiStatus = 'Permiso denegado ';
      else this.notiStatus = 'Permiso en espera…';
      return perm;
    });
  }

  async testNotification(): Promise<void> {
    if (typeof Notification === 'undefined') {
      this.notiStatus = 'Notificaciones no soportadas.';
      return;
    }

    let perm: NotificationPermission = Notification.permission;
    if (perm !== 'granted') {
      perm = await this.askPermission();
      if (perm !== 'granted') return;
    }

    try {
      if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg?.showNotification) {
          await reg.showNotification('¡Hola desde la PWA!', {
            body: 'Notificación de prueba ',
            icon: 'assets/icons/icon-192.png'
          });
          this.notiStatus = 'Notificación enviada (vía Service Worker) ';
          return;
        }
      }

      new Notification('¡Hola desde la PWA!', {
        body: 'Notificación de prueba ',
        icon: 'assets/icons/icon-192.png'
      });
      this.notiStatus = 'Notificación enviada ';
    } catch (err) {
      console.error(err);
      this.notiStatus = 'Error al enviar la notificación.';
    }
  }
}
