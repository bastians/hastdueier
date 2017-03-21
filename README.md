# [hastdueier](http://hastdueier.de)

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