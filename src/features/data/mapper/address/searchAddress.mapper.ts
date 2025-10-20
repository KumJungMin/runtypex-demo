import { makeAssert } from "runtypex";
import type {
  SearchAddressRequestDTO,
  SearchAddressResponseDTO,
} from "@/features/data/dto/address/searchAddress.dto";
import type {
  SearchAddressRequest,
  SearchAddressResponse,
} from "@/features/domain/model/searchAddress.model";

type AssertFn<T> = (v: unknown) => asserts v is T;

/**
 * ✅ SearchAddressRequestMapper
 * - DTO ↔ Domain 변환
 * - 런타임 타입 검증 포함
 */
export class SearchAddressRequestMapper {
  private readonly assertDTO: AssertFn<SearchAddressRequestDTO>;
  private readonly assertDomain: AssertFn<SearchAddressRequest>;

  constructor() {
    this.assertDTO = makeAssert<SearchAddressRequestDTO>();
    this.assertDomain = makeAssert<SearchAddressRequest>();
  }

  toDomain(dto: SearchAddressRequestDTO): SearchAddressRequest {
    this.assertDTO(dto);
    console.log("DTO 검증 통과:", dto);
    return {
      searchText: dto.SEARCH_TXT,
      fields: dto.FIELDS,
      sortedBy: dto.SORT ? "asc" : "desc",
      country: dto.COUNTRY,
    };
  }

  toDTO(domain: SearchAddressRequest): SearchAddressRequestDTO {
    this.assertDomain(domain);
    console.log("Domain 검증 통과:", domain);
    return {
      SEARCH_TXT: domain.searchText,
      FIELDS: domain.fields,
      SORT: domain.sortedBy === "asc",
      COUNTRY: domain.country,
    };
  }
}

/**
 * ✅ SearchAddressResponseMapper
 * - DTO ↔ Domain 변환
 * - 런타임 타입 검증 포함
 */
export class SearchAddressResponseMapper {
  private readonly assertDTO: AssertFn<SearchAddressResponseDTO>;
  private readonly assertDomain: AssertFn<SearchAddressResponse>;

   constructor() {
    this.assertDTO = makeAssert<SearchAddressResponseDTO>();
    this.assertDomain = makeAssert<SearchAddressResponse>();
  }

  toDomain(dto: SearchAddressResponseDTO): SearchAddressResponse {
    this.assertDTO(dto);
    console.log("DTO 검증 통과:", dto);
    return {
      id: dto.ID,
      type: dto.TYPE,
      title: dto.TITLE,
      detail: dto.DETAIL,
    };
  }

  toDTO(domain: SearchAddressResponse): SearchAddressResponseDTO {
    this.assertDomain(domain);

    console.log("Domain 검증 통과:", domain);
    return {
      ID: domain.id,
      TYPE: domain.type,
      TITLE: domain.title,
      DETAIL: domain.detail,
    };
  }
}
