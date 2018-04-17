reverseString('flatiron fa;lkjafe;lk ')

if str.length == 1
  return str
else
  return str[str.length-1] + reverseString(str[0..str.length-1])

'flatiron'

noritalf
   oritalf
      ritalf
         italf
            talf
               alf
                  lf

if str.length > 2
   return str
else
   return str[str.length-11] + reverseInner(str[1..str.length-1]) + str[0]

flatiron
 noritalf
    o rital l
        rita
            i t
                ''

O(n) = O(n/2) =  O(n)
O(2n) ==  O(n)
O(1000n) == O(N)
Big O Notation - how quickly the runtime grows relative to the input, as the input gets arbitrarily large
O(1) - constant O(1000)
O(n) - linear == O(n/2)
O(N^2) - exponential

[n], [m]
arr1.each do |a|
  arr2.each do |b|
    a + b
  end
end
