import { create } from 'zustand';

interface SidebarStore {
    isMinimized: boolean;
    toggle: () => void;
}

export const useSidebar = create<SidebarStore>((set: any) => ({
    isMinimized: false,
    toggle: () => set((state: any) => ({ isMinimized: !state.isMinimized }))
}));