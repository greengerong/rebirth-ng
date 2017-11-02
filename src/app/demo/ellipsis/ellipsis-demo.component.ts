import { Component } from '@angular/core';

@Component({
  selector: 're-ellipsis-demo',
  templateUrl: './ellipsis-demo.component.html'
})
export class EllipsisDemoComponent {
  text = `Welcome to @Rebirth/NG. This repo is Angular4 ui library for Bootstrap. And it is being built from scratch in Typescript.`;
  html = `<p>Arch <strong>Linux</strong> users can install <a href="https://aur.archlinux.org/packages/autoenv/">autoenv</a> or <a href="https://aur.archlinux.org/packages/autoenv-git/">autoenv-git</a> with their favorite AUR helper.</p>`;
}
