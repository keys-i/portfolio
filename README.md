# Rad’s Portfolio

Rad’s Portfolio is a personal site you explore like a desktop. Its interface, **Krad Linux**,
turns projects, skills, a résumé, a terminal, a calculator, themes, and a contact form into a
small browser-based operating system.

[Open Krad Linux](https://keysi.dev/) · [View the source](https://github.com/keys-i/portfolio)

The GitHub Pages project URL is <https://keys-i.github.io/portfolio/>; it redirects to the custom
domain above.

## Explore

- Open **About Rad** for the portfolio, projects, skills, education, and résumé.
- Try familiar commands in the terminal, use the calculator, or change the wallpaper and theme.
- Browse the app launcher and desktop shortcuts. Everything runs in the browser.
- Configure the optional EmailJS form to make the Contact app send messages.

## Run it locally

Install Node.js 22 or newer, then:

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. To enable the contact form, copy `.env.example` to `.env.local` and
add your EmailJS browser identifiers. Restrict allowed origins and rate limits in EmailJS; never
commit private credentials.

## Quality checks

JavaScript formatting and linting use the Rust-based Oxfmt and Oxlint toolchain.

```sh
npm run check
npm run build
cargo fmt --check
cargo clippy --locked --all-targets -- -D warnings
cargo test --locked
```

GitHub Actions runs the same checks, CodeQL, dependency review, and `npm audit`. Successful pushes
to `master` are exported by Next.js and deployed through GitHub Pages.

## Releases

The initial `26.8.0` version borrows Ubuntu’s year-and-month feel while remaining valid Semantic
Versioning (no leading zero in `8`). From that baseline, release-plz uses conventional commits to
prepare patch, minor, and major releases with changelog updates.

## Join in

Please read the [contribution guide](docs/CONTRIBUTING.md),
[Code of Conduct](CODE_OF_CONDUCT.md), and [security policy](SECURITY.md) before opening a change.
The release history lives in [CHANGELOG.md](CHANGELOG.md).

Rad’s Portfolio is available under the [GNU General Public License v3.0](LICENSE).
