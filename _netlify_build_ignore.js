const { execSync } = require("child_process");

module.exports = () => {
    try {
        // Get the list of changed files between current and previous commit
        const commitRef = process.env.COMMIT_REF;
        const cachedCommitRef = process.env.CACHED_COMMIT_REF;

        if (!commitRef || !cachedCommitRef) {
            console.log(
                "Missing COMMIT_REF or CACHED_COMMIT_REF. Proceeding with build."
            );
            return false; // Run the build just in case
        }

        const diff = execSync(
            `git diff --name-only ${cachedCommitRef} ${commitRef}`
        ).toString();
        const changedFiles = diff.split("\n").filter(Boolean);

        const notesChanged = changedFiles.some((file) =>
            file.startsWith("notes/")
        );

        if (notesChanged) {
            console.log(
                "Changes detected in 'notes/' folder. Proceeding with build."
            );
            return false; // Run the build
        } else {
            console.log("No changes in 'notes/' folder. Skipping build.");
            return true; // Skip the build
        }
    } catch (error) {
        console.error("Error checking changed files:", error);
        return false; // On error, build anyway
    }
};
