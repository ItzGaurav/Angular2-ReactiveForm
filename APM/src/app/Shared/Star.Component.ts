import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'


@Component({
    selector: '<star></star>',
    templateUrl: './Star.Component.html',
    styleUrls: ['./Star.Component.html']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }


      //Just for Demo outpot -- Sending value to Parent Component

  @Output()  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  

    onClickEvent(): void {
        console.log(`The rating ${this.rating} was clicked`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);

    }
}