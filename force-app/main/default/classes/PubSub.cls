public with sharing class PubSub {
     @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id accountId) {
        return [
            SELECT Id, Name, Email FROM Contact  WHERE AccountId = :accountId
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(Id accountId) {
        return [
            SELECT Id, Name, StageName, Amount FROM Opportunity WHERE AccountId = :accountId
        ];
    }
}