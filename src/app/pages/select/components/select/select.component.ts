import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Output() district = new EventEmitter<string>();
  @Input() districtsOptions: any[] = [];

  selectDistrict(district: string) {
    return district ? this.district.emit(district) : undefined;
  }

  trackByFn(index: number, post: any) {
    return post.id;
  }
}
