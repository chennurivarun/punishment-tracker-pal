import { User, Punishment } from "./schemas";

const STORAGE_KEYS = {
  USERS: "users",
  PUNISHMENTS: "punishments",
} as const;

export const storage = {
  getUsers: (): User[] => {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : [];
  },
  
  addUser: (user: User) => {
    const users = storage.getUsers();
    if (users.find(u => u.id === user.id)) {
      throw new Error("User ID already exists");
    }
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },
  
  getPunishments: (): Punishment[] => {
    const punishments = localStorage.getItem(STORAGE_KEYS.PUNISHMENTS);
    return punishments ? JSON.parse(punishments) : [];
  },
  
  addPunishment: (punishment: Punishment) => {
    const punishments = storage.getPunishments();
    punishments.push(punishment);
    localStorage.setItem(STORAGE_KEYS.PUNISHMENTS, JSON.stringify(punishments));
  },
  
  updatePunishment: (id: string, updates: Partial<Punishment>) => {
    const punishments = storage.getPunishments();
    const index = punishments.findIndex(p => p.id === id);
    if (index === -1) throw new Error("Punishment not found");
    punishments[index] = { ...punishments[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.PUNISHMENTS, JSON.stringify(punishments));
  },
};