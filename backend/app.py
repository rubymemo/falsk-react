from flask import Flask,render_template,request
from flask_cors import CORS
import json
# 通过 static_folder 指定静态资源路径，以便 index.html 能正确访问 CSS 等静态资源
# template_folder 指定模板路径，以便 render_template 能正确渲染 index.html
app = Flask(
    # __name__, static_folder="../editnews1/public/src", template_folder="../editnews1/public")
    __name__, static_folder="../dist/static", template_folder="../dist")

CORS(app)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test', methods=['GET', 'POST'])
def test():
    data = json.loads(request.get_data())
    requestData=data["info"]
    if requestData==200:
        return 'success'
    else:
        return 'fail'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
