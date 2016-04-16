import json

def clean_data(dir):
	f = open(dir, "r")
	h = open("cleaned_quotes.txt" , "w")
	lines = f.readlines()
	all_quotes = []
	for i in lines:

		obj = {}
		line = i
		star = line.index('*')
		obj['author'] = line[:star]
		obj['quote'] = line[star + 1:]
		all_quotes.append(obj)
 		#print obj

 	j_son = json.dumps(all_quotes)

 	with open('cleaned_quotes.txt', 'w') as outfile:
 		json.dump(j_son, outfile)


clean_data("quotes.txt")