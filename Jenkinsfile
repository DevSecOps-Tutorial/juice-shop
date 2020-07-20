node ('slave') {  
    def app
    stage('Clone Git Repository') {
        sh 'echo Cloning Git Repository'
        checkout scm
    }  
    
    stage('SCA - Snyk Tool'){
        build 'Security-SCA-Snyk'
    }
    
    stage('SAST - SonarQube'){
        build 'Security-SAST-SonarQube'
    }

    stage('Build Docker Image') {
        sh 'echo Building Docker Image'
        app = docker.build("devsecopstutorial/juice-shop")
    }
    
    stage('Deploy Docker Image to DockerHub') {
        sh 'echo Deploying Docker Image to DockerHub'
        docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
            app.push("Jenkins")
            }
    }
    
    stage('Image-Scanner - Aqua') {
        build 'Security-Image-Aqua'
    }
    
    stage('Image-Scanner - Anchore') {
        build 'Security-Image-Anchore'
    }
    
    stage('Build the Application') {
         sh "docker-compose down"
         sh "docker-compose up -d"
    }
    
    stage('DAST - OWASP_ZAP') {
        build 'Security-DAST-OWASP_ZAP'
    }
    
    stage('DAST - Arachni') {
        build 'Security-DAST-Arachni'
    }
}