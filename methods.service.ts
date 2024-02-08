import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor() { }
  countCapital(str: string): number{
    return (str.match(/[A-Z]/g) || []).length;
  }

  checkPassword(password: string): boolean {
    const rules = [
      /[A-Z].*[A-Z]/,
      /[a-z].*[a-z].*[a-z]/,
      /[\w_]/
    ];
    return rules.every(rules => rules.test(password));
  }
  arrayAddition(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

}
