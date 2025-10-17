import { SearchAddressRequest } from "../model/searchAddress.model";
import { BaseUseCase } from "./_base/base.usecase";


type SearchAddressReturns = 
{ type: 'success'; data: any } | { type: 'error'; message: string };


export class SearchAddressUseCase extends BaseUseCase<[SearchAddressRequest], SearchAddressReturns> {
    constructor(private readonly addressRepository: any) {
        super();
    }

    protected async run(args: SearchAddressRequest): Promise<SearchAddressReturns> {
        const result = await this.addressRepository.searchAddress(args);

        return { type: 'success', data: result };
    }

    protected handleBusinessError(error: any): SearchAddressReturns {
        return { type: 'error', message: error.message };
    }

    protected handleUnexpectedError(): SearchAddressReturns {
        return { type: 'error', message: 'Unexpected error occurred' };
    }
}


export class SaveAddressUseCase extends BaseUseCase<[any], void> {
    constructor(private readonly addressRepository: any) {
        super();
    }

    protected async run(args: any): Promise<void> {
        await this.addressRepository.saveAddress(args);
    }

    protected handleBusinessError(error: any): void {
        throw error;
    }
    
    protected handleUnexpectedError(error: any): void {
        throw error;
    }
}