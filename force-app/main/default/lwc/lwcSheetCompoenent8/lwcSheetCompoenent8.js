import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import web from '@salesforce/schema/Account.Website';
import Rating from '@salesforce/schema/Account.Rating';
import Type from '@salesforce/schema/Account.Type';
import Industry from '@salesforce/schema/Account.Industry';
import Account from '@salesforce/schema/Account';

export default class LwcSheetCompoenent8 extends LightningElement {
    accountObj = Account;

   myFields = [NAME_FIELD, web,Rating,Type,Industry];

   handleAccountCreated(){
    alert("Account Created");
   }
}