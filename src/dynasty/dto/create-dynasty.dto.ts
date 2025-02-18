export class CreateDynastyDto {
  /**
   * 朝代名
   */
  readonly name: string;

  /**
   * 起始年份
   */
  readonly start_year: number;

  /**
   * 结束年份
   */
  readonly end_year: number;
}
