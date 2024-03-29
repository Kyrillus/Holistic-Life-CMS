export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', ''),
      port: env.int('DATABASE_PORT', 5590),
      database: env('DATABASE_NAME', ''),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
  debug: true,
  acquireConnectionTimeout: 600000,
  pool: {
    min: 0,
    max: 100,
    acquireTimeoutMillis: 300000,
    createTimeoutMillis: 300000,
    destroyTimeoutMillis: 50000,
    idleTimeoutMillis: 300000,
    reapIntervalMillis: 10000,
    createRetryIntervalMillis: 2000,
    propagateCreateError: false,
  },
});
