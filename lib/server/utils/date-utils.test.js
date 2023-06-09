"use strict";

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _dateUtils = require("./date-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PST = 'America/Los_Angeles';
describe('date utils', () => {
  describe('dayCount', () => {
    it('should return 1 day given epochs of the same day', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('8/3/2015 3:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()])).toEqual(1);
    });
    it('should return 1 day given same epochs', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()])).toEqual(1);
    });
    it('should return 2 days when there is a 24 hours difference', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('8/4/2015 2:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()])).toEqual(2);
    });
    it('should return 2 days when the diff is less than 24h but ' + 'different in UTC', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('8/4/2015 1:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('8/3/2015 23:00', 'M/D/YYYY H:mm').valueOf()])).toEqual(2);
    });
    it('should return 1 day when the diff is less than 24h ' + 'and days are different in UTC, but given PST', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('8/4/2015 1:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('8/3/2015 23:00', 'M/D/YYYY H:mm').valueOf()], PST)).toEqual(1);
    });
    it('should return correct count when there is very big period', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('10/27/2015 1:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('5/12/1982 1:00', 'M/D/YYYY H:mm').valueOf()])).toEqual(12222);
    });
    it('should return 2 days when there is a 24 hours difference ' + 'between dates given `undefined` timezone', () => {
      expect((0, _dateUtils.dayCount)([_momentTimezone.default.utc('8/4/2015 2:00', 'M/D/YYYY H:mm').valueOf(), _momentTimezone.default.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()])).toEqual(2);
    });
  });
});