import * as Comlink from 'comlink';
import MyWorker from './worker?worker'
// import { init, WASI } from '@wasmer/wasi';
// await init();

// const wasi = new WASI({
//   env: {
//       // 'ENVVAR1': '1',
//       // 'ENVVAR2': '2'
//   },
//   args: [
//       'qjs' // 'qjs', '--help'
//   ],
//   bindings: {
//     ...WASI.defaultBindings,
//   }
// });

// const moduleBytes = fetch("./qjs.wasm");
// const module = await WebAssembly.compileStreaming(moduleBytes);
// // Instantiate the WASI module
// console.log(wasi)
// await wasi.instantiate(module, {
  
// });

// // Run the start function
// // let exitCode = wasi.start();
// let stdout = wasi.getStdoutString();

 // This should print "hello world (exit code: 0)"
// console.log(`${stdout}`);

  // const worker =  new Worker(new URL('./worker.js', import.meta.url), {
  //     type: 'module'
  // })

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  const worker = new MyWorker();
  const obj = Comlink.wrap(worker);
  await delay(1200);
  document.body.prepend(document.createTextNode('Output:'))
  document.querySelector("#output").innerHTML = await obj.stdout