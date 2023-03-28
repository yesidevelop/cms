import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {MediadsDataSource} from '../datasources';

export interface People {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getCharacter(): Promise<string>;
}

export class PeopleProvider implements Provider<People> {
  constructor(
    // mediads must match the name property in the datasource json file
    @inject('datasources.mediads')
    protected dataSource: MediadsDataSource = new MediadsDataSource(),
  ) { }

  value(): Promise<People> {
    return getService(this.dataSource);
  }
}
