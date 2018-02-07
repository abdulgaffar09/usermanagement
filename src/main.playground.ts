import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

initializePlayground('gem-root');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
