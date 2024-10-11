Groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t masjid-e-bilal . -f Dockerfile'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run -p 3000:3000 masjid-e-bilal'
            }
        }
    }
}