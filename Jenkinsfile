pipeline {
    agent any
    options {
        buildDiscarder logRotator(numToKeepStr: '10')
    }
    stages {
        stage('Zip') {
            steps {
                zip archive: true, dir: './', glob: '', zipFile: 'WebPage.zip'
            }
        }
        stage('Docker Build') {
            steps {
                sh encoding: 'UTF-8', label: '', returnStdout: true, script: '''
                docker build -t portfolio-template:1.0.0-${BUILD_NUMBER} .
                docker tag portfolio-template:1.0.0-${BUILD_NUMBER} portfolio-template:latest
                '''
            }
        }
        stage('Docker Run') {
            steps {
                sh encoding: 'UTF-8', label: '', returnStdout: true, script: '''
                /usr/bin/docker-compose down
                /usr/bin/docker-compose up -d
                '''
            }
        }
    }
}