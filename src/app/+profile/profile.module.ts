import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard, ProfileResolver } from '../services';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

// external application modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const profileRouting = [
    { path: '',
      component: ProfileComponent,
      resolve: {
        results: ProfileResolver
      },
      canActivate: [ AuthGuard ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forChild(profileRouting),
  ],
  declarations: [ ProfileComponent ],
  providers: [FormBuilder]
})
export class ProfileModule { }
