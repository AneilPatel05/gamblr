import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dicepage',
  templateUrl: './dicepage.page.html',
  styleUrls: ['./dicepage.page.scss'],
})
export class DicepagePage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  diceForm: FormGroup;
  amount:number=0.100;
  coin:string='';
  type:string='';
  roll:number=null;
  payout:number=null;
  winChance:number=null;
  ngOnInit() {
    this.diceForm = this.formBuilder.group({
      'amount' : [null, Validators.required],
      'coin' : [null, Validators.required],
      'type' : [null, Validators.required],
      'roll' : [null, Validators.required]
    });
    this.diceForm.get('amount').setValue(this.amount);
    this.diceForm.get('coin').setValue(this.coin);
    this.diceForm.get('type').setValue(this.type);
    this.diceForm.get('roll').setValue(this.roll);
    
  }

}
