#include <stdio.h>

int a[11] = {11, 5, 4, 3, 2, 1, 7, 8, 10, 9, 6};
int length = 11;

void main()
{
    int i, j, temp;
    for (i = 0; i <= length - 1; i++)
    {
        for (j = 0; j <= length - 1 - i; j++)
        {
            if (a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    for (i = 0; i <= length - 1; i++)
    {
        printf("%d ", a[i]);
    }
}