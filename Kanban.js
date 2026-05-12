import React, { useState, useEffect } from 'react';
import { DndContext, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus, Trash2 } from 'lucide-react';

// Sub-componente para a Coluna
import Column from './Column'; 

const INITIAL_DATA = [
  { id: '1', content: 'Finalizar portfólio', status: 'todo' },
  { id: '2', content: 'Estudar TypeScript', status: 'doing' },
  { id: '3', content: 'Projeto Kanban pronto', status: 'done' },
];

export default function Kanban() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanban-tasks');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });

  // Persistência
  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex(t => t.id === active.id);
      const newIndex = tasks.findIndex(t => t.id === over.id);
      
      // Lógica de mudança de coluna ou reordenação
      const newTasks = arrayMove(tasks, oldIndex, newIndex);
      
      // Se soltar em uma coluna diferente, atualiza o status
      const overTask = tasks.find(t => t.id === over.id);
      if (overTask) {
          newTasks[newIndex].status = overTask.status;
      }

      setTasks(newTasks);
    }
  };

  const addTask = (status) => {
    const content = prompt("Nova tarefa:");
    if (!content) return;
    setTasks([...tasks, { id: Date.now().toString(), content, status }]);
  };

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">My Flow Kanban</h1>
      
      <div className="flex gap-6">
        <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <Column id="todo" title="A Fazer" tasks={tasks.filter(t => t.status === 'todo')} onAdd={() => addTask('todo')} />
          <Column id="doing" title="Em Progresso" tasks={tasks.filter(t => t.status === 'doing')} onAdd={() => addTask('doing')} />
          <Column id="done" title="Concluído" tasks={tasks.filter(t => t.status === 'done')} onAdd={() => addTask('done')} />
        </DndContext>
      </div>
    </div>
  );
}