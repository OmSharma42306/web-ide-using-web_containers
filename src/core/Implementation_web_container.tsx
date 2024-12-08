import { WebContainer } from "@webcontainer/api"
import { files } from "../files";
import React,{useRef,useEffect} from "react"; 
export default async function Implementation_web_container(){
    let webcontainerInstance ;
    const textareaRef = useRef(null);
    useEffect(()=>{
        async function initializeWebContainer(){
            if(textareaRef.current){
                textareaRef.current.value = files['index.js'].file.contents;
            }else{
                console.error("Text area is not found!");
                return;
            }

            webcontainerInstance = await WebContainer.boot();
        await webcontainerInstance.mount(files);
        
        const packageJson = await webcontainerInstance.fs.readFile('package.json','utf-8');
        console.log(packageJson);
        await webcontainerInstance.spawn('npm',['install']);
        
        }
        initializeWebContainer();
    },[])
    // window.addEventListener('load',async () => {
    //     textareaE1.value = files['index.js'].file.contents;
    //     webcontainerInstance = await WebContainer.boot();
    //     await webcontainerInstance.mount(files);
        
    //     const packageJson = await webcontainerInstance.fs.readFile('package.json','utf-8');
    //     console.log(packageJson);
    //     webcontainerInstance.spawn('npm',['install']);
    // })

    
    return <div>
        <textarea name="textareaE1" id="textareaE1"></textarea>
        hi keerthi
    </div>
}