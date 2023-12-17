// Dashboard.jsx
import React from 'react';
import '../Styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Developer Security Dashboard</h1>
      </header>

      <section className="dashboard-content">
        <div className="widget general-info">
          <h2>Información General</h2>
          <p>Estado del sistema, métricas clave y alertas.</p>
        </div>

        <div className="widget dev-activities">
          <h2>Actividades de Desarrollo</h2>
          <ul>
            <li>Commits recientes</li>
            <li>Issues abiertos</li>
            <li>Builds exitosos/fallidos</li>
          </ul>
        </div>

        <div className="widget security">
          <h2>Seguridad</h2>
          <p>Alertas de seguridad, análisis de código estático, y auditorías.</p>
        </div>

        <div className="widget life">
          <h2>Vida Diaria</h2>
          <p>Calendario, recordatorios y tareas pendientes.</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
