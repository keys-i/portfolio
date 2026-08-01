use std::{env, process::ExitCode};

fn is_one_segment(branch: &str) -> bool {
    !branch.is_empty() && !branch.contains('/') && !branch.chars().any(char::is_whitespace)
}

fn main() -> ExitCode {
    let Some(branch) = env::args().nth(1) else {
        eprintln!("usage: branch-policy <branch>");
        return ExitCode::FAILURE;
    };

    if is_one_segment(&branch) {
        ExitCode::SUCCESS
    } else {
        eprintln!("branch names must be one path segment without whitespace: {branch}");
        ExitCode::FAILURE
    }
}

#[cfg(test)]
mod tests {
    use super::is_one_segment;

    #[test]
    fn enforces_one_segment_names() {
        assert!(is_one_segment("deploy"));
        assert!(is_one_segment("release-plz-2026-08-01T14-30-09Z"));
        assert!(!is_one_segment("feature/deploy"));
        assert!(!is_one_segment("two words"));
        assert!(!is_one_segment(""));
    }
}
