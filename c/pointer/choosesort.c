#include <stdio.h>
void sort(int x[], int n);

void main()
{
    int *p, i, a[10] = {3, 7, 9, 11, 0, 6, 7, 5, 4, 2};
    printf("the original array: \n");
    for (i = 0; i < 10; i++)
    {
        printf("%d,", a[i]);
    }
    printf("\n");
    p = a;
    sort(p, 10);
    for (p = a, i = 0; i < 10; i++)
    {
        printf("%d ", *p);
        p++;
    }
    printf("\n");
}

void sort(int x[], int n)
{
    int i, j, k, t;
    for (i = 0; i < n - 1; i++)
    {
        k = i;
        for (j = i + 1; j < n; j++)
        {
            if (x[j] > x[k])
                k = j;
        }
        if (k != i)
        {
            t = x[i];
            x[i] = x[k];
            x[k] = t;
        }
    }
}