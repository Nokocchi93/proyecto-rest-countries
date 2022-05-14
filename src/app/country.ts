export interface Country {
  name: {
    common?: string;
    official?: string;
    nativeName?: any;
  };
  currencies: any;
  capital: string[];
  borders: string[];
  population: number;
}
