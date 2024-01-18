import { dev } from "$app/environment";
import { inject } from "@vercel/analytics";

inject({ mode: dev ? "development" : "production" });

import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();
