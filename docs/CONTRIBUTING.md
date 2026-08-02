# Contributing to Rad’s Portfolio

Thanks for helping make Krad Linux clearer, faster, and more useful. Small, focused pull requests
are easiest to review.

## Before you start

- Search existing issues before opening a new one.
- Report vulnerabilities privately through the [security policy](../SECURITY.md).
- For a visible change, open or reference an issue that explains the user-facing problem.

## Make a change

1. Fork the repository and create a branch from `master`.
2. Use a one-word manual branch name such as `docs`, `fix`, or `theme`.
3. Install dependencies with `npm ci`.
4. Make the smallest change that solves the issue.
5. Run the checks below and open a pull request that closes the issue.

Branch names must be one path segment with no slash or whitespace. Automated release-plz and
Dependabot branches may use hyphens, but still remain a single segment.

## Check your work

```sh
npm run check
npm run build
cargo fmt --check
cargo clippy --locked --all-targets -- -D warnings
cargo test --locked
```

Use conventional commit subjects such as `fix: prevent unsafe terminal output` or
`feat: add a project`. They allow release-plz to choose the next Semantic Versioning increment.

## Pull request checklist

- The change is scoped to one problem and has no unrelated cleanup.
- User-facing behavior and accessibility labels are verified in the browser.
- No secret, personal message content, generated build output, or dependency directory is added.
- Documentation and `CHANGELOG.md` are updated when users will notice the change.
- All local and GitHub checks pass.
