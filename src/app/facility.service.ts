import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Facility } from './facility';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private facilitiesUrl = 'api/facilities';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.facilitiesUrl)
      .pipe(
        tap(_ => this.log('fetched facilities')),
        catchError(this.handleError<Facility[]>('getFacilities', []))
      );
  }

  /** GET facility by name. Return `undefined` when name not found */
  getFacility<Data>(name: string): Observable<Facility> {
    const url = `${this.facilitiesUrl}/?name=${name}`;
    return this.http.get<Facility[]>(url)
      .pipe(
        map(facilities => facilities[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} facility name=${name}`);
        }),
        catchError(this.handleError<Facility>(`getFacility id=${name}`))
      );
  }

  private log(message: string) {
    this.messageService.add(`facilityService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** PUT: update the facility on the server */
  updateFacility(facility: Facility): Observable<any> {
    return this.http.put(this.facilitiesUrl, facility, this.httpOptions).pipe(
      tap(_ => this.log(`updated facility id=${facility.id}`)),
      catchError(this.handleError<any>('updateFacility'))
    );
  }

  /** POST: add a new facility to the server */
  addFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.facilitiesUrl, facility, this.httpOptions).pipe(
      tap((newFacility: Facility) => this.log(`added facility w/ id=${newFacility.id}`)),
      catchError(this.handleError<Facility>('addFacility'))
    );
  }

  /** DELETE: delete the facility from the server */
  deleteFacility(id: number): Observable<Facility> {
    const url = `${this.facilitiesUrl}/${id}`;

    return this.http.delete<Facility>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted facility id=${id}`)),
      catchError(this.handleError<Facility>('deleteFacility'))
    );
  }
  /** GET facilities whose name contains search term */
  searchFacilities(term: string): Observable<Facility[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Facility[]>(`${this.facilitiesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found facilities matching "${term}"`) :
        this.log(`no facilities matching "${term}"`)),
      catchError(this.handleError<Facility[]>('searchFacilities', []))
    );
  }

}

