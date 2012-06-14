# Hastings

> Documentation with grit.

## Install

    $ npm install hastings

## Usage

    $ hastings [path] ................. output written to /build/doc/
    $ hastings < path ................. output written to stdout
    $ hastings watch [path] ........... build and watch for changes
    $ hastings init [path] ............ initialize default doc files
    $ hastings create template file ... create a template doc file
    $ hastings help ................... get help

## Simple Usage

    # build files in doc/
    $ hastings
        => build/doc/

## Detailed Usage

    # initialize default doc file structure
    $ hastings init
        => mkdir doc/
        => mkdir doc/en/
        => touch doc/en/index.md
        => mkdir lib/doc/

    # create a getting started guide
    $ hastings create guide doc/en/getting-started.md

    # live preview of documentation
    $ hastings watch
        => [2012-06-08 11:13am] server started at 127.0.0.1:3000
        => [2012-06-08 11:13am] serving build/doc/
        => [2012-06-08 11:13am] rendered doc/en/getting-started.md

## Commands

### $ hastings [path]

Builds the HTML documentation and outputs the files.

    $ hastings
    $ hastings doc/
    $ hastings documentation/

By default, the documentation path is `doc/`. This can be overridden with
`[path]`.

The optional `[path]` can be a markdown file or directory. When a file is
specified, it is rendered to the the build path. When a directory is specified,
then the entire directory is copied to the build path and each markdown file
is replaced with a HTML file.

The build output is stored in `build/doc`.

### $ hastings < path

Builds the HTML documentation and pipes output to the console.

    $ hastings < doc/
    $ hastings < documentation/
        => [outputs a wad of HTML]

The parameter `path` can be a markdown file or directory.

### $ hastings watch [path]

Live edit and preview of the documentation.

    $ hastings watch
    $ hastings watch doc/
    $ hastings watch documentation/
        => [2012-06-08 11:13am] server started at 127.0.0.1:3000
        => [2012-06-08 11:13am] serving build/doc/
        => [2012-06-08 11:13am] rendered doc/en/index.md

By default, the documentation path is `doc/`. This can be overriden with
`[path]`.

The optional `[path]` can be a markdown file or directory. When a file is
specified, it is rendered to the the build path. When a directory is specified,
then the entire directory is copied to the build path and each markdown file
is replaced with a HTML file.

The build output is stored in `build/doc` and can be viewed by opening a browser
to `localhost:3000`.

### $ hastings init [path]

Initializes a default documentation file structure. This structure is not
required.

    $ hastings init
        => mkdir doc/
        => mkdir doc/en/
        => touch doc/en/index.md
        => mkdir lib/doc/

By default, the markdown documentation is stored is `doc/` and library files
are stored in `lib/doc/`. You are welcome to change the documentation path to
match your naming convention but you will then need to specify the `path` to
each command.

### $ hastings create _template_ _file_

Create a new document from a template.

    $ hastings create guide doc/en/getting-started.md

The `template` argument is the type of template to use. There are four templates
bundled with hastings:
  - `api`
  - `guide`
  - `trouble-shooting`
  - `faq`

The `file` argument is the file to be created.

You are not required to use templates. Although, templates help you to write
documentation quicker and more consistently.

Custom templates can be added to `lib/doc/template/`. The
[Customization](#customization) section explains templates in more detail.

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
