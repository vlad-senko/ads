import { Campaign } from './campaign';
import { AdGroup } from './adGroup';

export class GridView {
  id: number;
  name: string;
  leads: number;
  revenue: number;
  rpl: number;
  isExpanded = false;
  adGroups: AdGroup[];

  constructor(campaign: Campaign, adGroups?: AdGroup[]) {
    this.id = campaign.id;
    this.name = campaign.name;
    this.leads = campaign.leads;
    this.revenue = campaign.revenue;
    this.rpl = Math.round(this.revenue / this.leads);
    if (adGroups) {
      this.adGroups = adGroups.filter((group) => group.campaignId === this.id);
    } else {
      this.adGroups = null;
    }
  }
}
