import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [{ slug: "blog-post" }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
];
