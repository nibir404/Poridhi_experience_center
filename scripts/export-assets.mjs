import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import ts from 'typescript';
import * as T from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const scratch=path.join(root,'.asset-build');await fs.mkdir(scratch,{recursive:true});
for(const name of ['curriculum','character']){const source=await fs.readFile(path.join(root,'app/puku',name+'.ts'),'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText.replaceAll("'./curriculum'","'./curriculum.mjs'");await fs.writeFile(path.join(scratch,name+'.mjs'),js);}
// GLTFExporter uses FileReader in browsers; Node provides Blob.arrayBuffer.
globalThis.FileReader=class{result=null;onloadend=null;onerror=null;readAsArrayBuffer(blob){blob.arrayBuffer().then(v=>{this.result=v;this.onloadend?.();}).catch(e=>this.onerror?.(e));}readAsDataURL(blob){blob.arrayBuffer().then(v=>{this.result=`data:${blob.type};base64,${Buffer.from(v).toString('base64')}`;this.onloadend?.();}).catch(e=>this.onerror?.(e));}};
const {createPuku}=await import(pathToFileURL(path.join(scratch,'character.mjs')).href);
const output=process.argv[2]?path.resolve(process.argv[2]):path.join(root,'assets');await fs.mkdir(output,{recursive:true});
for(const quality of ['low','medium','high']){const puku=createPuku();puku.root.name='PUKU';puku.body.name='Body';puku.head.name='Head';puku.arms[0].name='Arm_L';puku.arms[1].name='Arm_R';puku.legs[0].name='Leg_L';puku.legs[1].name='Leg_R';if(quality!=='medium')puku.root.traverse(o=>{if(o instanceof T.Mesh&&o.geometry.type==='SphereGeometry'){o.geometry.dispose();o.geometry=new T.SphereGeometry(1,quality==='low'?12:32,quality==='low'?8:24);}});
const times=[0,.25,.5,.75,1];const q=(angles)=>angles.flatMap(a=>new T.Quaternion().setFromEuler(new T.Euler(a,0,0)).toArray());const walk=new T.AnimationClip('Walk',1,[new T.QuaternionKeyframeTrack('Leg_L.quaternion',times,q([0,.6,0,-.6,0])),new T.QuaternionKeyframeTrack('Leg_R.quaternion',times,q([0,-.6,0,.6,0])),new T.QuaternionKeyframeTrack('Arm_L.quaternion',times,q([0,-.4,0,.4,0])),new T.QuaternionKeyframeTrack('Arm_R.quaternion',times,q([0,.4,0,-.4,0]))]);const run=walk.clone();run.name='Run';run.duration=.6;for(const track of run.tracks)track.times=Float32Array.from(track.times,t=>t*.6);
const clips=[walk,run,new T.AnimationClip('Idle',2,[new T.VectorKeyframeTrack('Body.position',[0,1,2],[0,0,0,0,.035,0,0,0,0])])];const poses={Inspect:[.15,-.7],Point:[0,-1.3],Type:[.15,-1.05],Grab:[.2,-1.2],Build:[.1,-1.4],Think:[-.1,-1.6],Confused:[.18,-.2],Fail:[.25,.1],Success:[-.1,-2.4],Celebrate:[-.15,-2.5],Explain:[0,-1],Debug:[.2,-.9],Deploy:[0,-1.3],Monitor:[.1,-.6],Sit:[.1,-.4],Jump:[0,-.9]};for(const [name,[head,arm]] of Object.entries(poses)){clips.push(new T.AnimationClip(name,1,[new T.QuaternionKeyframeTrack('Head.quaternion',[0,.4,1],q([0,head,0])),new T.QuaternionKeyframeTrack('Arm_R.quaternion',[0,.4,1],q([0,arm,0]))]));}
const result=await new GLTFExporter().parseAsync(puku.root,{binary:true,animations:clips,onlyVisible:true});await fs.writeFile(path.join(output,`puku-${quality}.glb`),Buffer.from(result));console.log(`Exported puku-${quality}.glb with ${clips.length} named animation clips.`);}
await fs.rm(scratch,{recursive:true,force:true});
