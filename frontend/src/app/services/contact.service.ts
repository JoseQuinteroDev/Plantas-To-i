import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { ContactRequest } from '../models/contact-request';
import { API_BASE_URL } from './api';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  send(request: ContactRequest) {
    return this.http.post(`${API_BASE_URL}/contact-requests`, request).pipe(
      map(() => ({ ok: true, fallback: false })),
      catchError(() => of({ ok: true, fallback: true })),
    );
  }
}
