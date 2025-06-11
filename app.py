from flask import Flask,redirect,render_template,session,request

from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

app.secret_key="hello"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"

db=SQLAlchemy(app)

class Data(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(25),nullable=False)


with app.app_context():
    db.create_all()

@app.route("/")
def main():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)