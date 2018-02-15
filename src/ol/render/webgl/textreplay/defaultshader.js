/**
 * @module ol/render/webgl/textreplay/defaultshader
 */
// This file is automatically generated, do not edit.
// Run `make shaders` to generate, and commit the result.

import {DEBUG_WEBGL} from '../../../index.js';
import WebGLFragment from '../../../webgl/Fragment.js';
import WebGLVertex from '../../../webgl/Vertex.js';

export const fragment = new WebGLFragment(DEBUG_WEBGL ?
  'precision mediump float;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\n\nuniform float u_opacity;\nuniform sampler2D u_image;\n\nvoid main(void) {\n  // vec4 texColor = texture2D(u_image, v_texCoord);\n  // gl_FragColor.rgb = texColor.rgb;\n  // float alpha = texColor.a * v_opacity * u_opacity;\n  // if (alpha < 0.2) {\n  //   discard;\n  // }\n  // if (alpha < 0.4) {\n  //   gl_FragColor.rgb = vec3(0.0, 0.0, 0.0);\n  // } else {\n  //   gl_FragColor.rgb = vec3(1.0, 1.0, 1.0);\n  // }\n  // gl_FragColor.a = v_opacity * u_opacity;\n\n  //taken from https://blog.mapbox.com/drawing-text-with-signed-distance-fields-in-mapbox-gl-b0933af6f817\n  float dist = texture2D(u_image, v_texCoord).r;\n  float alpha = smoothstep(0.52, 0.6, dist);\n  float color = 0.15 + 0.85 * smoothstep(0.7, 0.75, dist);\n  gl_FragColor.rgb = vec3(color, color, color);\n  gl_FragColor.a = alpha * v_opacity * u_opacity;\n}\n' :
  'precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){//gl_FragColor.rgb=texColor.rgb;//float alpha=texColor.a*b*k;//if(alpha<0.2){//discard;//}//if(alpha<0.4){//gl_FragColor.rgb=vec3(0.0,0.0,0.0);//}else{//gl_FragColor.rgb=vec3(1.0,1.0,1.0);//}//gl_FragColor.a=b*k;//taken from https://blog.mapbox.com/drawing-text-with-signed-distance-fields-in-mapbox-gl-b0933af6f817 float dist=texture2D(l,a).r;float alpha=smoothstep(0.52,0.6,dist);float color=0.15+0.85*smoothstep(0.7,0.75,dist);gl_FragColor.rgb=vec3(color,color,color);gl_FragColor.a=alpha*b*k;}');

export const vertex = new WebGLVertex(DEBUG_WEBGL ?
  'varying vec2 v_texCoord;\nvarying float v_opacity;\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nattribute vec2 a_offsets;\nattribute float a_opacity;\nattribute float a_rotateWithView;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  mat4 offsetMatrix = u_offsetScaleMatrix;\n  if (a_rotateWithView == 1.0) {\n    offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  }\n  vec4 offsets = offsetMatrix * vec4(a_offsets, 0.0, 0.0);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n  v_texCoord = a_texCoord;\n  v_opacity = a_opacity;\n}\n\n\n' :
  'varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}');
