import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { BusinessInfo } from '../models/business-info';
import { ServiceItem } from '../models/service-item';
import { API_BASE_URL } from './api';
import { demoBusinessInfo, demoServices } from './demo-data';

@Injectable({ providedIn: 'root' })
export class BusinessInfoService {
  constructor(private http: HttpClient) {}

  getBusinessInfo() {
    return this.http.get<BusinessInfo>(`${API_BASE_URL}/business-info`).pipe(catchError(() => of(demoBusinessInfo)));
  }

  getServices() {
    return this.http.get<ServiceItem[]>(`${API_BASE_URL}/services`).pipe(catchError(() => of(demoServices)));
  }
}
