import { Routes } from '@angular/router';
import { Files, createRoutes } from '@analogjs/router';

const pages: Files = {
  '/src/app/pages/about.page.ts': () => import('./pages/about.page'),
  '/src/app/pages/(home).page.ts': () => import('./pages/(home).page'),
  '/src/app/pages/blog.page.ts': () => import('./pages/blog.page'),
  '/src/app/pages/blog/[slug].page.ts': () => import('./pages/blog/[slug].page'),
  '/src/app/pages/[...page-not-found].page.ts': () => import('./pages/[...page-not-found].page'),
};

export const routes: Routes = createRoutes(pages);
