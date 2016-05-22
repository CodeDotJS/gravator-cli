# gravator-cli

> CLI Tool to find user information of a gravatar user.

[![Build Status](https://travis-ci.org/CodeDotJS/gravator-cli.svg?branch=master)](https://travis-ci.org/CodeDotJS/gravator-cli)

## Install

```
$ npm install --global gravator-cli
```
__OR__
```
$ sudo npm install --global gravator-cli
```

## Usage

```
$ gravator

Usage: gravator -u [user.name]

Options:
  -u  ❱ gravatar username                                             [required]

Examples:
  gravator -u rushforlinux

Missing required argument: u

```

__NOTE__

If you see a section missing, it means the value for that section is *null* in API, which means
user didn't provide information for that part.

## Screenshot

[![Gravator CLI](http://rishigiri.com/github/gravator-cli.png)](https://github.com/CodeDotJS/gravator-cli)

## Related

- [gravator](https://github.com/CodeDotJS/gravator) : API for this CLI Tool.

- [twifo](https://github.com/CodeDotJS/twifo-cli) : Get user information of a twitter user.

- [packstat](https://github.com/CodeDotJS/packstat-cli) : Easily display metrices about npm modules.

- [packages-by](https://github.com/CodeDotJS/packages-by-cli) : Total packages published by a npm user.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)