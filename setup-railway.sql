USE railway;

DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texto VARCHAR(500) NOT NULL,
  completada BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_completada (completada),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO tasks (texto, completada) VALUES
('Configurar backend con Express', true),
('Conectar MySQL con Node.js', true),
('Crear endpoints REST', true),
('Configurar CORS', false),
('Desplegar en Railway', false),
('Conectar frontend con backend', false);

SELECT * FROM tasks;
