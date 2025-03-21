// This is a workaround to execute TypeScript seed file
require('child_process').execSync('npx tsx prisma/seed.ts', {
    stdio: 'inherit'
});
