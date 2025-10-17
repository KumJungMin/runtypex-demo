export class ServiceCodeLocalDataSource {
    // Local data source methods would go here
    getLanguageCode() {
        return sessionStorage.getItem('languageCode') || 'en';
    }

    setLanguageCode(code: string) {
        sessionStorage.setItem('languageCode', code);
    }
}