public with sharing class getAccount {
    @AuraEnabled(Cacheable = true)
    
   public static List<Account>getAllAccount(){
        return [Select Name,Id From Account Limit 10];
   }
}