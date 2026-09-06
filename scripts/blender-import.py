"""Create an editable Blender scene from the exported Puku assets.
Run: blender --background --python scripts/blender-import.py -- assets/puku-medium.glb assets/puku-studio.blend
The GLB contains a rigid-part character hierarchy and simple reusable clips.
"""
import bpy
import sys
from pathlib import Path
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
source=Path(args[0] if args else 'assets/puku-medium.glb').resolve()
output=Path(args[1] if len(args)>1 else 'assets/puku-studio.blend').resolve()
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=str(source))
scene=bpy.context.scene
scene.unit_settings.system='METRIC'
scene.render.engine='CYCLES'
scene.cycles.samples=64
scene.render.resolution_x=1600
scene.render.resolution_y=1600
scene.render.resolution_percentage=100
scene.world.color=(0.07,0.08,0.15)
bpy.ops.mesh.primitive_plane_add(size=200,location=(0,0,-0.02))
plane=bpy.context.object
plane.name='Studio Floor'
mat=bpy.data.materials.new('Poridhi Studio Neutral')
mat.diffuse_color=(0.15,0.17,0.29,1)
plane.data.materials.append(mat)
for name,location,energy,size in [('Key',(3,-4,6),850,5),('Fill',(-4,-1,3),400,4),('Rim',(0,4,5),650,3)]:
 bpy.ops.object.light_add(type='AREA',location=location)
 light=bpy.context.object
 light.name=name
 light.data.energy=energy
 light.data.shape='DISK'
 light.data.size=size
 direction=-light.location
 light.rotation_euler=direction.to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(5,-8,4))
camera=bpy.context.object
from mathutils import Vector
camera.rotation_euler=(Vector((0,0,1.4))-camera.location).to_track_quat('-Z','Y').to_euler()
camera.data.lens=35
scene.camera=camera
output.parent.mkdir(parents=True,exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=str(output))
print('Saved',output)
