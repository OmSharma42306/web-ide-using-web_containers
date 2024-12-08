import { useState } from 'react'
import { WebContainer} from "@webcontainer/api";
import {files} from "./files";
function App() {
  

let webContainerInstance ; 

window.addEventListener('load',async () => {
    textareaE1.value = files['index.js'].file.contents;

    webContainerInstance = await WebContainer.boot();

    await webContainerInstance.mount(files);
    console.log("hi")

    
    // so i am reading a file , like to confirm that the files were mounted into containers.
    const packageJson = await webContainerInstance.fs.readFile('package.json','utf-8');
    console.log(packageJson);
    // install process
    const installProcess = await webContainerInstance.spawn('npm',['install']);
    const exitCode = await installProcess.exit;
    if(exitCode !== 0){
      throw new Error("Installation Failed!");
    }
    installProcess.output.pipeTo(new WritableStream({
      write(data){
        console.log(data);
      }
    }))
})

// async function installDependencies(){
//   // install dependencies
//   const installProcess = await webContainerInstance.spawn('npm',['install']);
//   return installProcess.exit;
// }

  return (
    <>
     <textarea name="textareaE1" id="textareaE1"></textarea>
    </>
  )
}














export default App
