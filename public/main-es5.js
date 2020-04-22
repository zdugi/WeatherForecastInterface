function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: availableLocations, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "availableLocations", function () {
      return availableLocations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./manager-dialog/manager-dialog.component */
    "./src/app/manager-dialog/manager-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _hermes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hermes.service */
    "./src/app/hermes.service.ts");


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dialog, messenger) {
        _classCallCheck(this, AppComponent);

        this.dialog = dialog;
        this.messenger = messenger;
        this.title = 'hci-weather-forecast';
        this.globalSettings = {
          locations: [{
            name: 'Novi Sad'
          }, {
            name: 'London'
          }],
          displayProperty: 'temperature',
          forecastInterval: 2
        };
        this.graphData = [];
        this.graphLabels = [];
        this.tableData = [];
        this.forecastingTitle = '';
        this.magi = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateDisplay();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this = this;

          var dialogRef = this.dialog.open(_manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ManagerDialogComponent"], {
            data: this.globalSettings
          });
          dialogRef.componentInstance.globalSettings = this.globalSettings;
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this.updateDisplay();
            }
          });
        }
      }, {
        key: "updateDisplay",
        value: function updateDisplay() {
          this.forecastingTitle = 'Forecast for ' + this.globalSettings.forecastInterval + ' days'; // clean

          this.graphData.length = 0;
          this.graphLabels.length = 0;
          this.tableData.length = 0; // for labels just in first call

          this.fetchData(this.globalSettings.locations[0]['name'], true, this.globalSettings.displayProperty); // process others

          for (var i = 1; i < this.globalSettings.locations.length; i++) {
            var _location = this.globalSettings.locations[i];
            this.fetchData(_location['name'], false, this.globalSettings.displayProperty);
          }
        }
      }, {
        key: "fetchData",
        value: function fetchData(loc, generateChartLabels, graphType) {
          var _this2 = this;

          this.messenger.getWeather(loc).subscribe(function (data) {
            var location = data.city.name;
            var records = [];
            var frame = {
              location: location,
              records: []
            };

            var _iterator = _createForOfIteratorHelper(data.list),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var rec = _step.value;

                // days Limit
                if (_this2.deltaDays(rec.dt_txt) > _this2.globalSettings.forecastInterval) {
                  continue;
                }

                switch (graphType) {
                  case 'temperature':
                    records.push(rec.main.temp);
                    break;

                  case 'cloud':
                    records.push(0);
                    break;

                  case 'pressure':
                    records.push(rec.main.pressure);
                    break;

                  case 'humidity':
                    records.push(rec.main.humidity);
                }

                if (generateChartLabels) _this2.graphLabels.push(_this2.formatDatetime(rec.dt_txt));
                var entry = {
                  group_leader: '',
                  group_size: 0,
                  timestamp: rec.dt_txt,
                  temp: rec.main.temp,
                  temp_min: rec.main.temp_min,
                  temp_max: rec.main.temp_max,
                  pressure: rec.main.pressure,
                  humidity: rec.main.humidity
                };

                var currDay = _this2.getDay(rec.dt_txt);

                var lastDay = '';
                if (frame.records.length > 0) lastDay = _this2.getDay(frame.records[frame.records.length - 1].timestamp);

                if (frame.records.length == 0 || currDay != lastDay) {
                  entry.group_leader = currDay;
                }

                frame.records.push(entry);
              } //console.log(rec.dt_txt, rec.main.temp, rec.main.humidity, rec.main.pressure)

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this2.graphData.push({
              data: records,
              label: location
            });

            _this2.tableData.push(frame);
          });
        } // helpers

      }, {
        key: "formatDatetime",
        value: function formatDatetime(timestamp) {
          var toks = timestamp.split(/[-: ]+/); // console.log(toks)

          var date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2]);
          var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          return toks[3] + 'h ' + days[date.getDay()];
        }
      }, {
        key: "getDay",
        value: function getDay(timestamp) {
          var toks = timestamp.split(/[-: ]+/); // console.log(toks)

          var date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2]);
          var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          return days[date.getDay()];
        }
      }, {
        key: "deltaDays",
        value: function deltaDays(timestamp) {
          var date = new Date(timestamp);
          var delta = date.getTime() - new Date().getTime();
          return delta / (1000 * 60 * 60 * 24);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hermes_service__WEBPACK_IMPORTED_MODULE_3__["HermesService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 4,
      consts: [[1, "general"], ["align", "right", 1, "button-panel"], ["mat-flat-button", "", "color", "primary", 3, "click"], [3, "data", "labels"], [3, "data"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-forecast-graph", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-forecast-table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.forecastingTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.graphData)("labels", ctx.graphLabels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.tableData);
        }
      },
      styles: [".button-panel[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tmargin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tcGFuZWwge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcGFuZWwgYnV0dG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _hermes_service__WEBPACK_IMPORTED_MODULE_3__["HermesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _forecast_graph_forecast_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forecast-graph/forecast-graph.component */
    "./src/app/forecast-graph/forecast-graph.component.ts");
    /* harmony import */


    var _forecast_table_forecast_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forecast-table/forecast-table.component */
    "./src/app/forecast-table/forecast-table.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./manager-dialog/manager-dialog.component */
    "./src/app/manager-dialog/manager-dialog.component.ts");
    /* harmony import */


    var _location_input_location_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./location-input/location-input.component */
    "./src/app/location-input/location-input.component.ts");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var ng5_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng5-slider */
    "./node_modules/ng5-slider/__ivy_ngcc__/esm2015/ng5-slider.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./details-dialog/details-dialog.component */
    "./src/app/details-dialog/details-dialog.component.ts");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_16__["Ng5SliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _forecast_graph_forecast_graph_component__WEBPACK_IMPORTED_MODULE_7__["ForecastGraphComponent"], _forecast_table_forecast_table_component__WEBPACK_IMPORTED_MODULE_8__["ForecastTableComponent"], _manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ManagerDialogComponent"], _location_input_location_input_component__WEBPACK_IMPORTED_MODULE_11__["LocationInputComponent"], _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DetailsDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_16__["Ng5SliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _forecast_graph_forecast_graph_component__WEBPACK_IMPORTED_MODULE_7__["ForecastGraphComponent"], _forecast_table_forecast_table_component__WEBPACK_IMPORTED_MODULE_8__["ForecastTableComponent"], _manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ManagerDialogComponent"], _location_input_location_input_component__WEBPACK_IMPORTED_MODULE_11__["LocationInputComponent"], _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DetailsDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_16__["Ng5SliderModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgPluralCase"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__["Dir"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipTrailingIcon"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOptgroup"], ng5_slider__WEBPACK_IMPORTED_MODULE_16__["ɵa"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTextColumn"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardAvatar"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggle"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _forecast_graph_forecast_graph_component__WEBPACK_IMPORTED_MODULE_7__["ForecastGraphComponent"], _forecast_table_forecast_table_component__WEBPACK_IMPORTED_MODULE_8__["ForecastTableComponent"], _manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ManagerDialogComponent"], _location_input_location_input_component__WEBPACK_IMPORTED_MODULE_11__["LocationInputComponent"], _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DetailsDialogComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["KeyValuePipe"]]);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ManagerDialogComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgPluralCase"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__["Dir"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipTrailingIcon"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOptgroup"], ng5_slider__WEBPACK_IMPORTED_MODULE_16__["ɵa"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTextColumn"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardAvatar"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggle"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _forecast_graph_forecast_graph_component__WEBPACK_IMPORTED_MODULE_7__["ForecastGraphComponent"], _forecast_table_forecast_table_component__WEBPACK_IMPORTED_MODULE_8__["ForecastTableComponent"], _manager_dialog_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ManagerDialogComponent"], _location_input_location_input_component__WEBPACK_IMPORTED_MODULE_11__["LocationInputComponent"], _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DetailsDialogComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/details-dialog/details-dialog.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/details-dialog/details-dialog.component.ts ***!
    \************************************************************/

  /*! exports provided: DetailsDialogComponent */

  /***/
  function srcAppDetailsDialogDetailsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsDialogComponent", function () {
      return DetailsDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DetailsDialogComponent_mat_button_toggle_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDialogComponent_mat_button_toggle_6_Template_mat_button_toggle_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var element_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onWeekChange(element_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", element_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9, " ");
      }
    }

    function DetailsDialogComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getHour(element_r12.timestamp));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.temp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.temp_min);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.temp_max);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.pressure);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.humidity);
      }
    }

    var DetailsDialogComponent = /*#__PURE__*/function () {
      function DetailsDialogComponent(data2) {
        _classCallCheck(this, DetailsDialogComponent);

        this.data2 = data2;
        this.data = data2.frame;
      }

      _createClass(DetailsDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getDay",
        value: function getDay(timestamp) {
          var toks = timestamp.split(/[-: ]+/); // console.log(toks)

          var date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2]);
          var days = ['Sunday', 'Monday', 'Tuestay', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          return days[date.getDay()];
        }
      }, {
        key: "onWeekChange",
        value: function onWeekChange(day) {
          this.selectedDay = day;
        }
      }, {
        key: "getHour",
        value: function getHour(timestamp) {
          var toks = timestamp.split(/[-: ]+/);
          return toks[3] + 'h';
        }
      }, {
        key: "columns",
        get: function get() {
          var columns = [];

          var _iterator2 = _createForOfIteratorHelper(this.data.records),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var e = _step2.value;
              var day = this.getDay(e.timestamp);
              if (columns.indexOf(day) == -1) columns.push(day);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return columns;
        }
      }, {
        key: "rows",
        get: function get() {
          var rows = []; //TODO: make life better...

          var day = this.selectedDay == undefined ? this.getDay(this.data.records[0].timestamp) : this.selectedDay;

          var _iterator3 = _createForOfIteratorHelper(this.data.records),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var e = _step3.value;
              if (day == this.getDay(e.timestamp)) rows.push(e);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return rows;
        }
      }]);

      return DetailsDialogComponent;
    }();

    DetailsDialogComponent.ɵfac = function DetailsDialogComponent_Factory(t) {
      return new (t || DetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DetailsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailsDialogComponent,
      selectors: [["app-details-dialog"]],
      decls: 27,
      vars: 4,
      consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["id", "root"], [3, "value"], ["group", "matButtonToggleGroup"], ["aria-label", "Text align left", 3, "value", "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["aria-label", "Text align left", 3, "value", "click"]],
      template: function DetailsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailsDialogComponent_mat_button_toggle_6_Template, 2, 2, "mat-button-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetailsDialogComponent_tr_23_Template, 13, 6, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-actions", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.location, " Forecast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.columns[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggle"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: arial;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc;\r\n    width: 100%;\r\n    margin:0;\r\n    padding:0;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 5px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n\r\n    table[_ngcontent-%COMP%] {\r\n      border: 0;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n      margin-bottom: 10px;\r\n      display: block;\r\n      border-bottom: 2px solid #ddd;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      display: block;\r\n      text-align: right;\r\n      font-size: 13px;\r\n      border-bottom: 1px dotted #ccc;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n      border-bottom: 0;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: bold;\r\n    }\r\n  }\r\n\r\n  mat-dialog-content[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n  min-height: 400px;\r\n}\r\n\r\n  mat-button-toggle-group[_ngcontent-%COMP%] {\r\n  margin: 10px 0 10px 0;\r\n}\r\n\r\n  mat-dialog-actions[_ngcontent-%COMP%] {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1kaWFsb2cvZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDOztFQUVDO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZiw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixpQkFBaUI7SUFDbkI7RUFDRjs7RUFFRjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0VBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtZGlhbG9nL2RldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuKiAgIFJlc3BvbnNpdmUgdGFibGUgd2l0aCBjc3NcclxuKiAgIEFkZSBCdWRpbWFuIC0gYXJ0LnZpc3VhZGxlc2lnbmVyQGdtYWlsLmNvbVxyXG4qICAgMjAxNVxyXG4qL1xyXG5cclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGgsIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0aCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdGhlYWQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2NjYztcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ZDpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-details-dialog',
          templateUrl: './details-dialog.component.html',
          styleUrls: ['./details-dialog.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forecast-graph/forecast-graph.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/forecast-graph/forecast-graph.component.ts ***!
    \************************************************************/

  /*! exports provided: ForecastGraphComponent */

  /***/
  function srcAppForecastGraphForecastGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForecastGraphComponent", function () {
      return ForecastGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForecastGraphComponent_canvas_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 5);
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r20.data)("labels", ctx_r20.labels)("options", ctx_r20.lineChartOptions)("legend", ctx_r20.lineChartLegend)("chartType", ctx_r20.lineChartType)("plugins", ctx_r20.lineChartPlugins);
      }
    }

    var ForecastGraphComponent = /*#__PURE__*/function () {
      function ForecastGraphComponent() {
        _classCallCheck(this, ForecastGraphComponent);

        this.lineChartOptions = {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [{
              id: 'y-axis-0',
              position: 'left'
            }]
          },
          annotation: {
            annotations: [{
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                enabled: true,
                fontColor: 'orange',
                content: 'LineAnno'
              }
            }]
          }
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }, {
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }, {
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
      }

      _createClass(ForecastGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForecastGraphComponent;
    }();

    ForecastGraphComponent.ɵfac = function ForecastGraphComponent_Factory(t) {
      return new (t || ForecastGraphComponent)();
    };

    ForecastGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForecastGraphComponent,
      selectors: [["app-forecast-graph"]],
      viewQuery: function ForecastGraphComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      inputs: {
        data: "data",
        labels: "labels"
      },
      decls: 5,
      vars: 1,
      consts: [["id", "root"], [1, "flex"], [1, "flex-item"], [2, "display", "block"], ["baseChart", "", "width", "200", "height", "100", 3, "datasets", "labels", "options", "legend", "chartType", "plugins", 4, "ngIf"], ["baseChart", "", "width", "200", "height", "100", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"]],
      template: function ForecastGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForecastGraphComponent_canvas_4_Template, 1, 6, "canvas", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmVjYXN0LWdyYXBoL2ZvcmVjYXN0LWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forecast-graph',
          templateUrl: './forecast-graph.component.html',
          styleUrls: ['./forecast-graph.component.css']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/forecast-table/forecast-table.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/forecast-table/forecast-table.component.ts ***!
    \************************************************************/

  /*! exports provided: ForecastTableComponent */

  /***/
  function srcAppForecastTableForecastTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForecastTableComponent", function () {
      return ForecastTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../details-dialog/details-dialog.component */
    "./src/app/details-dialog/details-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForecastTableComponent_div_0_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForecastTableComponent_div_0_tr_19_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var element_r17 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.openDetails(element_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.records[0].temp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.records[0].temp_min);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.records[0].temp_max);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.records[0].pressure);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.records[0].humidity);
      }
    }

    function ForecastTableComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Temp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Min. temp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Max. temp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pressure");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Humidity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForecastTableComponent_div_0_tr_19_Template, 13, 6, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current mesurement (", ctx_r13.data[0].records[0].timestamp, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.data);
      }
    }

    function ForecastTableComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No locations to display ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForecastTableComponent = /*#__PURE__*/function () {
      function ForecastTableComponent(dialog) {
        _classCallCheck(this, ForecastTableComponent);

        this.dialog = dialog;
        this.displayedColumns = ['location', 'temp', 'minTemp', 'maxTemp', 'pressure', 'humidity'];
      } // processing data


      _createClass(ForecastTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDetails",
        value: function openDetails(details) {
          var dialogRef = this.dialog.open(_details_dialog_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DetailsDialogComponent"], {
            data: {
              frame: details,
              location: location
            }
          });
          console.log('ok');
        } // helper

      }, {
        key: "getDay",
        value: function getDay(timestamp) {
          var toks = timestamp.split(/[-: ]+/); // console.log(toks)

          var date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2]);
          var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          return days[date.getDay()];
        }
      }, {
        key: "getHour",
        value: function getHour(timestamp) {
          var toks = timestamp.split(/[-: ]+/);
          return toks[3];
        }
      }, {
        key: "wrapperData",
        get: function get() {
          console.log(this.data.length);
          return this.data;
        }
      }]);

      return ForecastTableComponent;
    }();

    ForecastTableComponent.ɵfac = function ForecastTableComponent_Factory(t) {
      return new (t || ForecastTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    ForecastTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForecastTableComponent,
      selectors: [["app-forecast-table"]],
      inputs: {
        data: "data"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["message", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "message"]],
      template: function ForecastTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForecastTableComponent_div_0_Template, 20, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForecastTableComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length > 0)("ngIfElse", _r14);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: arial;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc;\r\n    width: 100%;\r\n    margin:0;\r\n    padding:0;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 5px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n\r\n    table[_ngcontent-%COMP%] {\r\n      border: 0;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n      margin-bottom: 10px;\r\n      display: block;\r\n      border-bottom: 2px solid #ddd;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n      display: block;\r\n      text-align: right;\r\n      font-size: 13px;\r\n      border-bottom: 1px dotted #ccc;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n      border-bottom: 0;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: bold;\r\n    }\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\r\n  \tbackground-color: #f1f1f1;\r\n  \tcursor: pointer;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%] {\r\n  \tmargin-top: 30px;\r\n  }\r\n\r\n  .message[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    padding: 50px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZWNhc3QtdGFibGUvZm9yZWNhc3QtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDOztFQUVDO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZiw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixpQkFBaUI7SUFDbkI7RUFDRjs7RUFFQTtHQUNDLHlCQUF5QjtHQUN6QixlQUFlO0VBQ2hCOztFQUVBO0dBQ0MsZ0JBQWdCO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3JlY2FzdC10YWJsZS9mb3JlY2FzdC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbiogICBSZXNwb25zaXZlIHRhYmxlIHdpdGggY3NzXHJcbiogICBBZGUgQnVkaW1hbiAtIGFydC52aXN1YWRsZXNpZ25lckBnbWFpbC5jb21cclxuKiAgIDIwMTVcclxuKi9cclxuXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHRoLCB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGgge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRoZWFkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ZCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdGQ6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFibGUgdGJvZHk+dHI6aG92ZXIge1xyXG4gIFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBcdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forecast-table',
          templateUrl: './forecast-table.component.html',
          styleUrls: ['./forecast-table.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/hermes.service.ts":
  /*!***********************************!*\
    !*** ./src/app/hermes.service.ts ***!
    \***********************************/

  /*! exports provided: HermesService */

  /***/
  function srcAppHermesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HermesService", function () {
      return HermesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HermesService = /*#__PURE__*/function () {
      function HermesService(http) {
        _classCallCheck(this, HermesService);

        this.http = http;
        this.API_KEY = '10afd3bf1f2c38f60f2deb168cb4369d';
        this.API_URL = 'https://api.openweathermap.org/data/2.5/forecast';
      }

      _createClass(HermesService, [{
        key: "getWeather",
        value: function getWeather(city) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('q', city);
          params = params.append('appid', this.API_KEY);
          return this.http.get(this.API_URL, {
            params: params
          });
        }
      }]);

      return HermesService;
    }();

    HermesService.ɵfac = function HermesService_Factory(t) {
      return new (t || HermesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HermesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HermesService,
      factory: HermesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HermesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/location-input/location-input.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/location-input/location-input.component.ts ***!
    \************************************************************/

  /*! exports provided: LocationInputComponent */

  /***/
  function srcAppLocationInputLocationInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationInputComponent", function () {
      return LocationInputComponent;
    });
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function LocationInputComponent_mat_chip_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function LocationInputComponent_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function LocationInputComponent_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var location_r2 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.remove(location_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LocationInputComponent_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", location_r2.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.removable);
      }
    }

    var LocationInputComponent = /*#__PURE__*/function () {
      function LocationInputComponent() {
        _classCallCheck(this, LocationInputComponent);

        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.allLocations = _app_component__WEBPACK_IMPORTED_MODULE_2__["availableLocations"];
        this.errorMessage = '';
        this.locations = [];
        this.locationsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log(this.allLocations);
      }

      _createClass(LocationInputComponent, [{
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value;
          if (!value) return; // binary search

          var i = 0;
          var j = this.allLocations.length;
          var flag = false;

          while (i < j && !flag) {
            var pivot = Math.ceil((i + j) / 2);
            var pivotValue = this.allLocations[pivot];
            console.log(pivotValue, i);

            if (value == pivotValue) {
              flag = true;
              console.log('dobro');
            } else if (value < pivotValue) {
              if (j == pivot) {
                console.log('neh');
                break;
              }

              j = pivot;
            } else {
              if (i == pivot) {
                console.log('neh');
                break;
              }

              i = pivot;
            }
          }

          if (!flag) {
            input.value = '';
            this.errorMessage = 'Invalid city name ' + value;
            return;
          }

          this.errorMessage = '';

          if ((value || '').trim()) {
            this.loc.push({
              name: value.trim()
            });
          }

          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(location) {
          var index = this.loc.indexOf(location);

          if (index >= 0) {
            this.loc.splice(index, 1);
          }
        }
      }, {
        key: "loc",
        get: function get() {
          return this.locations;
        },
        set: function set(val) {
          this.locations = val;
          this.locationsChange.emit(this.locations);
        }
      }]);

      return LocationInputComponent;
    }();

    LocationInputComponent.ɵfac = function LocationInputComponent_Factory(t) {
      return new (t || LocationInputComponent)();
    };

    LocationInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LocationInputComponent,
      selectors: [["app-location-input"]],
      inputs: {
        loc: "loc"
      },
      outputs: {
        locationsChange: "locationsChange"
      },
      decls: 7,
      vars: 5,
      consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add location", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]],
      template: function LocationInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-chip-list", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LocationInputComponent_mat_chip_3_Template, 3, 4, "mat-chip", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function LocationInputComponent_Template_input_matChipInputTokenEnd_4_listener($event) {
            return ctx.add($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.locations);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.errorMessage);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipRemove"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24taW5wdXQvbG9jYXRpb24taW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWlucHV0L2xvY2F0aW9uLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocationInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-location-input',
          templateUrl: './location-input.component.html',
          styleUrls: ['./location-input.component.css']
        }]
      }], function () {
        return [];
      }, {
        loc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        locationsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/manager-dialog/manager-dialog.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/manager-dialog/manager-dialog.component.ts ***!
    \************************************************************/

  /*! exports provided: ManagerDialogComponent */

  /***/
  function srcAppManagerDialogManagerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerDialogComponent", function () {
      return ManagerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var ManagerDialogComponent = /*#__PURE__*/function () {
      function ManagerDialogComponent(data) {
        _classCallCheck(this, ManagerDialogComponent);

        this.data = data;
        this.onApply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displaySettings = {
          locations: [],
          displayProperty: 'Temperature',
          forecastInterval: 2
        };
        this.displaySettingsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = data;
      }

      _createClass(ManagerDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displaySliderValue",
        value: function displaySliderValue(value) {
          return value + "d";
        }
      }, {
        key: "applyChanges",
        value: function applyChanges() {
          console.log('ucitano');
        }
      }, {
        key: "revertChanges",
        value: function revertChanges() {}
      }, {
        key: "model",
        set: function set(val) {
          console.log('update');
          this.displaySettings = val;
          this.displaySettingsChange.emit(this.displaySettings);
        }
      }]);

      return ManagerDialogComponent;
    }();

    ManagerDialogComponent.ɵfac = function ManagerDialogComponent_Factory(t) {
      return new (t || ManagerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ManagerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagerDialogComponent,
      selectors: [["app-manager-dialog"]],
      inputs: {
        globalSettings: "globalSettings"
      },
      outputs: {
        displaySettingsChange: "displaySettingsChange"
      },
      decls: 28,
      vars: 5,
      consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "loc", "locChange"], [3, "value", "valueChange"], ["value", "temperature"], ["value", "cloud"], ["value", "pressure"], ["value", "humidity"], ["min", "1", "max", "5", "thumbLabel", "", 3, "displayWith", "value", "valueChange"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"]],
      template: function ManagerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Display Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-location-input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("locChange", function ManagerDialogComponent_Template_app_location_input_locChange_5_listener($event) {
            return ctx.settings.locations = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Property");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ManagerDialogComponent_Template_mat_select_valueChange_10_listener($event) {
            return ctx.settings.displayProperty = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pressure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Humidity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Forecast interval");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-slider", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ManagerDialogComponent_Template_mat_slider_valueChange_22_listener($event) {
            return ctx.settings.forecastInterval = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerDialogComponent_Template_button_click_24_listener() {
            return ctx.revertChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerDialogComponent_Template_button_click_26_listener() {
            return ctx.applyChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loc", ctx.settings.locations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.settings.displayProperty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displaySliderValue)("value", ctx.settings.forecastInterval);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      styles: ["mat-dialog-content[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\r\n  min-width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci1kaWFsb2cvbWFuYWdlci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXItZGlhbG9nL21hbmFnZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRlbnQsIG1hdC1mb3JtLWZpZWxkIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manager-dialog',
          templateUrl: './manager-dialog.component.html',
          styleUrls: ['./manager-dialog.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        globalSettings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        displaySettingsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Zdravko\Documents\Lab\fax\hci-weather-forecast\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map