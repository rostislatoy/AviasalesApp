"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.toggleThreeStopOversChecked =
  exports.toggleTwoStopOversChecked =
  exports.toggleOneStopOverChecked =
  exports.toggleNoStopOverChecked =
  exports.toggleAllChecked =
  exports.updateFilter =
  exports.saveTicket =
    void 0;

var _constants = require("./constants");

var saveTicket = function saveTicket(object) {
  return {
    type: "TICKET",
    payload: object,
  };
};

exports.saveTicket = saveTicket;

var updateFilter = function updateFilter(filter) {
  return {
    type: "UPDATE_FILTER",
    payload: filter,
  };
};

exports.updateFilter = updateFilter;

var toggleAllChecked = function toggleAllChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_ALL_CHECKED,
  };
};

exports.toggleAllChecked = toggleAllChecked;

var toggleNoStopOverChecked = function toggleNoStopOverChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_NO_STOP_OVER_CHECKED,
  };
};

exports.toggleNoStopOverChecked = toggleNoStopOverChecked;

var toggleOneStopOverChecked = function toggleOneStopOverChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_ONE_STOP_OVER_CHECKED,
  };
};

exports.toggleOneStopOverChecked = toggleOneStopOverChecked;

var toggleTwoStopOversChecked = function toggleTwoStopOversChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_TWO_STOP_OVERS_CHECKED,
  };
};

exports.toggleTwoStopOversChecked = toggleTwoStopOversChecked;

var toggleThreeStopOversChecked = function toggleThreeStopOversChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_THREE_STOP_OVERS_CHECKED,
  };
};

exports.toggleThreeStopOversChecked = toggleThreeStopOversChecked;
