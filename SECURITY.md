# Security Policy

## Supported versions

The current `26.x` release line receives security updates. Older snapshots are unsupported; please
reproduce a report against the latest `master` before submitting it.

## Report a vulnerability

Use a [private GitHub security advisory](https://github.com/keys-i/portfolio/security/advisories/new).
Do not disclose the vulnerability in a public issue or pull request.

Include the affected page or component, impact, reproduction steps, and any suggested mitigation.
Maintainers aim to acknowledge a complete report within seven days and will coordinate disclosure
after a fix is available. Please allow reasonable time for investigation and deployment.

The EmailJS service, template, and public key identifiers are sent to the browser by design. Limit
their allowed origins and rate limits in EmailJS. Private keys, account credentials, and local
`.env` files must never be committed.
