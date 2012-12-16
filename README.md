# Hastings [![Build Status][travis-ci-img]][travis-ci-url]

> Documentation with grit.

## Install

    $ npm install -g hastings

## Usage

### Commands

    $ hastings build [path] ........... output html to build/doc/
    $ hastings watch [path] ........... build and watch for changes
    $ hastings help ................... get help

### Example: Render a File

    $ hastings build README.md
        => build/doc/README.html

### Example: Render a Directory

    $ hastings build doc/
        => build/doc/getting-started.md

### Example: Watch a Directory

    $ hastings watch
        => [2012-06-08 11:13am] server started at 127.0.0.1:3000
        => [2012-06-08 11:13am] serving build/doc/
        => [2012-06-08 11:13am] rendered doc/getting-started.md

## Commands

### $ hastings build [path]

Builds the HTML documentation and outputs the files.

    $ hastings build
    $ hastings build doc/
    $ hastings build documentation/

By default, the documentation path is `doc/`. This can be changed by providing
a `[path]`.

The optional `[path]` can be a single markdown file or directory. When a file is
specified, it is rendered to the the build path. When a directory is specified,
then the entire directory is copied to the build path and each markdown file
is replaced with a HTML file. The copy step allows assets to be included with
the rendered HTML.

The build output is stored in `build/doc`. This can be changed by providing
the option `--output <path>`.

### $ hastings watch [path]

Live edit and preview of the documentation.

    $ hastings watch
    $ hastings watch doc/
    $ hastings watch documentation/
        => [2012-06-08 11:13am] server started at 127.0.0.1:3000
        => [2012-06-08 11:13am] serving build/doc/
        => [2012-06-08 11:13am] rendered doc/en/index.md

By default, the documentation path is `doc/`. This can be overridden with
`[path]`.

The optional `[path]` can be a markdown file or directory. When a file is
specified, it is rendered to the the build path. When a directory is specified,
then the entire directory is copied to the build path and each markdown file
is replaced with a HTML file.

The build output is stored in `build/doc` and can be viewed by opening a browser
to `localhost:3000`.

### $ hastings help

Display the commands available to hastings.

    $ hastings help

## Customization

### Templates

You can add custom templates and override the existing ones.

Add any markdown file to `lib/doc/template/` and the filename is used as the
template name.

For example you can make `lib/doc/template/getting-started.md` as a
Getting Started template. You can then create a document from the template
with the command:

    $ hastings create getting-started doc/hello-world.md

You can override a default template by create a file in `lib/doc/template/`
with the same name. For example, to override `guide` you can create the file
`lib/doc/template/guide.md`.

### Themes

You can add a custom HTML theme for your documentation.

Add a HTML theme to `lib/doc/theme/` and it will override the default theme.
When building your documentation, the entire theme directory is copied to
`build/doc/`.

`index.html` is your HTML theme template. Add the element `<hastings/>`
where you want the content of each markdown file to be inserted.

    <html>
        <head>
            ...
        </head>
        <body>
            ...
            <hastings/>
            ...
        </body>
    </html>

[travis-ci-img]: https://travis-ci.org/mwbrooks/hastings.png?branch=master
[travis-ci-url]: http://travis-ci.org/mwbrooks/hastings

