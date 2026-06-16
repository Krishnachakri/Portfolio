module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 1,
      startServerCommand: 'npm start',
      startServerReadyPattern: 'Local:        http://localhost:3000'
    },
    upload: {
      target: 'filesystem',
      outputDir: 'lhci_reports'
    }
  }
};
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 1,
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'started server'
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
