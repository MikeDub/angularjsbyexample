import { Component, Inject } from 'angular2/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslatePipe} from 'ng2-translate';
import {OrderByPipe, SearchPipe, SecondsToTime} from '../shared/pipes';

@Component({
  selector: 'start',
  templateUrl: '/js/start/start-component.tpl.html',
  pipes: [TranslatePipe, OrderByPipe, SearchPipe, SecondsToTime]
})
export class StartComponent {
  workouts: Array<any>;
  search: string;
  constructor( @Inject('WorkoutService') private workoutService) { }
  ngOnInit() {
    this.workoutService.getWorkouts().then((data) => {
      this.workouts = data;
    });
  }
}
angular.module('start').directive('start', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(StartComponent));
