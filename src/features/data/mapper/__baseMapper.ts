import { makeAssert } from "runtypex"

/**
 * BaseMapper<TDTO, TDomain>
 * 런타임 검증 자동 수행용 추상 클래스
 */
export abstract class BaseMapper<TDTO, TDomain> {
  protected readonly assertDTO: (v: unknown) => asserts v is TDTO
  protected readonly assertDomain: (v: unknown) => asserts v is TDomain

  constructor() {
    // ✅ 런타임 검증기 자동 생성
    this.assertDTO = makeAssert<TDTO>()
    this.assertDomain = makeAssert<TDomain>()
  }

  /**
   * DTO → Domain 변환
   * - 변환 전후 타입 검증 자동 실행
   */
  toDomain(dto: unknown): TDomain {
    console.log("매핑 전 DTO:", dto);
    this.assertDTO(dto)
    console.log("DTO 검증 통과:", dto);
    return this.mapToDomain(dto as TDTO)
  }

  /**
   * Domain → DTO 변환
   * - 변환 전후 타입 검증 자동 실행
   */
  toDTO(domain: unknown): TDTO {
    this.assertDomain(domain)
    console.log("Domain 검증 통과:", domain);
    const dto = this.mapToDTO(domain as TDomain)
    this.assertDTO(dto)
    console.log("DTO 검증 통과:", dto);
    return dto
  }

  /** 각 Mapper에서 구체적 매핑 로직 정의 */
  protected abstract mapToDomain(dto: TDTO): TDomain
  protected abstract mapToDTO(domain: TDomain): TDTO
}
