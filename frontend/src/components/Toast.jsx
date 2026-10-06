import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className={`toast toast-${toast.type || 'info'}`}>
        {toast.type === 'success' ? (
          <CheckCircle2 size={18} className="text-emerald" />
        ) : (
          <Info size={18} className="text-cyan" />
        )}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
