from flask import Flask, render_template

api = Flask(__name__, static_url_path='')

@api.route('/')
def home_page():
  return api.send_static_file('index.html')


@api.route('/stocks')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

# if __name__ == "__main__":
#   api.run(host='localhost',port=5000)

# source env/bin/activate