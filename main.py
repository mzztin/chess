# Online Python compiler (interpreter) to run Python online.

c = 0

#for i in range(0, 99_999_999):
#    if i % 10000 == 0:
#        print('at', i, "| c =", c)
#    j = str(i)
#    if j.count('1') == 3 and j.count('4') == 2 and j.count('7') == 1:
#        c += 1

# beispiel: 1234567 ist die richtige zahl

for i in range(10000000, 99999999):
    j = set(str(i))

    if len(j) != 7:
        continue

    if i % 10000 == 0:
        print('at', i, "| c =", c)

    if j.count('1') == 1 and j.count('2') == 1 and j.count('3') == 1 and j.count('4') == '0' and j.count('5') == 0 and j.count('6') == 0 and j.count('7'):
        c += 1
        


print(c)    