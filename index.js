const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const axios = require("axios");

// Your GitHub personal access token
const githubToken = "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";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/npm-package-info/:packageName", async (req, res) => {
  try {
    const packageName = req.params.packageName;

    const npmResponse = await axios.get(`https://registry.npmjs.org/${packageName}`);
    const packageInfo = npmResponse.data;

    const npmPackage = {
      name: packageInfo.name,
      version: packageInfo["dist-tags"].latest,
      description: packageInfo.description,
      author: packageInfo.author,
      repository: packageInfo.repository,
      homepage: packageInfo.homepage,
      license: packageInfo.license,
      dependencies: packageInfo.versions[packageInfo["dist-tags"].latest].dependencies || []
    };

    res.render("npm-package-info", { npmPackage });
  } catch (error) {
    console.error("Error fetching NPM package information:", error.message);
    res.render("npm-package-info", { npmPackage: null });
  }
});
app.get("/", async (req, res) => {
  try {
    // Fetch information about the DISBD package from NPM
    const packageName = "disbd";
    const npmResponse = await axios.get(`https://registry.npmjs.org/${packageName}`);
    const packageInfo = npmResponse.data;

    // Fetch download statistics for the package
    const downloadStatsResponse = await axios.get(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
    const downloads = downloadStatsResponse.data.downloads;

    const npmPackage = {
      name: packageInfo.name,
      version: packageInfo["dist-tags"].latest,
      description: packageInfo.description,
      author: packageInfo.author,
      repository: packageInfo.repository,
      homepage: packageInfo.homepage,
      license: packageInfo.license,
      dependencies: packageInfo.versions[packageInfo["dist-tags"].latest].dependencies || [],
      downloads: downloads
    };

    // Fetch information about GitHub repositories
    const githubUsername = "k-eren-k";
    const githubHeaders = {
      Authorization: `Bearer ${githubToken}`
    };

    const githubResponse = await axios.get(`https://api.github.com/users/${githubUsername}/repos`, { headers: githubHeaders });

    const repositories = githubResponse.data.map(repo => {
      return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        description: repo.description
      };
    });

    res.render("index", { npmPackage, repositories });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.render("index", { npmPackage: null, repositories: [] });
  }
});



app.listen(port, () => {
  console.log(`Dev Web Başlatıldı 🍎 - Listening on port ${port}`);
});
