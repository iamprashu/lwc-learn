public with sharing class getContactByData {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id accId){
        Account acc = [ SELECT Type, Active__c FROM Account WHERE Id = :accId LIMIT 1];

        if(acc.Active__c == 'Yes' && acc.Type == 'Customer - Direct'){
            return [ SELECT Id, LastName, Email FROM Contact WHERE AccountId = :accId ];
        }

        return new List<Contact>();
    }
}