import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        PostTileComponent,
        SidebarComponent,
        IconButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommentsModule,
        PostsModule,
        UsersModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 10,
            logOnly: environment.production,
        }),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
