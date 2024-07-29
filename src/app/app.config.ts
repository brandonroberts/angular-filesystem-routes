import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideContent, withMarkdownRenderer, ContentRenderer, MarkedSetupService, MarkdownContentRendererService } from '@analogjs/content';

import { routes } from './app.routes';
import { provideFileRouter } from '@analogjs/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideRouter(routes),
    provideContent(withMarkdownRenderer()),
    { provide: ContentRenderer, useClass: MarkdownContentRendererService },
    MarkedSetupService
  ]
};
