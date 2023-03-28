// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {People} from '../services';

export class CmsController {
  constructor(
    @inject('services.People')
    protected peopleService: People,
  ) { }
  @get('/cms')
  cms(): object {
    // calling media service
    this.peopleService.getCharacter();
    //returning dummy response
    return {
      src: 'https://currikicdn.s3.us-west-2.amazonaws.com/specifications/cms.png',
      title: 'CMS Service => Media Service'
    }
  }

  @get('/media')
  async getCharacter(
  ): Promise<string> {
    //Preconditions
    return this.peopleService.getCharacter();
  }
}
