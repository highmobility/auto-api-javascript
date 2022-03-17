import { Configuration } from '../core/Configuration';
import { Property } from '../types';
import { PropertyComponent } from '../core/PropertyComponent';

export class Availability extends PropertyComponent {
  constructor(public readonly property: Readonly<Property>) {
    super(Configuration.getPropertyComponentDefinition('availability'), property);
  }
}
