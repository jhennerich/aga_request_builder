import { Component } from '@angular/core';
import { AgaRequest } from '../aga_requests';

@Component({
  selector: 'app-aga-requests',
  standalone: false,
  templateUrl: './aga-requests.html',
  styleUrl: './aga-requests.css'
})
export class AgaRequests {
  aga_request: AgaRequest = {
    id: 1,
    name: 'First AGA Request'
  };

  constructor() {
    // Initialization logic can go here
  }

}
