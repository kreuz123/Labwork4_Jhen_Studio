// src/contexts/AuthContexts.d.ts
import { AuthProvider, useAuth } from './AuthContexts';

declare module './AuthContexts' {
  export { AuthProvider, useAuth };
}
