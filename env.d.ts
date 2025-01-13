// env.d.ts
interface ImportMetaEnv {
  readonly V2RAY_CORE_VERSION: string;
  readonly APP_VERSION: string;
  readonly SENTRY_DSN: string;
  // Add more environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
