import { Configuration } from '../configuration';
import { Property } from '../core/Property';
import { PropertyComponent } from '../core/PropertyComponent';

export class Data extends PropertyComponent {
  constructor(public readonly property: Readonly<Property>) {
    super(Configuration.getPropertyComponentDefinition('data'), property);
  }
  protected getValueTypeDefinition() {
    return this.property.definition;
  }
}
