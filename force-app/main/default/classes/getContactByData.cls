public with sharing class getContactByData {
    @AuraEnabled(Cacheable =true)
    public static List<Contact> getContact(string s){
        try {
            String e = '%' + s + '%';
            List<Contact> allCon = [Select Id,LastName,Email From Contact Where LastName = :s OR Email Like :e ];

            return allCon;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}