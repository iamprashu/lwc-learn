public with sharing class lwcSheet11Helper {
    @AuraEnabled(Cacheable = true)
    public static List<Account> getAllAccountsList(){
        return [Select Id,Name From Account];
    }
}