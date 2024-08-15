interface User {
    id: number;
    login: string;
    avatar_url: string;
  }

interface SearchUser {
    incomplete_results: boolean;
    items: User[];
    total_count: number;
}