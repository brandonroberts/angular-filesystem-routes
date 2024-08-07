import { Routes } from '@angular/router';
import { Files, createRoutes } from '@analogjs/router';

const pages: Files = {
  '/src/app/pages/about.page.ts': () => import('./pages/about.page'),
  '/src/app/pages/(home).page.ts': () => import('./pages/(home).page'),
  '/src/app/pages/hello.md': () => import('./pages/hello.md').then(m => m.default)
};

export const routes: Routes = createRoutes(pages);
