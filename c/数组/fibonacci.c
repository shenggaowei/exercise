#include <stdio.h>

void main()
{
    int i,
        f[20] = {1, 1};
    for (i = 2; i < 20; i++)
    {
        f[i] = f[i - 2] + f[i - 1];
        printf("%d ", f[i]);
    }
}