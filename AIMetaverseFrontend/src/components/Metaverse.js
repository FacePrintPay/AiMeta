import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';

const MetaverseScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Virtual World Elements */}
      <Box position={[-2, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
      
      <Sphere position={[2, 0, 0]} args={[0.8, 32, 32]}>
        <meshStandardMaterial color="cyan" />
      </Sphere>
      
      <Box position={[0, -2, 0]} args={[10, 0.2, 10]}>
        <meshStandardMaterial color="lightgray" />
      </Box>
      
      <OrbitControls />
    </>
  );
};

const Metaverse = () => {
  return (
    <div className="metaverse-container">
      <div className="metaverse-header">
        <h1>Virtual World Explorer</h1>
        <p>Navigate and interact with the AI Metaverse environment</p>
      </div>
      
      <div className="metaverse-canvas">
        <Canvas camera={{ position: [0, 5, 10] }}>
          <MetaverseScene />
        </Canvas>
      </div>
      
      <div className="metaverse-controls">
        <div className="control-panel">
          <h3>World Controls</h3>
          <button className="control-btn">Create Object</button>
          <button className="control-btn">Change Environment</button>
          <button className="control-btn">Invite Users</button>
        </div>
        
        <div className="world-info">
          <h3>Current World</h3>
          <p><strong>Name:</strong> Demo World</p>
          <p><strong>Users:</strong> 1 (You)</p>
          <p><strong>Objects:</strong> 3</p>
          <p><strong>AI Agents:</strong> 0</p>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
