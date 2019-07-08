import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reaction-button',
    templateUrl: './reaction-button.component.html',
    styleUrls: ['./reaction-button.component.scss'],
})
export class ReactionButtonComponent {
    @Input() path: string;
}
