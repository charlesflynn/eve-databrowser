# -*- coding: utf-8 -*-

import os
from eve import Eve
from eve_databrowser import eve_databrowser

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))

    app = Eve()
    app.register_blueprint(eve_databrowser, url_prefix='/client')
    app.run(host='0.0.0.0', port=port)
