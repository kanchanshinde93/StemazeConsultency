import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' }

  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }

  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent, ServicesComponent, AboutComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
