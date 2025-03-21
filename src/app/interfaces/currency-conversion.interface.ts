export interface ExchangeRate {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: ExchangeRatesValue;
  }

  export interface ExchangeRatesValue {
    [currencyCode: string]: number;
  }
  interface Query {
    from: string;
    to: string;
    amount: number;
  }
  
  interface Info {
    timestamp: number;
    rate: number;
  }
  export interface CurrencyConversionResponse {
    success: boolean;
    query: Query;
    info: Info;
    historical: string; // Adjust the type based on the actual data
    date: string;
    result: number;
  }
  
  export interface CurrencyConversionQuery {
    from: string;
    to: string;
    amount: number;
  }
  export interface LatestCurrencyQuery {
    base: string;
    symbols: string;
    date?:string;
    fromCurencyName?:string;
  }
  export interface CurrencySymbol {
    [key: string]: string;
  }
  export interface SymbolsApiResponse {
    success: boolean;
    symbols: CurrencySymbol;
  }

  export interface PopularCurrencyConversion {
    amount: number;
    base: string;
    popularConversions: PopularConversions;
  }

  export interface PopularConversions {
    [currencyCode: string]: number;
  }

  export interface CurrencyConversionData {
    convertedAmount?: number;
    unit?: string;
    baseCurrencyRate?: number;
    parameterValue?: string;
  }

  // exchange-rate.interface.ts

export interface HistoricalExchangeRate {
  success: boolean;
  historical: boolean;
  date: string;
  timestamp: number;
  base: string;
  rates:ExchangeRatesValue;
}

export interface DataItem {
  x: string;
  y: number;
}