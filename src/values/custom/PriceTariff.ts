import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Double } from '../base/Double';
import { Enum } from '../base/Enum';
import { String } from '../base/String';

export class PriceTariffCurrency extends String {}

@Size(8)
export class PriceTariffPrice extends Double {}

const PriceTariffPricingTypeDescriptor = {
  values: {
    per_kwh: 2,
    per_minute: 1,
    starting_fee: 0,
  },
  size: 1,
};

@Descriptor(PriceTariffPricingTypeDescriptor)
export class PriceTariffPricingType extends Enum<
  keyof typeof PriceTariffPricingTypeDescriptor.values
> {}

const PriceTariffDescriptor = {
  items: {
    currency: PriceTariffCurrency,
    price: PriceTariffPrice,
    pricing_type: PriceTariffPricingType,
  },
  order: ['pricing_type', 'price', 'currency'],
};

@Descriptor(PriceTariffDescriptor)
export class PriceTariff extends CustomType<typeof PriceTariffDescriptor.items> {}
