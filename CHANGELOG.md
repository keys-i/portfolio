# Changelog

All notable changes to Rad's Portfolio are documented here. The project uses Semantic Versioning
with an Ubuntu-inspired `YY.M.patch` starting point.

## [Unreleased]

## [26.8.0] - 2026-08-01

### Changed

- Replaced the legacy deployment pipeline with strict checks and current dependencies.
- Moved formatting and linting to the Rust-based Oxfmt and Oxlint toolchain.
- Hardened browser input handling and removed personal message data from analytics.

### Security

- Removed the tracked local environment file and eliminated known dependency vulnerabilities.
