def hey(phrase):
    if question(phrase)       : return 'Sure.'
    if shouting(phrase)       : return 'Whoa, chill out!'
    if starts_with_whitespace : return 'Whatever.'
    if ends_with_whitespace   : return 'Sure.'
    if silence                : return 'Fine. Be that way!'
    if prolonged_silence      : return 'Fine. Be that way!'
    else: return 'Whatever.'

def question(phrase):
    if phrase[-1] == '?' : return True

def shouting(phrase):
    if phrase == phrase.upper() : return True

def starts_with_whitespace(phrase):
    if phrase[0] == ' ' : return True

def ends_with_whitespace(phrase):
    if phrase[-1] == ' ' : return True

def silence(phrase):
    if phrase == '' : return True

def prolonged_silence(phrase):
    if phrase == '    ' : return True
