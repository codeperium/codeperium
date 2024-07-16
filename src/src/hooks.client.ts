import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_ENV, PUBLIC_SENTRY_DSN, PUBLIC_SENTRY_PROJECT } from '$env/static/public';

Sentry.init({
	environment: PUBLIC_ENV,
	dsn: PUBLIC_SENTRY_DSN,

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,

	// Optional: Initialize Session Replay:
	integrations: [Sentry.replayIntegration()],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0
});

export const handleError = Sentry.handleErrorWithSentry();
