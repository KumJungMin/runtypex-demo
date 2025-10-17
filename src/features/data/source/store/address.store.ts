import { useJoinStore } from '@/stores/join';

export class AddressDataSource {
    // Methods to interact with address data source would go here
    private store: ReturnType<typeof useJoinStore>;


    constructor(store: any) {
        this.store = store;
    }

    getAddress() {
        return this.store.address;
    }

    setAddress(address: string) {
        this.store.setAddress(address);
    }
}