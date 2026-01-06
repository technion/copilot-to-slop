# Copilot to Slop

A browser extension reminiscent of Cloud to Butt.

## Credits

This was largely based on https://github.com/gabrielfalcao/cloud-to-butt/ which was a fork of https://github.com/panicsteve/cloud-to-butt, both used a snippet from http://is.gd/mwZp7E

## Build

```
npx esbuild content_script.ts --bundle --outfile=dist/content_script.js --target=es2020 --minify
```

## Installation

Will be published on Chrome store soon. In the meantime, use the attached release.
