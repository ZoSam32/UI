import {Type} from '@angular/compiler/src/core';

export interface IDashboards {
  title: string;
  configurationItemBusServName: string;
  configurationItemBusAppName: string;
}
export interface IDashboardsResponse {
  data: any[];
  total: string;
}
export interface IDashboardsParams {
  page: string;
  size: string;
  search: string;
  type: string;
}
