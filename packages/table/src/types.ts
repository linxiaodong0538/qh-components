
export interface TableOptions {
    label: string,
    // 字段名称
    prop: string,
    // 列的宽度
    width?: string | number,
    //最小宽度
    minWidth?: string | number,
    //  对齐方式
    align?: 'left' | 'center' | 'right',
    formatter?: (...rest: any) => void
}
