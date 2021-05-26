#include <stdio.h>
#define MIN(A, B) A < B ? A : B;
#define DEF_PAIR_OF(dtype)         \
    typedef struct pair_of_##dtype \
    {                              \
        dtype first;               \
        dtype second;              \
    } pair_of_##dtype##_t

void main()
{
    int a = MIN(1, 2);
    printf("%d\n", a);

    int b = 2 * MIN(3, 4);
    // => 2 * 3 < 4 ? 3 : 4
    printf("%d", b);

    DEF_PAIR_OF(int);
    DEF_PAIR_OF(double);
}