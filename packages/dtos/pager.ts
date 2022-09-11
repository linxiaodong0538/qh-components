/** 分页 */
export class Pager {
  /** 页码 */
  public index = 1;

  /** 页数 */
  public count = 0;

  /** 总条数 */
  public all = 0;

  /** 每页大小 */
  public size = 10;

  constructor({ index = 1, count = 0, all = 0, size = 10 } = {}) {
    this.index = index;
    this.count = count;
    this.all = all;
    this.size = size;
  }
}


