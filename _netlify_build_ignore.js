const { execSync } = require("child_process");

module.exports = () => {
    try {
        const commitRef = process.env.COMMIT_REF;
        const cachedCommitRef = process.env.CACHED_COMMIT_REF;

        console.log("COMMIT_REF:", commitRef);
        console.log("CACHED_COMMIT_REF:", cachedCommitRef);

        // Fallback to always build if refs are missing
        if (!commitRef || !cachedCommitRef || commitRef === cachedCommitRef) {
            console.log(
                "Missing or identical commit refs. Proceeding with build."
            );
            return false;
        }

        // Get the list of changed files
        const diffOutput = execSync(
            `git diff --name-only ${cachedCommitRef} ${commitRef}`,
            {
                stdio: ["ignore", "pipe", "ignore"],
            }
        ).toString();

        const changedFiles = diffOutput.split("\n").filter(Boolean);
        console.log("Changed files:", changedFiles);

        // Check if any file is inside the notes/ folder
        const notesChanged = changedFiles.some((file) =>
            file.startsWith("notes/")
        );

        if (notesChanged) {
            console.log("Changes detected in 'notes/'. Proceeding with build.");
            return false; // do NOT ignore build
        } else {
            console.log("No changes in 'notes/'. Skipping build.");
            return true; // ignore the build
        }
    } catch (error) {
        console.error("Error during ignore script:", error);
        return false; // fallback: run the build
    }
};
