
const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner({
  serverUrl: 'http://3.7.34.19:9000',
  options: {
    'sonar.sources': '.'
    // 'sonar.inclusions' : '.' // Entry point of your code
  }
}, () => {})
