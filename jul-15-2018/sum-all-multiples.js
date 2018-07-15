// prettier-ignore
/**
 * sums all multiples of 3 and five.
 * The challenge was to write it in as few characters as possile.
 * I was able to get it down to 62:
 */
sum=n=>[0,...Array(n)].reduce((a,_,i)=>(i%3==0||i%5==0?a+i:a))

// prettier-ignore
// Good solution by myjinxin2015:
sum=n=>(c=m=>(x=n/m|0)*(x+1)/2*m)(3)+c(5)-c(15)
