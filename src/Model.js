import { Module } from 'nucleun-module';
import { Hooks } from 'nucleun-hooks';
import Validator from 'nucleun-validator';

export default class Model extends Module {
  constructor(schema) {
    super();

    this.schema = schema;
    this.use('validator', new Validator());
    // this.use('hooks', new Hooks(this));
  }

  validate() {
    return this.validator.validate(this.schema);
  }

  save() {

  }
}
