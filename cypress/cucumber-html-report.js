const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/reports/cucumber-json',
	reportPath: 'cypress/reports/bdd_reports',
	metadata:{
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info for Automation',
        data: [
            {label: 'Project', value: 'RyanAir Test automation project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'}
            
        ]
    }
});