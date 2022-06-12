import { formater } from '../interfaces/HasFormater';

export class payment {
    constructor(
      readonly recepient: string,
      private details: string,
      public amount: number,
    ) {
    }
  
    format() {
      return `${this.recepient} owes Rp${this.amount} from ${this.details}`;
    }
  }