import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Credito } from '../Models/Credito';

@Injectable()
export class LinhaCreditoService {

  private urlBase = environment.baseUrl;

  constructor(
    public http: HttpClient
  ) { }

  obterLinhaDeCredito(credito : Credito): any {
    return this.http.post(this.urlBase + 
                        'api/linhaDeCredito/obterLinhaDeCredito', credito)
                        .pipe(map(response => response));
}
 
}
