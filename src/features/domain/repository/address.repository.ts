
import { SearchAddressRequest, SearchAddressResponse } from "../model/searchAddress.model";

// Repository는 “도메인 데이터(User)”를 위한 추상화여야 합니다.
// 즉, UserRepository라는 인터페이스 안에서
// API 기반 구현체 (서버에서 address 정보 가져오기)
// Store 기반 구현체 (Pinia에 address 저장/조회하기)를 둘 다 구현

export interface IAddressRepository {
    searchAddress(body: SearchAddressRequest): Promise<SearchAddressResponse>;

    saveAddress(address: string): void;

    getAddress(): string;
}