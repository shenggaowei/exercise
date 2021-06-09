#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int k = 0;
    printf("time=%ld\n", time(NULL));
    srand(time(NULL));
    for (k = 0; k < 10; k++)
    {
        printf("%d\n", rand());
        printf("%d\n", RAND_MAX);
    }
}