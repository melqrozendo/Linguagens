#include <stdio.h>

int main(){
	int a = 10;
	int b = 20;
	int temp;
	
	int *P_a, *P_b, *P_temp;
	P_a = &a;
	P_b = &b;
	
	temp = P_a;
	P_a = P_b;
	P_b = temp;
	
	
	printf("%d %d \n", *P_a, *P_b);
	printf("%p %p \n", *P_a, *P_b);
	
	return 0;
}