import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    iconButtons = ['assets/icons/compass.svg', 'assets/icons/heart.svg', 'assets/icons/user.svg'];
}
