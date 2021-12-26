import { factory, Identifier, ObjectLiteralExpression } from 'typescript';

import { Module } from './Module';

export class Decorators extends Module {
  public constructor() {
    super('/', 'decorators', 'Decorator');
  }

  public descriptor(module: Module, descriptor: ObjectLiteralExpression | Identifier) {
    return factory.createDecorator(
      factory.createCallExpression(module.import(this, 'Descriptor'), undefined, [descriptor]),
    );
  }

  public size(module: Module, count: number) {
    return factory.createDecorator(
      factory.createCallExpression(module.import(this, 'Size'), undefined, [
        factory.createNumericLiteral(`${count}`),
      ]),
    );
  }
}
