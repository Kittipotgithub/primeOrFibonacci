import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'primeOrFibonacci';

  number: any = '';
  listType = [
    'isPrime',
    'isFibonacci'
  ];
  type = 'isPrime';
  flag: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  inputNumber(event) {
    console.log(event.target.value);
    this.number = event.target.value;
    if (this.number && this.type) {
      if (this.type === 'isPrime') {
        this.flag = this.calculatePrime(Number(this.number));
      } else if (this.type === 'isFibonacci') {
        this.flag = this.calculateFibonacci(Number(this.number));
      }
    }


  }

  selectType(event) {
    console.log(event.target.value);
    this.type = event.target.value;
    this.flag = '';
    if (this.number && this.type) {
      if (this.type === 'isPrime') {
        this.flag = this.calculatePrime(Number(this.number));
      } else if (this.type === 'isFibonacci') {
        this.flag = this.calculateFibonacci(Number(this.number));
      }
    }
  }

  calculateFibonacci(num: number) {
    const listFibonacci = [];
    if (num !== 1) {

      let n1 = 0;
      let n2 = 1;
      let nextTerm;
      console.log('Fibonacci Series:');
      console.log(n1); // print 0
      console.log(n2); // print 1
      nextTerm = n1 + n2;
      while (nextTerm <= num) {
        // print the next term
        console.log(nextTerm);
        if (nextTerm) {
          listFibonacci.push(nextTerm);
        }
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
      }
    } else {
      listFibonacci.push(0);
      listFibonacci.push(1);
    }

    if (listFibonacci.length > 0) {
      if (listFibonacci[listFibonacci.length - 1] === Number(this.number)) {
        console.log('a');
        return this.flag = true;
      } else if (listFibonacci[listFibonacci.length - 2] + listFibonacci[listFibonacci.length - 1] === Number(this.number)) {
        return this.flag = true;
      } else {
        return this.flag = false;
      }
    }
  }

  calculatePrime(num: number) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
}
