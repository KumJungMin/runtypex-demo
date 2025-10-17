import { AddressApiDataSource } from "@/features/data/source/api/address.api";
import { AddressDataSource } from "@/features/data/source/store/address.store";
import { AddressRepositoryImpl } from "@/features/data/repository/address.repositoryImpl";

export function createAddressRepository(
    apiDataSource: AddressApiDataSource,
    storeDataSource: AddressDataSource
) {
    return new AddressRepositoryImpl(apiDataSource, storeDataSource);
}