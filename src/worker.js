import * as Comlink from 'comlink';
import { init, WASI } from '@wasmer/wasi';

await init();

let wasi = new WASI({
  env: {
      // 'ENVVAR1': '1',
      // 'ENVVAR2': '2'
  },
//   args: [
//       'qjs', '--help'
//   ],
  bindings: {
    ...WASI.defaultBindings,
  }
});

const moduleBytes = fetch("/main.wasm");
const module = await WebAssembly.compileStreaming(moduleBytes);
// Instantiate the WASI module

await wasi.instantiate(module, {});

// Run the start function
let exitCode = wasi.start();
let stdout = wasi.getStdoutString();
const obj = {
    stdout: stdout,
  };
 // This should print "hello world (exit code: 0)"
Comlink.expose(obj);
  