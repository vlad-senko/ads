import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from './interfaces/campaign';
import { AdGroupResponse } from './interfaces/adGroup';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getCampaigns(type: string, dateRange: string) {
    return this.http.get<Campaign[]>(
      `http://localhost:3000/campaigns-${type}`
    );
  }

  public getAdGroups(filterName: string, dateRange: string) {
    return this.http.get<AdGroupResponse[]>(`http://localhost:3000/adGroups-${filterName}`);
  }
}
