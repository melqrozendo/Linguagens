#include <stdio.h>

/*uuniversidade*/

int main(){
	int n,i;
	int cont = 0;
	
	scanf("%d", &n);
	
	int times[n];
	
	for(i=0;i<n;i++){
		scanf("%d", &times[i]);
		cont+=(times[i]/3);
	}
	printf("%d\n", cont*3);
	
	
}
