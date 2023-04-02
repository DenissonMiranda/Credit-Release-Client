import { Component, OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Credito } from './Models/Credito';
import { Dadosresult } from './Models/Dadosresult';
import { LinhaCreditoService } from './Services/linha-credito-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CreditReleaseClient';

  constructor(
    public linhaCreditoService: LinhaCreditoService,
    public toastService: ToastrService,
  ) {}

  public loadingBtn = false;
  public credito: Credito = new Credito();
  public dadosresult: Dadosresult = new Dadosresult(); 

  ngOnInit() {

    this.credito.tipoCredito = '';
  }

  obterLinhaDeCredito() {
    this.loadingBtn = true;

    

    this.linhaCreditoService.obterLinhaDeCredito(this.credito).subscribe(
      (result: any): void => {

        this.loadingBtn = false;
        this.dadosresult = result;
      },
      (error: any) => {
       this.loadingBtn = false;
        let msg_erro = error.error.friendlyMsg;
        this.toastService.error(msg_erro, 'Erro');
      },
      () => { }
    )
  }

}
