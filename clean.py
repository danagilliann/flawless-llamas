def spell():
    dictCorrect={}
    f = open('clean_quotes.txt', 'w')
    with open('quotes.txt','r') as corrections:
        for line in corrections:
            author, quote = line.split('*')
            dictCorrect[author] = quote
    string = "["
    for key,value in dictCorrect.items():
        string += "{\"author\" : "
        author = "\"" + key + "\", "
        string += (author)
        string += "\"quote\" : "
        quote = "\"" + value + "\"}, "
        string += (quote)
    string += "]"
    f.write(string)

spell()
