import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

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

  },
  {
    path: 'mission',
    component: MissionComponent,
    data: { animation: 'mission' }

  },
  {
    path: 'bookingDetails',
    component: BookingDetailsComponent,
    data: { animation: 'bookingDetails' }

  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent, ServicesComponent, AboutComponent, MissionComponent, BookingDetailsComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
