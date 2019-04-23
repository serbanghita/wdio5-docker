# WDIO5 with wdio-docker-service
> POC of wdio-docker-service with Webdriver.io 5 support without commiting it to monorepo (WDIO supports legacy style services).

**Steps to reproduce**

1. `git clone git@github.com:serbanghita/wdio5-docker.git`
1. `cd wdio5-docker && npm install`

This will eventually fail with:
```
babel:
  ./src does not exist
```
Which seems to be a Babel.js bug: https://github.com/babel/babel/issues/9871

1. `git clone git@github.com:serbanghita/wdio-docker-service.git`
1. `cd wdio-docker-service && git checkout WDIO5`
1. `npm install`

Now go back to `wdio5-docker` repo:

1. `cd ../wdio5-docker`
1. `npm link ../wdio-docker-service`

Now `babel` works!

1. `npm run docker`

Now WDIO5 + WDIO Docker support works.