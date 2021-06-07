/**
 * records 类型 Record<Keys, Type>
 * 以 K 中的key为key,T 为 value 构建一个新类型
 */

namespace record {
    interface CatInfo {
        age: number;
        breed: string;
    }

    type CatName = "miffy" | "boris" | "mordred";

    const cats: Record<CatName, CatInfo> = {
        miffy: { age: 10, breed: 's' },
        boris: { age: 10, breed: 's' },
        mordred: { age: 10, breed: 's' }
    }
}