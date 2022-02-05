var typeScriptVersion = '4.0.3';

System.config({
  transpiler: 'ts',
  typescriptOptions: {
  },
  packages: {
    ".": {
      main: './TypeScript_tutorial//main.ts',
      defaultExtension: 'ts'
    }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript': 'npm:typescript@' + typeScriptVersion + '/lib/typescript.js'
  }
});

System.import('./TypeScript_tutorial//main.ts')
  .catch(console.error.bind(console));
