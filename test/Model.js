import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

import Model from '../src/Model';

describe('# Model', () => {
  it('should model have schema', () => {
    const schema = [
      {
        key: 'uf',
        type: 'array',
        value: ['a', 'b', 'c'],
        label: 'UF',
        required: true
      }
    ];
    const model = new Model(schema);

    model.validate()
      .then((data) => console.log(data))
      .catch((data) => console.log(data));

  });

});
