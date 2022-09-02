export interface Country {
  name?: {
    common?: string;
    official?: string;
    nativeName?: any;
  };
  currencies?: any;
  capital?: string[];
  borders?: string[];
  population?: number;
  flags?: {
    png?: string;
    svg?: string;
  };
  region?: string;
  subregion?: string;
  independent?: boolean;
  unMember?: boolean;
  area?: number;
}

export enum MajorRegions {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}
