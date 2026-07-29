pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo '========== CHECKOUT =========='
                git 'https://github.com/YOUR_USERNAME/medicine-reminder-app.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo '========== INSTALLING NPM PACKAGES =========='
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                echo '========== BUILDING REACT APP =========='
                sh 'npm run build'
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                echo '========== ARCHIVING BUILD FILES =========='
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
            }
        }
    }
    
    post {
        success {
            echo '✅ Build Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
