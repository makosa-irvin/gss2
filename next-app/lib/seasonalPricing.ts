export const STANDARD_SEASONAL_PERIODS = [
  { id: 'jan-jun', name: 'Jan 4 – Jun 30', startDate: '01-04', endDate: '06-30' },
  { id: 'jul-sep', name: 'Jul 1 – Sep 30', startDate: '07-01', endDate: '09-30' },
  { id: 'oct-dec', name: 'Oct 1 – Dec 14', startDate: '10-01', endDate: '12-14' },
  { id: 'festive', name: 'Dec 15 – Jan 3', startDate: '12-15', endDate: '01-03' },
] as const;

export function createStandardTourSeasons() {
  return STANDARD_SEASONAL_PERIODS.map(period => ({
    ...period,
    soloPrice: 0,
    sharingPrice: 0,
    residentPriceKES: 0,
    currency: 'USD' as const,
  }));
}

export function createStandardHotelSeasons() {
  return STANDARD_SEASONAL_PERIODS.map(period => ({
    seasonName: period.name,
    dates: `${period.startDate} to ${period.endDate}`,
    priceKES: 0,
    priceUSD: 0,
    sharingPriceUSD: 0,
  }));
}
