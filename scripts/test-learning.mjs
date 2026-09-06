import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const compile=source=>ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const asURL=source=>'data:text/javascript;base64,'+Buffer.from(source).toString('base64');
const curriculumURL=asURL(compile(await readFile(new URL('../app/puku/curriculum.ts',import.meta.url),'utf8')));
const engineSource=compile(await readFile(new URL('../app/puku/engine.ts',import.meta.url),'utf8')).replaceAll("'./curriculum'",JSON.stringify(curriculumURL));
const {initialState,transition,actions,getMetrics}=await import(asURL(engineSource));
const {modules,milestones,BRAND}=await import(curriculumURL);
const paths={
'first-workflow':['chat','inspect','plan','edit','verify'],permissions:['read','write','approve','write'],constitution:['read','js','ts'],context:['add','add','add','add','add','compress','verify'],memory:['create','archive','end','retrieve','verify'],tools:['inspect','browser','filesystem','read','verify'],'workshop-project':['inspect','repair','test','activate'],'agent-loop':['observe','plan','tool','result','verify'],mcp:['connect','discover','authorize','invoke'],subagents:['research','coding','testing','run','synthesize'],guardrails:['bypass','read','delete','deploy'],'resilient-design':['add','fail','verify'],'agent-city':['research','implement','test','release'],retrieval:['notes','port','prune','verify'],'agent-platform':['tools','memory','guardrails','test','deploy'],containers:['source','deps','build','publish','run'],kubernetes:['fail','restore','verify'],cicd:['run','inspect','tests','security','run'],production:['scale','inspect','diagnose','rollback','verify']};
let checks=0,completed=[];
for(const m of modules){assert.ok(paths[m.id],`missing path for ${m.id}`);let s=initialState(m.id,completed);const baseline=JSON.stringify(s);assert.throws(()=>transition(s,'unknown-action'));assert.equal(JSON.stringify(s),baseline,'invalid action mutated original');for(const id of paths[m.id]){const previous=JSON.stringify(s);const next=transition(s,id,1000);assert.equal(JSON.stringify(s),previous,'transition must be immutable');s=next;checks++;}assert.equal(s.status,'success',`${m.id}: ${s.message}`);assert.ok(s.completed.includes(m.id));assert.equal(s.events.filter(e=>e.name==='competency_demonstrated').length,1);assert.ok(getMetrics(s).length>0);completed=s.completed;}
assert.equal(completed.length,19);assert.deepEqual(milestones.map(m=>m.name),['Agentic Software Engineering','Building Claude Code from Scratch','Agentic System Design','Platform Engineering']);assert.equal(modules.filter(m=>m.milestone===1).length,7);assert.equal(BRAND.violet,'#8940F8');assert.equal(BRAND.blue,'#484FA3');
let s=initialState();s=transition(s,'verify');assert.equal(s.status,'failed');assert.equal(s.step,0);assert.equal(s.completed.length,0);
s=initialState('memory');s=transition(s,'create');s=transition(s,'end');s=transition(s,'retrieve');assert.equal(s.status,'failed');assert.equal(s.context,0);assert.equal(s.archived,false);
s=initialState('resilient-design');s=transition(s,'fail');s=transition(s,'verify');assert.equal(s.status,'failed');for(let i=0;i<20;i++)s=transition(s,'add');assert.equal(s.nodes,8);
s=initialState('context');s=transition(s,'verify');assert.equal(s.status,'failed');assert.equal(s.completed.length,0);
s=initialState('cicd');s=transition(s,'tests');assert.equal(s.status,'failed');assert.ok(!s.flags.includes('tests'));
assert.equal(new Set(modules.map(m=>m.id)).size,modules.length);for(const m of modules){assert.ok(m.objects.length>=4);assert.ok(actions[m.kind].every(a=>a.station>=0&&a.station<4));}
console.log(`PASS: ${modules.length} complete mission paths; ${checks} state transitions; failure, recovery, immutability, curriculum and brand invariants.`);
