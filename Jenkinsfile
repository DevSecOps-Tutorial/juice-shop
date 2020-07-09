node ('slave') {  
    def app
    stage('Cloning Git') {
        checkout scm
    }  
    
    stage('SCA - Snyk Tool'){
        build 'Security-SCA-Snyk'
    }
    
    stage('SAST - SonarQube'){
        build 'Security-SAST-SonarQube'
    }

    stage('Build-and-Tag') {
        app = docker.build("devsecopstutorial/juice-shop")
    }
    
    stage('Post-to-DockerHub') {
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
    
    stage('Pull-Image-Server') {
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