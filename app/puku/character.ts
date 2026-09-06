import * as T from 'three';
import {BRAND} from './curriculum';
export function createPuku(scale=1,accent=BRAND.violet){
 const root=new T.Group();root.scale.setScalar(scale);const body=new T.Group();root.add(body);
 const pearl=new T.MeshStandardMaterial({color:'#F0EDF7',roughness:.4,metalness:.24});const purple=new T.MeshStandardMaterial({color:accent,roughness:.45,metalness:.25});const black=new T.MeshStandardMaterial({color:'#15192C',roughness:.25,metalness:.5});const eyeMat=new T.MeshStandardMaterial({color:'#CBB8FF',emissive:'#AA84FF',emissiveIntensity:1.5,roughness:.25});
 function ellipsoid(parent:T.Object3D,x:number,y:number,z:number,sx:number,sy:number,sz:number,mat:T.Material){const m=new T.Mesh(new T.SphereGeometry(1,24,16),mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
 const torso=ellipsoid(body,0,1.2,0,.55,.65,.39,purple);ellipsoid(body,0,1.14,.32,.35,.4,.1,pearl);
 const head=new T.Group();head.position.y=2.15;body.add(head);ellipsoid(head,0,0,0,.73,.61,.54,pearl);ellipsoid(head,0,-.04,.43,.58,.36,.13,black);
 const eyes=[ellipsoid(head,-.23,-.015,.558,.08,.135,.035,eyeMat),ellipsoid(head,.23,-.015,.558,.08,.135,.035,eyeMat)];
 const brows=[ellipsoid(head,-.23,.2,.56,.11,.02,.02,purple),ellipsoid(head,.23,.2,.56,.11,.02,.02,purple)];
 ellipsoid(head,-.7,.04,0,.08,.2,.2,purple);ellipsoid(head,.7,.04,0,.08,.2,.2,purple);ellipsoid(head,0,.64,-.07,.065,.07,.065,eyeMat);
 const arms=[-1,1].map(side=>{const pivot=new T.Group();pivot.position.set(side*.58,1.58,0);body.add(pivot);ellipsoid(pivot,side*.09,-.26,0,.17,.37,.18,purple);ellipsoid(pivot,side*.11,-.59,.035,.2,.2,.19,pearl);return pivot;});
 const legs=[-1,1].map(side=>{const pivot=new T.Group();pivot.position.set(side*.26,.75,0);root.add(pivot);ellipsoid(pivot,0,-.19,0,.2,.3,.2,black);ellipsoid(pivot,0,-.52,.12,.25,.16,.36,pearl);return pivot;});
 const emblem=new T.Mesh(new T.TorusGeometry(.12,.025,8,24),eyeMat);emblem.position.set(0,1.28,.425);body.add(emblem);
 let phase=0;function animate(t:number,moving:boolean,running:boolean,reaction:string,reduced:boolean){phase=reduced?0:t*(running?12:8);const stride=moving&&!reduced?Math.sin(phase):0;legs[0].rotation.x=stride*.62;legs[1].rotation.x=-stride*.62;arms[0].rotation.x=-stride*.55;arms[1].rotation.x=stride*.55;arms.forEach(a=>a.rotation.z=0);body.position.y=moving&&!reduced?Math.abs(Math.sin(phase))*.06:reduced?0:Math.sin(t*2)*.022;head.rotation.z=0;head.rotation.x=0;eyes.forEach(e=>{e.scale.y=.135;e.scale.x=.08;});brows[0].rotation.z=0;brows[1].rotation.z=0;
 if(!moving&&reaction==='working'){arms[1].rotation.x=-1.1;arms[0].rotation.x=-.7;if(!reduced)arms[1].rotation.z=Math.sin(t*10)*.09;head.rotation.x=.14;}
 if(reaction==='confused'){head.rotation.z=.16;brows[0].rotation.z=-.35;brows[1].rotation.z=.35;eyes[1].scale.y=.075;}
 if(reaction==='thinking'||reaction==='curious'){head.rotation.z=reaction==='thinking'?-.13:.07;arms[1].rotation.x=-1.6;arms[1].rotation.z=-.3;}
 if(reaction==='success'){arms[0].rotation.z=2.1;arms[1].rotation.z=-2.1;eyes.forEach(e=>e.scale.y=.07);if(!reduced)body.position.y=Math.abs(Math.sin(t*5))*.2;}
 const blink=!reduced&&t%5.4>5.22;if(blink)eyes.forEach(e=>e.scale.y=.02);
 }
 return {root,head,arms,legs,body,animate};
}
