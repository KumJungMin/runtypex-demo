import { IAddressRepository } from "@/features/domain/repository/address.repository";
import {
  SearchAddressRequest,
  SearchAddressResponse,
} from "@/features/domain/model/searchAddress.model";
import { AddressApiDataSource } from "@/features/data/source/api/address.api";
import { AddressDataSource } from "@/features/data/source/store/address.store";
import { SearchAddressRequestMapper, SearchAddressResponseMapper } from "@/features/data/mapper/address/searchAddress.mapper";

/**
 * AddressRepositoryImpl
 * - API 호출 및 저장소 접근
 * - Mapper에서 런타임 검증 자동 수행
 */
export class AddressRepositoryImpl implements IAddressRepository {
  constructor(
    private readonly addressApiDataSource: AddressApiDataSource,
    private readonly storeDataSource: AddressDataSource,
    private readonly reqMapper = new SearchAddressRequestMapper(),
    private readonly resMapper = new SearchAddressResponseMapper()
  ) {}

  /**
   * 주소 검색
   * - Domain → DTO 변환 후 API 호출
   * - DTO → Domain 변환 시 런타임 검증 자동 수행
   */
  async searchAddress(body: SearchAddressRequest): Promise<SearchAddressResponse> {
    console.log("API 요청 DTO:", this.reqMapper);
    // ✅ Mapper 내부에서 toDTO() 실행 시 자동 validate/assert 수행
    const dtoRequest = this.reqMapper.toDTO(body);

    

    const dtoResponse = await this.addressApiDataSource.searchAddress(dtoRequest);

    // ✅ Mapper 내부에서 toDomain() 실행 시 자동 validate/assert 수행
    return this.resMapper.toDomain(dtoResponse);
  }

  /**
   * 주소 저장
   */
  saveAddress(address: string): void {
    this.storeDataSource.setAddress(address);
  }

  /**
   * 저장된 주소 반환
   */
  getAddress(): string {
    return this.storeDataSource.getAddress();
  }
}
