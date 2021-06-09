/**
 * 将数组a中的n个整数按相反顺序存放
 **/
#include <stdio.h>
void revert(int x[], int n)
{
    int sum, i, m = (n - 1) / 2;
    for (i = 0; i <= m; i++)
    {
        int j = n - i - 1;
        sum = x[i] + x[j];
        x[i] = sum - x[i];
        x[j] = sum - x[i];
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