import { Injectable } from '@angular/core';
import { DocumentRef } from '../window-ref/document-ref.service';

@Injectable()
export class AssetsLoader {

  private resources: { [key: string]: Promise<any> } = {};

  constructor(private documentRef: DocumentRef) {
  }

  createScript(src: string): Promise<any> {
    if (this.resources[src]) {
      return this.resources[src];
    }

    const promise = new Promise((resolve, reject) => {
      const script = this.documentRef.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = true;
      script.charset = 'UTF-8';
      script.id = `rebirth_script_${src}`;
      script.onreadystatechange = script.onload = () => {
        if ((!script.readyState || /loaded|complete/.test(script.readyState))) {
          resolve(script);
        }
      };
      script.onerror = (e) => {
        reject(e);
      };
      this.documentRef.body.appendChild(script);
    });

    this.resources[src] = promise;
    return promise;
  }

  createStyle(src: string): Promise<any> {
    if (this.resources[src]) {
      return this.resources[src];
    }

    const promise = new Promise((resolve, reject) => {
      const link = this.documentRef.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      link.type = 'text/css';
      link.charset = 'UTF-8';
      link.id = `rebirth_link_${src}`;
      link.onreadystatechange = link.onload = () => {
        resolve(link);
      };
      link.onerror = (e) => {
        reject(e);
      };
      this.documentRef.body.appendChild(link);
    });

    this.resources[src] = promise;
    return promise;
  }
}
