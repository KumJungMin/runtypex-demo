export const basicMapperCode = `const addressMap = defineMap<SearchAddressDto, SearchAddressDomain>()({
  id: source("RESULT.ID"),
  title: source("RESULT.TITLE"),
  zipCode: source("RESULT.ZIP_CODE"),
  sortedBy: transform("SORT", (value) => value === true ? "asc" : "desc"),
});

const toAddress = makeMapper(addressMap);`;

export const generatedJSDocExample = `export interface SearchAddressDomain {
  /**
   * Address id
   *
   * DTO: SearchAddressDto.RESULT.ID Address identifier from the API response.
   * DTO type: string
   * DB: address.id
   * Domain type: string
   */
  id: string;

  /**
   * Postal code
   *
   * DTO: SearchAddressDto.RESULT.ZIP_CODE Postal code returned by the address API.
   * DTO type: string
   * DB: address.zip_code
   * Domain type: string
   */
  zipCode: string;
}`;
