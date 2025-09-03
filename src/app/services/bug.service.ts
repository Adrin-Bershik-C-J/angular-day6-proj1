import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

export interface Bug {
  id: number;
  title: string;
  status: 'Open' | 'In Progress' | 'Closed';
  assignee: string;
  project: string;
  priority: 'High' | 'Medium' | 'Low';
}

@Injectable({ providedIn: 'root' })
export class BugService {
  // Use the search endpoint — calling it without params returns all bugs
  private apiUrl = 'http://localhost:8080/api/bugs/search';

  constructor(private http: HttpClient) {}

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('Error fetching bugs:', err);
        return throwError(() => new Error('Failed to load bugs'));
      })
    );
  }

  getFilteredBugs(status?: string, priority?: string): Observable<Bug[]> {
    let params = new HttpParams();
    if (status) params = params.set('status', status);
    if (priority) params = params.set('priority', priority);

    return this.http.get<Bug[]>(this.apiUrl, { params }).pipe(
      catchError((err) => {
        console.error('Error fetching filtered bugs:', err);
        return throwError(() => new Error('Failed to load filtered bugs'));
      })
    );
  }
}
