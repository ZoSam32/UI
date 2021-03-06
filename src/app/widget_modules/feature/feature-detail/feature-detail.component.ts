import {Component, Input, OnInit, Type} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {IClickListItemFeature} from '../../../shared/charts/click-list/click-list-interfaces';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss']
})
export class FeatureDetailComponent implements OnInit {
  @Input() detailView: Type<any>;

  public data: IClickListItemFeature;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

  @Input()
  set detailData(data: any) {
    this.data = data;
  }
}
