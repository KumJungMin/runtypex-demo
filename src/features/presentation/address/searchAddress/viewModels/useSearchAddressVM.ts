import { SearchAddressUseCase, SaveAddressUseCase } from "@/features/domain/usecase/address.usecase"
import { AddressRepositoryImpl } from "@/features/data/repository/address.repositoryImpl"
import { AddressApiDataSource } from "@/features/data/source/api/address.api"
import { useJoinStore } from "@/stores/join"
import type { SearchAddressRequest } from "@/features/domain/model/searchAddress.model"
import { AddressDataSource } from "@/features/data/source/store/address.store"
import { ref } from "vue"

/**
 * useSearchAddressVM
 * - ViewModel Layer
 * - 의존성 조립만 담당
 */
export function useSearchAddressVM() {
  /** ✅ DataSource 생성 */
  const apiDataSource = new AddressApiDataSource()
   const storeDataSource = new AddressDataSource(useJoinStore())

  /** ✅ Repository 생성 (Mapper 주입) */
  const addressRepository = new AddressRepositoryImpl(
    apiDataSource,
    storeDataSource,
  )

  /** ✅ UseCase 생성 */
  const searchAddressUC = new SearchAddressUseCase(addressRepository)
  const saveAddressUC = new SaveAddressUseCase(addressRepository)

  const searchQuery = ref<string>("");
  /**
   * 주소 검색
   * - UseCase 실행
   * - 결과 성공 시 저장
   * - 실패 시 Error throw
   */
  async function search() {
    const result = await searchAddressUC.execute({ 
      searchText: searchQuery.value,
      fields: "all",
      sortedBy: 'asc',
      country: "KR"
    })

    console.log("검색 결과:", result);

    // if (result.type === "success") {
    //   await saveAddressUC.execute(result.data)
    // } else {
    //   throw new Error(result.message)
    // }
  }

  return { search, searchQuery }
}
