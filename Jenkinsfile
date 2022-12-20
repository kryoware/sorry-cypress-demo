pipeline {
  agent {
    docker {
      image 'cypress/browsers:node16.16.0-chrome107-ff107'
    }
  }

  stages {
    stage('Build') {
      steps {
        sh 'ls -l'
        sh 'npm ci'
      }
    }

    stage('Test') {
      environment {
        CYPRESS_trashAssetsBeforeRuns = 'false'
      }

      steps {
        sh "npx cy2 run --parallel --record --key demo --ci-build-id ${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
      }
    }
  }
}
