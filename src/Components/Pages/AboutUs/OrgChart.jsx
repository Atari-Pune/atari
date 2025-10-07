import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  Handle,
  Position,
} from 'react-flow-renderer';
import dagre from 'dagre';

// Custom Node Component with enhanced styling
const CustomOrgNode = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${data.color}, #1a1a2e)`,
        color: data.textColor,
        border: '2px solid #fff',
        padding: '12px 18px',
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '1.1em',
        minWidth: '180px',
        maxWidth: '220px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <div style={{ fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={{ background: '#555', width: '10px', height: '10px' }} />
      <Handle type="source" position={Position.Right} id="b" style={{ background: '#555', width: '10px', height: '10px' }} />
      <Handle type="target" position={Position.Top} style={{ background: '#555', width: '10px', height: '10px' }} />
      <Handle type="target" position={Position.Left} style={{ background: '#555', width: '10px', height: '10px' }} />
    </div>
  );
};

const nodeTypes = {
  orgNode: CustomOrgNode,
};

// Layout Function using Dagre
const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  const isHorizontal = direction === 'LR';
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  const nodeWidth = 200;
  const nodeHeight = 80;

  dagreGraph.setGraph({ rankdir: direction, ranksep: 80, nodesep: 50 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
  });

  return { nodes, edges };
};

// Main OrgChart Component
const OrgChart = () => {
  const initialNodesData = [
    { id: '1', type: 'orgNode', data: { label: 'Director General ICAR & Secretary DARE, GOI', color: '#4B0082', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '2', type: 'orgNode', data: { label: 'Deputy Director General ICAR (Agril. Extn)', color: '#4B0082', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '3', type: 'orgNode', data: { label: 'Assistant Director General ICAR', color: '#4682B4', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '4', type: 'orgNode', data: { label: 'Director ICAR ATARI Zone-VIII', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '5', type: 'orgNode', data: { label: 'Administrative Support by Host Organization', color: '#4682B4', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '6', type: 'orgNode', data: { label: 'KVKs:82', color: '#C71585', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '7', type: 'orgNode', data: { label: 'Technology Backstopping through NARS', color: '#4682B4', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '8', type: 'orgNode', data: { label: 'Maharashtra: 50', color: '#C71585', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '9', type: 'orgNode', data: { label: 'Gujarat: 30', color: '#C71585', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '10', type: 'orgNode', data: { label: 'Goa: 02', color: '#C71585', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '11', type: 'orgNode', data: { label: 'ICAR: 01', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '12', type: 'orgNode', data: { label: 'SAUs: 20', color: '#FF8C00', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '13', type: 'orgNode', data: { label: 'NGOs: 28', color: '#483D8B', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '14', type: 'orgNode', data: { label: 'OUs: 01', color: '#B8860B', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '15', type: 'orgNode', data: { label: 'ICAR: 02', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '16', type: 'orgNode', data: { label: 'SAUs: 18', color: '#FF8C00', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '17', type: 'orgNode', data: { label: 'NGOs: 07', color: '#483D8B', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '18', type: 'orgNode', data: { label: 'DUc: 03', color: '#B8860B', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '19', type: 'orgNode', data: { label: 'ICAR: 01', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '20', type: 'orgNode', data: { label: 'SDA: 01', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '21', type: 'orgNode', data: { label: 'Monitoring & Evaluation', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '22', type: 'orgNode', data: { label: 'Institute Management', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '23', type: 'orgNode', data: { label: 'QRT', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '24', type: 'orgNode', data: { label: 'Annual Action Plan', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
    { id: '25', type: 'orgNode', data: { label: 'Annual Review Workshop', color: '#2E8B57', textColor: '#FFFFFF' }, position: { x: 0, y: 0 } },
  ];

  const initialEdgesData = [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true, style: { stroke: '#4B0082', strokeWidth: 2 } },
    { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', animated: true, style: { stroke: '#4682B4', strokeWidth: 2 } },
    { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', animated: true, style: { stroke: '#4682B4', strokeWidth: 2 } },
    { id: 'e4-6', source: '4', target: '6', type: 'smoothstep', animated: true, style: { stroke: '#C71585', strokeWidth: 2 } },
    { id: 'e4-7', source: '4', target: '7', type: 'smoothstep', animated: true, style: { stroke: '#4682B4', strokeWidth: 2 } },
    { id: 'e6-8', source: '6', target: '8', type: 'smoothstep', animated: true, style: { stroke: '#C71585', strokeWidth: 2 } },
    { id: 'e6-9', source: '6', target: '9', type: 'smoothstep', animated: true, style: { stroke: '#C71585', strokeWidth: 2 } },
    { id: 'e6-10', source: '6', target: '10', type: 'smoothstep', animated: true, style: { stroke: '#C71585', strokeWidth: 2 } },
    { id: 'e8-11', source: '8', target: '11', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e8-12', source: '8', target: '12', type: 'smoothstep', animated: true, style: { stroke: '#FF8C00', strokeWidth: 2 } },
    { id: 'e8-13', source: '8', target: '13', type: 'smoothstep', animated: true, style: { stroke: '#483D8B', strokeWidth: 2 } },
    { id: 'e8-14', source: '8', target: '14', type: 'smoothstep', animated: true, style: { stroke: '#B8860B', strokeWidth: 2 } },
    { id: 'e9-15', source: '9', target: '15', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e9-16', source: '9', target: '16', type: 'smoothstep', animated: true, style: { stroke: '#FF8C00', strokeWidth: 2 } },
    { id: 'e9-17', source: '9', target: '17', type: 'smoothstep', animated: true, style: { stroke: '#483D8B', strokeWidth: 2 } },
    { id: 'e9-18', source: '9', target: '18', type: 'smoothstep', animated: true, style: { stroke: '#B8860B', strokeWidth: 2 } },
    { id: 'e10-19', source: '10', target: '19', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e10-20', source: '10', target: '20', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e4-21', source: '4', target: '21', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e21-22', source: '21', target: '22', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e22-23', source: '22', target: '23', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e23-24', source: '23', target: '24', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
    { id: 'e24-25', source: '24', target: '25', type: 'smoothstep', animated: true, style: { stroke: '#2E8B57', strokeWidth: 2 } },
  ];

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodesData, initialEdgesData, 'TB');
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, 
  // eslint-disable-next-line
  []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        minZoom={0.1}   // 👈 allow zooming out more
        maxZoom={2}     // 👈 allow zooming in more
      >
        {/* <MiniMap /> */}
        <Controls />
        <Background variant="dots" gap={16} size={1} color="#aaa" />
      </ReactFlow>
    </div>
  );
};

export default OrgChart;
