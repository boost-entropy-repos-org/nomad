import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  breadcrumbs: [
    {
      label: 'Run',
      args: ['jobs.run'],
    },
  ],
});
