import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-dicepage',
  templateUrl: './dicepage.page.html',
  styleUrls: ['./dicepage.page.scss'],
})
export class DicepagePage implements OnInit {
  diceForm: FormGroup;
  amount: number = 0.100;
  coin: string = 'STEEM';
  type: string = 'Under';
  roll: number = 50;
  payout: number = null;
  winChance: number = null;
  constructor(private formBuilder: FormBuilder, public alertController: AlertController) { }


  ngOnInit() {
    this.diceForm = this.formBuilder.group({
      'amount': [null, Validators.required],
      'coin': [null, Validators.required],
      'type': [null, Validators.required],
      'roll': [null, Validators.required]
    });
    this.diceForm.get('amount').setValue(this.amount);
    this.diceForm.get('coin').setValue(this.coin);
    this.diceForm.get('type').setValue(this.type);
    this.diceForm.get('roll').setValue(this.roll);
  }

  async rollDice() {
    if (this.diceForm.value.amount < 100 && this.diceForm.value.amount > 0.1) {
      console.log('coin', this.diceForm.value.coin)
      console.log('amount', this.diceForm.value.amount)
      console.log('type', this.diceForm.value.type)
      console.log('roll', this.diceForm.value.roll)
      console.log('Pay out', this.diceForm.value.amount * (1 + ((this.diceForm.value.roll - 1) / 100)))
      console.log('Win chance', this.diceForm.value.roll - 1)
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Aount is not valid',
        buttons: ['OK']
      });

      await alert.present();
    }

  }
  setValue(val) {
    if (val === 'half') {
      this.diceForm.get('amount').setValue(this.diceForm.value.amount / 2)
    } else if (val === 'double') {
      this.diceForm.get('amount').setValue(this.diceForm.value.amount * 2)
    } else {
      this.diceForm.get('amount').setValue(val)
    }
  }
  calculatePayout() {
    console.log('called');
  }
}

