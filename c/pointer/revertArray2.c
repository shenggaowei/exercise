/**
 * 将数组a中的n个整数按相反顺序存放,
 * 通过地址方式修改
 **/
#include <stdio.h>
void revert(int *x, int n)
{
    int *p, *i, *j, m = (n - 1) / 2, temp;
    // 开始位
    i = x;
    // 结束位
    j = x + n - 1;
    // 中间位
    p = x + m;
    for (; i <= p; i++, j--)
    {
        temp = *j;
        *j = *i;
        *i = temp;
    }
    return;
}

void main()
{
    int i, a[10] = {3, 7, 9, 11, 0, 6, 7, 5, 4, 2};
    printf("the original array: \n");
    for (i = 0; i < 10; i++)
    {
        printf("%d, ", a[i]);
    }
    printf("\n");
    revert(a, 10);
    printf("the array ha benn inverted: \n");
    for (i = 0; i < 10; i++)
    {
        printf("%d, ", a[i]);
    }
    printf("\n");
}