import React, { useState } from 'react';
import { ModuleContent, ModuleTitle, SidebarWrapper } from './styled';
const Sidebar = () => {
  const [modules, setModules] = useState([
    { title: 'Módulo 1', isOpen: false },
    { title: 'Módulo 2', isOpen: false },
    { title: 'Módulo 3', isOpen: false },
  ]);

  const toggleModule = (index) => {
    const updatedModules = modules.map((module, i) =>
      i === index ? { ...module, isOpen: !module.isOpen } : module
    );
    setModules(updatedModules);
  };

  return (
    <SidebarWrapper>
      <h2>Barra Lateral</h2>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>
            <ModuleTitle onClick={() => toggleModule(index)}>
              {module.title}
            </ModuleTitle>
            <ModuleContent isOpen={module.isOpen}>
              Contenido del módulo {index + 1}
            </ModuleContent>
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
