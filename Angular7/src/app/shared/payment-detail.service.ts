import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
 formData:PaymentDetail;
 list:PaymentDetail[];
 readonly rootURL ='http://localhost:50432/api';
  constructor(private http:HttpClient) { }

  postPaymentDetail(){
    //paymentDetailController de isimlere dkkat et. C# kodları
    return this.http.put(this.rootURL+'/PaymentDetail',this.formData)
  }
  putPaymentDetail(){
    //paymentDetailController de isimlere dkkat et.İd alıyr C# kodları
    return this.http.put(this.rootURL+'/PaymentDetail/'+this.formData.PMId,this.formData)
  }
  deletePaymentDetail(id){
    //paymentDetailController de isimlere dkkat et.İd alıyr C# kodları
    return this.http.delete(this.rootURL+'/PaymentDetail/'+id)
  }
  refreshList(){
    //araya yazılacak olan visualstude paymentDEtaillist kodu
    this.http.get(this.rootURL+'/PaymentDetail')
    .toPromise()
    .then(res=> this.list=res as PaymentDetail[])
  }
}
