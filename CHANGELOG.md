# Changelog

All notable changes to Rad's Portfolio are documented here. The project uses Semantic Versioning
with an Ubuntu-inspired `YY.M.patch` starting point.

## [Unreleased]

## [26.9.0](https://github.com/keys-i/portfolio/compare/v26.8.0...v26.9.0) - 2026-08-02

### Added

- present Rad's Portfolio as Krad Linux ([#13](https://github.com/keys-i/portfolio/pull/13))

### Changed

- Renamed the public desktop experience to Krad Linux and humanized the project documentation.
- Added contribution, conduct, and security policies with private reporting instructions.

## [26.8.0] - 2026-08-01

### Changed

- Replaced the legacy deployment pipeline with strict checks and current dependencies.
- Moved formatting and linting to the Rust-based Oxfmt and Oxlint toolchain.
- Hardened browser input handling and removed personal message data from analytics.

### Security

- Removed the tracked local environment file and eliminated known dependency vulnerabilities.
