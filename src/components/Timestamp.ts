import { Configuration } from '../core/Configuration';
import { Property } from '../types';
import { PropertyComponent } from '../core/PropertyComponent';

export class Timestamp extends PropertyComponent {
  constructor(public readonly property: Readonly<Property>) {
    super(Configuration.getPropertyComponentDefinition('timestamp'), property);
  }
}
