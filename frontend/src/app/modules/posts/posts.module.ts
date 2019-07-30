import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsEffects } from './effects/posts.effects';
import { PostsService } from './services/posts.service';
import * as fromPosts from './reducers/posts.reducer';

@NgModule({
    imports: [
        EffectsModule.forFeature([PostsEffects]),
        StoreModule.forFeature('posts', fromPosts.reducer),
    ],
    providers: [PostsService],
})
export class PostsModule {}
