from flask import Blueprint 

eve_databrowser = Blueprint('eve_databrowser', __name__,
                        static_folder='static', static_url_path='')

@eve_databrowser.route('/')
def index():
    return eve_databrowser.send_static_file('index.html')
