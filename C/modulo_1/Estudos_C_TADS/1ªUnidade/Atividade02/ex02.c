#include <stdio.h>

int main()
{
    float v1, v2, media;
    
    printf("Digite um valor:");
    scanf("%f", &v1);
    printf("Digite outro valor:");
    scanf("%f", &v2);
    
    media = (v1+v2)/2;
    
    //printf("media = %f", &media);//imprimi o endereço de memoria
	printf("media = %f", media);
    
    return 0;
}