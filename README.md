# WDIO5 with wdio-docker-service
> POC of wdio-docker-service with Webdriver.io 5 support without commiting it to monorepo (WDIO supports legacy style services).

**Steps to reproduce**

1. `git clone git@github.com:serbanghita/wdio5-docker.git`
1. `cd wdio5-docker && npm install`
1. `git clone git@github.com:serbanghita/wdio-docker-service.git`
1. `cd wdio-docker-service && git checkout WDIO5`
1. `npm install`
1. `cd ../wdio5-docker`
1. `npm link ../wdio-docker-service`
1. `npm run docker`