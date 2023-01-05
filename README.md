# Disqus Comment Exporter

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

Node.js-based utility for exporting your Disqus comments into a JSON file.

## Requirements

* Node.js v18+
* A Disqus API key (create a [Disqus API Application](https://disqus.com/api/applications/))

## Usage

**Note:** Set up an environment variable called `DISQUS_API_KEY` that contains your Disqus API key before running the CLI.

This package is intended to be used on the command line. The easiest way to do that is using `npx`:

```shell
npx @humanwhocodes/disqus-export forum-name
```

Where `forum-name` is the ID of your forum on Disqus.

By default, the CLI will output your data into a file named `forum-name-export.json` in your current working directory. You can change the output filename by passing in the `-o` argument:

```shell
npx @humanwhocodes/disqus-export forum-name -o out.json
```

You can also install and run locally. When running locally, you can use the shorter CLI name that omits the package scope (`disqus-export` instead of `@humanwhocodes/disqus-export`):

```shell
npm i @humanwhocodes/disqus-export
npx disqus-export forum-name
```

## License

Apache 2.0

## Prior Art

* [Exporting Disqus comments and adding them to Eleventy](https://www.raymondcamden.com/2021/02/11/exporting-disqus-comments-and-adding-them-to-eleventy) by Raymond Camden
