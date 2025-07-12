const { execSync } = require("child_process");

module.exports = async () => {
    const diff = execSync("git diff --name-only HEAD^ HEAD").toString();
    const changedFiles = diff.split("\n").filter(Boolean);

    // Only build if any file in the "notes" folder changed
    const shouldBuild = changedFiles.some((file) => file.startsWith("notes/"));
    return !shouldBuild; // Return true to SKIP the build
};
