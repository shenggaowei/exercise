#include <stdio.h>
void test()
{
    static int va = 1;
    printf("va=%d\n", va);
    va = va + 2;
}

void main()
{
    test();
    test();
    test();
}