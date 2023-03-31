const isDevelopment = (() => {
  const { argv } = process
  const envArgIndex = argv.indexOf('--env')
  if (envArgIndex === -1) return
  return argv[envArgIndex + 1] === 'development'
})() || false

/**
 * @desc pm2 cluster 서버 config
 */
module.exports = {
  apps: [{
    name: 'coarsoft/trofit-realtime-platform-api',
    script: './server-register.js',
    watch: isDevelopment,
    exec_mode: 'cluster',
    instances: isDevelopment ? 1 : 0, // develop 일 경우 1개만
    instance_var: 'INSTANCE_ID', // scheduler 인스턴스확인용 변수
    env_production: {
      NODE_ENV: 'production'
    },
    env: {
      NODE_ENV: 'development'
    }
  }]
}
