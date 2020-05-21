import { repo } from './repo';
export interface search_repositories {
    items: Array<repo>;
    total_count: int64;
}
