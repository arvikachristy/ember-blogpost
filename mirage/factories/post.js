import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return faker.hacker.phrase();
  },
  author(){
    return faker.name.firstName();
  }
});
