import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { STANDARD_SEASONAL_PERIODS, createStandardHotelSeasons, createStandardTourSeasons } from './seasonalPricing.ts';
import { buildWhatsAppMessage } from './whatsapp.ts';

describe('client meeting content rules', () => {
  it('uses the four agreed seasonal periods including the year boundary', () => {
    assert.deepEqual(STANDARD_SEASONAL_PERIODS.map(period => [period.startDate, period.endDate]), [
      ['01-04', '06-30'],
      ['07-01', '09-30'],
      ['10-01', '12-14'],
      ['12-15', '01-03'],
    ]);
    assert.equal(createStandardTourSeasons().length, 4);
    assert.equal(createStandardHotelSeasons().length, 4);
  });

  it('prefills tour-specific WhatsApp messages', () => {
    assert.match(buildWhatsAppMessage({ tourTitle: 'Masai Mara Escape' }), /Masai Mara Escape/);
  });

  it('prefills destination-specific WhatsApp messages', () => {
    assert.match(buildWhatsAppMessage({ destinationTitle: 'Amboseli' }), /Amboseli/);
  });
});
