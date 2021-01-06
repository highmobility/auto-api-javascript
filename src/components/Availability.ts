import { Configuration } from '../core/Configuration';
import { Property } from '../core/Property';
import { PropertyComponent } from '../core/PropertyComponent';

export class Availability extends PropertyComponent {
  constructor(public property: Readonly<Property>) {
    super(Configuration.getPropertyComponentDefinition('availability'), property);
  }
}
