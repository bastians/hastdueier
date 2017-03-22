# [hastdueier](http://hastdueier.de) [![Build Status](https://travis-ci.org/bastians/hastdueier.svg?branch=master)](https://travis-ci.org/bastians/hastdueier)

## API

```
GET /api/anwser.php
```

Parameter

- `pretty`: [`true`|`false`] Pretty print JSON output.

Get a random answer.

### Example

```
$ curl -XGET "http://hastdueier.de/api/answer.php?pretty=true"

{
    "found": false,
    "headline": "Nein. &#128532;",
    "description": "Schade! Denn: Eier! Wir brauchen Eier!",
    "mediaUrl": "https: //img.youtube.com\/vi\/GMnBOQAxe4c\/0.jpg",
    "mediaEmbed": "<iframe width=\"533\" height=\"300\" src=\"https://www.youtube.com\/embed\/GMnBOQAxe4c?autoplay=1&rel=0&amp;controls=0\" frameborder=\"0\" allowfullscreen><\/iframe>"
}
```

## Setup using Docker

1. [Install Docker](https://docs.docker.com/engine/getstarted/step_one/)

2. Run container

```
docker build -t hastdueier .
docker run -p 8000:80 hastdueier
```

3. Open

```
open http://localhost:8000
```

## Codestyle

The codestyle of hastdueier is enforced by [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer).
To check the code [Composer](https://getcomposer.org/) has to be installed. Afterwards all dependencies have to be installed by running `composer install` on the command line. Now the codestyle can be checked by running `composer cs`.
