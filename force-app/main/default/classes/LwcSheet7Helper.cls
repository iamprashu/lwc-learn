public with sharing class LwcSheet7Helper {
    @AuraEnabled(Cacheable = true)
    public static list<Account> getAllAccount(){
        return [select Id,Name,Phone From Account];
    }
}