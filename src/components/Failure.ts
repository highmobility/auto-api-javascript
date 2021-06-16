import { Configuration } from '../configuration';
import { Property } from '../core/Property';
import { PropertyComponent } from '../core/PropertyComponent';

export class Failure extends PropertyComponent {
  constructor(public readonly property: Readonly<Property>) {
    super(Configuration.getPropertyComponentDefinition('failure'), property);
  }
}
