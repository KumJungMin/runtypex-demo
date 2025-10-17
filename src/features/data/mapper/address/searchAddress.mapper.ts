import { BaseMapper } from "../__baseMapper"
import type {
  SearchAddressRequestDTO,
  SearchAddressResponseDTO
} from "@/features/data/dto/address/searchAddress.dto"
import type {
  SearchAddressRequest,
  SearchAddressResponse
} from "@/features/domain/model/searchAddress.model"

export class SearchAddressRequestMapper extends BaseMapper<
  SearchAddressRequestDTO,
  SearchAddressRequest
> {
  protected mapToDomain(dto: SearchAddressRequestDTO): SearchAddressRequest {
    return {
      searchText: dto.SEARCH_TXT,
      fields: dto.FIELDS,
      sortedBy: dto.SORT ? "asc" : "desc",
      country: dto.COUNTRY,
    }
  }
  
  protected mapToDTO(domain: SearchAddressRequest): SearchAddressRequestDTO { 
    return {
      SEARCH_TXT: domain.searchText,
      FIELDS: domain.fields,
      SORT: domain.sortedBy === "asc",
      COUNTRY: domain.country,
    }
  }
}

export class SearchAddressResponseMapper extends BaseMapper<
  SearchAddressResponseDTO,
  SearchAddressResponse
> {
  protected mapToDomain(dto: SearchAddressResponseDTO): SearchAddressResponse {
    return {
      id: dto.ID,
      type: dto.TYPE,
      title: dto.TITLE,
      detail: dto.DETAIL,
    }
  }

  protected mapToDTO(domain: SearchAddressResponse): SearchAddressResponseDTO {
    return {
      ID: domain.id,
      TYPE: domain.type,
      TITLE: domain.title,
      DETAIL: domain.detail,
    }
  }
}