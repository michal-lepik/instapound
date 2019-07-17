import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    private user: User;

    private footerItems = [
        'cupcake',
        'ipsum',
        'dolor',
        'sit',
        'amet',
        'muffin',
        'jelly',
        'halvah',
        'powder',
        'candy',
        'lemon',
        'drops',
        'croissant',
    ];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.user = this.usersService.getCurrentUser();
    }
}
