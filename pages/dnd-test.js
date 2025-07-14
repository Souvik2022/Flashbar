import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialItems = [
  { id: '1', text: 'First notification' },
  { id: '2', text: 'Second notification' },
  { id: '3', text: 'Third notification' },
];

export default function DndTest() {
  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setItems(reordered);
  };

  return (
    <div style={{ background: '#18181b', minHeight: '100vh', padding: 40 }}>
      <h2 style={{ color: '#fff', marginBottom: 24 }}>Minimal DnD Test</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="test-list">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ width: 400, margin: '0 auto' }}
            >
              {items.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        ...provided.draggableProps.style,
                        background: snapshot.isDragging ? '#23232a' : '#23232a',
                        color: '#fff',
                        borderRadius: 16,
                        marginBottom: 16,
                        padding: 20,
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: snapshot.isDragging ? '0 4px 16px #0002' : 'none',
                        border: '1px solid #33343a',
                        transition: 'box-shadow 0.2s',
                        cursor: 'grab',
                      }}
                    >
                      {/* Drag handle */}
                      <span
                        {...provided.dragHandleProps}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginRight: 16,
                          cursor: 'grab',
                          userSelect: 'none',
                        }}
                        aria-label="Drag handle"
                      >
                        <span style={{ width: 4, height: 4, background: '#6b7280', borderRadius: '50%', marginBottom: 2 }} />
                        <span style={{ width: 4, height: 4, background: '#6b7280', borderRadius: '50%', marginBottom: 2 }} />
                        <span style={{ width: 4, height: 4, background: '#6b7280', borderRadius: '50%' }} />
                      </span>
                      <span>{item.text}</span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 