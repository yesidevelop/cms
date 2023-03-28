import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mediads',
  connector: 'rest',
  // baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
  baseURL: 'http://media/media',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        // url: 'https://jsonplaceholder.typicode.com/todos/1',
        url: 'http://media/media',
      },
      functions: {
        getCharacter: [],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MediadsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mediads';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mediads', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
