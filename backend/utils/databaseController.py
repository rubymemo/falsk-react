import pymysql
import json
def insertH_new(data):
    data1=str(data)
    db = pymysql.connect(host='39.96.218.239', port=3306, user='root', passwd='123456', db='news_app', charset='utf8')
    cursor = db.cursor()
    sql = "INSERT INTO H_NEWS(newsdata) VALUES (%s)"
    try:
        # 执行sql语句
        cursor.execute(sql,data1)
        # 执行sql语句
        db.commit();
    except:
    #     # 发生错误时回滚
        db.rollback()
    db.close()



