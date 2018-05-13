import { Component, OnInit, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() container: ContainerComponent;
  value = '';
  constructor() {}

  ngOnInit() {
  }

  onSearchChange(searchValue: string ) {
    this.container.searchText(searchValue);
  }

}
