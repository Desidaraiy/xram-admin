module.exports = {
    apps: [
      {
        name: 'teleos-admin',
        exec_mode: 'cluster',
        instances: 'max',
        script: '.output/server/index.mjs',
        port: 5000
      }
    ]
  }