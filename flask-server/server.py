from flask import Flask, jsonify, request
import sqlite3
import pandas as pd
from io import BytesIO
import pickle
import json

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

@app.route('/url_route', methods=['POST']) # handles .csv file upload from react
def upload_file():
    d = {}
    try:
        
        
        file = request.files['file_from_react']
        filename = file.filename
        print(f"Uploading file {filename}")
        file_bytes = file.read()
        file_content = BytesIO(file_bytes).readlines()
        print(file_content) 

        # save pickle
        # with open('data.bin', 'wb') as f:
        #    pickle.dump(file_bytes, f)
        
        # covert to dataframe
        s=str(file_bytes,'utf-8')
        data = StringIO(s) 
        df=pd.read_csv(data, header = 2, skipfooter=1, engine='python')

        # formatting SSAN 
        df['SSAN'] = df.SSAN.str.replace('-', '')

        # assign name for appropriate table
        tname = ''
        if (df.columns.size == 75):
            tname = 'alpha'
        elif (df.columns.size == 48):
            tname = 'aef'
        elif (df.columns.size == 18):
            tname = 'project'

        # creating database connection
        conn = sqlite3.connect('airforce.sqlite')

        # saving dataframe to sqlite db as a table
        df.to_sql(name=tname, con=conn, if_exists='replace', index=False)
        conn.commit()

        d['status'] = 1

    except Exception as e:
        print(f"Couldn't upload file {e}")
        d['status'] = 0

    return jsonify(d)

if __name__ == "__main__":
    app.run(debug=True)
