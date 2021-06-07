/**
 * Required<Type>
 * Constructs a type consisting of all properties of Type set to required. The opposite of Partial
 * 构建一个新类型，其中的 Type 类型为新构建类型的必须属性
 */
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };