#include <stdio.h>
int a[10] = {2, 1, 4, 5, 3, 6, 7, 8, 9, 10};

/**
 选择排序
**/
void main()
{
    int i, j, k, min, n = 10;
    for (i = 0; i <= n - 2; i++)
    {
        min = i;
        for (j = i + 1; j <= n - 1; j++)
        {
            if (a[i] > a[j])
            {
                min = j;
            }
        }
        if (min != i)
        {
            k = a[min];
            a[min] = a[i];
            a[i] = k;
        }
    }
    for (i = 0; i <= n - 1; i++)
    {
        printf("%d ", a[i]);
    }
}