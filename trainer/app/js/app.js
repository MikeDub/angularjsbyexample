System.register(['angular2/core', 'angular2/http', 'ng2-translate', 'angular2/platform/common_dom', 'angular2-modal', './app.module.js', './config.js', './root.js', './shared/directives.js', './shared/model.js', './shared/services.js', './7MinWorkout/services.js', './7MinWorkout/directives.js', './7MinWorkout/filters.js', './7MinWorkout/workout.js', './WorkoutBuilder/services.js', './WorkoutBuilder/directives.js', './WorkoutBuilder/exercise.js', './WorkoutBuilder/workout.js', './WorkoutBuilder/exercise-nav-component', './upgrade-adapter', './start/start-component', './finish/finish-component', './ng1-root-component', './ng2-root-component', './root/workout-history-component', './root/top-nav-component', './7MinWorkout/video-panel-component', './shared/filters'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, ng2_translate_1, common_dom_1, angular2_modal_1, upgrade_adapter_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (_10) {},
            function (_11) {},
            function (_12) {},
            function (_13) {},
            function (_14) {},
            function (_15) {},
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (_16) {},
            function (_17) {},
            function (_18) {},
            function (_19) {},
            function (_20) {},
            function (_21) {},
            function (_22) {},
            function (_23) {}],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ExercisePlan');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutPlan');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('WorkoutBuilderService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ExerciseBuilderService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('ApiKeyAppenderInterceptor');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('appEvents');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('workoutHistoryTracker');
            upgrade_adapter_1.upgradeAdapter.addProvider(core_1.provide(ng2_translate_1.TranslateLoader, {
                useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'i18n', '.json'); },
                deps: [http_1.Http]
            }));
            upgrade_adapter_1.upgradeAdapter.addProvider(ng2_translate_1.TranslateService);
            upgrade_adapter_1.upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
            upgrade_adapter_1.upgradeAdapter.addProvider(common_dom_1.ELEMENT_PROBE_PROVIDERS);
            upgrade_adapter_1.upgradeAdapter.addProvider(core_1.provide(angular2_modal_1.ModalConfig, { useValue: new angular2_modal_1.ModalConfig('lg', true, 81) }));
            //upgradeAdapter.addProvider(provide('config', { useValue: new ModalConfig('lg', true, 81) }));
            angular.module('app').factory('ng2TranslateService', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(ng2_translate_1.TranslateService));
            angular.element(document).ready(function () {
                upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['app'], { strictDi: true })
                    .ready(function (updateApp) {
                    console.log('ready');
                    var translateService = updateApp.ng2Injector.get(ng2_translate_1.TranslateService);
                    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
                    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translateService.setDefaultLang('en');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    translateService.use(userLang);
                });
            });
        }
    }
});
//# sourceMappingURL=app.js.map