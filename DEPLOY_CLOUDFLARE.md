# Cloudflare Workers deployment

This is a TanStack Start SSR application deployed as a Cloudflare Worker. The
GoDaddy domain stays registered at GoDaddy; only its authoritative nameservers
move to Cloudflare.

## First deployment

Use the Cloudflare account that will own the production Worker:

```bash
npm ci
npx wrangler login
npx wrangler whoami
npm run deploy
```

Wrangler prints a temporary `workers.dev` URL. Open that URL and verify `/`,
`/privacy`, `/terms`, `/robots.txt`, and `/sitemap.xml` before connecting the
production domain.

## Add the GoDaddy domain to Cloudflare

1. In Cloudflare, choose **Add a domain** and enter
   `empowernettechnologies.com`.
2. Select the required plan and let Cloudflare scan the existing DNS zone.
3. Before continuing, compare every existing GoDaddy DNS record with the
   imported Cloudflare records. Preserve all MX, TXT, SPF, DKIM, DMARC, and
   mail-related CNAME records.
4. Cloudflare displays two assigned nameservers. Copy them exactly.
5. In GoDaddy: **Domain Portfolio** -> `empowernettechnologies.com` -> **DNS** ->
   **Nameservers** -> **Change Nameservers** -> **I'll use my own nameservers**.
6. Replace the GoDaddy nameservers with the two Cloudflare nameservers and
   save. Do not transfer the domain registration.
7. Wait until Cloudflare marks the domain **Active**. DNS propagation can take
   up to 48 hours.

## Connect the Worker to the production domain

After the Cloudflare zone is active:

1. Open **Workers & Pages** -> **empowernet-technologies**.
2. Open **Settings** -> **Domains & Routes** -> **Add** -> **Custom Domain**.
3. Add `empowernettechnologies.com`.
4. Repeat for `www.empowernettechnologies.com` if both hostnames are required.
5. Let Cloudflare create the DNS records and TLS certificates automatically.

If an old `A`, `AAAA`, or `CNAME` record conflicts with either hostname, remove
only that old web-hosting record. Do not remove email records.

## Later deployments

```bash
npm ci
npm run deploy
```

## Verification and rollback

```bash
npx wrangler deployments list
npx wrangler tail
```

Verify the public URLs:

```bash
curl -I https://empowernettechnologies.com/
curl -I https://empowernettechnologies.com/robots.txt
curl -I https://empowernettechnologies.com/sitemap.xml
```

Cloudflare keeps deployment history in the Worker dashboard. Use
**Deployments** to roll back if a production deployment is unhealthy.

## Production URL policy

The Worker configuration disables both the default `workers.dev` address and
version preview URLs. Production traffic is served only through the configured
custom domains. Keep `workers_dev` and `preview_urls` set to `false` in
`wrangler.jsonc`; otherwise a later Wrangler deployment can expose those URLs
again.
