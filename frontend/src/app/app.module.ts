import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

import { CommentsService } from './services/comments.service';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        PostTileComponent,
        SidebarComponent,
        IconButtonComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [CommentsService, PostsService, UsersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
