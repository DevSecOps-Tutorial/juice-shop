node ('slave') {  
    def app
    stage('Clone Git Repository') {
        sh 'echo Cloning Git Repository'
        checkout scm
    }

    stage('Build Docker Image') {
        sh 'echo Building Docker Image'
        app = docker.build("devsecopstutorial/juice-shop")
    }
    
    stage('Push Image to DockerHub') {
        sh 'Pushing Image to DockerHub'
        docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
            app.push("Jenkins")
            }
    }

    stage('Build the Application') {
         sh 'echo Building the Application'
         sh "docker-compose down"
         sh "docker-compose up -d"
    }
}