pipeline {
  agent any
  tools {}
  options {
    buildDiscarder logRotator(numToKeepStr: '10')
  }
  stages {
    stage('Zip') {
      steps {
        zip archive: true, dir: './*', glob: '', zipFile: 'WebPage.zip'
      }
    }
  }
  post {
    always {
      /*withCredentials([string(credentialsId: 'cloudnet-discord-ci-webhook', variable: 'url')]) {
        discordSend description: 'New build for CloudNet!', footer: 'New build!', link: env.BUILD_URL, successful: currentBuild.resultIsBetterOrEqualTo('SUCCESS'), title: JOB_NAME, webhookURL: url
      }*/
    }
  }
}