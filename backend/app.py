from flask import Flask, render_template, request
from flask_cors import CORS
from utils.controller import splitTxt
from utils.databaseController import insertH_new
import json
from werkzeug.utils import secure_filename
import os
from flask import send_from_directory
# 通过 static_folder 指定静态资源路径，以便 index.html 能正确访问 CSS 等静态资源
# template_folder 指定模板路径，以便 render_template 能正确渲染 index.html
app = Flask(
    __name__, static_folder="../dist/static", template_folder="../dist")

CORS(app)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test', methods=['GET', 'POST'])
def test():
    data = json.loads(request.get_data())
    requestData=data["info"]
    if requestData == 200:
        return 'success'
    else:
        return 'fail'

@app.route('/splitarticle',methods=['POST'])
def splitArticle():
    data = json.loads(request.get_data())
    articleUrl = data["articleUrl"]
    result=json.dumps(splitTxt(articleUrl))
    return result

@app.route('/getpic',methods=['GET'])
def getpic():
    pics=[
        {'url':'http://hbimg.huabanimg.com/e0ab15e15317f24430197b6703485bc60e9b19a65b68b-UEbqNF_fw658','des':'飞鸟'},
        {'url':'//hbimg.huabanimg.com/9c8079a26cae272ec558f9a41a88409deb4a54a2cafd4-Z1NrDE_fw658','des':'猫'},
        {'url':'http://hbimg.huabanimg.com/e41230b70b7e0441c0e1884360a38b6db5e1728ee327-e8jGSp_fw658','des':'狗'},
    ]
    result=json.dumps(pics)
    return result

@app.route('/createnews',methods=['POST'])
def create():
    data = json.loads(request.get_data())
    insertH_new(data)
    return 'success'

UPLOAD_PATH = os.path.join(os.path.dirname(__file__),'files')
@app.route('/file/upload/',methods=['POST'])
def settings():
    articleFile = request.files.get('file')
    # 对文件名进行包装，为了安全,不过对中文的文件名显示有问题
    filename = secure_filename(articleFile.filename)
    filepath=os.path.join(UPLOAD_PATH, filename)
    articleFile.save(filepath)
    result = json.dumps(splitTxt(filepath))
    return result

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
