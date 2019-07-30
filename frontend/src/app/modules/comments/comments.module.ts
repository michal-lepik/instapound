import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CommentsEffects } from './effects/comments.effects';
import { CommentsService } from './services/comments.service';
import * as fromComments from './reducers/comments.reducer';

@NgModule({
    imports: [
        EffectsModule.forFeature([CommentsEffects]),
        StoreModule.forFeature('comments', fromComments.reducer),
    ],
    providers: [CommentsService],
})
export class CommentsModule {}
