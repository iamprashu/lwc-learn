public with sharing class Lwc6Helper {
    @AuraEnabled(Cacheable = true)
    public static List<Account>getAllAccount(){
        try{
            return [Select Id, Name From Account Where Id In (Select AccountId From Contact)];
        }catch(Exception e){
            return new List<Account>();
        }
    }
    @AuraEnabled(Cacheable = true)
    public static List<Contact> getContactsByAccountId(String AccountId){
        try {
            return [Select Id,LastName,Email From Contact Where AccountId = :AccountId];
        } catch (Exception e) {
            return new List<Contact>();
            // throw new AuraHandledException(e.getMessage());
        }
    }
}