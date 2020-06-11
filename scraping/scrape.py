import json
import re
import requests
from bs4 import BeautifulSoup

def main():
    data = {}
    URL = 'https://defund12.org/'
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(id='emailLinks')
    states = results.find_all('li')
    for state in states:
        state_abv = state['data-state']
        state_href = state.find('a')['href']
        city = state_href.split('?')[0][1:]
        location_url = URL+state_href
        if state_abv not in data:
            data[state_abv] = {city:{'url':location_url}}
        else:
            data[state_abv][city] = {'url':location_url}
        
        city_page = requests.get(location_url)
        city_soup = BeautifulSoup(city_page.content, 'html.parser')
        city_results = city_soup.find(class_='emailContent')
        result_text = city_results.get_text()
        result_split = result_text.split('. ')

        budget_sentences = []
        for sentence in result_split:
            if any(re.findall(r'\$|million|billion', sentence, re.IGNORECASE)):
                budget_sentences.append(sentence)

        data[state_abv][city]['budgets'] = budget_sentences

    data_json = json.dumps(data, indent=4)

    with open('defund12_budgets.json', 'w') as outfile:
        outfile.write(data_json)

if __name__ == "__main__":
    main()
