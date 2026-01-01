// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get auth token
const getToken = (): string | null => {
  return localStorage.getItem('aiml_token');
};

// API request helper
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// Auth API
export const authAPI = {
  register: (data: { name: string; email: string; password: string; college?: string }) =>
    apiRequest<{ user: any; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  login: (data: { email: string; password: string }) =>
    apiRequest<{ user: any; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getMe: () => apiRequest<{ user: any }>('/auth/me'),

  updateProfile: (data: { name?: string; college?: string }) =>
    apiRequest<{ user: any }>('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

// Progress API
export const progressAPI = {
  get: () => apiRequest<{ progress: any }>('/progress'),

  updateDay: (dayNumber: number, data: any) =>
    apiRequest<any>(`/progress/day/${dayNumber}`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  completeTask: (data: { dayNumber: number; taskId: string; completed: boolean }) =>
    apiRequest<any>('/progress/task', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getStats: () => apiRequest<{ stats: any }>('/progress/stats'),

  exportProgress: () => apiRequest<any>('/progress/export'),

  importProgress: (data: any) =>
    apiRequest<any>('/progress/import', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Roadmap API
export const roadmapAPI = {
  getPhases: () => apiRequest<{ phases: any[] }>('/roadmap/phases'),

  getDay: (dayNumber: number) => apiRequest<{ day: any }>(`/roadmap/day/${dayNumber}`),

  getPhase: (phaseId: number) => apiRequest<{ phase: number; days: any[] }>(`/roadmap/phase/${phaseId}`),

  getInterviewQuestion: (topic: string) => apiRequest<any>(`/roadmap/interview/${topic}`),
};

// Projects API
export const projectsAPI = {
  getAll: () => apiRequest<{ projects: any[] }>('/projects'),

  getTemplates: () => apiRequest<{ templates: any[] }>('/projects/templates'),

  submit: (data: { projectId: string; title?: string; githubUrl: string; liveUrl?: string }) =>
    apiRequest<any>('/projects/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  updateStatus: (projectId: string, status: string) =>
    apiRequest<any>(`/projects/${projectId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    }),
};

// Auth helpers
export const setAuthToken = (token: string) => {
  localStorage.setItem('aiml_token', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('aiml_token');
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};
