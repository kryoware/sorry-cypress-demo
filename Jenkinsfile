pipeline {
    agent {
        docker {
            image 'cypress/browsers:node16.16.0-chrome107-ff107'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            environment {
                CYPRESS_trashAssetsBeforeRuns = 'false'
            }

          steps {
            echo "Running build ${env.BUILD_ID}"
            sh "npx currents run --parallel --record --key ${env.CURRENTS_RECORD_KEY} --ci-build-id ${env.BRANCH_NAME}-${env.BUILD_ID}"

          }
        }
    }
}
