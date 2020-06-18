pipeline {
  agent any
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
}