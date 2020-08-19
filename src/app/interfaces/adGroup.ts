export interface AdGroupResponse {
  id: number;
  campaignId: number;
  name: string;
  leads: number;
  revenue: number;
}

export class AdGroup {
  id: number;
  campaignId: number;
  name: string;
  leads: number;
  revenue: number;
  rpl: number;

  constructor(group: AdGroupResponse) {
    this.id = group.id;
    this.campaignId = group.campaignId;
    this.name = group.name;
    this.leads = group.leads;
    this.revenue = group.revenue;
    this.rpl = Math.round(this.revenue / this.leads);
  }
}
