from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv

import os

api = Flask(__name__, static_url_path='')

load_dotenv()

@api.route('/')
def home_page():
  return api.send_static_file('index.html')


@api.route('/stocks', methods=['GET'])
def my_profile():
  quote = request.args.to_dict()['quote']
  functionType = request.args.to_dict()['function']
  key = os.getenv('API_KEY')
  url = f'https://www.alphavantage.co/query?function={functionType}&symbol={quote}&apikey={key}'
  res = requests.get(url)
  cleanRes = jsonify(res.json())
  return cleanRes

if __name__ == "__main__":
  api.run(host='0.0.0.0',port=5000)

# source env/bin/activate
# pip freeze >requirements.txt
