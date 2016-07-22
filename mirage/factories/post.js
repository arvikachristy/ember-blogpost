import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return faker.system.fileName();
  },
  author(){
    return faker.name.firstName();
  }
});
