a = 3
b = 5
c = a * b
A = "Fizz"
B = "Buzz"
C = "Fizzbuzz"

print (a)
print (b)
print (c)
print (A)
print (B)
print (C)

for number in range(1, 101):
    if number % c == 0:
        print(C)
    elif number % a == 0:
        print(A)
    elif number % b == 0:
        print(B)
    else:
        print(number)
