#Toon het gemiddelde a.d.h.v. twee invoervelden
print('Vul getal 1 in')
getal1 = input()
print('Vul getal 2 in')
getal2 = input()
print(
	str('Het gemiddelde van de twee getallen is ') + 
	str(
		float(
			(int
				(getal1) + 
				int(getal2)
			) / 2
		)
	)
)