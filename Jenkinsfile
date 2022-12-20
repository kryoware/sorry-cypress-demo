pipeline {
  agent {
    docker {
      image "cypress/browsers:node16.16.0-chrome107-ff107"
    }
  }

  stages {
    stage("Build") {
      steps {
        sh "ls -l"
        sh "npm ci"
      }
    }

    stage("Test") {
      environment {
        CYPRESS_API_URL="http://128.199.92.34:8080/"
        CYPRESS_trashAssetsBeforeRuns="false"
      }

      steps {
        // TODO: Fix --parallel run
        sh "npx cy2 run --record --key demo --ci-build-id ${env.BUILD_NUMBER}"
      }
    }
  }
}
