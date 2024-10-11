Groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t masjid-e-bilal . -f Dockerfile'
            }
        }
    }
}