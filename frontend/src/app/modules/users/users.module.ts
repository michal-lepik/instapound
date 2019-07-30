import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersEffects } from './effects/users.effects';
import { UsersService } from './services/users.service';
import * as fromUsers from './reducers/users.reducer';

@NgModule({
    imports: [
        EffectsModule.forFeature([UsersEffects]),
        StoreModule.forFeature('users', fromUsers.reducer),
    ],
    providers: [UsersService],
})
export class UsersModule {}
