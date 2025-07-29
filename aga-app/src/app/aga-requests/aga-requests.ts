import { Component } from '@angular/core';
import { AgaRequest } from '../aga_requests';
import {AGA} from '../mock-aga-requests';

@Component({
  selector: 'app-aga-requests',
  standalone: false,
  templateUrl: './aga-requests.html',
  styleUrl: './aga-requests.css',
})
export class AgaRequests {
  aga_reqests = AGA;
  selectedAGA?: AgaRequest;

  onSelect(aga: AgaRequest): void {
    this.selectedAGA = aga;
  };

  constructor() {
    // Initialization logic can go here
  }

}
