import * as Sentry from "@sentry/sveltekit";

Sentry.init({
    environment: process.env.ENV,
    dsn: process.env.SENTRY_DSN,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,

    // Optional: Initialize Session Replay:
    integrations: [Sentry.replayIntegration()],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

export const handleError = Sentry.handleErrorWithSentry();