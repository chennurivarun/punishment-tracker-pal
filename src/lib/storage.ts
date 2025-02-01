interface User {
  id: string;
  role: "student" | "staff";
  name: string;
  department: string;
  year?: number;
  semester?: number;
  mobile: string;
}

class Storage {
  private readonly USERS_KEY = "users";

  constructor() {
    this.initializeDefaultUsers();
  }

  private initializeDefaultUsers() {
    if (!localStorage.getItem(this.USERS_KEY)) {
      const defaultUsers: User[] = [
        {
          id: "12345678",
          role: "student",
          name: "John Doe",
          department: "CSE",
          year: 3,
          semester: 5,
          mobile: "9876543210"
        },
        {
          id: "87654321",
          role: "staff",
          name: "Jane Smith",
          department: "CSE",
          mobile: "9876543211"
        }
      ];
      localStorage.setItem(this.USERS_KEY, JSON.stringify(defaultUsers));
    }
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || "[]");
  }

  addUser(user: User) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }
}

export const storage = new Storage();