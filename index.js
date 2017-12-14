import { NativeModules } from 'react-native';

const { SegmentAnalytics } = NativeModules;

export default {
  setup: function(configKey) {
    SegmentAnalytics.setup(configKey);
  },

  identify: function(userId, traits) {
    SegmentAnalytics.identify(userId, traits);
  },

  track: function(trackText, properties) {
    SegmentAnalytics.track(trackText, properties);
  },

  screen: function(screenName, properties) {
    SegmentAnalytics.screen(screenName, properties);
  },

  alias: function(newId) {
    SegmentAnalytics.alias(newId);
  },

  reset: function() {
    SegmentAnalytics.reset();
  },
};
