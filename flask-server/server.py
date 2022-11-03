from flask import Flask, jsonify
import sqlite3
import pandas as pd

app = Flask(__name__)


@app.route('/')
def index():
    return "Welcome"

# @app.route('/alpha', methods=['GET'])
# def get():
#     return jsonify({})

@app.route('/alpha/<int:SSN>', methods=['GET'])
def get_ssn(SSN):
    conn = sqlite3.connect('airforce.sqlite')
    df = pd.read_sql_query('SELECT * FROM alpha', conn)
    return df[df['SSAN'] == str(SSN)].to_json(orient="records")

if __name__ == "__main__":
    app.run(debug=True)
