// Basic Todo type definition
// This will be refined by Agent-2 during API specification

export type TodoStatus = 'active' | 'completed';

export interface Todo {
  id: string;         // UUID for unique identification
  text: string;       // The todo content
  status: TodoStatus; // Current status
  createdAt: Date;    // Creation timestamp
  updatedAt: Date;    // Last update timestamp
}

// These interfaces will be expanded as needed
