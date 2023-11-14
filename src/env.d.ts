/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RMQ_CONNECTION_STRING: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
