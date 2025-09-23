import { Injectable } from '@angular/core';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) { super(); }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const current = this.buildTitle(snapshot);
    if (current) {
      this.title.setTitle(`${current} · Mi PWA`);
    }
  }
}
