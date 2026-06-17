/**
 * PM2 process manager — Pict n Pick
 *
 * This is a Next.js STATIC EXPORT (next.config.ts -> output: "export").
 * `next start` is NOT compatible with static export, so we serve the built
 * `out/` folder with PM2's built-in static file server, then put nginx in
 * front of it as a reverse proxy (see deploy/nginx/pictnpick.my.id.conf).
 *
 * Deploy flow on the server:
 *   git pull
 *   npm ci
 *   npm run build                  # generates ./out
 *   pm2 start ecosystem.config.js  # serves ./out on 127.0.0.1:3000-ish
 *   pm2 save                       # persist the process list
 *   pm2 startup                    # generate a boot script (run printed cmd)
 *
 * Update flow:
 *   git pull && npm ci && npm run build && pm2 reload pictnpick
 */
module.exports = {
  apps: [
    {
      name: "pictnpick",
      // PM2's internal static server (no extra npm dependency needed).
      script: "serve",
      cwd: __dirname,
      env: {
        PM2_SERVE_PATH: "./out", // the static export output
        PM2_SERVE_PORT: 3000, // local port nginx proxies to
        // Single-page marketing site: send any unknown path to the homepage
        // instead of a hard 404. Set to "false" to keep Next's 404.html.
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      time: true, // timestamp log lines
    },
  ],
};
