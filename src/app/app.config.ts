import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
    provideContent,
    withMarkdownRenderer,
    ContentRenderer,
    MarkedSetupService,
    MarkdownContentRendererService,
    withHighlighter
} from '@analogjs/content';
import { PrismHighlighter} from '@analogjs/content/prism-highlighter';
import { routes } from './app.routes';
import { provideFileRouter } from '@analogjs/router';
import 'prismjs/components/prism-typescript';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideRouter(routes),
    provideContent(withMarkdownRenderer(), withHighlighter({ useClass: PrismHighlighter})),
    { provide: ContentRenderer, useClass: MarkdownContentRendererService },
    MarkedSetupService, provideClientHydration(),
  ]
};
