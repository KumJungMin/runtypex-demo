import type { SearchAddressRequestDTO, SearchAddressResponseDTO } from "@/features/data/dto/address/searchAddress.dto"

export class AddressApiDataSource {
  async searchAddress(body: SearchAddressRequestDTO): Promise<SearchAddressResponseDTO> {
    console.log("[AddressApiDataSource] mock request body:", body)

    // ✅ 가상의 요청(body)
    // {
    //   SEARCH_TXT: "역삼",
    //   FIELDS: ["ID", "TITLE"],
    //   SORT: true,
    //   COUNTRY: "KR"
    // }

    await new Promise((resolve) => setTimeout(resolve, 300))

    // ✅ 가상의 응답(mock response)
    const mockResponse: SearchAddressResponseDTO = {
      ID: "ADDR-001",
      TYPE: "ROAD",
      TITLE: `${body.SEARCH_TXT}대로 123`,
      DETAIL: `${body.COUNTRY === "KR" ? "대한민국" : "Unknown"} ${body.SEARCH_TXT}구 123`,
    }

    console.log("[AddressApiDataSource] mock response:", mockResponse)

    return mockResponse
  }
}
