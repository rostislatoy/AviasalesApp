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

const _constants = require("./constants");

const saveTicket = function saveTicket(object) {
  return {
    type: "TICKET",
    payload: object,
  };
};

exports.saveTicket = saveTicket;

const updateFilter = function updateFilter(filter) {
  return {
    type: "UPDATE_FILTER",
    payload: filter,
  };
};

exports.updateFilter = updateFilter;

const toggleAllChecked = function toggleAllChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_ALL_CHECKED,
  };
};

exports.toggleAllChecked = toggleAllChecked;

const toggleNoStopOverChecked = function toggleNoStopOverChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_NO_STOP_OVER_CHECKED,
  };
};

exports.toggleNoStopOverChecked = toggleNoStopOverChecked;

const toggleOneStopOverChecked = function toggleOneStopOverChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_ONE_STOP_OVER_CHECKED,
  };
};

exports.toggleOneStopOverChecked = toggleOneStopOverChecked;

const toggleTwoStopOversChecked = function toggleTwoStopOversChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_TWO_STOP_OVERS_CHECKED,
  };
};

exports.toggleTwoStopOversChecked = toggleTwoStopOversChecked;

const toggleThreeStopOversChecked = function toggleThreeStopOversChecked() {
  return {
    type: _constants.actionTypes.TOGGLE_THREE_STOP_OVERS_CHECKED,
  };
};

exports.toggleThreeStopOversChecked = toggleThreeStopOversChecked;
