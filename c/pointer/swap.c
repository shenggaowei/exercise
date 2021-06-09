#include <stdio.h>
void main()
{
    int *p1, *p2, a, b, temp;
    scanf("%d %d", &a, &b);
    p1 = &a;
    p2 = &b;
    if (*p1 > *p2)
    {
        temp = *p1;
        *p1 = *p2;
        *p2 = temp;
    }
    printf("a=%d b=%d\n", a, b);
    printf("*p1=%d *p2=%d", *p1, *p2);
}