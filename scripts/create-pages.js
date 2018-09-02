const fs = require("fs");

// read sidebar.json
const structure = JSON.parse(
  fs.readFileSync("../website/sidebars.json", "utf8")
);

// loop through the structure
Object.entries(structure).forEach(([key, value]) => {
  Object.entries(value).forEach(([innerKey, innerValue]) => {
    innerValue.forEach(function(document) {
      // check if the document exists
      const path = "../docs/" + document + ".md";
      const pageId = document.split("/")[1];

      if (!fs.existsSync(path)) {
        const contents = `---
id: ${pageId}
title: ${pageId}
sidebar_label: WIP-${pageId}
---


WORK IN PROGRESS
        `;

        fs.writeFile(path, contents, function(err) {
          if (err) {
            return console.log(err);
          }

          console.log("The file was saved: " + path);
        });
      } else {
        console.log("TRUE => " + path);
      }
    });
  });
});
