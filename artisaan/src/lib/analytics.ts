export type AnalyticsEvent = {
  event: string;
  props?: Record<string, unknown>;
};

export const track = (event: string, props?: Record<string, unknown>) => {
  if (import.meta.env.DEV) {
    console.info('[analytics]', event, props);
  }
};

export default { track };
