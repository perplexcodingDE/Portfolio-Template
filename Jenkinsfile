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
        sh encoding: 'UTF-8', label: '', returnStdout: true, script: '''docker info
        docker build -t ${JOB_NAME}:${BUILD_NUMBER} .
        docker tag ${JOB_NAME}:${BUILD_NUMBER} ${JOB_NAME}:latest
        docker images'''
      }
    }
  }
}