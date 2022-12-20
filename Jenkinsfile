pipeline {
  agent {
    docker {
      image "cypress/browsers:node16.16.0-chrome107-ff107"
    }
  }

  stages {
    stage("Build") {
      steps {
        sh "npm ci"
      }
    }

    stage("Test") {
      environment {
        // sorry-cypress director endpoint
        CYPRESS_API_URL="http://128.199.92.34:1234/"
        CYPRESS_trashAssetsBeforeRuns="false"
      }

      steps {
        // TODO: Fix --parallel run (also add --ci-build-id ${env.BUILD_NUMBER})
        sh "npx cy2 run --browser chrome --record --key demo"
      }
    }
  }
}
