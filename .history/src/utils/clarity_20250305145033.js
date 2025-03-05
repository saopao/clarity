export const initClarity = (clarityProjectId) => {
  if (window.clarity) {
    window.clarity('identify', clarityProjectId);
  }
};

export const trackPerformance = () => {
  if (window.clarity) {
    window.clarity('performance', {
      page_load_time: performance.now(),
      custom_metric: 'value'
    });
  }
};

export const trackEvent = (eventName, data) => {
  if (window.clarity) {
    window.clarity('event', eventName, data);
  }
};

export const setCustomTag = (key, value) => {
  if (window.clarity) {
    window.clarity('set', key, value);
  }
}; 